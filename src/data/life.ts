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
    title: "Add your first entry",
    date: "",
    blurb:
      "This is a placeholder card. Replace it in src/data/life.ts with a real place or experience — a trip, a race, a project outside of work — a photo and a few sentences is plenty.",
  },
];
