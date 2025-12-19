const Hapi = require('@hapi/hapi');

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    // GET route
    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            const query = request.query;
            return { message: "GET request received", query };
        }
    });

    // POST route
    server.route({
    method: 'POST',
    path: '/',
    options: {
        payload: {
            parse: true,
            allow: 'application/json'
        }
    },
    handler: (request, h) => {
        console.log("POST body:", request.payload);
        return { message: "POST request received", body: request.payload };
    }
});

    await server.start();
    console.log(`Server running on ${server.info.uri}`);
};

init();
