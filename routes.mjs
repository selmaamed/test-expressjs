import express from 'express';
import path from 'path';
import fs from 'fs'
import marked from 'marked'

const router = express.Router();

router.get('/', (req, res, next) => {
  const file = fs.readFileSync(path.resolve() + '/README.md', 'utf8');
  res.send('<html> <head> <link rel="stylesheet" type="text/css" href=\'https://fonts.googleapis.com/css?family=Lato&display=swap\'></head> <body style="margin: 20px; font-family: Lato">' +

   marked(file.toString()) + '</body></html>');
})

router.get('/status', (req, res, next) => {

  res.status(200).send({ status: "OK" , date: new Date() });
})

export default router;