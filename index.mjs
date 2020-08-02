import express from 'express';
import methodOverride from 'method-override';
import bodyParser  from 'body-parser'
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import router from './routes';
import contactRouter from './response/contactRoutes.mjs';

dotenv.config();

// Middleware pour la gestion des erreurs
const errorHandler = (err, req, res, next) => {
  res.status(500);
  res.render('error', { error: err });
}

const app = express();

app.use(methodOverride());

 /* this line tells Express to use the public folder as our static folder from which we can serve static files*/
app.use(express.static('public'));

// https://github.com/expressjs/body-parser
app.use(bodyParser.json());

// Déclacrtion des routes
app.use('/', errorHandler, router);

// lecture du fichier JSON
const contacts = fs.readFileSync(path.join(path.resolve(), '/contacts.json'), 'utf8');

// convertir contacts en object
// stocker contacts dans locals de l'application
// https://expressjs.com/fr/api.html#app.locals
app.locals.contacts = eval(contacts);

app.listen(process.env.PORT || 3000, (err, req, res, next) => {
  console.log("Server started on ", process.env.PORT);
})

export default app;


