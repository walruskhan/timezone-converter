import { defineConfig } from 'vitest/config'
import { playwright } from '@vitest/browser-playwright'

export default defineConfig({
  test: {
    projects: [
        {
            test: {
                include: [
                    "src/**/*.test.ts"
                ],
                name: 'unit',
                environment: 'node'
            }
        }
    ],
    browser: {
      provider: playwright(),
      enabled: true,
      // at least one instance is required
      instances: [
        { browser: 'chromium' },
      ],
    },
  }
})