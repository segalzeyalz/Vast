var vastModel = require("../model/vast-model");

var vastService = {
    createVast: createVast,
    getVastUrlById:getVastUrlById
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

function getVastUrlById(id) {
    return new Promise((resolve,reject) => {
        vastModel.getVastUrlById(id).then((data)=>{
            resolve(data)} ).catch((err) => {
                reject(err);
            })
    });
}

module.exports = vastService;

