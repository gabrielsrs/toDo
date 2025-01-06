/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sidebarComponent: '#1C1D22',
        projectsComponent: '#222327',
        mainComponent: '#2A2B2F',
        customButton: '#4B69FF',
        customCardContent: '#24262C',
        customCard: '#292B31', 
        customDateColor: '#989CAA',
        customYellowProgress: '#FFA048',
        customRedProgress: '#FF7979',
        customGreenProgress: '#78D700',
      }
    },
    fontFamily: {
      'sans': ['Exo\\ 2', 'system-ui', 'sans-serif'],
    }
  },
  plugins: [],
}