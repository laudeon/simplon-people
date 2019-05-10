export default {
  mutations: {
    filter (state, payload) {
      if (payload === '') {
        return state.filtered = state.all
      }

      const sanitizedPayload = payload
                                .normalize('NFD')
                                .replace(/[\u0300-\u036f]/g, "")
                                .toLowerCase()
  
      state.filtered = state.all.filter(employee => 
        Object.keys(employee).some(key => {
          if(typeof employee[key] === 'string') {
            const sanitizedEmployee = employee[key]
                                        .normalize('NFD')
                                        .replace(/[\u0300-\u036f]/g, "")
                                        .toLowerCase()
            return sanitizedEmployee.includes(sanitizedPayload)
          }
  
          return false
        })
      )
    }
  }
}