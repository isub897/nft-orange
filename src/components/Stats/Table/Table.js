import React from "react";
import Stat from './Stat.js/Stat';
import './Table.css'

const Table = ({urlDirect, stats}) => {

    return (
        <div className="table">
            <table>
            <tbody>
            <tr id="head" >
                <th>Collection</th>
                <th>Volume</th>
                <th>Floor Price</th>
                <th>Number of Trades</th>
            </tr>
            {
                stats.map((item, index)=> {
                    const floor = item.floor.slice(1, item.floor.length)
                    // this will remove the 'Ξ' from the floor price string

                    return (
                        <tr 
                        onClick={()=> urlDirect(item.collection_url)}
                        id="body" 
                        key={index}>
                            <td><Stat.Logo name={item.collection_name} /></td>
                            <td>{item.volume}</td>
                            <td><Stat.Floor price={floor} /></td>
                            <td>{item.trades}</td>
                        </tr>
                    )
                })
            }
            </tbody>
            </table>
        </div>
    )
}

export default Table;