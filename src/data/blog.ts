export interface Post {
  title: string;
  date: string;
  excerpt: string;
  href: string;
  source: string;
}

export const posts: Post[] = [
  {
    title: "Building Resilience in Micromobility",
    date: "April 29, 2026",
    excerpt:
      "Urban areas face persistent traffic and parking challenges that can stifle economic vitality and limit the impact of transit investments. By examining system resilience and infrastructure, this piece identifies how communities can successfully align bikes and e-scooters with broader economic goals.",
    href: "https://tipstrategies.com/insights/2026/04/building-resilience-in-micromobility/",
    source: "TIP Strategies",
  },
  {
    title: "AI Agents in Economic Development",
    date: "June 16, 2025",
    excerpt:
      "Economic development teams often face the challenge of implementing strategic plans with limited capacity. AI agents represent a promising, practical shift in meeting that challenge through a clear and phased approach.",
    href: "https://tipstrategies.com/insights/2025/06/ai-agents/",
    source: "TIP Strategies",
  },
  {
    title: "How International Students Strengthen the Workforce",
    date: "March 25, 2025",
    excerpt:
      "International students help strengthen economies through their contributions to local industries, culture, and workforce. Cities that align academic programs with industry needs are becoming hubs for retaining skilled graduates and fostering long-term economic growth.",
    href: "https://tipstrategies.com/insights/2025/03/how-international-students-strengthen-the-workforce/",
    source: "TIP Strategies",
  },
  {
    title: "Microtransit for Rural America",
    date: "March 19, 2024",
    excerpt:
      "Rural America faces disparities in access to essential services and opportunities compared to urban areas. Could microtransit offer a promising, affordable, and equitable mobility solution?",
    href: "https://tipstrategies.com/insights/2024/03/microtransit-for-rural-america/",
    source: "TIP Strategies",
  },
];
