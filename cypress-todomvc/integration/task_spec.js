
describe("Test task", function() {

  
    beforeEach(function() {
      cy.visit("/");
    })
  
    context("Add to do", function() {
    
      it("should print Hello World", function() {
        cy.task('loadFromDB').then((data) => {
            console.log(data)
        })
      })

    })
  })
  