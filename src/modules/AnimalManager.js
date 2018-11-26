import APIManager from "./APIManager"

class AnimalManager extends APIManager {
  getAnimal(id) {
    return this.get(id)
  }
  getAll() {
    return this.all()
  }
  removeAndList(id) {
    return this.delete(id).then(() => this.all())
  }
  post(newAnimal) {
    return fetch("http://localhost:5002/animals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newAnimal)
    }).then(data => data.json())
  }

  // removeAndList(id) {
  //   return this.delete(id).then(() => this.all())
  // }
}

export default new AnimalManager("animals")

// import APIManager from "./APIManager"
// /*
//     Remember that extending a Class means that
//     it will be in this class's prototype chain.
// */
// class AnimalManager extends APIManager {
//     ...
// }