describe('Retrieve Quotation', () => {
    it('Retrieve quotation from an application', () => {
      cy.visit('https://demo.guru99.com/insurance/v1/index.php')
      cy.xpath('//*[@id=\'email\']').type('pavanblast008@gmail.com')
      cy.xpath('//*[@id=\'password\']').type("Iampavan@123")
      cy.xpath('//*[@id=\'login-form\']/div[3]/input').click()
      cy.wait(2000)
  
      cy.xpath('//*[@id=\'ui-id-3\']').click()
      cy.wait(2000)

      cy.xpath('//*[@id="tabs-3"]/form/input[1]').type("20447")
      cy.xpath('//*[@id=\'getquote\']').click()
      
      cy.get('table').find('td').should('contains.text', 'Test')

      Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
    })
  })