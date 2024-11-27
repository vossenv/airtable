import './App.css';
import * as airtable from './airtable/util.js';
import {Student} from "./airtable/model";

import {useEffect, useState} from "react";
import {getRecords, getStudents} from "./airtable/util.js";

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
                </div>
            </div>
            <div>{results}</div>
        </div>
    );
}

export default App;

