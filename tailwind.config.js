import { shadcnPreset } from "@shadcn/ui";

module.exports = {
  presets: [shadcnPreset],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust paths as needed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
