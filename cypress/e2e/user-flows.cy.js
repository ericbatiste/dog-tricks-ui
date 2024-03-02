describe('template spec', () => {
  beforeEach(() => {
    cy.intercept('GET', "http://localhost:3001/api/v1/dog-tricks/", {
      statusCode: 200,
      fixture: "mock-tricks"
    })
    cy.intercept('GET', "http://localhost:3001/api/v1/dog-tricks/3", {
      statusCode: 200,
      fixture: "mock-trick"
    })
    .visit('https://dog-tricks-ui.vercel.app/')
  });

  it('Should visit the home page', () => {
    cy.get('nav').children().should('have.length', 3);
    cy.get('.nav-home').should('have.class', 'active');
    cy.get('.home-container').should('have.css', 'background-image').and('include','c-perret-unsplash');
    cy.get('article').contains('h1', `Fido's Trick Log`);
  })
  
  it.skip('Should navigate to the Trick Log, filter tricks with search, and click on a trick to go to that tricks details', () => {
    cy.get('.nav-log').click().should('have.class', 'active')
    cy.get('.trick-log-container').should('have.css', 'background-image').and('include','daniel-lincoln-unsplash');
    cy.get('.trick-list').children().should("have.length", 3)
    cy.get('.trick-card').first().contains('h3', 'Sit')
    cy.get('.trick-card').first().contains('p', 'Difficulty: 1')
    cy.get('.trick-card').last().contains('h3', 'Sit Pretty')
    cy.get('.trick-card').last().contains('p', 'Difficulty: 3')

    cy.get('.search-form').get('input').should('have.attr', 'placeholder', 'Search for a trick!')
    cy.get('.search-form').type('sit{enter}')
    cy.get('.trick-list').children().should('have.length', 2)
    cy.get('.trick-card').last().click()
    cy.get('.trick-details-container').contains('h2', 'Sit Pretty')
    cy.get('.trick-details-container').contains('p', 'Difficulty level: 3 / 5')
    cy.get('iframe').should('have.attr', 'src', 'https://www.youtube.com/embed/IQUerO0woqw')
  })

  it.skip('Should allow a user to add a new trick to the trick log.', () => {
    cy.intercept("POST", "http://localhost:3001/api/v1/dog-tricks", {
      statuscode: 201,
      body: {
        "id": '4',
        "name": 'Test trick',
        "difficulty": '4',
        "tutorial": 'Test link',
      }
    }).as("postTrick")
    
    cy.get('.nav-form').click().should('have.class', 'active');
    cy.get('form').get('input[name="name"]').type('Test trick');
    cy.get('form').get('select').select('4');
    cy.get('form').get('input[name="tutorial"]').type('Test link');
    cy.get('form').get('button').click();
    
    cy.wait("@postTrick");

    cy.get('.nav-log').click().should('have.class', 'active');
    cy.get('.trick-list').children().should("have.length", 4);
    cy.get('.trick-card').last().contains('h3', 'Test trick');
    cy.get('.trick-card').last().contains('p', 'Difficulty: 4');
  })
})