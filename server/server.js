const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Conectare la MongoDB (schimbă cu linkul tău de Atlas dacă e remote)
mongoose.connect('mongodb+srv://bucatariucristiana:Admin1234@cluster0.a1b3m9h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Conectat la MongoDB Atlas!'))
.catch((err) => console.error('❌ Eroare la conectare MongoDB:', err));

// Schema pentru programări
const Programare = mongoose.model('Programare', {
  name: String,
  email: String,
  phone: String,
  appointmentDate: String, // sau Date, dacă vrei să-l parsezi
});

// Endpoint de salvare
app.post('/programare', async (req, res) => {
  const { name, email, phone, appointmentDate } = req.body;

  // Verificare dacă data/ora este deja ocupată
  const existenta = await Programare.findOne({ appointmentDate });
  if (existenta) {
    return res.status(400).json({ success: false, mesaj: 'Data și ora sunt deja ocupate.' });
  }

  const noua = new Programare({ name, email, phone, appointmentDate });
  await noua.save();

  res.json({ success: true, mesaj: 'Programare salvată cu succes.' });
});

app.listen(3001, () => {
  console.log('Serverul rulează pe http://localhost:3001');
});
