// Configuración de Tailwind CSS.
// - content: escanea todos los archivos en src/ para generar solo las clases usadas.
// - darkMode 'class': el modo oscuro se activa añadiendo la clase "dark" al <html>.
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: { extend: {} },
  plugins: [],
};
