import React, { Component } from "react"

// import "./location.css"


export default class OwnerDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const owner = this.props.owners.find(a => a.id === parseInt(this.props.match.params.ownerId)) || {}
        return (
            <section className="owner details">
                <div key={owner.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <p>Owner Name: {owner.name}</p>
                        </h4>
                        <a href="#"
                            onClick={() => this.props.removeCustomer(owner.id)
                                .then(() => this.props.history.push("/owners"))}
                            className="card-link">Delete Me</a>
                    </div>
                </div>
            </section>
        )
    }
}