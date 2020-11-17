const express = require('express');

const ongControler = require('./controllers/ongController');
const incidentController = require('./controllers/incidentController');
const ProfilleControler = require('./controllers/ProfilleControler');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', ongControler.index);
routes.post('/ongs', ongControler.create);

routes.get('/profile', ProfilleControler.index);

routes.get ('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id',incidentController.delete)

module.exports = routes;
 