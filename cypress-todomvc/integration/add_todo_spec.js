
describe("TodoMVC - React", function() {
  // setup these constants to match what TodoMVC does
  let TODO_ITEM_ONE = "buy some cheese"
  let TODO_ITEM_TWO = "feed the cat"

  beforeEach(function() {
    cy.visit("/");
  })

  context("Add to do", function() {
    
    it("should allow me to add one todo item", function() {
      cy.get(".new-todo")
        .type("Create to do note 1{enter}")

      cy.get(".todo-list li")
        .should("have.length", 1)
        .should("contain", "Create to do note 1")
    });

    it("should allow me to add todo items", function() {
      // create 1st todo
      cy.get(".new-todo")
        .type(TODO_ITEM_ONE)
        .type("{enter}");

      // make sure the 1st label contains the 1st todo text
      cy.get(".todo-list li")
        .should("have.length", 1)
        .find("label")
        .should("contain", TODO_ITEM_ONE);

      // create 2nd todo
      cy.get(".new-todo")
        .type(TODO_ITEM_TWO)
        .type("{enter}");

      // make sure the 2nd label contains the 2nd todo text
      cy.get(".todo-list li")
        .should("have.length", 2)
        .find("label")
        .should("contain", TODO_ITEM_TWO);
    })

    it("adds items", function() {
      // create several todos then check the number of items in the list
      cy.get(".new-todo")
        .type("todo A{enter}")
        .type("todo B{enter}") // we can continue working with same element
        .type("todo C{enter}") // and keep adding new items
        .type("todo D{enter}");

      cy.get(".todo-list li").should("have.length", 4);
    })

    it("add item by using command create todo", function() {
      cy.createTodo("Create to do with Custom command")
      cy.get(".todo-list li")
        .should("have.length", 1)
        .find("label")
        .should("contain", "Create to do with Custom command");
    })
    
  })
})
