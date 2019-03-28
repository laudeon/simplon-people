class Trainer {
  id = ''
  firstname = ''
  lastname = ''
  email = ''
  skillsSet = ''
  district = ''
  description = ''

  constructor (payload) {
    this.firstname = payload.firstname || this.firstname
    this.lastname = payload.lastname || this.lastname
    this.email = payload.email || this.email
    this.skillsSet = payload.skillsSet || this.skillsSet
    this.district = payload.district || this.district
    this.description = payload.description || this.description
  }
}

export default Trainer
