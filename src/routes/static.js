const express = require('express');
const mockDBCalls = require('../database/index.js');

// the user list needs to be moved here
module.exports = (app) => {
    app.use(express.static('public'));
};