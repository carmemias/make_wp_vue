describe('Single Team page tests', function(){
	it('can visit a single team page', function(){
		cy.visit('/#/teams/accessibility')
    cy.contains('h1', 'Accessibility Team')
	})

	it('shows 10 team posts', function(){
		cy.visit('/#/teams/accessibility')
    cy.get('#team-posts').find('article').should('have.length', 10)
	})

	it('shows full content when button clicked', function(){
		cy.visit('/#/teams/accessibility')
    cy.get('#team-posts').find('article:nth-child(1) > button#read-in-full').click()
		cy.get('.entry-content')
		cy.contains('h2','Update on Automated testing')
	})

	it('hides full content when hide button clicked', function(){
		cy.visit('/#/teams/accessibility')
    cy.get('#team-posts').find('article:nth-child(1) > button#read-in-full').click()
		cy.get('#team-posts').find('article:nth-child(1) > button#hide-full-content').click()
		cy.get('.entry-content').should('have.css', 'display').and('match', /none/)

	})
})
