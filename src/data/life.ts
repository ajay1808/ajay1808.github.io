export interface LifeEntry {
  title: string;
  date?: string;
  blurb: string;
  photo?: string;
}

// Add real entries here as you go — one object per place/experience.
// Drop a photo in public/life/ and reference it as "/life/your-photo.jpg".
export const lifeEntries: LifeEntry[] = [
  {
    title: "FIFA World Cup",
    date: "Brazil vs. Japan",
    blurb:
      "Caught Brazil take on Japan live at NRG Stadium in Houston — a cool experience seeing the World Cup up close.",
    photo: "/life/fifa-world-cup.jpeg",
  },
  {
    title: "¡Qué chévere!",
    date: "Puerto Rico",
    blurb: "El Yunque National Forest — chasing waterfalls through the only tropical rainforest in the US National Forest System.",
    photo: "/life/puerto-rico-waterfall.jpeg",
  },
];
