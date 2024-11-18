/* eslint-disable no-undef */
describe('Check if create profile page renders the correct components', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/cadastro')
  })

  it('should steps 1 and 2 works', () => {
    cy.get('input[type="text"]').type('Tester Cypress')
    cy.get('input[type="email"]').type('testercrypress@teste.com')
    cy.get('input[type="tel"]').type('27995412358')
    cy.get('button[type="submit"]').click()
    cy.get('input[type="password"]').type('@$047sSa25')
    cy.get('button[type="submit"]').should('be.visible')
  })
})
