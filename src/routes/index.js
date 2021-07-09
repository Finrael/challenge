'use strict';
// in general this would work but it is not optimal for production, i  did not added react to the project because that would imply either doing everything via front end or
// having to create a secondary library/repo from react that would call this server and that break the 3 commands rule
module.exports = (app) => {
    require('./healthCheck')(app);
    require('./getUsers')(app);
    require('./getListOfAgesOfUsersWith')(app);
    require('./static')(app);
};;
