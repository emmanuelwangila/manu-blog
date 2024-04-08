const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("data/db.json"); // Replace 'db.json' with your JSON file name and path
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3000; // Set your desired port

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
