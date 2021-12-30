describe('Main Page', () => {
	beforeEach(function () {
		cy.visit('http://localhost:3000')
	})

	it('show message by clicking button', async () => {
		cy.findByRole('button', { name: /Button/i }).click()
		cy.findByText(/Hello\, World\!/).should('be.visible')
		cy.findByText(/Hello\, World\!/, { timeout: 3000 }).should('not.be.exist')
	})
})
