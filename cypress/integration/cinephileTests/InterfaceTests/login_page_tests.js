describe('register page UI tests', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('/login')
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

  it('has login img & text', () => {
    cy.get('.card').find('img').should('have.attr', 'src', 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1156&q=80')
    cy.get('.card-body').find('h5').should('have.text', 'Login')
  })

  it('has login form', () => {
    cy.get('form').find("[for='email']").should('have.text', 'Email')
    cy.get('form').find("[type='email']").should('have.value', '')
    cy.get('form').find("[for='password']").should('have.text', 'Password')
    cy.get('form').find("[type='email']").should('have.value', '')
  })

  it('has login buttons', () => {
    cy.get('.btn.btn-success.btn-block').should('have.text', 'Login')
    cy.get('.btn.btn-dark.btn-block').should('include.text', 'Google')
    cy.get('.row > .col-6:nth-child(2) > a > .btn.btn-block').should('include.text', 'Facebook')
    cy.get('.row > .col-6:nth-child(1) > a').should('have.attr', 'href').and('equal', '/auth/google')
    cy.get('.row > .col-6:nth-child(2) > a').should('have.attr', 'href').and('equal', '/auth/facebook')
  })

  it('has empty submission error displayed', () => {
    cy.get('form').submit()
    cy.get('form').should('have.class', 'was-validated')
  })

  it('has invalid submission error message displayed', () => {
    cy.get('form').find("[type='email']").type('cyp@cyp.com')
    cy.get('form').find("[type='password']").type('cyp')
    cy.get('form').submit()
    cy.get('#flash').contains('Wrong email or password')
  })

})
