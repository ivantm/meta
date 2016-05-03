const Bunyan = require('bunyan');
const path = require('path');

const mkdirpSync = require('mkdirp').sync;
const logConfig = require('./config').log;

// Try to recursively create any log directories that do not yet exist
logConfig.streams.forEach(function(config) {
    if(config.path) {
        mkdirpSync(path.dirname(config.path));
    }
});

module.exports = new Bunyan(logConfig);