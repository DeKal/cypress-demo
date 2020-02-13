
Cypress.Commands.add('createTodo', function (todo) {

  // create the todo
  cy.get('.new-todo').type(`${todo}{enter}`)

})

Cypress.Commands.add('createDefaultTodos', function () {

  let TODO_ITEM_ONE = 'buy some cheese'
  let TODO_ITEM_TWO = 'feed the cat'
  let TODO_ITEM_THREE = 'book a doctors appointment'

  cy.get('.new-todo', { log: false })
  .type(`${TODO_ITEM_ONE}{enter}`, { log: false })
  .type(`${TODO_ITEM_TWO}{enter}`, { log: false })
  .type(`${TODO_ITEM_THREE}{enter}`, { log: false })

  cy.get('.todo-list li', { log: false })
    .should('have.length', 3)
})
