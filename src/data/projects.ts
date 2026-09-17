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
    title: "Site Selection Copilot",
    period: "2026",
    summary:
      "A multi-agent system that answers 'where should this business open next?' in plain English and returns a ranked top-three with verified reasoning. A LangGraph orchestrator parses the request into a structured spec, checks it for ambiguity before spending any API calls, then routes to five specialized data tools — drive-time isochrones, census demographics, competitor density, labor-market wages, and zoning risk. A synthesis step ranks candidates and writes the rationale, and every number in that rationale is fact-checked against the upstream tool output before it reaches the user, with up to three rewrites if a figure doesn't verify. Validated against real restaurant and retail openings, it picked the actual chosen site in 7 of 8 test cases. Designed around honest failure modes: when zoning coverage is missing for a city, it reweights the remaining signals and says so rather than guessing.",
    tags: ["LangGraph", "Multi-Agent Orchestration", "Tool Calling", "Claude API", "Streamlit", "Geospatial"],
    links: [{ label: "GitHub", href: "https://github.com/ajay1808/site-selection-copilot" }],
    featured: true,
  },
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
    title: "GeoExplorer",
    period: "2025 · rebuilt 2026",
    summary:
      "A conversational agent for exploring a neighborhood by address, grounded entirely in live HERE Location Services lookups. Seven tools back the agent loop: free-text and category POI search, an amenity census that answers open-ended 'what is this area like' questions in one call, network travel time by car, foot or bike, and travel-time isolines that shade a real fifteen-minute-walk polygon on the map rather than drawing a radius. Every place the agent finds is written to shared session state, which is what keeps the map beside the chat in sync without a second round of API calls. The system prompt forbids answering from model priors — an empty search result is reported as 'HERE has no record here', not as 'nothing exists here', because a confident guess about a real street corner is worse than an admission of ignorance. Bring-your-own-key across OpenAI, Anthropic, and Google: the provider is inferred from the key's prefix, and since the loop needs nothing but reliable function calling, the prompt and tools are identical on all three. Rebuilt from a 2025 prototype that had shipped with a broken dependency spec and an agent that was reconstructed on every Streamlit rerun, silently wiping its own memory before each message; the rewrite is a tested package with typed HERE responses, retries and TTL caching, and 120 offline tests.",
    tags: ["LlamaIndex FunctionAgent", "Tool Calling", "Multi-Provider LLM", "HERE API", "Isochrones", "Streamlit", "pydeck"],
    links: [{ label: "GitHub", href: "https://github.com/ajay1808/GeoExplorer-Tech16-Project" }],
    featured: true,
  },
  {
    title: "Street Safety in NYC",
    period: "2022 · rebuilt 2026",
    summary:
      "Ranks Manhattan street segments by crash risk for a given hour, joining 63,000 collisions onto the city's CSCL centerline so predictions land on an actual block rather than a zip code. The rebuild is really a lesson in rare-event modelling: a crash occupies roughly 0.01% of all segment-hour cells, so the 2022 original trained on a sample that was 775× denser in crashes than reality and reported 82% accuracy — a number that means nothing at a base rate where predicting 'no crash' everywhere scores 99.99%. v2 keeps the case-control sampling but corrects for it, shifting the logistic intercept back onto the population scale via King & Zeng, which brings mean predicted probability within 1.6× of the observed rate. Evaluation moved onto the complete unsampled panel — 7.5 million cells — and onto PR-AUC and lift@k measured against random, segment-length and prior-crash baselines. Gradient boosting reaches 25× lift over random, though a no-model 'this block has had crashes before' baseline already reaches 19×, and the README says so rather than burying it. 34 offline tests, including a synthetic proof that the correction recovers a known population rate while leaving the ranking untouched.",
    tags: ["Rare-Event Modelling", "Case-Control Sampling", "Calibration", "scikit-learn", "GeoPandas", "PR-AUC"],
    links: [{ label: "GitHub", href: "https://github.com/ajay1808/Street-Safety-in-NYC" }],
    featured: true,
  },
  {
    title: "Job Search AI Assistant",
    period: "2026",
    summary:
      "A Streamlit application that reads a resume and a job description side by side and reports the gap between them — which requirements are met, which aren't, and what's missing. From there it searches for matching postings (cached locally so repeated searches don't re-hit the API) and generates a tailored resume and cover letter for a specific role, rendering the resume through a LaTeX template. Bring-your-own-key: the user supplies their own LLM provider credentials rather than routing through a shared account.",
    tags: ["Python", "Streamlit", "LLM Integration", "Document Parsing", "LaTeX"],
    links: [{ label: "GitHub", href: "https://github.com/ajay1808/Intelligent-Job-Search" }],
  },
  {
    title: "SpendAtlas: Consumer Spending After COVID-19",
    period: "2025",
    summary:
      "An analysis of how US consumer spending recovered after the pandemic, built on the Opportunity Insights Economic Tracker. State-level daily spending across apparel, food service, durables, and retail is aggregated to quarterly series from Q4 2018 through 2023 and tested for spatial autocorrelation with Moran's I. Spending fell to a median of −15% in Q2 2020, and the Moran's I results show neighboring states recovered in clusters rather than independently — findings surfaced through a Tableau dashboard.",
    tags: ["GeoPandas", "PySAL", "Moran's I", "Spatial Statistics", "Tableau"],
    links: [{ label: "GitHub", href: "https://github.com/ajay1808/SpendAtlas" }],
  },
  {
    title: "Strava Activity Dashboard",
    period: "2026",
    summary:
      "A Streamlit analytics dashboard for personal Strava activity data, built directly against the Strava API. Pulls recent activities and surfaces key performance indicators (total distance, elevation, time), activity distribution charts, and a detailed, sortable activity log — with a lighter single-table view for quick checks.",
    tags: ["Python", "Streamlit", "Strava API", "Data Visualization"],
    links: [{ label: "GitHub", href: "https://github.com/ajay1808/StravaApp" }],
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
    period: "2023",
    summary:
      "A deep learning model (TensorFlow) that analyzes nighttime light-emission imagery to predict county-level GDP across the US, drawing on USGS Earth Explorer, NASA LANCE, BEA, and Global Human Settlement Urban Centre data. Demonstrates the potential of satellite night-light data to supplement official estimates for timelier, more granular regional economic assessments.",
    tags: ["TensorFlow", "Deep Learning", "Remote Sensing", "Economics"],
    links: [{ label: "GitHub", href: "https://github.com/ajay1808/DeepLearning-NightLight-GDP" }],
  },
  {
    title: "Exploring the Obesity Epidemic: A Comparative Study of Urban America",
    period: "2023",
    summary:
      "Used Scale-Adjusted Metropolitan Indicators to study obesity across American metro areas through an urban-scaling lens largely missing from prior research, finding links to diabetes and smoking rates. Applied four statistical approaches — the PC Algorithm, Moran's Index, Support Vector Regression, and anomaly detection — to triangulate the findings.",
    tags: ["Statistical Inference", "Urban Scaling", "Public Health"],
  },
  {
    title: "Predicting NYC Transportation Preference from Weather Patterns",
    period: "2023",
    summary:
      "Ensemble classification and regression models plus anomaly detection to forecast New Yorkers' transportation needs based on weather conditions, spanning MTA subway, Citibike, and yellow and green taxi ridership. Found that a substantial share of the variance in seasonal mode choice is explained by meteorological factors.",
    tags: ["Ensemble Learning", "Anomaly Detection", "Urban Mobility"],
    links: [{ label: "GitHub", href: "https://github.com/ajay1808/MLC-Project" }],
  },
  {
    title: "Walking the City: Built Environment and Mental Health in NYC",
    period: "2023",
    summary:
      "Built during a 72-hour global hackathon on urban research and mental health, this project used regression and clustering to study how six built-environment metrics — trees, street lights, restaurants, sunlight, building height, and smoke and liquor shops — relate to walkability and mental health, using 911 emotionally-disturbed-person calls as a proxy. Trees, restaurants, and wider sidewalks tracked with increased activity, and the resulting built-environment clusters aligned closely with NYC's income geography.",
    tags: ["Clustering", "Regression", "Urban Planning", "Hackathon"],
    links: [{ label: "GitHub", href: "https://github.com/ajay1808/CUSP-London-Data-Dive" }],
  },
  {
    title: "Bike Infrastructure Accessibility and Safety in NYC",
    period: "2023",
    summary:
      "A dual analysis of bike-infrastructure accessibility by demographic and the relationship between bike accidents and infrastructure, built on accident reports, Citibike station locations, bike-lane density, and income data across NYC zip codes. Found an access imbalance tied to income and community, plus a correlation between rising bike accidents and declining bike-lane infrastructure.",
    tags: ["Statistical Analysis", "Urban Equity", "Transportation Safety"],
    links: [{ label: "GitHub", href: "https://github.com/ajay1808/Principles-of-Urban-Informatics-Project" }],
  },
  {
    title: "Plowing Snow vs. Potholes",
    period: "2023",
    summary:
      "Analyzed snow-plowing and pothole-maintenance data to determine optimal plowing rates during winter, factoring in plowing frequency and pothole-complaint timelines to help optimize maintenance schedules. Qualified for the finals and won an award at the Marron Urban Data Hackathon.",
    tags: ["Data Analysis", "Public Works", "Hackathon"],
    links: [{ label: "GitHub", href: "https://github.com/ajay1808/Marron-Urban-Data-Hackathon" }],
  },
  {
    title: "Improving Public Toilet Access in NYC Parks",
    period: "2023",
    summary:
      "Proposed a data- and IoT-based solution to the shortage and unequal distribution of public toilets in NYC parks — identifying locations most in need, optimizing maintenance schedules, and incentivizing commercial establishments to open their facilities to the public. Included a prototype mobile app UI to demonstrate the proposed experience.",
    tags: ["IoT", "Public Policy", "Mobile Prototyping"],
  },
];
