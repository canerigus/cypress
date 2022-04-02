describe('favorite actors page UI tests', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('/actors/favorites')
  })
  it('has navbar elements', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    cy.get('.navbar').find('span').should('have.text', 'Cinephiles')
    cy.get('.navbar-nav > a:nth-child(1)').should('have.attr', 'href').and('equal', '/')
    cy.get('.navbar-nav > a:nth-child(1)').should('have.text', 'Home')
    cy.get('.navbar-nav > a:nth-child(2)').should('have.attr', 'href').and('equal', '/movies/favorites')
    cy.get('.navbar-nav > a:nth-child(2)').should('have.text', 'Favorite Movies')
    cy.get('.navbar-nav > a:nth-child(3)').should('have.attr', 'href').and('equal', '/actors/favorites')
    cy.get('.navbar-nav > a:nth-child(3)').should('have.text', 'Favorite Actors')
    cy.get('.navbar-nav > a:nth-child(4)').should('have.attr', 'href').and('equal', '/login')
    cy.get('.navbar-nav > a:nth-child(4)').should('have.text', 'Login')
    cy.get('.navbar-nav > a:nth-child(5)').should('have.attr', 'href').and('equal', '/register')
    cy.get('.navbar-nav > a:nth-child(5)').should('have.text', 'Register')
  })

  it('has footer elements', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    cy.get('footer').find('a').eq(0).should('have.attr', 'href').and('equal', '/terms')
    cy.get('footer').find('a').eq(0).should('have.text', 'Terms And Service')
    cy.get('footer').find('span').should('include.text', 'Caner Igus')
    cy.get('footer').find('a').eq(1).should('have.attr', 'href').and('equal', '/privacy')
    cy.get('footer').find('a').eq(1).should('have.text', 'Policy')
  })

})
