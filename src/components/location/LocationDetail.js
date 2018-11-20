import React, { Component } from "react"
// import "./location.css"


export default class LocationDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const location = this.props.locations.find(a => a.id === parseInt(this.props.match.params.locationId)) || {}
        return (
            <section className="location details">
                <div key={location.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <p>Location Name: {location.name}</p>
                        </h4>
                        {/* <a href="#"
                            onClick={() => this.props.fillmein(location.id)
                                .then(() => this.props.history.push("/locations"))}
                            className="card-link">Delete</a> */}
                    </div>
                </div>
            </section>
        )
    }
}