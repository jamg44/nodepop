const anuncio = require("./Models/Anuncio");
const anuncios = JSON.parse(
  fs.readFileSync(__dirname + "/anuncios.json", "utf-8")
);

async function loadMeetings() {
  try {
    await anuncio.insertMany(anuncios);
    console.log("Done!");
    process.exit();
  } catch (e) {
    console.log(e);
    process.exit();
  }
}
