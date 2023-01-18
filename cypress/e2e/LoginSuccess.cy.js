describe('Login Success', () => {
  it('Login with valid credentials to the application', () => {
    cy.visit('https://demo.guru99.com/insurance/v1/index.php')
    cy.xpath('//*[@id=\'email\']').type('pavanblast008@gmail.com')
    cy.xpath('//*[@id=\'password\']').type("Iampavan@123")
    cy.xpath('//*[@id=\'login-form\']/div[3]/input').click()
    cy.wait(2000)

    cy.get('[class=\'content\']').find('h4').should('have.text', 'pavanblast008@gmail.com')
    
    cy.xpath('/html/body/div[3]/form/input').click()
    
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
  })
})