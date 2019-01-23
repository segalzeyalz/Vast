var db = require('../config/database');
var dbFunc = require('../config/db-function');

var vastModel = {
    createVast:createVast,
    getVastById:getVastById
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

function getVastById(id){
    //Get the vast by id
    db.query(`SELECT vastURL FROM vasts WHERE id =${id})`,(error,rows,fields)=>{
        if(error) {
            dbFunc.connectionRelease;
            reject(error);
        } else {
            dbFunc.connectionRelease;
            resolve(rows[0]);
        }
   });

    //then get the XML

}
module.exports = vastModel;
