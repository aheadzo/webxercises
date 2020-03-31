describe('Type on search element and click to display datatable information', function() {

 it('Click, type and search, then display', function() {

    cy.viewport(1536, 731);
 
    cy.visit('https://developer.salesforce.com/docs/component-library/documentation/en/lwc');
    
    cy.visit('https://developer.salesforce.com/docs/component-library/overview/components');

    //typing on search element
    cy.contains('Quick Find').find('.slds-input').type('datatable', {force: true} );
    
    cy.contains('Quick Find').find('.slds-input').should( ($input) => {
        //assert the text type
        expect($input).to.have.value('datatable');
    });

    //click on text after the search
    cy.get('componentreference-sidebar').contains('datatable').find('.slds-truncate').contains('datatable').click({force: true});
     
 });

});
