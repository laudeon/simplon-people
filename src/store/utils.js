const sanitizeString = (str) => str
                            .normalize('NFD')
                            .replace(/[\u0300-\u036f]/g, "")
                            .toLowerCase()
                            .trim()

const ifIncludes = function (payloads, data, key) {
  if (payloads.length === 0) return data
  return data.filter((elem) => payloads.includes(elem[key]))
}

const filterBy = function (payload, data, key) {
  if (!payload) return data
  return data.filter((elem) => payload === elem[key])
}

const filterAll = function (payload, data) {
  if (!payload) return data
  return data.filter(elem => 
    Object.keys(elem).some(key => {
      if(typeof elem[key] === 'string') {
        const sanitizedElem = sanitizeString(elem[key])
        return sanitizedElem.includes(payload)
      }

      return false
    })
  )
}

export default { sanitizeString, ifIncludes, filterBy, filterAll }
