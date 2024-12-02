import './App.css';
import * as airtable from './airtable/util.js';
import {useEffect, useState} from "react";

function App() {

    const [results, setResults] = useState(null);

    const getResults = () => {
        setResults(null);
        const p = document.getElementById('target_path').value
        airtable.getRecords(p).then(data => {
            if (data != null) {
                setResults(data.records.map((rec, i) => {
                    return <div key={i}>{JSON.stringify(rec.fields)}</div>;
                }));
            }
        }).catch(error => {
            console.log(error);
            setResults(<div>Path: {p} <br/> {JSON.stringify(error)}</div>);
        })
    }

    const updateRecord = () => {
        // setResults(null);
        const p = document.getElementById('target_path').value
        const b = {
            // "id": "rec06cGg5rfJRvSme",
            // "createdTime": "2024-11-27T19:37:41.000Z",
            "fields": {
                // "id": "4538c9c8-0e31-4824-a3e1-ce0c6a09182d",
                "first_name": "Banana"
                // "last_name": "McConville",
                // "email": "amcconville50@yolasite.com",
                // "ip_address": "176.63.75.247",
                // "date": "2024-10-09",
                // "Enrollments": [
                //     "recDiyOjiSqahYRV7"
                // ]
            }
        }
        airtable.updateRecord(b, p).then(data => {
            // if (data != null) {
            //     setResults(data.records.map((rec, i) => {
            //         return <div key={i}>{JSON.stringify(rec.fields)}</div>;
            //     }));
            // }
        }).catch(error => {
            console.log(error);
            setResults(<div>Path: {p} <br/> {JSON.stringify(error)}</div>);
        })
    }

    return (
        <div className="App">
            <div>
                {/*<div>*/}
                {/*    <input id="id_path"></input>*/}
                {/*    <button onClick={getResults}>Get</button>*/}
                {/*</div>*/}
                <div>
                    <input id="target_path"></input>
                    <button onClick={getResults}>Get</button>
                    <button onClick={updateRecord}>Update</button>
                </div>
            </div>
            <div>{results}</div>
        </div>
    );
}

export default App;

