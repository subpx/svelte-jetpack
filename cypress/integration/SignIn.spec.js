describe('SignIn module', () => {
  beforeEach(() => {
    cy.visit('/#/signIn')
  });

  it('renders title "Sign In"', () => {
    cy.contains('h1', 'Sign In');
  });

  it('renders error message on empty submit', () => {
    cy.get('input[type=text]').clear();
    cy.get('input[type=password]').clear();
    cy.get('form button[type=submit]').click();
    cy.contains('div.error', 'Please enter a valid username and password');
  });

  it('renders dashboard on valid submit', () => {
    cy.get('input[type=text]').type('Cypress Hill');
    cy.get('input[type=password]').type('password');
    cy.get('form button[type=submit]').click();
    cy.hash().should('eq', '#/app/dashboard');
  });
});
