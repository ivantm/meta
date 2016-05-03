const Hapi = require('hapi');
const config = require('./config');
const log = require('./log');

const server = new Hapi.Server();
server.connection(config.server);

server.start(err => {
    if(err) {
        log.error(err);
    } else {
        log.info('Meta server running on port ' + config.server.port);
    }
});