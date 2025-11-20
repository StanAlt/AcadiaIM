import streamlit as st
import pandas as pd
import plotly.graph_objects as go
import numpy as np
from datetime import datetime, timedelta

# --- PAGE CONFIGURATION & STYLING ---
st.set_page_config(
    page_title="Acadia Growth Planner",
    page_icon="📈",
    layout="centered",
    initial_sidebar_state="collapsed"
)

# Custom CSS - Compact, readable, Acadia colors
st.markdown("""
    <style>
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=Crimson+Pro:wght@600;700&display=swap');
    
    /* Compact spacing */
    .block-container {
        padding-top: 2rem !important;
        padding-bottom: 1rem !important;
        max-width: 1200px !important;
    }
    
    /* Clean white background */
    .main {
        background-color: #ffffff;
        font-family: 'IBM Plex Sans', system-ui, -apple-system, sans-serif;
    }
    
    .stApp {
        background-color: #ffffff;
    }
    
    /* Compact headings */
    h1 {
        font-family: 'Crimson Pro', Georgia, serif;
        color: #0a2540 !important;
        font-size: 2.2rem !important;
        margin-bottom: 0.5rem !important;
        font-weight: 700;
    }
    
    h2, h3 {
        font-family: 'IBM Plex Sans', sans-serif;
        color: #0a2540 !important;
        font-size: 1.1rem !important;
        margin-top: 0.5rem !important;
        margin-bottom: 0.5rem !important;
        font-weight: 600;
    }
    
    p, label, .stMarkdown {
        color: #333333 !important;
        font-size: 0.95rem;
    }
    
    /* Compact sections */
    [data-testid="stVerticalBlock"] {
        gap: 0.5rem !important;
    }
    
    [data-testid="stHorizontalBlock"] {
        gap: 1rem !important;
    }
    
    /* Number inputs - compact with readable text */
    input[type="number"] {
        border-radius: 6px !important;
        border: 2px solid #e5e7eb !important;
        padding: 0.4rem 0.6rem !important;
        color: #0a2540 !important;
        font-weight: 600 !important;
        font-size: 1rem !important;
    }
    
    input[type="number"]:focus {
        border-color: #e86842 !important;
        box-shadow: 0 0 0 2px rgba(232, 104, 66, 0.1) !important;
    }
    
    /* Labels - readable */
    label {
        color: #0a2540 !important;
        font-weight: 500 !important;
        font-size: 0.9rem !important;
    }
    
    /* Slider - Acadia coral */
    .stSlider > div > div > div {
        background-color: #e86842 !important;
    }
    
    /* Compact metric cards */
    [data-testid="stMetricValue"] {
        font-size: 1.8rem !important;
        color: #0a2540 !important;
        font-weight: 700 !important;
    }
    
    [data-testid="stMetricLabel"] {
        font-size: 0.85rem !important;
        color: #666 !important;
    }
    
    /* Hero metric - big but compact */
    .hero-metric {
        background: linear-gradient(135deg, #e86842 0%, #f5a142 100%);
        padding: 1.5rem;
        border-radius: 10px;
        text-align: center;
        margin: 1rem 0;
    }
    
    .hero-number {
        font-size: 2.5rem;
        font-weight: 700;
        color: white;
        margin: 0;
    }
    
    .hero-label {
        font-size: 1rem;
        color: white;
        opacity: 0.95;
        margin-top: 0.3rem;
    }
    
    /* Info boxes - compact with readable text */
    .stAlert {
        padding: 1rem !important;
        border-radius: 8px !important;
        border-left: 4px solid #1e5f6f !important;
        background-color: #f0f7f9 !important;
        color: #0a2540 !important;
    }
    
    .stAlert p, .stAlert li {
        color: #0a2540 !important;
        margin: 0.3rem 0 !important;
    }
    
    /* Success box */
    .stSuccess {
        background-color: #f0f9f4 !important;
        border-left-color: #1e5f6f !important;
        color: #0a2540 !important;
    }
    
    /* Expander - compact */
    .streamlit-expanderHeader {
        background-color: #f8f9fa !important;
        border-radius: 6px !important;
        border-left: 3px solid #1e5f6f !important;
        color: #0a2540 !important;
        font-weight: 600 !important;
        padding: 0.6rem 1rem !important;
        font-size: 0.95rem !important;
    }
    
    .streamlit-expanderContent {
        padding: 1rem !important;
        background-color: #fafbfc !important;
    }
    
    /* Chart - compact */
    .js-plotly-plot {
        margin: 0.5rem 0 !important;
    }
    
    /* Dividers - minimal */
    hr {
        margin: 1rem 0 !important;
        border-color: #e5e7eb !important;
    }
    
    /* CTA Button */
    .cta-button {
        background: linear-gradient(135deg, #e86842 0%, #f5a142 100%);
        color: white;
        padding: 0.8rem 2rem;
        border-radius: 6px;
        text-decoration: none;
        font-weight: 600;
        display: inline-block;
        box-shadow: 0 3px 5px rgba(232, 104, 66, 0.3);
        transition: transform 0.2s;
    }
    
    .cta-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 10px rgba(232, 104, 66, 0.4);
    }
    
    /* Footer */
    .caption {
        color: #999 !important;
        font-size: 0.8rem !important;
        text-align: center;
        margin-top: 1rem !important;
    }
    
    /* Remove extra padding */
    .element-container {
        margin-bottom: 0.5rem !important;
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

# Show the key number prominently - compact
st.markdown(f"""
<div class='hero-metric'>
    <div class='hero-number'>{new_clients_needed:.0f}</div>
    <div class='hero-label'>new clients needed to hit your goal</div>
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

# --- COMPACT VISUALIZATION ---
st.markdown("### 📈 12-Month Forecast")

fig = go.Figure()

fig.add_trace(go.Scatter(
    x=months, 
    y=projected_revenue, 
    mode='lines+markers', 
    name='Projection',
    line=dict(color='#e86842', width=3),
    fill='tozeroy',
    fillcolor='rgba(232, 104, 66, 0.08)',
    marker=dict(size=6)
))

target_monthly = target_revenue / 12
fig.add_trace(go.Scatter(
    x=months, 
    y=[target_monthly]*12, 
    mode='lines', 
    name='Goal',
    line=dict(color='#1e5f6f', width=2, dash='dash')
))

fig.update_layout(
    paper_bgcolor='#ffffff',
    plot_bgcolor='#fafbfc',
    margin=dict(l=20, r=20, t=10, b=20),
    yaxis_tickprefix="$",
    yaxis_tickformat=",.0f",
    hovermode="x unified",
    showlegend=True,
    legend=dict(orientation="h", yanchor="bottom", y=1, xanchor="right", x=1),
    height=280,
    font=dict(size=11, color='#333')
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

# --- COMPACT ACTION PLAN ---
st.markdown("### 💡 Bottom Line")

# Simple reverse calculation
needed_revenue = max(0, target_revenue - current_revenue)
needed_clients = needed_revenue / acv if acv > 0 else 0
needed_leads_annual = needed_clients / (conversion_rate/100) if conversion_rate > 0 else 0
needed_leads_monthly = needed_leads_annual / 12
traffic_to_lead_rate = 1.5 / 100
needed_traffic = needed_leads_monthly / traffic_to_lead_rate if traffic_to_lead_rate > 0 else 0

if gap_to_goal > 0:
    st.info(f"""
**To hit ${target_revenue:,.0f}:** Need **{needed_leads_monthly:.0f} leads/month** (at {conversion_rate}% close rate) = ~**{needed_traffic:,.0f} monthly visitors** (1.5% conversion).  
Current plan: **${accumulated_revenue:,.0f}** → Adjust sliders to close gap.
    """)
else:
    st.success(f"""
✓ **On track!** Projected **${accumulated_revenue:,.0f}** exceeds goal by **${abs(gap_to_goal):,.0f}** with {new_leads_monthly} leads/month at {conversion_rate}% close rate.
    """)

# --- COMPACT CTA ---
st.markdown("""
<div style='text-align: center; padding: 1.5rem 0 1rem 0;'>
    <p style='color: #0a2540; margin-bottom: 1rem; font-weight: 600;'>Ready to execute this plan?</p>
    <a href='https://www.acadia.im#contact' class='cta-button'>
        Get Started with Acadia
    </a>
</div>
""", unsafe_allow_html=True)

st.caption("Built for Acadia.im")
