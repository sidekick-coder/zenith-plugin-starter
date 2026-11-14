import { CliCommand } from '@sidekick-coder/zenith-kit/server/services/CliService'

const command = new CliCommand('starter:hello')
    .helpGroup('starter')
    .option('-n, --name <name>', 'Name to greet')
    .action(async (options) => {
        const name = options.name || 'World'

        console.log(`Hello, ${name}!`)
    })

export default command
