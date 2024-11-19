/* eslint-disable no-undef */
describe('Login Flow Correct Credentials', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('should display login form', () => {
    cy.get('form').should('be.visible')
  })

  it('should login with valid credentials', () => {
    cy.get('input[type="email"]').type('felipe-madeira@teste.com')
    cy.get('input[type="password"]').type('@$044557asA')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/home')
    cy.get('header').should('be.visible')
  })
})

describe('Login Flow Invalid Credentials', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('should display login form', () => {
    cy.get('form').should('be.visible')
  })

  it('should login with invalid credentials', () => {
    cy.get('input[type="email"]').type('madeira@teste.com')
    cy.get('input[type="password"]').type('@$047asA')
    cy.get('button[type="submit"]').click()
    cy.contains('Email e/ou senha inválidos').should('be.visible')
  })
})
