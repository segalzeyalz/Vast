import fetch from 'cross-fetch'
import axios from 'axios';

export const ADD_VAST = 'ADD_VAST';
export const GET_VASTS = 'GET_VASTS';
export const GET_VAST_BY_ID = 'GET_VAST_BY_ID';
export const GET_VAST_XML_BY_ID = 'GET_VAST_XML_BY_ID';
export const CHANGE_VIEW = 'CHANGE_VIEW';


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
export function fetchVast(id) {
    url = `${ROOT_URL}/fetch_vast?id=${id}`;
    request = axios.get(url);
    return {
        type: GET_VAST_BY_ID,
        payload: request
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


export function chnageVast(id) {
    return {
        type: CHANGE_VIEW,
        id: id
    };
}

export function addVast(id) {
    url = `${ROOT_URL}/fetch_vastXML?id=${id}`;
    request = axios.post(url);
    return {
        type: GET_VAST_XML_BY_ID,
        payload: request
    };
}