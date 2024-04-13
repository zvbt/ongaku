import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "red": '#fb4934',
        "green": '#b8bb26',
        "yellow": '#fabd2f',
        "blue": '#83a598',
        "purple": '#d3869b',
        "aqua": '#8ec07c',
        "orange": '#fe8019',
        "gray": '#928374',
        'dim-red': '#cc2412',
        'dim-green': '#98971a',
        'dim-yellow': '#d79921',
        'dim-blue': '#458588',
        'dim-purple': '#b16286',
        'dim-aqua': '#699d6a',
        'dim-orange': '#d65d0e',
        'dim-gray': '#a89984',
        'hard-background': '#1d2021',
        'medium-background': '#282828',
        'soft-background': '#323027',
        'background-1': '#3c3836',
        'background-2': '#504945',
        'background-3': '#665c54',
        'background-4': '#7c6764',
        "foreground": '#fbf1c7',
        'foreground-1': '#ebdbb2',
        'foreground-2': '#d5c4a1',
        'foreground-3': '#bdae93',
        'foreground-4': '#a89984',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
