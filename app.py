import streamlit as st
import pandas as pd
import plotly.graph_objects as go
import numpy as np
from datetime import datetime, timedelta

# --- PAGE CONFIGURATION & STYLING ---
st.set_page_config(
    page_title="Acadia Growth Planner",
    page_icon="📈",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Custom CSS to match Acadia.im's exact brand aesthetic
st.markdown("""
    <style>
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=Crimson+Pro:wght@600;700&display=swap');
    
    /* Main Background and Text */
    .main {
        background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%);
        font-family: 'IBM Plex Sans', system-ui, -apple-system, sans-serif;
    }
    
    /* Headings with Acadia Brand Font */
    h1, h2, h3 {
        font-family: 'Crimson Pro', Georgia, serif;
        color: #0a2540;
        font-weight: 700;
    }
    
    h1 {
        background: linear-gradient(135deg, #e86842 0%, #f5a142 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        font-size: 3rem !important;
    }
    
    .stApp {
        color: #333333;
    }
    
    /* Sidebar Styling - Acadia Navy */
    [data-testid="stSidebar"] {
        background: linear-gradient(180deg, #0a2540 0%, #1e5f6f 100%);
        border-right: 3px solid #e86842;
    }
    
    [data-testid="stSidebar"] * {
        color: #ffffff !important;
    }
    
    [data-testid="stSidebar"] h1,
    [data-testid="stSidebar"] h2,
    [data-testid="stSidebar"] h3 {
        color: #f5a142 !important;
        -webkit-text-fill-color: #f5a142 !important;
    }
    
    [data-testid="stSidebar"] label {
        color: #ffffff !important;
        font-weight: 500;
    }
    
    /* Sidebar Inputs */
    [data-testid="stSidebar"] input {
        background-color: rgba(255, 255, 255, 0.1) !important;
        color: #ffffff !important;
        border: 1px solid rgba(255, 255, 255, 0.3) !important;
        border-radius: 8px !important;
    }
    
    [data-testid="stSidebar"] .stSlider > div > div > div {
        background-color: #e86842 !important;
    }
    
    /* Metric Cards */
    .metric-container {
        background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
        padding: 24px;
        border-radius: 12px;
        box-shadow: 0 4px 6px rgba(10, 37, 64, 0.1);
        border: 1px solid #e5e7eb;
        text-align: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .metric-container:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 12px rgba(232, 104, 66, 0.2);
    }
    
    .metric-value {
        font-size: 32px;
        font-weight: 700;
        background: linear-gradient(135deg, #e86842 0%, #f5a142 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
    
    .metric-label {
        font-size: 12px;
        color: #1e5f6f;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        font-weight: 600;
        margin-top: 8px;
    }
    
    /* Tabs - Acadia Colors */
    .stTabs [data-baseweb="tab-list"] {
        gap: 8px;
        background-color: transparent;
    }
    
    .stTabs [data-baseweb="tab"] {
        background-color: #f8f9fa;
        color: #0a2540;
        border-radius: 8px 8px 0 0;
        padding: 12px 24px;
        font-weight: 600;
        border: 2px solid transparent;
    }
    
    .stTabs [aria-selected="true"] {
        background: linear-gradient(135deg, #e86842 0%, #f5a142 100%);
        color: white !important;
        border-color: #e86842;
    }
    
    /* Buttons */
    .stButton > button {
        background: linear-gradient(135deg, #e86842 0%, #f5a142 100%);
        color: white;
        border: none;
        border-radius: 8px;
        padding: 12px 32px;
        font-weight: 600;
        font-family: 'IBM Plex Sans', sans-serif;
        transition: all 0.3s ease;
        box-shadow: 0 4px 6px rgba(232, 104, 66, 0.3);
    }
    
    .stButton > button:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 12px rgba(232, 104, 66, 0.4);
    }
    
    /* Info/Warning Boxes */
    .stAlert {
        border-radius: 12px;
        border-left: 4px solid #e86842;
        background-color: #fff9f5;
    }
    
    /* Expander - Acadia Style */
    .streamlit-expanderHeader {
        background-color: #f8f9fa;
        border-radius: 8px;
        border-left: 4px solid #1e5f6f;
        color: #0a2540;
        font-weight: 600;
    }
    
    /* Plotly Charts Background */
    .js-plotly-plot {
        border-radius: 12px;
        overflow: hidden;
    }
    
    /* Main Content Cards */
    [data-testid="stVerticalBlock"] > div {
        background-color: white;
        border-radius: 12px;
        padding: 24px;
        box-shadow: 0 2px 8px rgba(10, 37, 64, 0.08);
    }
    
    /* Number Input */
    input[type="number"] {
        border-radius: 8px !important;
        border: 2px solid #e5e7eb !important;
    }
    
    input[type="number"]:focus {
        border-color: #e86842 !important;
        box-shadow: 0 0 0 3px rgba(232, 104, 66, 0.1) !important;
    }
    
    /* Slider */
    .stSlider > div > div > div {
        background-color: #e86842 !important;
    }
    
    /* Footer Text */
    .caption {
        color: #1e5f6f;
        font-style: italic;
    }
    </style>
""", unsafe_allow_html=True)

# --- HEADER ---
col1, col2 = st.columns([3, 1])
with col1:
    st.title("Acadia Growth Planner")
    st.markdown("**Engineer your growth.** Simulate scenarios to forecast 2026 revenue.")

# --- SIDEBAR: AGENCY INPUTS ---
with st.sidebar:
    st.header("🏢 Agency Profile")
    
    website = st.text_input("Agency Website", value="https://www.acadia.im")
    
    st.subheader("Baseline Metrics")
    current_revenue = st.number_input("Current Annual Revenue ($)", value=1_000_000, step=50000)
    acv = st.number_input("Avg. Contract Value (ACV) ($)", value=25000, step=1000)
    retention = st.slider("Client Retention Rate (%)", 0, 100, 85)
    
    st.markdown("---")
    st.header("🎯 Growth Targets")
    target_growth = st.slider("Target Revenue Growth (%)", 0, 200, 50)
    target_revenue = current_revenue * (1 + target_growth/100)
    st.metric("Revenue Goal (Next 12M)", f"${target_revenue:,.0f}")

# --- MAIN LOGIC: THE TRIO OF KPIS ---

st.markdown("### 🎛️ Scenario Planning")
st.info("Adjust the levers below to see how Leads, Conversion, and Speed impact your revenue.")

kpi_col1, kpi_col2, kpi_col3 = st.columns(3)

with kpi_col1:
    st.markdown("#### 1. Volume")
    new_leads_monthly = st.slider("New Monthly Leads", 5, 200, 25, help="Leads generated per month")

with kpi_col2:
    st.markdown("#### 2. Efficiency")
    conversion_rate = st.slider("Lead-to-Client Conversion (%)", 0.5, 10.0, 2.5, step=0.1)

with kpi_col3:
    st.markdown("#### 3. Velocity")
    sales_cycle = st.slider("Sales Cycle Length (Months)", 1, 12, 3, help="Time from Lead to Closed Won")

# --- CALCULATIONS ---

# 1. Sales Velocity Calculation
new_clients_monthly = new_leads_monthly * (conversion_rate / 100)
new_monthly_revenue_booked = new_clients_monthly * acv

# 2. Revenue Realization Logic (Lagged by Sales Cycle)
months = ["Month " + str(i) for i in range(1, 13)]
projected_revenue = []
accumulated_revenue = 0

# Existing recurring revenue decay
monthly_recurring = (current_revenue / 12)

for i in range(1, 13):
    # Existing revenue decays slightly based on retention (simplified)
    monthly_recurring = monthly_recurring * (1 - ((100-retention)/100)/12)
    
    # New revenue kicks in ONLY after sales cycle passes
    if i > sales_cycle:
        # Add revenue from deals closed (which started 'sales_cycle' months ago)
        # We assume revenue is recognized immediately upon close for this simplified model
        # or spread out. Let's assume ACV is recognized over the year, adding 1/12th ACV per month per client
        # Actually, simpler for planning: Booked Revenue model.
        
        # Let's track "Cash Collected"
        # Clients won this month = new_clients_monthly
        # Revenue from these clients this month = (Clients * ACV) / 12
        
        # Cumulative new clients winning
        months_generating_new_rev = i - sales_cycle
        total_new_clients_active = new_clients_monthly * months_generating_new_rev
        new_rev_stream = total_new_clients_active * (acv / 12)
    else:
        new_rev_stream = 0
        
    total_month_rev = monthly_recurring + new_rev_stream
    projected_revenue.append(total_month_rev)
    accumulated_revenue += total_month_rev

projected_annual_run_rate = projected_revenue[-1] * 12
gap = target_revenue - (accumulated_revenue) # Gap in realized revenue vs goal (approx)

# --- VISUALIZATION ---

tab1, tab2, tab3 = st.tabs(["📊 Financial Forecast", "🏗️ Reverse Funnel", "🧠 Content Strategy AI"])

with tab1:
    st.markdown("#### Revenue Projection (Next 12 Months)")
    
    fig = go.Figure()
    fig.add_trace(go.Scatter(
        x=months, 
        y=projected_revenue, 
        mode='lines+markers', 
        name='Projected Revenue',
        line=dict(color='#2E5BFF', width=4),
        fill='tozeroy'
    ))
    
    # Add Target Line (averaged)
    target_monthly = target_revenue / 12
    fig.add_trace(go.Scatter(
        x=months, 
        y=[target_monthly]*12, 
        mode='lines', 
        name='Goal Pacing',
        line=dict(color='#00C853', dash='dash')
    ))
    
    fig.update_layout(
        paper_bgcolor='rgba(0,0,0,0)',
        plot_bgcolor='rgba(0,0,0,0)',
        margin=dict(l=20, r=20, t=40, b=20),
        yaxis_tickprefix="$",
        hovermode="x unified"
    )
    st.plotly_chart(fig, use_container_width=True)
    
    m1, m2, m3 = st.columns(3)
    m1.metric("Projected 12M Revenue", f"${accumulated_revenue:,.0f}", delta=f"{accumulated_revenue - current_revenue:,.0f} vs Current")
    m2.metric("Projected Run Rate (End of Year)", f"${projected_annual_run_rate:,.0f}")
    m3.metric("Gap to Goal", f"${gap:,.0f}", delta_color="inverse")

with tab2:
    st.markdown("#### 🏗️ The Reverse Funnel: What it takes to hit the goal")
    
    # Calculations for Reverse Engineering
    needed_revenue = target_revenue - current_revenue
    if needed_revenue < 0: needed_revenue = 0
    
    needed_clients = needed_revenue / acv
    needed_leads_annual = needed_clients / (conversion_rate/100) if conversion_rate > 0 else 0
    needed_leads_monthly_calc = needed_leads_annual / 12
    
    # Traffic Assumptions
    traffic_to_lead_rate = st.slider("Assumed Traffic-to-Lead Rate (%)", 0.1, 5.0, 1.5) / 100
    needed_traffic = needed_leads_monthly_calc / traffic_to_lead_rate if traffic_to_lead_rate > 0 else 0
    
    # Content Production Assumptions
    avg_views_per_post = st.number_input("Avg Views per Mature Blog Post", value=250)
    posts_needed = needed_traffic / avg_views_per_post if avg_views_per_post > 0 else 0

    st.markdown("---")
    
    rf_col1, rf_col2, rf_col3, rf_col4 = st.columns(4)
    
    with rf_col1:
        st.markdown(f"<div class='metric-container'><div class='metric-value'>{needed_clients:.1f}</div><div class='metric-label'>New Clients Needed</div></div>", unsafe_allow_html=True)
        
    with rf_col2:
        st.markdown(f"<div class='metric-container'><div class='metric-value'>{needed_leads_monthly_calc:.0f}</div><div class='metric-label'>Leads Per Month</div></div>", unsafe_allow_html=True)
        
    with rf_col3:
        st.markdown(f"<div class='metric-container'><div class='metric-value'>{needed_traffic:,.0f}</div><div class='metric-label'>Monthly Traffic Req.</div></div>", unsafe_allow_html=True)
        
    with rf_col4:
        st.markdown(f"<div class='metric-container'><div class='metric-value'>{posts_needed:.0f}</div><div class='metric-label'>Active Content Pieces</div></div>", unsafe_allow_html=True)

    st.warning(f"💡 **Insight:** To bridge the revenue gap of **${needed_revenue:,.0f}**, your content engine needs to generate **{needed_traffic:,.0f}** visits/month converting at **{traffic_to_lead_rate*100}%**.")

with tab3:
    st.header("🧠 AI Content Strategy Agent")
    st.markdown("Based on your inputs, here is a generated content funnel framework.")
    
    # Simulation of AI Analysis (Since we cannot live-scrape in this environment)
    st.markdown(f"**Analysis Context:** Analyzing `{website}` for B2B Authority...")
    
    with st.expander("1. Top of Funnel (Attract) - SEO Strategy", expanded=True):
        st.markdown("""
        *Focus: High-volume, problem-aware keywords.*
        
        **Suggested Blog Clusters:**
        1. **The "Comparison" Post:** "[Competitor Name] vs [Your Agency] vs In-House" - captures high intent traffic.
        2. **The "How-To" Guide:** "How to solve [Main Industry Pain Point] without [Expensive Resource]."
        3. **Trend Analysis:** "The State of [Client Industry] in 2025."
        """)
        if st.button("Generate SEO Keywords"):
            st.markdown("*(Simulated AI Response)*: `B2B Marketing Strategies`, `Enterprise Lead Gen`, `SaaS Growth Hacks`, `Account Based Marketing Guide`")

    with st.expander("2. Middle of Funnel (Engage) - Premium Content"):
        st.markdown("""
        *Focus: Lead Magnets to capture email and qualify.*
        
        **Recommendations:**
        * **Calculator/Tool:** "The [Industry] ROI Calculator" (Similar to this app).
        * **Whitepaper:** "Original Research: Benchmarks for [Client Industry]."
        * **Webinar:** "Live teardowns of [Customer Process]."
        """)

    with st.expander("3. Bottom of Funnel (Convert) - Sales Enablement"):
        st.markdown("""
        *Focus: Trust and Validation.*
        
        **Assets Needed:**
        * **Case Study:** "How we helped [Similar Client] achieve [Result] in [Timeframe]."
        * **Implementation Plan:** A PDF showing exactly what the first 90 days look like.
        """)
        
    st.info("To activate full AI scanning, connect your OpenAI API Key in settings.")

# --- FOOTER ---
st.markdown("---")
st.caption("Built for Acadia.im | B2B Growth Engine")
