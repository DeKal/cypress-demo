describe("TodoMVC - React", function() {
  // setup these constants to match what TodoMVC does
  let TODO_ITEM_ONE = "buy some cheese";
  let TODO_ITEM_THREE = "book a doctors appointment";

  beforeEach(function() {
    
    cy.server()
      .route("/").as('homepage')
      
    
    cy.fixture("active").then(function(response) {
      cy.route(/active/, response).as('getActiveNote')
    })

    cy.route(/completed/, "fixture:active.json").as('getCompletedNote')
    
    cy.visit("/")
  });

  context("Routing", function() {
    beforeEach(function() {
      cy.createDefaultTodos()
    });

    it("should allow me to display active items", function() {
    });
  });
});
