/* //change on demand or randomize
let r = (Math.random() + 1).toString(32).substring(10);
let randomUrl = '/' + r */

const email = 'cypress@cypress.com'
const password = 'cypress'
const cypressUrl = '/profile/49'

describe('login', () => {

  it('can login and then search/add movie and actor', () => {
    cy.visit('/login')
    //login as user
    cy.get('form').find("[type='email']").type(email)
    cy.get('form').find("[type='password']").type(password)
    cy.get('form').submit()
    //check profile url
    cy.url().should('include', '/profile/49')
    //navbar
    cy.get('.navbar-nav > a:nth-child(1)').should('have.attr', 'href').and('equal', '/')
    cy.get('.navbar-nav > a:nth-child(1)').should('have.text', 'Home')
    cy.get('.navbar-nav > a:nth-child(2)').should('have.attr', 'href').and('equal', '/movies/favorites')
    cy.get('.navbar-nav > a:nth-child(2)').should('have.text', 'Favorite Movies')
    cy.get('.navbar-nav > a:nth-child(3)').should('have.attr', 'href').and('equal', '/actors/favorites')
    cy.get('.navbar-nav > a:nth-child(3)').should('have.text', 'Favorite Actors')
    //check navbar changes after login
    cy.get('.navbar-nav > a:nth-child(4)').should('have.attr', 'href').and('equal', '/profile/49')
    cy.get('.navbar-nav > a:nth-child(4)').should('have.text', 'Profile')
    cy.get('.navbar-nav > a:nth-child(5)').should('have.attr', 'href').and('equal', '/logout')
    cy.get('.navbar-nav > a:nth-child(5)').should('have.text', 'Logout')
    //footer
    cy.get('footer').find('a').eq(0).should('have.attr', 'href').and('equal', '/terms')
    cy.get('footer').find('a').eq(0).should('have.text', 'Terms And Service')
    cy.get('footer').find('span').should('include.text', 'Caner Igus')
    cy.get('footer').find('a').eq(1).should('have.attr', 'href').and('equal', '/privacy')
    cy.get('footer').find('a').eq(1).should('have.text', 'Policy')

    //profile headers
    cy.contains('User Info')
    cy.contains('Favorite Movies')
    //movie & user & profile update and delete account buttons.
    cy.get('.col-12 > .card-body > a:nth-child(1)').should('have.attr', 'href').and('equal', '/profile/49/movies/search')
    cy.get('.col-12 > .card-body > a:nth-child(1)').should('include.text', 'Favorite Movie')
    cy.get('.col-12 > .card-body > a:nth-child(2)').should('have.attr', 'href').and('equal', '/profile/49/actors/search')
    cy.get('.col-12 > .card-body > a:nth-child(2)').should('include.text', 'Favorite Actor')
    cy.get('.col-12 > .card-body > a:nth-child(3)').should('have.attr', 'href').and('equal', '/profile/49/edit')
    cy.get('.col-12 > .card-body > a:nth-child(3)').should('include.text', 'Update')
    cy.get('form > button').should('include.text', "Delete Account")
    cy.get('form').should('have.attr', 'action').and('equal', '/profile/49?_method=DELETE')
    cy.get('#flash').contains('Success')

    //movie search page UI
    cy.get('.col-12 > .card-body > a:nth-child(1)').should('include.text', 'Favorite Movie').click()
    cy.url().should('include', '/profile/49/movies/search')
    cy.get('#t').should('have.attr', 'name').and('equal', 'movie')
    cy.get('#y').should('have.attr', 'name').and('equal', 'year')
    cy.get('button').contains('Search Movie')

    //search movies
    cy.get('#t').type('Matrix')
    cy.get('#y').type('1999')
    cy.get('.btn.btn-info').click()

    //check movie results
    cy.url().should('include', '/profile/49/movies/results?movie=Matrix&year=1999')
    cy.get('.btn.btn-danger').should('have.attr', 'href').and('equal', '/profile/49/movies/search')
    cy.get('.btn.btn-danger').should('include.text', 'Search Again')
    //search results checks
    cy.get('#image').should('have.attr', 'type').and('equal', 'hidden')
    cy.get('#title').should('have.attr', 'type').and('equal', 'hidden')
    //in depth checks for eg. Year
    cy.get('#year').should('have.attr', 'type').and('equal', 'hidden')
    cy.get('#year').should('have.attr', 'name').and('equal', 'year')
    cy.get('#year').should('have.attr', 'value').and('equal', '1999')

    cy.get('#plot').should('have.attr', 'type').and('equal', 'hidden')
    cy.get('#imdbID').should('have.attr', 'type').and('equal', 'hidden')
    cy.get('#imdbRating').should('have.attr', 'type').and('equal', 'hidden')

    cy.get('.btn.btn-success').should('include.text', 'Add Movie').click()

    //try adding movie again to check for error
    cy.get('.col-12 > .card-body > a:nth-child(1)').should('include.text', 'Favorite Movie').click()
    cy.get('#t').type('Matrix')
    cy.get('#y').type('1999')
    cy.get('.btn.btn-info').click()
    cy.get('.btn.btn-success').click()
    cy.get('#flash').contains('Movie already exists')

    //back to profile 
    cy.get('.navbar-nav > a:nth-child(4)').should('have.text', 'Profile').click()


    //actor search page UI
    cy.get('.col-12 > .card-body > a:nth-child(2)').should('include.text', 'Favorite Actor').click()
    cy.url().should('include', '/profile/49/actors/search')
    cy.get('#a').should('have.attr', 'name').and('equal', 'actor')
    cy.get('button').contains('Search Actor')

    //search actor
    cy.get('#a').type('Keanu Reeves')
    cy.get('.btn.btn-info').click()

    //check actor results
    cy.url().should('include', '/profile/49/actors/results?actor=Keanu+Reeves')
    cy.get('.btn.btn-danger').should('have.attr', 'href').and('equal', '/profile/49/actors/search')
    cy.get('.btn.btn-danger').should('include.text', 'Search Again')
    //search results checks
    cy.get('#image').should('have.attr', 'type').and('equal', 'hidden')
    cy.get('#name').should('have.attr', 'type').and('equal', 'hidden')
    cy.get('#name').should('have.attr', 'value').and('equal', 'Keanu Reeves')
    cy.get('#films').should('have.attr', 'type').and('equal', 'hidden')
    //add actor to favorites
    cy.get('.btn.btn-success').should('include.text', 'Add Actor').click()

    //try adding actor again to check for error - same as movie
    cy.get('.col-12 > .card-body > a:nth-child(2)').should('include.text', 'Favorite Actor').click()
    cy.get('#a').type('Keanu Reeves')
    cy.get('.btn.btn-info').click()
    cy.get('.btn.btn-success').should('include.text', 'Add Actor').click()
    cy.get('#flash').contains('Actor already exists')
    cy.get('.navbar-nav > a:nth-child(4)').should('have.text', 'Profile').click()


  })

  /*   it('can login and then logout', () => {
      cy.visit('/login')
      cy.get('form').find("[type='email']").type(email)
      cy.get('form').find("[type='password']").type(password)
      cy.get('form').submit()
      cy.url().should('include', '/profile/49')
      cy.get('#flash').contains('Success')
      cy.contains('Logout').should('be.visible').click()
      cy.url().should('include', '/')
      cy.get('.card').find('img').should('have.attr', 'src', 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW92aWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')
      cy.get('.card-body').find('p').should('include.text', 'Welcome to Cinephiles')
    }) */

})
