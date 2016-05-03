module.exports = {
    server: {
        port: 3000
    },
    log: {
        name: 'meta',
        streams: [
            {
                level: 'trace',
                stream: process.stdout
            },
            {
                level: 'INFO',
                path: './logs/log.log'
            }
        ]
    }
};