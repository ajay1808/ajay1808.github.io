export interface Project {
  title: string;
  period?: string;
  summary: string;
  tags: string[];
  links?: { label: string; href: string }[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "City-Scale ETA Prediction & Routing Engine",
    period: "2026",
    summary:
      "An ML pipeline that predicts food-delivery ETA by modeling the delivery network as a spatiotemporal graph instead of a flat regression over raw coordinates and timestamps. Restaurant and drop-off points are quantized onto Uber's H3 hex grid so deliveries in the same neighborhood can be grouped and given a learned historical-edge-time prior, with a distance-weighted KNN fallback for routes with no training history. Cyclical time encoding, day-of-week × hour buckets, and per-driver speed profiling round out the feature set, feeding a CatBoost model chosen for native categorical handling and its regularizing symmetric-tree structure against noisy one-off events like flat tires.",
    tags: ["Python", "CatBoost", "H3 Geospatial Indexing", "Feature Engineering", "KNN"],
    links: [{ label: "GitHub", href: "https://github.com/ajay1808/Food-Delivery-Model" }],
    featured: true,
  },
  {
    title: "Strava Activity Dashboard",
    period: "2026",
    summary:
      "A Streamlit analytics dashboard for personal Strava activity data, built directly against the Strava API. Pulls recent activities and surfaces key performance indicators (total distance, elevation, time), activity distribution charts, and a detailed, sortable activity log — with a lighter single-table view for quick checks.",
    tags: ["Python", "Streamlit", "Strava API", "Data Visualization"],
    links: [{ label: "GitHub", href: "https://github.com/ajay1808/StravaApp" }],
    featured: true,
  },
  {
    title: "AI Agents in Economic Development",
    period: "2025",
    summary:
      "Economic development teams frequently face the challenge of implementing strategic plans with limited resources and capacity. This piece explores AI agents as a practical innovation for meeting that challenge, laying out a phased approach for adopting agentic workflows in economic development work.",
    tags: ["Generative AI", "Agentic Modeling", "Economic Development"],
    links: [{ label: "Read the article", href: "https://tipstrategies.com/insights/2025/06/ai-agents/" }],
  },
  {
    title: "International Students in the American Workforce",
    period: "2025",
    summary:
      "International students contribute to strengthening economies through their contributions to local industries, culture, and workforce. This piece examines how cities that align academic programs with industry needs and embrace remote work trends are becoming hubs for retaining skilled graduates and fostering long-term economic growth.",
    tags: ["Talent Strategy", "Workforce Development"],
    links: [{ label: "Read the article", href: "https://tipstrategies.com/insights/2025/03/how-international-students-strengthen-the-workforce/" }],
  },
  {
    title: "Microtransit for Rural America",
    period: "2024",
    summary:
      "Rural regions face significant challenges accessing essential services compared to urban areas. This piece examines how microtransit — flexible, on-demand transit service — can adapt to rural travel patterns, the funding and setup-cost hurdles facing wider adoption, and the role autonomous vehicles may play in the future of rural transit.",
    tags: ["Transit Planning", "Rural Mobility"],
    links: [{ label: "Read the article", href: "https://tipstrategies.com/insights/2024/03/microtransit-for-rural-america/" }],
  },
  {
    title: "Mapping STEM Pay Growth",
    period: "2024",
    summary:
      "A visualization mapping STEM pay growth across the US from 2019–2023 for the TIP Strategies R&D team. Findings show STEM wages rising with inflation in tech hubs like Seattle and Austin and in mid-sized Southern cities, while several Southwest cities lag; non-STEM wages stayed comparatively flat, with the sharpest increases in the most expensive metros.",
    tags: ["Tableau", "Labor Market Analysis", "Data Visualization"],
  },
  {
    title: "Scoring Transit Access",
    period: "2024",
    summary:
      "Built for the Greater Baltimore Committee, this map is part of a larger tool comparing transit access to demand. Engineered to read GTFS data, it measures transit access across the Baltimore area by evaluating transit quality, walkability, and network structure — designed to be reproducible for other US cities.",
    tags: ["GTFS", "NetworkX", "Geospatial Analysis", "Tableau"],
  },
  {
    title: "Predicting County GDP Using Night Light Emission Data",
    summary:
      "A deep learning model (TensorFlow) that analyzes nighttime light-emission imagery to predict county-level GDP across the US, drawing on USGS Earth Explorer, NASA LANCE, BEA, and Global Human Settlement Urban Centre data. Demonstrates the potential of satellite night-light data to supplement official estimates for timelier, more granular regional economic assessments.",
    tags: ["TensorFlow", "Deep Learning", "Remote Sensing", "Economics"],
  },
  {
    title: "Exploring the Obesity Epidemic: A Comparative Study of Urban America",
    summary:
      "Used Scale-Adjusted Metropolitan Indicators to study obesity across American metro areas through an urban-scaling lens largely missing from prior research, finding links to diabetes and smoking rates. Applied four statistical approaches — the PC Algorithm, Moran's Index, Support Vector Regression, and anomaly detection — to triangulate the findings.",
    tags: ["Statistical Inference", "Urban Scaling", "Public Health"],
  },
  {
    title: "Predicting NYC Transportation Preference from Weather Patterns",
    summary:
      "Ensemble classification and regression models plus anomaly detection to forecast New Yorkers' transportation needs based on weather conditions, finding that a substantial share of the variance in mode choice is explained by meteorological factors.",
    tags: ["Ensemble Learning", "Anomaly Detection", "Urban Mobility"],
  },
  {
    title: "Walking the City: Built Environment and Mental Health in NYC",
    summary:
      "Built during a 72-hour global hackathon on urban research and mental health, this project used regression and clustering methods to study how the built environment shapes mental well-being. Found that street cafes, greenery, and points of interest correlate with improved mental health outcomes in certain boroughs — a case for prioritizing these factors in urban design.",
    tags: ["Clustering", "Regression", "Urban Planning", "Hackathon"],
  },
  {
    title: "Bike Infrastructure Accessibility and Safety in NYC",
    summary:
      "A dual analysis of bike-infrastructure accessibility by demographic and the relationship between bike accidents and infrastructure using statistical and ML techniques. Found an access imbalance tied to income and community, plus a correlation between rising bike accidents and declining bike-lane infrastructure.",
    tags: ["Statistical Analysis", "Urban Equity", "Transportation Safety"],
  },
  {
    title: "Plowing Snow vs. Potholes",
    summary:
      "Analyzed snow-plowing and pothole-maintenance data to determine optimal plowing rates during winter, factoring in plowing frequency and pothole-complaint timelines to help optimize maintenance schedules. Qualified for the finals and won an award at the Marron Urban Data Hackathon.",
    tags: ["Data Analysis", "Public Works", "Hackathon"],
  },
  {
    title: "Improving Public Toilet Access in NYC Parks",
    summary:
      "Proposed a data- and IoT-based solution to the shortage and unequal distribution of public toilets in NYC parks — identifying locations most in need, optimizing maintenance schedules, and incentivizing commercial establishments to open their facilities to the public. Included a prototype mobile app UI to demonstrate the proposed experience.",
    tags: ["IoT", "Public Policy", "Mobile Prototyping"],
  },
];
