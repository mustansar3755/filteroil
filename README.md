# Filtroil – React redesign (single page)

## Setup
```bash
npm create vite@latest filtroil -- --template react
cd filtroil
npm i react-router-dom gsap lenis lucide-react react-icons
npm i tailwindcss @tailwindcss/vite
```
`vite.config.js`:
```js
import tailwindcss from '@tailwindcss/vite'
export default { plugins: [react(), tailwindcss()] }
```
Phir is folder ki `src/` aur `index.html` apne project me copy kar do (existing files replace). Tailwind **v4** use hua hai (`@import "tailwindcss"` + `@theme` in index.css).
