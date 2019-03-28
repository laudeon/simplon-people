// https://docs.cypress.io/api/introduction/api.html

describe('Home', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Welcome to Your Vue.js App')
  })
})

describe('About', () => {
  it('Visits the app about url', () => {
    cy.visit('/#/about')
    cy.contains('h1', 'This is an about page')
  })
})
