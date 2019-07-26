import Model from './Model'

class TrainerModel extends Model {
  simplonline = 0

  constructor (payload, key) {
    super()

    if (Array.isArray(payload)) payload = this.formatPayloadFromgAPI(payload)

    this.rowNumber = key + 1 // plus two titles rows at the doc start
    this.id = payload.id || this.id
    this.firstname = payload.firstname || this.firstname
    this.lastname = payload.lastname || this.lastname
    this.email = payload.email || this.email
    this.role = payload.role || this.role
    this.district = payload.district || this.district
    this.city = payload.city || this.city
    this.partnership = payload.partnership || this.partnership
    this.status = payload.status || this.status
    this.simplonline = payload.simplonline || this.simplonline
    this.soc = payload.soc || this.soc
    this.discord = payload.discord || this.discord
  }

  formatPayloadFromgAPI (payload) {
    const formattedPayload = {}
    formattedPayload.id = this.generateId()
    formattedPayload.firstname = payload[4]
    formattedPayload.lastname = payload[3]
    formattedPayload.email = payload[5]
    formattedPayload.district = payload[0]
    formattedPayload.city = payload[1]
    formattedPayload.role = payload[6]
    formattedPayload.partnership = payload[9]
    formattedPayload.status = payload[10]
    formattedPayload.simplonline = payload[17]
    formattedPayload.soc = payload[18]
    formattedPayload.discord = payload[22]

    return formattedPayload
  }
}

export default TrainerModel
