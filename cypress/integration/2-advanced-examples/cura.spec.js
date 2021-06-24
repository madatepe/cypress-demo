describe('Cura make appiontment', function() {
  it('Visit the Url', function(){
    cy.visit('https://katalon-demo-cura.herokuapp.com/');
  });

  it('Click on Make Appointment', function(){
    // btn-make-appointment click on this
    cy.get('#btn-make-appointment').click();
    cy.get('#txt-username').type('John Doe');
    cy.get('#txt-password').type('ThisIsNotAPassword');
    cy.get('#btn-login').click();
  });

  it('Make Appointment', function(){
    // select - Hongkong CURA Healthare Center
    cy.get('select').select('Hongkong CURA Healthcare Center');

    // checkbox click - #chk_hospotal_readmission
    cy.get('#chk_hospotal_readmission').click();
    
    // checkbox click - #radio_program_medicaid
    cy.get('#radio_program_medicaid').click();

    // input date: #txt_visit_date
    cy.get('#txt_visit_date').type('Pramod Dutta will be available at 30/03/2020');
    
    // #txt_comment
    cy.get('#txt_comment').click({ force: true });

    // #txt_comment
    cy.get('#txt_comment').type('Pramod Dutta will be available at 30/03/2020');
    
    // click - btn-book-appointment
    cy.get('#btn-book-appointment').click();
  });

  it('Verify Make Appointment', function(){
    // h2: Appointment Confitmation
    console.log('in here: ')
    console.log('in here: ', cy.get('h2'))
    cy.get('h2').contains('Appointment Confirmation');
    // comment: #comment  
    cy.get('#comment').contains('Pramod Dutta will be available at 30/03/2020');
  });
});