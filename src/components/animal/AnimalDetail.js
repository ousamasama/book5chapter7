import React, { Component } from "react"
import "./animal.css"
import dog from "./DogIcon.png"


export default class AnimalDetail extends Component {
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

    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const animal = this.props.animals.find(a => a.id === parseInt(this.props.match.params.animalId)) || {}
        return (
            <section className="animal details">
                <div key={animal.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={dog} className="icon--dog" />
                            <p>Pet Name: {animal.name}</p>
                            {this.animalOwners(animal)}
                        </h4>
                        <h6 className="card-title">Breed: {animal.breed}</h6>
                        <a href="#"
                            onClick={() => this.props.deleteAnimal(animal.id)
                                .then(() => this.props.history.push("/animals"))}
                            className="card-link">Delete</a>
                    </div>
                </div>
            </section>
        )
    }
}