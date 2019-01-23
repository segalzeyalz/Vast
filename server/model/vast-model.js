var db = require('../config/database');
var dbFunc = require('../config/db-function');

var vastModel = {
    createVast:createVast,
    getVastXML:getVastXML
}
function createVast (vastURL, position, hideUI){
    //Set deafult values
    position = position || `bottom_right`;
    hideUI = hideUI? 1:0;
}


module.exports = vastModel;
