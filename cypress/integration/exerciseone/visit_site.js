describe('test_name', function() {

 it('what_it_does', function() {

    cy.viewport(1536, 731);
 
    cy.visit('https://developer.salesforce.com/docs/component-library/documentation/en/lwc');
    
    cy.visit('https://developer.salesforce.com/docs/component-library/overview/components');

    cy.contains('Quick Find').find('.slds-input').type('datatable', {force: true} );
    
    cy.contains('Quick Find').find('.slds-input').should( ($input) => {
        //assert the text type
        expect($input).to.have.value('datatable');
    })
     
 });

});
