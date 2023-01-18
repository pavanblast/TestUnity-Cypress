describe('Login Failure', () => {
  it('Login with invalid credentials to the application', () => {
    cy.visit('https://demo.guru99.com/insurance/v1/index.php')
    cy.xpath('//*[@id=\'email\']').type('pavanblast008@gmail.com')
    cy.xpath('//*[@id=\'password\']').type("Iampavan@12")
    cy.xpath('//*[@id=\'login-form\']/div[3]/input').click()
    cy.wait(2000)

    cy.get('[id=\'login-form\']').find('b').should('have.text', 'Enter your Email address and password correct')
    
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
  })
})