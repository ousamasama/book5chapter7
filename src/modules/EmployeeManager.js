import APIManager from "./APIManager"

class EmployeeManager extends APIManager {
  getEmployee(id) {
    return this.get(id)
  }
  getAll() {
    return this.all()
  }
  removeAndList(id) {
    return this.delete(id).then(() => this.all())
  }
}

export default new EmployeeManager("employees")