const { createClient } = require('redis');

const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: 'redis-10835.c14.us-east-1-2.ec2.redns.redis-cloud.com',
        port: 10835
    }
});

module.exports = redisClient;
