import React, { Component } from 'react'
import { Link } from "react-router-dom";
import dog from "./DogIcon.png"
import "./animal.css"

export default class AnimalList extends Component {

    animalOwners(animal) {
        const ao = this.props.animalsOwned
        const own = this.props.owners
        const ownerNameArr = []

        ao.forEach(animalOwner => {
            if (animal.id === animalOwner.animalId) {
                let petOwnerId = animalOwner.ownerId
                own.forEach(owner => {
                    if (owner.id === petOwnerId) {
                        ownerNameArr.push(owner.name)
                    }
                })
            }
        })
        return ` Owner(s): ${ownerNameArr.join(" and ")}`
    }

    // post(newAnimal) {
    //     let remoteURL = "http://localhost:5002/"
    //     return fetch(`${remoteURL}/animals`, {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json"
    //       },
    //       body: JSON.stringify(newAnimal)
    //     }).then(data => data.json())
    //   }

    render() {
        return (
            <React.Fragment>
                 <section className="animalButton">
                    <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/animals/new")}
                            }>
                        Admit Animal
                    </button>
                </section>
                <section className="animals list">
                    {
                        this.props.animals.map(animal =>
                            <div key={animal.id} className="card">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <img src={dog} className="icon--dog" />
                                        <p>Pet Name: {animal.name}</p>
                                        <p>Breed: {animal.breed}</p>
                                        {this.animalOwners(animal)}
                                        <Link className="nav-link" to={`/animals/${animal.id}`}>Details</Link>
                                        <a href="#"
                                            onClick={() => this.props.deleteAnimal(animal.id)}
                                            className="card-link">Delete</a>
                                    </h5>
                                </div>
                            </div>
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}