describe('test_name', function() {

 it('what_it_does', function() {

    cy.viewport(1536, 731);
 
    cy.visit('https://developer.salesforce.com/docs/component-library/documentation/en/lwc');
    
    cy.visit('https://developer.salesforce.com/docs/component-library/overview/components');
    
    cy.contains('Quick Find').find('.slds-input').should( ($input) => {
        //assert the empty input
        expect($input).to.have.value('');
    }).then(($input) => {
        //edit the input value
        const [dom] = ($input).get();
        dom.value='datatable';
        //assert the text type
        expect($input).to.have.value('datatable');
    });
     
 });

});
