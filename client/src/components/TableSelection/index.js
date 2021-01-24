import React, {useState} from "react";
import axios from "axios";

function TableSelection() {

    const [tables, setTables] = useState([]);
    const [selectedTable, setSelected] = useState(null); 
    
    axios.get("/api/table/getAll").then(res => {
        setTables(res.data)
    })

    return(
        <>
    <div className="card m-5" style={{height: "500px"}}>
        <div className="card-header">
            Table Map
        </div>
        <div className="card-body" style={{position: "relative"}}>
        {
            tables.map(table => {

                let buttonClass = "btn btn-light"
                if (selectedTable) 
                {
                    if (table.id === selectedTable.id) 
                    {
                        buttonClass = "btn btn-success"
                    }
                }
                return (
                    <button onClick={()=>{setSelected(table)}} style={{top: table.y, left: table.x, position: "absolute"}} className={buttonClass}><i className="fas fa-utensils fa-3x"></i><h3>{table.tableName}</h3></button>
                )
            })
        }
        </div>
    </div>
    <div className="container text-right Table">
    <button className="btn btn-success" style={{position: "relative", right:"25px"}}>Order</button>
    <button className="btn btn-danger" style={{position: "relative", left:"25px"}}>Exit</button>
    </div>





        </>
    )
}

export default TableSelection;