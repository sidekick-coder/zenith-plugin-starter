import { emmitter, router } from '@sidekick-coder/zenith-kit/server'
import { definePlugin } from '@sidekick-coder/zenith-kit/shared'
import path from 'node:path'

export default definePlugin(async () => {
    emmitter.on('router:registered', async () => {
        await router.addFileBaseRoutes(path.resolve(import.meta.dirname, 'api'), {
            prefix: '/api/starter',
            identifier: 'starter',
        })
    })
})

