const sanitizeString = (str) => str
                            .normalize('NFD')
                            .replace(/[\u0300-\u036f]/g, "")
                            .toLowerCase()

const ifIncludes = function (criterias, data, key) {
  let res

  if (criterias.length === 0) {
    res = data
  } else {
    res = data.filter((elem) =>
      criterias.includes(elem[key])
    )
  }

  return res
}

export default { sanitizeString, ifIncludes }
