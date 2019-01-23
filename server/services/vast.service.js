var vastModel = require("../model/vast-model");

var vastService = {
    createVast: createVast,
    getVastById:getVastById
}

function createVast(vastURL, position, hideUI) {
    return new Promise((resolve,reject) => {
        vastModel.createVast(vastURL, position, hideUI).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })
}

function getVastById(id) {
    return new Promise((resolve,reject) => {
        vastModel.getVastById(id).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    });
}

module.exports = vastService;

