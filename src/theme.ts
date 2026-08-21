import type { ThemeConfig } from "./types";

export const theme = {
  "id": "garden",
  "product": "Garden Rhythm",
  "tagline": "Coordinate seasonal care without losing the small recurring jobs.",
  "itemLabel": "Garden task",
  "dateLabel": "Next care date",
  "effortLabel": "Minutes",
  "impactLabel": "Plant impact",
  "categories": [
    "Watering",
    "Pruning",
    "Feeding",
    "Harvest",
    "Soil"
  ],
  "seeds": [
    [
      "Water herb boxes",
      "Watering",
      15,
      4
    ],
    [
      "Turn compost",
      "Soil",
      25,
      3
    ],
    [
      "Harvest tomatoes",
      "Harvest",
      20,
      5
    ]
  ]
} as const satisfies ThemeConfig;
