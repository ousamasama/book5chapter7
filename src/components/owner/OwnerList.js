import React, { Component } from 'react'
import { Link } from "react-router-dom";

class OwnerList extends Component {
    render() {
        return (
            <section className="owners list">
            {
                this.props.owners.map(owner =>
                    <div key={owner.id}>
                        <div className="card-body">
                            <h5 className="card-title">
                                {owner.name}
                                <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link>
                                <a href="#"
                                    onClick={() => this.props.removeCustomer(owner.id)}
                                    className="card-link">I No Longer Wish to be a Customer</a>
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}

export default OwnerList