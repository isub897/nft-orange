import React from "react";
import Dropdown from "./Dropdown/Dropdown";
import Table from "./Table/Table"
import './Stats.css'

class Stats extends React.Component {
    constructor() {
        super();
        this.state = {
            loaded: false,
            stats: []
        }
    }

    urlDirect = (route) => {
        window.location = route;
    }
    
    getStats = async () => {
        const response = await fetch('http://localhost:3000/1d')
        const data = await response.json();
        if(data[0]) {
            this.setState({stats: data})
            this.setState({loaded: true})
        }
    }

    componentDidMount () {
        this.getStats();
    }

    render() {
        return (
            <div className="stats ba">
            {this.state.loaded
                ?<div>
                    <p>This is the stats section</p>
                    <Dropdown />
                    <Table stats={this.state.stats} />
                </div>
                :<div></div>
            }
            </div>
        )
    }
    
}

export default Stats;