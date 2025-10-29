import { defineConfig, loadEnv } from 'vite' // ← добавляем loadEnv
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  const base =
    mode === 'production' ? env.VITE_BASE_URL || '/${{ github.event.repository.name }}/dev/' : '/'

  return {
    plugins: [
      react(),
      dts({
        include: ['src'],
        exclude: ['src/**/*.test.ts', 'src/**/*.stories.ts'],
        insertTypesEntry: true,
      }),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    server: {
      port: 3000,
    },
    base,
  }
})
