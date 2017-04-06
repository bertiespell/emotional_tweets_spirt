const express = require('express');
const Router = require('express').Router();

Router.get('/', function (request, response) {
   response.status(200).send({
       Status : 'OK'
   });
});

// Router.get()

module.exports = Router;