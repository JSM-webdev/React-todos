import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
plugins: [react()],
base: "/REACT TO DO APP",
build: {
outDir: 'docs'
}
})