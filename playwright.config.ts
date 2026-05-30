import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  reporter: 'html', // Genera el reporte 
  use: {
    screenshot: 'only-on-failure', // Toma capturas de pantalla solo cuando falla 
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }, // Navegador 1 
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] }, // Navegador 2
    },
  ],
});
