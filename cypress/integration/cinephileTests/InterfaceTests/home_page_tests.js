describe('home page UI tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('has navbar elements', () => {
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

  it('has welcome img & text', () => {

    cy.get('.card').find('img').should('have.attr', 'src', 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW92aWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')
    cy.get('.card-body').find('p').should('include.text', 'Welcome to Cinephiles')
  })

  it('has easy navigate anchor tags', () => {

    cy.get('div.card-body.text-center > a:nth-child(1)').should('have.attr', 'href').and('equal', '/movies/favorites')
    cy.get('div.card-body.text-center > a:nth-child(1)').should('have.text', 'Movies')
    cy.get('div.card-body.text-center > a:nth-child(2)').should('have.attr', 'href').and('equal', '/actors/favorites')
    cy.get('div.card-body.text-center > a:nth-child(2)').should('have.text', 'Actors')
  })

  it('has footer elements', () => {

    cy.get('footer').find('a').eq(0).should('have.attr', 'href').and('equal', '/terms')
    cy.get('footer').find('a').eq(0).should('have.text', 'Terms And Service')
    cy.get('footer').find('span').should('include.text', 'Caner Igus')
    cy.get('footer').find('a').eq(1).should('have.attr', 'href').and('equal', '/privacy')
    cy.get('footer').find('a').eq(1).should('have.text', 'Policy')
  })

})
