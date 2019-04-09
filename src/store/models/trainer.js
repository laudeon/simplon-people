class Trainer {
  id = ''
  firstname = ''
  lastname = ''
  email = ''
  skillsSet = ''
  district = ''
  city = ''
  partnership = false

  constructor (payload) {
    if (Array.isArray(payload)) payload = this.formatPayloadFromgAPI(payload)

    this.id = payload.id || this.id
    this.firstname = payload.firstname || this.firstname
    this.lastname = payload.lastname || this.lastname
    this.email = payload.email || this.email
    this.skillsSet = payload.skillsSet || this.skillsSet
    this.district = payload.district || this.district
    this.city = payload.city || this.city
    this.partnership = payload.partnership || this.partnership
  }

  _hashCode(str) {
    return str.split('').reduce((prevHash, currVal) =>
      (((prevHash << 5) - prevHash) + currVal.charCodeAt(0))|0, 0);
  }

  formatPayloadFromgAPI (payload) {
    const formattedPayload = {}
    formattedPayload.id = this._hashCode(
      payload[5] + '' + new Date().getMilliseconds()
    )
    formattedPayload.firstname = payload[4]
    formattedPayload.lastname = payload[3]
    formattedPayload.email = payload[5]
    formattedPayload.district = payload[0]
    formattedPayload.city = payload[1]
    formattedPayload.skillsSet = payload[6]
    formattedPayload.partnership = payload[7]

    return formattedPayload
  }
}

export default Trainer
