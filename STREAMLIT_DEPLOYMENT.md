# Growth Planner Streamlit App Deployment Guide

## Overview
The Growth Planner is a Streamlit-based interactive tool that helps B2B agencies forecast revenue and plan content strategy.

## Local Development

### Prerequisites
- Python 3.8 or higher
- pip

### Installation

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Run the app locally:
```bash
streamlit run app.py
```

The app will open at `http://localhost:8501`

## Deployment Options

### Option 1: Streamlit Community Cloud (Recommended - Free)

1. Go to [share.streamlit.io](https://share.streamlit.io)
2. Sign in with GitHub
3. Click "New app"
4. Select your repository: `StanAlt/AcadiaIM`
5. Branch: `main`
6. Main file path: `app.py`
7. Click "Deploy"

Your app will be available at: `https://[your-app-name].streamlit.app`

### Option 2: Heroku

1. Create a `Procfile`:
```
web: sh setup.sh && streamlit run app.py
```

2. Create a `setup.sh`:
```bash
mkdir -p ~/.streamlit/
echo "\
[server]\n\
headless = true\n\
port = $PORT\n\
enableCORS = false\n\
\n\
" > ~/.streamlit/config.toml
```

3. Deploy:
```bash
heroku create your-app-name
git push heroku main
```

### Option 3: AWS/Azure/GCP
Use Docker with the following Dockerfile:

```dockerfile
FROM python:3.9-slim
WORKDIR /app
COPY requirements.txt ./
RUN pip install -r requirements.txt
COPY app.py ./
EXPOSE 8501
CMD ["streamlit", "run", "app.py"]
```

## Integration with Acadia.im

The navigation link has been added to `src/components/Navigation.jsx`.

After deploying the Streamlit app, update the link in Navigation.jsx:

```jsx
<a href="https://your-deployed-app-url.streamlit.app" 
   target="_blank"
   rel="noopener noreferrer"
   className={`font-medium transition-colors ${
     isScrolled ? 'text-acadia-navy hover:text-acadia-coral' : 'text-white hover:text-acadia-gold'
   }`}>
  Growth Plan
</a>
```

## Features

- **Revenue Forecasting**: 12-month revenue projections based on lead volume, conversion rates, and sales cycle
- **Reverse Funnel Planning**: Calculate required traffic, leads, and content pieces to hit revenue goals
- **Content Strategy AI**: Framework for top, middle, and bottom-of-funnel content planning

## Customization

To match Acadia's branding more closely, you can adjust:
- Colors in the CSS section (lines 15-54)
- Default values in the sidebar inputs
- Metric calculations based on your specific business model
