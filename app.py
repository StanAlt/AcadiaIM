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
st.title("Growth Planner")
st.markdown("**Simple calculator:** See what it takes to hit your revenue goals.")

# --- SIMPLIFIED INPUT: JUST THE ESSENTIALS ---
st.markdown("---")

col1, col2 = st.columns(2)

with col1:
    st.markdown("#### 📊 Your Current State")
    current_revenue = st.number_input(
        "Annual Revenue ($)", 
        value=1_000_000, 
        step=50000,
        help="Your current annual recurring revenue"
    )
    acv = st.number_input(
        "Average Deal Size ($)", 
        value=25000, 
        step=1000,
        help="Average contract value per client"
    )

with col2:
    st.markdown("#### 🎯 Your Goal")
    target_revenue = st.number_input(
        "Revenue Target ($)", 
        value=1_500_000, 
        step=50000,
        help="Where you want to be in 12 months"
    )
    target_growth = round(((target_revenue - current_revenue) / current_revenue) * 100, 1)
    st.metric("Growth Required", f"{target_growth}%")

# Gap Analysis
revenue_gap = target_revenue - current_revenue
new_clients_needed = revenue_gap / acv if acv > 0 else 0

st.markdown("---")
st.markdown("### 🔍 What You Need")

# Show the key number prominently
st.markdown(f"""
<div style='background: linear-gradient(135deg, #e86842 0%, #f5a142 100%); 
            padding: 2rem; 
            border-radius: 12px; 
            text-align: center;
            margin: 1rem 0;'>
    <div style='font-size: 3rem; font-weight: bold; color: white;'>
        {new_clients_needed:.0f}
    </div>
    <div style='font-size: 1.2rem; color: white; opacity: 0.9;'>
        new clients needed to hit your goal
    </div>
</div>
""", unsafe_allow_html=True)

# --- SIMPLE SCENARIO PLANNING ---
st.markdown("### 🎛️ How to Get There")

with st.expander("⚙️ Adjust Your Strategy", expanded=True):
    col_a, col_b, col_c = st.columns(3)
    
    with col_a:
        new_leads_monthly = st.slider(
            "Monthly Leads", 
            5, 200, 25,
            help="How many leads can you generate per month?"
        )
    
    with col_b:
        conversion_rate = st.slider(
            "Close Rate (%)", 
            0.5, 10.0, 2.5, 
            step=0.1,
            help="What % of leads become clients?"
        )
    
    with col_c:
        sales_cycle = st.slider(
            "Sales Cycle (months)", 
            1, 12, 3,
            help="How long from lead to closed deal?"
        )

# Quick retention assumption (hidden to reduce complexity)
retention = 85

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

# --- SIMPLE VISUALIZATION ---

st.markdown("### 📈 Your 12-Month Forecast")

fig = go.Figure()

# Projected revenue line
fig.add_trace(go.Scatter(
    x=months, 
    y=projected_revenue, 
    mode='lines+markers', 
    name='Your Projection',
    line=dict(color='#e86842', width=4),
    fill='tozeroy',
    fillcolor='rgba(232, 104, 66, 0.1)'
))

# Goal line
target_monthly = target_revenue / 12
fig.add_trace(go.Scatter(
    x=months, 
    y=[target_monthly]*12, 
    mode='lines', 
    name='Your Goal',
    line=dict(color='#1e5f6f', width=3, dash='dash')
))

fig.update_layout(
    paper_bgcolor='rgba(0,0,0,0)',
    plot_bgcolor='rgba(0,0,0,0)',
    margin=dict(l=20, r=20, t=20, b=20),
    yaxis_tickprefix="$",
    yaxis_tickformat=",.0f",
    hovermode="x unified",
    showlegend=True,
    legend=dict(orientation="h", yanchor="bottom", y=1.02, xanchor="right", x=1),
    height=350
)

st.plotly_chart(fig, use_container_width=True)

# Simple bottom-line metrics
metric_col1, metric_col2, metric_col3 = st.columns(3)

with metric_col1:
    delta_val = accumulated_revenue - current_revenue
    metric_col1.metric(
        "Projected Revenue", 
        f"${accumulated_revenue:,.0f}",
        delta=f"${delta_val:,.0f} vs today"
    )

with metric_col2:
    gap_to_goal = target_revenue - accumulated_revenue
    gap_percent = (gap_to_goal / target_revenue * 100) if target_revenue > 0 else 0
    metric_col2.metric(
        "Gap to Goal", 
        f"${abs(gap_to_goal):,.0f}",
        delta=f"{-gap_percent:.1f}%" if gap_to_goal > 0 else f"+{abs(gap_percent):.1f}%",
        delta_color="inverse"
    )

with metric_col3:
    metric_col3.metric(
        "Monthly Run Rate (M12)", 
        f"${projected_revenue[-1]:,.0f}"
    )

# --- ACTION PLAN ---
st.markdown("---")
st.markdown("### 💡 What This Means")

# Simple reverse calculation
needed_revenue = max(0, target_revenue - current_revenue)
needed_clients = needed_revenue / acv if acv > 0 else 0
needed_leads_annual = needed_clients / (conversion_rate/100) if conversion_rate > 0 else 0
needed_leads_monthly = needed_leads_annual / 12

# Traffic assumptions (simplified, fixed values to avoid complexity)
traffic_to_lead_rate = 1.5 / 100  # 1.5% conversion
needed_traffic = needed_leads_monthly / traffic_to_lead_rate if traffic_to_lead_rate > 0 else 0

insight_col1, insight_col2 = st.columns([2, 1])

with insight_col1:
    if gap_to_goal > 0:
        st.info(f"""
**To hit your ${target_revenue:,.0f} goal, you need:**

- 📊 **{needed_leads_monthly:.0f} qualified leads per month** (at {conversion_rate}% close rate)
- 🌐 **~{needed_traffic:,.0f} monthly website visitors** (assuming 1.5% lead conversion)
- 📝 **Consistent content production** to drive that traffic

**Your current plan projects ${accumulated_revenue:,.0f}** - adjust the sliders above to close the gap.
        """)
    else:
        st.success(f"""
🎉 **Great news!** Your current strategy exceeds your goal by **${abs(gap_to_goal):,.0f}**.

You're projected to hit **${accumulated_revenue:,.0f}** with:
- {new_leads_monthly} leads per month
- {conversion_rate}% conversion rate  
- {sales_cycle} month sales cycle
        """)

with insight_col2:
    st.markdown(f"""
<div class='metric-container'>
    <div class='metric-value'>{needed_leads_monthly:.0f}</div>
    <div class='metric-label'>Leads/Month Target</div>
</div>
    """, unsafe_allow_html=True)

# --- CTA ---
st.markdown("---")
st.markdown("""
<div style='text-align: center; padding: 2rem 0;'>
    <h3 style='color: #0a2540; margin-bottom: 1rem;'>Ready to Execute Your Growth Plan?</h3>
    <p style='color: #666; margin-bottom: 1.5rem;'>Let's build the content strategy to get you there.</p>
    <a href='https://www.acadia.im#contact' 
       style='background: linear-gradient(135deg, #e86842 0%, #f5a142 100%);
              color: white;
              padding: 14px 32px;
              border-radius: 8px;
              text-decoration: none;
              font-weight: 600;
              display: inline-block;
              box-shadow: 0 4px 6px rgba(232, 104, 66, 0.3);'>
        Get Started with Acadia
    </a>
</div>
""", unsafe_allow_html=True)

st.markdown("---")
st.caption("Built for Acadia.im | B2B Growth Engineering")
