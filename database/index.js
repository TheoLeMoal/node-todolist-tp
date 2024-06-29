const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://coco:coco@cluster0.fuyt1qw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("MongoDB OK")
  ).catch(err => {
    console.error('Erreur lors de la connexion à MongoDB', err);
});