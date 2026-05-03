import { PluginEntity } from '@sidekick-coder/zenith-kit/server'
import path from 'node:path'

export default class extends PluginEntity {
    public async load() {
        this.addApiFolder(path.resolve(import.meta.dirname, 'api'))
    }
}
