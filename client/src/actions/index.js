import axios from 'axios';
import { ADD_VAST, GET_VASTS, GET_VAST_BY_ID, GET_VAST_XML_BY_ID } from './../constants/actionType'

const ROOT_URL = 'http://localhost:9890/api/';
let url;
let request;
export function fetchVasts() {
    url = `${ROOT_URL}/fetch_vasts`;
    request = axios.get(url);
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