// storages/usersStorage.js
// This class lets us simulate interacting with a database.
class UsersStorage {
  constructor() {
    this.storage = {}
    this.id = 0

    this.addUser({
      firstName: "Artem",
      lastName: "Hustler",
      email: "artem@grind.dev",
      age: 15,
      bio: "Building MVPs while drinking caffeine and crushing bugs.",
    })
  }

  addUser({ firstName, lastName, email, age, bio }) {
    const id = this.id
    this.storage[id] = { id, firstName, lastName, email, age, bio }
    this.id++
  }

  getUsers() {
    return Object.values(this.storage)
  }

  getUser(id) {
    return this.storage[id]
  }

  updateUser(id, { firstName, lastName, email, age, bio }) {
    this.storage[id] = { id, firstName, lastName, email, age, bio }
  }

  deleteUser(id) {
    delete this.storage[id]
  }
}
// Rather than exporting the class, we can export an instance of the class by instantiating it.
// This ensures only one instance of this class can exist, also known as the "singleton" pattern.

const userStorage = new UsersStorage()

export default userStorage
