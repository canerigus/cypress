

describe('notfound page UI tests', () => {
  let random = (Math.random() + 1).toString(32).substring(2);
  let urlArray = [`/${random}`,
  `/movies/${random}`,
  `/actors/${random}`,
  `/movies/favorites/${random}`,
  `/actors/favorites/${random}`,
  `/login/${random}`,
  `/register/${random}`,
  `/terms/${random}`,
  `/privacy/${random}`]

  urlArray.forEach((url) => {

    it('has navbar elements', () => {
      cy.visit(url, { failOnStatusCode: false })
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
      cy.visit(url, { failOnStatusCode: false })
      // We use the `cy.get()` command to get all elements that match the selector.
      cy.get('footer').find('a').eq(0).should('have.attr', 'href').and('equal', '/terms')
      cy.get('footer').find('a').eq(0).should('have.text', 'Terms And Service')
      cy.get('footer').find('span').should('include.text', 'Caner Igus')
      cy.get('footer').find('a').eq(1).should('have.attr', 'href').and('equal', '/privacy')
      cy.get('footer').find('a').eq(1).should('have.text', 'Policy')
    })

    it('has notfound text', () => {
      cy.visit(url, { failOnStatusCode: false })
      cy.get('.alert-heading').should('have.text', 'Page not Found')
    })


  })
})
