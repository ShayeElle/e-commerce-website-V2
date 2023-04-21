
describe('check home page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })

  //test 1
    it('displays correct header of home page', () => {
     
      cy.get('h1').contains('SHONEN LIFT')
  
    })
   //test 2
    it('checks if shop nav item works correctly', () => {
      cy.get('nav').should('be.visible')
      cy.get('nav').contains('Shop').click()
      cy.url().should('include', '/products') 
    })

 //test 3
    it('should display the main quote', () => {
      cy.get('.mainQuote h2')
        .should('be.visible')
        .and('contain', 'No matter how hard or impossible it is, never lose sight of your goal.');
    });

   //test 4
    it('should display the image slider', () => {
      cy.get('.image-slider').should('be.visible');
    });
  
   //test 5
    it('should navigate to Products page when a product grid item is clicked', () => {
      cy.get('.grid-item').first().click();
      cy.url().should('contain', '/products');
    });

     //test 6
    it('contains links to social media', () => {
      cy.get('.followUs ').should('have.length', 1)
      cy.get('.followUs a').eq(0).should('have.attr', 'href', 'https://instagram.com')
      cy.get('.followUs a').eq(1).should('have.attr', 'href', 'https://facebook.com')
      cy.get('.followUs a').eq(2).should('have.attr', 'href', 'https://twitter.com')
    })


})