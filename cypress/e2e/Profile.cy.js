describe('Profile', () => {
  it('Watch the profile in the application', () => {
    cy.visit('https://demo.guru99.com/insurance/v1/index.php')
    cy.xpath('//*[@id=\'email\']').type('pavanblast008@gmail.com')
    cy.xpath('//*[@id=\'password\']').type("Iampavan@123")
    cy.xpath('//*[@id=\'login-form\']/div[3]/input').click()
    cy.wait(2000)

    cy.xpath('//*[@id=\'profile\']').click()
    cy.wait(2000)

    cy.get('[id=\'tabs-4\']').find('p').should('contains.text', 'Title:')
    
    cy.xpath('/html/body/div[3]/form/input').click()
    
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
  })
})