const sanitizeString = (str) => str
                            .normalize('NFD')
                            .replace(/[\u0300-\u036f]/g, "")
                            .toLowerCase()
                            .trim()

const ifIncludes = function (payloads, list, key) {
  if (payloads.length === 0) return list
  return list.filter((elem) => payloads.includes(elem[key]))
}

const filterBy = function (payload, list, key) {
  if (!payload) return list
  return list.filter((elem) => payload === elem[key])
}

const filterAll = function (payload, list) {
  if (!payload) return list
  return list.filter(elem => 
    Object.keys(elem).some(key => {
      if(typeof elem[key] === 'string') {
        const sanitizedElem = sanitizeString(elem[key])
        return sanitizedElem.includes(payload)
      }

      return false
    })
  )
}

const objectToArray = object => Object.keys(object).map(key => object[key])

const updateByEmail = (payload, list) => {
  let index = list.findIndex((elem) => elem.email === payload.email)
  list[index] = payload

  return list
}

export default {
  sanitizeString,
  ifIncludes,
  filterBy,
  filterAll,
  objectToArray,
  updateByEmail
}
