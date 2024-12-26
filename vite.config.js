import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'

export default defineConfig({
	base: '/threejs-examples/',
	build: {
		rollupOptions: {
			input: {
				model: fileURLToPath(new URL('model.html', import.meta.url)),
				cube: fileURLToPath(new URL('cube.html', import.meta.url)),
				line: fileURLToPath(new URL('line.html', import.meta.url)),
				index: fileURLToPath(new URL('index.html', import.meta.url)),
			}
		}
	}
})
