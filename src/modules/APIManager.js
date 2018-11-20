const remoteURL = "http://localhost:5002"

class APIManager {
    constructor(route) {
        this.route = route
    }

  get(id) {
    /*
        Since the purpose of this module is to be used by
        all of the more specialized one, then the string
        of `animals` should not be hard coded here.
    */
   return fetch(`${remoteURL}/${this.route}/${id}`).then(e => e.json())
  }

  all() {
    return fetch(`${remoteURL}/${this.route}`).then(data => data.json())
  }

  delete(id) {
    return fetch(`${remoteURL}/animals/${id}`, {
        method: "DELETE"
      })
        .then(e => e.json())
        .then(() => fetch(`${remoteURL}/${this.route}`))
        .then(e => e.json())
  }
}

export default APIManager