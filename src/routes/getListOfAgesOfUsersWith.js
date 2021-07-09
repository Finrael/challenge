'use strict';
const mockDBCalls = require('../database/index.js');

const getListOfAgesOfUsersWithHandler = async (request, response) => {
    // this solution is suboptimal due to the deprecated method should find another way around
    var url = require('url');
var url_parts = url.parse(request.url, true);
var query = url_parts.query;
    const data = await mockDBCalls.getListOfAgesOfUsersWith(query.chosen);
    return response.status(200).send(JSON.stringify(data));
};

module.exports = (app) => {
    app.get('/users/age', getListOfAgesOfUsersWithHandler);
};
