import { defineConfig } from 'vite'
export default defineConfig({
  ssr: { noExternal: ['xdd-ui'] },
  server: {
    port: 3002,
  }
})