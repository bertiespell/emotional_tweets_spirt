const express = require('express');
const Router = require('express').Router();
const controllers = require('../controllers/controller.js');

Router.get('/', function (request, response) {
   response.status(200).send({
       Status : 'OK'
   });
});

Router.get('/:user_name/insights', controllers.getInsightsByUser);

module.exports = Router;