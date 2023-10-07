describe('Register Page', () => {

  it('Verify successfully register new account', () => {
      cy.visit('https://www.linkedin.com/signup?_l=in');
      cy.getById("email-or-phone").should('be.enabled').type('eldiabloxylauq@gmail.com')
      cy.getById("password").should('be.enabled').type('Password_123')
      cy.getByTracking("registration-frontend_join-form-submit").should('contain.text', 'Agree & Join').click()
      cy.getById("first-name").should('be.enabled').type('Fernand')
      cy.getById("last-name").should('be.enabled').type('Andrean')
      cy.getByTracking("registration-frontend_join-form-submit").should('contain.text', 'Continue').click()
      cy.getIframeById(".challenge-dialog__iframe", "select-register-phone-country").select('br')
      cy.getIframeById(".challenge-dialog__iframe", "register-verification-phone-number").should('be.enabled').type('083113189198')
      cy.getIframeById(".challenge-dialog__iframe", "register-phone-submit-button").should('contain.text', 'Submit').click()
  });
  
  it('Verify failed to register with invalid email', () => {
      cy.visit('https://www.linkedin.com/signup?_l=in');
      cy.getById("email-or-phone").should('be.enabled').type("This is Invalid Email")
      cy.getById("password").should('be.enabled').type('Password123')
      cy.getByTracking("registration-frontend_join-form-submit").should('contain.text', 'Agree & Join').click()
      cy.getByRole("alert").should('contain.text', 'Please enter a valid email address or mobile number.')
  });
  
  it('Verify failed to register with invalid password', () => {
      cy.visit('https://www.linkedin.com/signup?_l=in');
      cy.getById("email-or-phone").should('be.enabled').type('eldiabloxylauq@gmail.com')
      cy.getById("password").should('be.enabled').type("123")
      cy.getByTracking("registration-frontend_join-form-submit").should('contain.text', 'Agree & Join').click()
      cy.getByRole("alert").should('contain.text', 'Password must be 6 characters or more.')
  });

  it('Verify failed to register with empty first name', () => {
      cy.visit('https://www.linkedin.com/signup?_l=in');
      cy.getById("email-or-phone").should('be.enabled').type('eldiabloxylauq@gmail.com')
      cy.getById("password").should('be.enabled').type('Password_123')
      cy.getByTracking("registration-frontend_join-form-submit").should('contain.text', 'Agree & Join').click()
      cy.getById("last-name").should('be.enabled').type('Andrean')
      cy.getByTracking("registration-frontend_join-form-submit").should('contain.text', 'Continue').click()
      cy.getByRole("alert").should('contain.text', 'Please enter your first name.')
  });
  
  it('Verify failed to register with empty last name', () => {
      cy.visit('https://www.linkedin.com/signup?_l=in');
      cy.getById("email-or-phone").should('be.enabled').type('eldiabloxylauq@gmail.com')
      cy.getById("password").should('be.enabled').type('Password_123')
      cy.getByTracking("registration-frontend_join-form-submit").should('contain.text', 'Agree & Join').click()
      cy.getById("first-name").should('be.enabled').type('Fernand')
      cy.getByTracking("registration-frontend_join-form-submit").should('contain.text', 'Continue').click()
      cy.getByRole("alert").should('contain.text', 'Please enter your last name.')
  });
});