describe('Edit Profile', () => {
  it('Edit your profile in the application', () => {
    cy.visit('https://demo.guru99.com/insurance/v1/index.php')
    cy.xpath('//*[@id=\'email\']').type('pavanblast008@gmail.com')
    cy.xpath('//*[@id=\'password\']').type("Iampavan@123")
    cy.xpath('//*[@id=\'login-form\']/div[3]/input').click()
    cy.wait(2000)

    cy.xpath('//*[@id=\'ui-id-5\']').click()
    cy.wait(2000)

    cy.xpath('//*[@id=\'user_firstname\']').type('Pavan')
    cy.xpath('//*[@id=\'user_surname\']').type("Chingepally")
    cy.xpath('//*[@id=\'edit_user_\']/div[14]/input').click()
    
    cy.xpath('/html/body/div[3]/form/input').click()

    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
  })
})