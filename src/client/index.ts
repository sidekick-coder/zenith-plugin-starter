import { PluginEntity, authGuard, menu } from '@sidekick-coder/zenith-kit/client'
import './assets/styles.css'

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

        menu.add({
            label: 'Starter',
            icon: 'lucide:box',
            group: $t('Plugins'),
            layout: 'admin',
            to: `/admin/${this.id}`,
        })
    }
}

