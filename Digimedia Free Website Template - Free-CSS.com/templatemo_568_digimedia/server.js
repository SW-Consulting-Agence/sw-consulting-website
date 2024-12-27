const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Ajoutez cette ligne
const mysql = require('mysql');

const app = express();
const port = 3000;

// Activez CORS
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configurer la connexion à la base de données
const db = mysql.createConnection({
  host: 'localhost', // ou votre hébergement
  user: 'root',
  password: 'Wis53142', // Remplacez par votre mot de passe
  database: 'contact_form_db'
});

db.connect(err => {
  if (err) throw err;
  console.log('Base de données connectée!');
});

// Route pour gérer les données du formulaire
app.post('/submit', (req, res) => {
  const { name, email, subject, message } = req.body;

  const query = 'INSERT INTO messages (name, email, subject, message) VALUES (?, ?, ?, ?)';
  db.query(query, [name, email, subject, message], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erreur lors de l\'enregistrement.');
    } else {
      res.send('Message enregistré avec succès!');
    }
  });
});

// Lancer le serveur
app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});
