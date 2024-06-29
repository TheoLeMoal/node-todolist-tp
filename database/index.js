const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://theo:theo@cluster0.oxakyup.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("BDD OK")
  ).catch(err => {
    console.error('Erreur lors de la connexion à MongoDB', err);
});