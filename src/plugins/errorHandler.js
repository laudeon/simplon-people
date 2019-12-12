const ERROR_MESSAGES = {
  400: 'Votre requête est mal formatée',
  401: 'Vous devez vous (re)connecter pour accéder au contenu',
  403: 'Vous n\'êtes pas autorisé à accéder à ce contenu',
  404: 'Impossible de trouver ce que vous demandez',
  500: 'Une erreur technique est survenue, la loose...'
}

class ErrorHandler {
  install (Vue) {
    this.errorMessageFormater(Vue)
  }

  errorMessageFormater (Vue) {
    Vue.prototype.$getErrorMessageFromCode = statusCode => {
      const code = parseInt(statusCode)
      
      if (!Number.isInteger(code)) {
        throw new Error('You must pass an Interget', code)
      } else if (!Object.prototype.hasOwnProperty.call(ERROR_MESSAGES, code)) {
        throw new Error('The status code passed is not implemented', code)
      }

      return ERROR_MESSAGES[code]
    }

    Vue.prototype.$getErrorMessage = errorObject => {
      const hasToString = typeof errorObject.toString() === 'string'
      const hasMessageProperty = Object.prototype.hasOwnProperty.call(errorObject, 'message')

      if (
        !hasToString && 
        !hasMessageProperty
      ) {
        throw new Error('You must pass an Error object with a toString method or either a message property', errorObject)
      }

      return hasToString ? errorObject.toString() : errorObject.message
    }
  }
}

export default new ErrorHandler()
