describe('Request Quotation', () => {
  it('Request quotation in an application', () => {
    cy.visit('https://demo.guru99.com/insurance/v1/index.php')
    cy.xpath('//*[@id=\'email\']').type('pavanblast008@gmail.com')
    cy.xpath('//*[@id=\'password\']').type("Iampavan@123")
    cy.xpath('//*[@id=\'login-form\']/div[3]/input').click()
    cy.wait(2000)

    cy.xpath('//*[@id=\'ui-id-2\']').click()
    cy.wait(2000)

    cy.get('[id=\'quotation_breakdowncover\']').select(2)
    cy.xpath('//*[@id="quotation_windscreenrepair_t"]').click()
    cy.xpath('//*[@id="quotation_incidents"]').type("2")
    cy.xpath('//*[@id="quotation_vehicle_attributes_registration"]').type("Test1")

    cy.xpath('//*[@id="quotation_vehicle_attributes_mileage"]').type("50")
    cy.xpath('//*[@id="quotation_vehicle_attributes_value"]').type("TestVehicle")

    cy.xpath('//*[@id=\'quotation_vehicle_attributes_parkinglocation\']').select(1)
    
    cy.xpath('//*[@id="new_quotation"]/div[8]/input[3]').click()

    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
  })
})