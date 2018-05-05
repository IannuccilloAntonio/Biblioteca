const mongoose = require('mongoose');

const bookSchema = mongoose.createSchema({
  inventario: {type: String, required: true},  
  titolo: { type: String, required: true },
  autore: String,
  citta: String,
  editore: String,
  data: String,
  volume: String
  collocazione: String
  provenienza: String
  data ingresso: String
  vecchi dati: String
  note: String
});

const Book = mongoose.model('book', bookSchema);

export default Book;
