describe('authorization', () => {

  it('does not access profile', () => {
    cy.visit('/profile/49')
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
    cy.get('footer').find('a').eq(0).should('have.attr', 'href').and('equal', '/terms')
    cy.get('footer').find('a').eq(0).should('have.text', 'Terms And Service')
    cy.get('footer').find('span').should('include.text', 'Caner Igus')
    cy.get('footer').find('a').eq(1).should('have.attr', 'href').and('equal', '/privacy')
    cy.get('footer').find('a').eq(1).should('have.text', 'Policy')

    cy.url().should('include', '/login')
    cy.get('#flash').contains('Session Expired')

  })

  it('does not access profile edit', () => {
    cy.visit('/profile/49/edit')
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
    cy.get('footer').find('a').eq(0).should('have.attr', 'href').and('equal', '/terms')
    cy.get('footer').find('a').eq(0).should('have.text', 'Terms And Service')
    cy.get('footer').find('span').should('include.text', 'Caner Igus')
    cy.get('footer').find('a').eq(1).should('have.attr', 'href').and('equal', '/privacy')
    cy.get('footer').find('a').eq(1).should('have.text', 'Policy')

    cy.url().should('include', '/login')
    cy.get('#flash').contains('Session Expired')

  })

  it('does not access actor search', () => {
    cy.visit('/profile/49/actors/search')
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
    cy.get('footer').find('a').eq(0).should('have.attr', 'href').and('equal', '/terms')
    cy.get('footer').find('a').eq(0).should('have.text', 'Terms And Service')
    cy.get('footer').find('span').should('include.text', 'Caner Igus')
    cy.get('footer').find('a').eq(1).should('have.attr', 'href').and('equal', '/privacy')
    cy.get('footer').find('a').eq(1).should('have.text', 'Policy')

    cy.url().should('include', '/login')
    cy.get('#flash').contains('Session Expired')

  })

  it('does not access movies search', () => {
    cy.visit('/profile/49/movies/search')
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
    cy.get('footer').find('a').eq(0).should('have.attr', 'href').and('equal', '/terms')
    cy.get('footer').find('a').eq(0).should('have.text', 'Terms And Service')
    cy.get('footer').find('span').should('include.text', 'Caner Igus')
    cy.get('footer').find('a').eq(1).should('have.attr', 'href').and('equal', '/privacy')
    cy.get('footer').find('a').eq(1).should('have.text', 'Policy')

    cy.url().should('include', '/login')
    cy.get('#flash').contains('Session Expired')

  })


  it('does not search movies', () => {
    cy.visit('/profile/49/movies/results?movie=matrix&year=1999')
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
    cy.get('footer').find('a').eq(0).should('have.attr', 'href').and('equal', '/terms')
    cy.get('footer').find('a').eq(0).should('have.text', 'Terms And Service')
    cy.get('footer').find('span').should('include.text', 'Caner Igus')
    cy.get('footer').find('a').eq(1).should('have.attr', 'href').and('equal', '/privacy')
    cy.get('footer').find('a').eq(1).should('have.text', 'Policy')

    cy.url().should('include', '/login')
    cy.get('#flash').contains('Session Expired')

  })

  it('does not search actors', () => {
    cy.visit('/profile/49/actors/results?actor=keanu+reeves')
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
    cy.get('footer').find('a').eq(0).should('have.attr', 'href').and('equal', '/terms')
    cy.get('footer').find('a').eq(0).should('have.text', 'Terms And Service')
    cy.get('footer').find('span').should('include.text', 'Caner Igus')
    cy.get('footer').find('a').eq(1).should('have.attr', 'href').and('equal', '/privacy')
    cy.get('footer').find('a').eq(1).should('have.text', 'Policy')

    cy.url().should('include', '/login')
    cy.get('#flash').contains('Session Expired')

  })

})
