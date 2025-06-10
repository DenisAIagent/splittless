const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Sert les fichiers statiques (logo, CSS, images, etc.)
app.use("/public", express.static(path.join(__dirname, "public")));

// Route principale
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Splittless est en ligne sur le port ${PORT}`);
});
