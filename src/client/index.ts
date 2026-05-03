import { PluginEntity, authGuard } from '@sidekick-coder/zenith-kit/client'

export default class extends PluginEntity {
    public async load() {
        this.addPagesFolder(import.meta.glob('./pages/admin/**/*.vue'), {
            strip: ['pages', 'admin'],
            prefix: `/admin/${this.id}`,
            guards: [authGuard]
        })

        this.addPagesFolder(import.meta.glob('./pages/public/**/*.vue'), {
            strip: ['pages', 'public'],
            prefix: this.id,
            guards: [authGuard]
        })

    }
}

