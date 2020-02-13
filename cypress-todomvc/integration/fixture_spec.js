
describe("Test Fixture", function() {
  
    beforeEach(function() {
      cy.visit("/")
      cy.fixture('example').then((itemJson)=>{
          console.log(itemJson)
      }).as('itemJson') 
    })
  
    context("Add to do", function() {
    
      it("should get item json from here Hello World", function() {
        cy.wrap().then(function() {
            console.log("Access to fixture in test")
            console.log(this.itemJson)
        })
      })

    })
  })
  