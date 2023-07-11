const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mondodb_username: 'ivan',
                mondodb_password: 'KhQJFhNbP7dJje4U',
                mondodb_clustername: 'cluster0',
                mondodb_database: 'my-site-dev',
            },
        };
    }

    return {
        env: {
            mondodb_username: 'ivan',
            mondodb_password: 'KhQJFhNbP7dJje4U',
            mondodb_clustername: 'cluster0',
            mondodb_database: 'my-site',
        },
    };
};
