import React from "react";
import './News.css'
import Other from "./Other/Other"
import Headlines from "./Headlines/Headlines"

class News extends React.Component {
    constructor() {
        super();
        this.state = {
            loaded: false,
            headlines: [],
            others: []
        }
    }

    urlDirect = (route) => {
        window.location = route;
    }
    
    getNews = async () => {
        const response = await fetch('http://localhost:3000/ndtv')
        const data = await response.json();
        if(data[0]) {
            this.setState({headlines: data.slice(0,4)})
            this.setState({others: data.slice(4,7)})
            this.setState({loaded: true})
        }
    }

    componentDidMount () {
        this.getNews();
    }

    render() {
        return ( 
            <div >
                {this.state.loaded
                    ?<div className="news">
                        {this.props.signedin
                            ?<h1>{`Hi ${this.props.username}!`}</h1>
                            :<div></div>
                        }
                        <h3>{`These are your headlines for today`}</h3>
                        <Headlines username={this.props.username} signedin={this.props.signedin} urlDirect={this.urlDirect} stories={this.state.headlines} />
                        <h3>These are the other stories</h3>
                        <Other urlDirect={this.urlDirect} stories={this.state.others} />
                    </div>
                    :<div></div>
                }

            </div>
        )
    }
    
}

export default News;

// to do
// -- ensure that the text and images are responsive and can't be squished together
// -- ensure that the top and featured have an equal 50/50 space and that neither can squish each other if a lot of text or images come through