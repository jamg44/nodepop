// no habias cargado la librería fs
const fs = require('fs');

// no habias conectado a la base de datos
require("./lib/connectMongoose");

const Anuncio = require("./Models/Anuncio");
const json = JSON.parse(
  fs.readFileSync(__dirname + "/anuncios.json", "utf-8")
);

// no estabas llamando a la función loadMeetings()
loadMeetings(json.anuncios).catch(err => console.log(err));

async function loadMeetings(anuncios) {
  try {

    // antes de cargarlos vaciamos la colección
    await Anuncio.remove();
    console.log('Anuncios borrados.')

    await Anuncio.insertMany(anuncios);
    console.log('Anuncios cargados.')

    console.log("Done!");
    process.exit();
  } catch (e) {
    console.log(e);
    process.exit();
  }
}
