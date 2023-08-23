describe('Login', () => {
  it('successfully logs in', () => {
    cy.guiLogin()
  })
})
// describe('Login', () => {
//   it('Testa funcionalidade login', () => {
//     cy.visit('/login')
//     cy.get('#email').type(Cypress.env('USER_EMAIL'))
//     cy.get('#password').type(Cypress.env('USER_PASSWORD'), { log: false })
//     cy.get('.LoaderButton').should('contain', 'Login').click()

//     cy.contains('h1', 'Your Notes').should('be.visible')
//     cy.contains('a', 'Create a new note').should('be.visible')
//   })
// })
