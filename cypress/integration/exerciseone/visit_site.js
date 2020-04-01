describe('Automation Project for Salesforce LightwebComponents', function() {

 it('Click, type and search, then display', function() {

    cy.viewport(1536, 731);
 
    //Navigate to the link: https://developer.salesforce.com/docs/component-library/documentation/en/48.0/lwc
    cy.visit('https://developer.salesforce.com/docs/component-library/documentation/en/lwc');
    
    
    //Switch to the Component Reference tab
    cy.contains('Component Reference').find('.slds-truncate').contains('Component Reference').click({force: true});

    //Search in Quick Find for “datatable” 
    cy.contains('Quick Find').find('.slds-input').type('datatable', {force: true} );
    
    cy.contains('Quick Find').find('.slds-input').should( ($input) => {
        //assert the text type
        expect($input).to.have.value('datatable');
    });

    //Under Lightning Web Components, click on the Components>lightning>“datatable” on the left menu panel
    cy.get('componentreference-sidebar').contains('datatable').find('.slds-truncate').contains('datatable').click({force: true});

    //select Datatable from Inline Edit for the dropdown
     
 });

});

/*describe('test_name', function() {

    it('what_it_does', function() {
   
       cy.viewport(1031, 731)
    
       cy.visit('https://developer.salesforce.com/docs/component-library/bundle/lightning-datatable/example')
    
       cy.get('.slds-form-element__control > .slds-combobox_container > .slds-combobox > .slds-combobox__form-element > #input-887').click()
    
       cy.get('.slds-combobox_container > .slds-combobox > #dropdown-element-887 > #input-887-3-887 > .slds-media__body').click()
    
    })
   
   })*/
