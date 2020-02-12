import Model from './Model'

class CoworkerModel extends Model {
  constructor (payload, key) {
    super()

    if (Array.isArray(payload)) payload = this.formatPayloadFromgAPI(payload)

    this.rowNumber = key + 2 // plus two title rows at the doc start
    this.id = payload.id || this.id
    this.firstname = payload.firstname || this.firstname
    this.lastname = payload.lastname || this.lastname
    this.email = payload.email || this.email
    this.role = payload.role || this.role
    this.district = payload.district || this.district
    this.city = payload.city || this.city
    this.status = payload.status || this.status
    this.partnership = payload.partnership || this.partnership
    this.soc = payload.soc || this.soc
  }

  formatPayloadFromgAPI (payload) {
    const formattedPayload = {}
    formattedPayload.id = this.generateId()
    formattedPayload.firstname = payload[4]
    formattedPayload.lastname = payload[3]
    formattedPayload.email = payload[5]
    formattedPayload.district = payload[0]
    formattedPayload.city = payload[1]
    formattedPayload.role = payload[2]
    formattedPayload.status = payload[9]
    formattedPayload.partnership = payload[8]
    formattedPayload.soc = payload[12]

    return formattedPayload
  }
}

export default CoworkerModel
