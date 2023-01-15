beforeEach(() => {
    cy.visit('/')
  })
  
  it('has title', () => {
    cy.contains('On Going Games')
  })