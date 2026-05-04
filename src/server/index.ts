import { PluginEntity } from '@sidekick-coder/zenith-kit/server'
import path from 'node:path'

export default class PluginStarter extends PluginEntity {
    public async load() {
        await this.addApiFolder(path.resolve(import.meta.dirname, 'api'))
    }
}
