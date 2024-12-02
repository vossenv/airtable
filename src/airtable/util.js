
'use strict'

// import dotenv from 'dotenv';
// dotenv.config();



export const STUDENTS_TABLE = 'tblD2VTVEGseUY8m9';
export const CLASSES_TABLE = 'tblDXFMRhFO1ADj56';
export const ENROLLMENTS_TABLE = 'tbltY5e51NtNqtV8U';
export const BASE_URL = 'https://api.airtable.com/v0';
export const BASE_ID = 'appe7jPEaCuczhxKo'



function getURL(path) {
    return [BASE_URL, BASE_ID, path].join('/');
}

function getHeaders() {
    return {
        headers: {
            Authorization: "Bearer " + process.env.REACT_APP_BASE_TOKEN
        }
    };
}

export function getRecords(tableID) {
    const url = getURL(tableID);
    const headers = getHeaders();
    console.log(url);
    return fetch(url, headers).then(res => res.json()).then(response => {
        if (!response.ok) {
            return Promise.reject(response);
        }
        return response.json();
    });
}

export function updateRecord(data, tableID) {
    const url = getURL(tableID);
    let headers = getHeaders();
    headers.method = 'PATCH';
    // headers.mode = 'no-cors';
    headers.headers.contentType = 'application/json';
    headers.body = JSON.stringify(data);
    console.log(url, headers);
    return fetch(url, headers).then(res => res.json()).then(response => {
        if (!response.ok) {
            return Promise.reject(response);
        }
        return response.json();
    });
}

export function getStudents() {
    const url = getURL(STUDENTS_TABLE);
    const headers = getHeaders();
    return fetch(url, headers).then(res => res.json());
}



