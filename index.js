//This testing that the save feature works!

const Hapi = require("@hapi/hapi");
const Joi = require("@hapi/joi");
const path = require("path");
const fs = require("fs");

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });

  const routes = [];

  const routesPath = path.join(__dirname, "routes");

  fs.readdirSync(routesPath).forEach((file) => {
    if (file === "index.js") return;

    const fileRoutes = require(path.join(routesPath, file));

    routes.push(...fileRoutes);
  });

  server.route(routes);

  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

init();
