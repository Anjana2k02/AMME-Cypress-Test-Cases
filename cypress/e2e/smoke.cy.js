describe('Smoke test', () => {
  it('loads home page', () => {
    cy.visit('/')
    cy.contains(/welcome|home|dashboard/i)
  })
})
