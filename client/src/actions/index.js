import fetch from 'cross-fetch'
import axios from 'axios';
export const CHANGE_VAST = 'CHANGE_VAST';
export const ADD_VAST = 'ADD_VAST';
export const GET_VASTS = 'GET_VASTS';
export const GET_VAST_BY_ID = 'GET_VAST_BY_ID';
export const GET_VAST_XML_BY_ID = 'GET_VAST_XML_BY_ID';


const ROOT_URL = 'http://localhost:9890/api/';
let url;
var request;
export function fetchVasts() {
    url = `${ROOT_URL}/fetch_vasts`;
    request = axios.get(url)
    return {
        type: GET_VASTS,
        payload: request
    };
}
export function fetchVast(data) {
    
    return {
        type: GET_VAST_BY_ID,
        payload: data
    };
}

export function fetchVastXML(id) {
    url = `${ROOT_URL}/fetch_vastXML?id=${id}`;
    request = axios.get(url);

    return {
        type: GET_VAST_XML_BY_ID,
        payload: request
    };
}

export function addVast(vastURL, position, hideUi) {
    url = `${ROOT_URL}/create_vast`;
    request = axios.post(url, {
        vastURL:vastURL, position:position, hideUI:hideUi
    });
    return {
        type: ADD_VAST,
        payload: request
    };
}

export function changeVast(name, value){
    return {
        type: CHANGE_VAST,
        name: name,
        value: value
    };
}