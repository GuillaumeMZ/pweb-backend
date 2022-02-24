const {Client} = require('pg')
require('dotenv').config();
const fastify = require('fastify')({logger: true})

fastify.get('/', async (req, res) => {
    return {hello: 'world'};
});

const start = async () => {
    try { 
        await fastify.listen(8000);
    } catch(err) {
        console.error(err);
        process.exit(1);
    }
};
start();