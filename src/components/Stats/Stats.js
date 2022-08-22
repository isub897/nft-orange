import React from "react";
import Dropdown from "./Dropdown/Dropdown";
import Table from "./Table/Table"
import './Stats.css'

class Stats extends React.Component {
    constructor() {
        super();
        this.state = {
            loaded: false,
            stats: [],
            selection: "24 hours"
        }
    }

    urlDirect = (route) => {
        window.location = route;
    }

    onSelectionChange = (selected, name) => {
        this.setState({
            stats: selected,
            selection: name
        });
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
            <div>
            {this.state.loaded
                ?<div className="stats">
                    <header>
                        <h1>Top NFT Collections</h1>
                        <p>The top NFTs collections, ranked by volume, floor price and trade amount</p>
                    </header>
                    <Dropdown selection={this.state.selection} onSelectionChange={this.onSelectionChange} />
                    <Table urlDirect={this.urlDirect} stats={this.state.stats} />
                </div>
                :<div></div>
            }
            </div>
        )
    }
    
}

export default Stats;