import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSetTable, useTable } from "../../Contexts/table-context";
import {Redirect, useHistory} from 'react-router-dom';
import { useUser } from "../../Contexts/user-context";

function TableSelection() {

    const [tables, setTables] = useState([]);

    useEffect(() => {
        let mounted = true;
        axios.get("/api/table/getAll").then(res => {
            if(mounted) {
                setTables(res.data);
            }
        });

        return () => {
            mounted = false;
        }
    })

    const setSelectedTable = useSetTable();
    const selectedTable = useTable();

    //check if user is logged in
    const user = useUser();
    const history = useHistory();
    if(!user) {
        return <Redirect to="/"/>
    }

    return (
        <div className="container">
            <div className="card m-5" style={{ height: "500px" }}>
                <div className="card-header">
                    Table Map
                </div>
                <div className="card-body" style={{ position: "relative" }}>
                    {
                        tables.map(table => {
                            let buttonClass = "btn btn-light"
                            if (selectedTable) {
                                if (table.id === selectedTable.id) {
                                    buttonClass = "btn btn-success"
                                }
                            }
                            return (
                                <button
                                    key={table.id}
                                    onClick={() => {
                                        setSelectedTable(table);
                                    }}
                                    style={{ top: table.y, left: table.x, position: "absolute" }}
                                    className={buttonClass}>

                                    <i className="fas fa-utensils fa-3x"></i>
                                    <h3>{table.tableName}</h3>
                                </button>
                            )
                        })
                    }
                </div>
            </div>
            <div className="float-right mr-5">
                <button className="btn btn-lg btn-success" onClick={() => {
                    if(selectedTable) {
                        history.push('orderpage');
                    }
                }} style={{ position: "relative", right: "25px" }}>Order</button>


                <button className="btn btn-lg btn-danger" onClick={() => {
                    setSelectedTable(null);
                    history.push('/mainMenu');
                }} style={{ position: "relative", left: "25px" }}>Exit</button>
            </div>
        </div>
    )
}

export default TableSelection;