import { emmitter } from '@sidekick-coder/zenith-kit/server'
import { definePlugin } from '@sidekick-coder/zenith-kit/shared'
import path from 'node:path'

const id = 'starter'

export default definePlugin(async () => {
    emmitter.on('router:registered', ({ router }) => router.addSource({
        id,
        prefix: '/api/starter',
        directory: path.resolve(import.meta.dirname, 'api'),
    }))

    emmitter.on('cli:registered', ({ cli }) => cli.addSource({
        directory: path.resolve(import.meta.dirname, 'commands'),
    }))

    emmitter.on('migrator:registered', ({ migrator }) => migrator.addSource({
        id,
        directory: path.resolve(import.meta.dirname, 'migrations'),
    }))

    emmitter.on('seeder:registered', ({ seeder }) => seeder.addSource({
        id,
        directory: path.resolve(import.meta.dirname, 'seeders'),
    }))
})

