// https://docs.cypress.io/api/introduction/api.html

const getStore = () => cy.window().its('app.$store')

describe('Homepage', () => {
  beforeEach( () => {
    cy.visit('/')
  })

  it('Should contain a signin button', () => {
    cy.get('#google-signin').should('be.visible')
  })
})

describe('Signing in', () => {
  beforeEach( () => {
    getStore().then(store => {
      store.commit('me/logged', true)
    })
  })

  it('Should contain a signout button', () => {
    cy.get('#google-signout').should('be.visible')
  })
})

