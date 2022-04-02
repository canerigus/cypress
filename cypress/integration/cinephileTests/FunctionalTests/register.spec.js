describe('register with email and password', () => {

  cy.visit('/register')

  it('can register new user', () => {
    cy.get('form').find("[for='email']").should('have.text', 'Email')
    cy.get('form').find("[type='email']").should('have.value', '')
    cy.get('form').find("[for='password']").should('have.text', 'Password')
    cy.get('form').find("[type='email']").should('have.value', '')
  })



})
