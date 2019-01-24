var db = require('../config/database');
var dbFunc = require('../config/db-function');

var vastModel = {
    createVast:createVast,
    getVastById:getVastById
}
function createVast (vastURL, position, hideUI){
    //Set deafult values
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

function getVastById(id){
    return new Promise((resolve,reject) => {
    //Get the vast by id
    db.query(`SELECT * FROM vasts WHERE id =${id}`,(error,rows,fields)=>{
        if(error) {
            dbFunc.connectionRelease;
        } else {
            dbFunc.connectionRelease;
            resolve(rows[0]);
        }
    });
});
}
module.exports = vastModel;
