import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],

	server: {
		proxy: {
			"/api": {
				//target: "http://localhost:5173",
				changeOrigin: true,
				//rewrite: (path) => path.replace(/^\/api/, ""),
			},
		},
		cors: true,
	},
	base: "https://dev.fofo.world/",
});
