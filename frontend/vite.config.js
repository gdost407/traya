import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        cleanupOutdatedCaches: true,
      },
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'The Last Headache',
        short_name: 'TLH',
        description: 'Vision: To eliminate chronic headaches through precision neuroscience, AI analytics, and holistic wellness. Mission: To create India’s first AI-driven, hospital-integrated, and patient-personalized system for diagnosing and curing headaches at their root cause.',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/1761393804595.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/1761393804595.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
