describe('test_name', function() {

 it('what_it_does', function() {

    cy.viewport(1536, 731);
 
    cy.visit('https://developer.salesforce.com/docs/component-library/documentation/en/lwc');
    
    cy.visit('https://developer.salesforce.com/docs/component-library/overview/components');
    
    cy.get('.input[placeholder="Quick Find"]').type('datatable');
     
 });

});
