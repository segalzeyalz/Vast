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
    db.query(`insert into vasts (vastURL, position, hideUI) values (${vastURL}, ${position}, ${hideUI})`,(error,rows,fields)=>{
        if(error) {
            dbFunc.connectionRelease;
            reject(error);
        } else {
            dbFunc.connectionRelease;
            resolve(rows);
        }
   });
};

function getVastXML(id){
    //Should return XML according to id
    return id;
}

module.exports = vastModel;
