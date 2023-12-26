// Importation du module http
const http = require("http");

// Configuration du serveur pour répondre "Hello, World!" à chaque requête
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, World!\n");
});

// Écoute du serveur sur le port 3000
const port = 3000;
server.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}/`);
});
