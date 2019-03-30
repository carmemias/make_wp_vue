describe('Home tests', function(){

	it('can visit the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Stay Up-To-Date with Make WordPress') //for text on creen
  })

	it('can click a follow icon', function(){
		cy.visit('/')
    cy.get('section#all .Accessibility .follow-icon').click()
		cy.get('section#all .Accessibility .follow-icon.selected')
	})

	it('a team is added to followedTeams section when icon is clicked', function(){
		cy.visit('/')
    cy.get('section#all .Accessibility .follow-icon').click()
		cy.get('section#all .Accessibility .follow-icon.selected')

		cy.get('section#followed .team.Accessibility')
	})

	it('the appropriate modal opens when more info icon is clicked', function(){
		cy.visit('/')
    cy.get('section#all .Core .more-info').click()
		cy.get('.modal-container').contains('h3', 'Core')
	})

	it('a modal can be closed', function(){
		cy.visit('/')
    cy.get('section#all .Core .more-info').click()
		cy.get('.modal-container .modal-default-button').click()
		cy.get('.modal-container').should('have.length', 0)
	})

	it('can open a followed team posts page', function(){
		cy.visit('/')
    cy.get('section#all .Accessibility .follow-icon').click()
		cy.get('section#all .Accessibility h3 > a').click()
		cy.url().should('include', '/teams/accessibility')
	})

	it('cannot open a team posts page if not followed', function(){
		cy.visit('/')
		cy.get('section#all .Accessibility h3').find('a').should('have.length', 0)
	})

})
