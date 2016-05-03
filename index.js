const Hapi = require('hapi');
const config = require('./config');

const server = new Hapi.Server();
server.connection(config.server);

server.start(err => {
    if(err) {
        console.error(err);
    } else {
        console.log('Meta server running on port ' + config.server.port);
    }
});