describe('Verify Availability', function() {
    
    it('Launches the application and checks availability', function() {
      // Visit the application URL
      cy.visit('https://your-application-url.com');
  
      // Ensure the product page is loaded
      // Replace '.product-page' with the actual selector for the product page
      cy.get('.product-page').should('be.visible')
    })
})