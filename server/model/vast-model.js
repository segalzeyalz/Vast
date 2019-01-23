var db = require('../config/database');
var dbFunc = require('../config/db-function');

var vastModel = {
    createVast:createVast,
    getVastUrlById:getVastUrlById
}
function createVast (vastURL, position, hideUI){
    //Set deafult values
    position = position || `bottom_right`;
    hideUI = hideUI? 1:0;
    return new Promise((resolve,reject) => {

    db.query(`insert into vasts (vast_url, position, hide_ui) values ('${vastURL}', '${position}', ${hideUI})`,(error,rows,fields)=>{
        if(error) {
            dbFunc.connectionRelease;
            reject(error);
        } else {
            dbFunc.connectionRelease;
            resolve(rows);
        }
   });
});  
};

function getVastUrlById(id){
    return new Promise((resolve,reject) => {
    //Get the vast by id
    db.query(`SELECT vast_url FROM vasts WHERE id =${id}`,(error,rows,fields)=>{
        if(error) {
            dbFunc.connectionRelease;
            reject(error);
        } else {
            dbFunc.connectionRelease;
            resolve(rows[0]);
        }
   });
});
    //then get the XML

}
module.exports = vastModel;
