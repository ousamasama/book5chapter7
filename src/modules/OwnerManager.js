import APIManager from "./APIManager"

class OwnerManager extends APIManager {
  getOwner(id) {
    return this.get(id)
  }
  getAll() {
    return this.all()
  }
  removeAndList(id) {
    return this.delete(id).then(() => this.all())
  }
}

export default new OwnerManager("owners")