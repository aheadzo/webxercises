describe('Automation Project for Salesforce LightwebComponents', function() {

 it('Click, type and search, then display', function() {

    cy.viewport(1536, 731);
 
    //Navigate to the link: https://developer.salesforce.com/docs/component-library/documentation/en/48.0/lwc
    cy.visit('https://developer.salesforce.com/docs/component-library/documentation/en/lwc');
    
    
    //Switch to the Component Reference tab
    cy.get('componentreference-header').should('be.visible').then( e => {
        cy.contains('Component Reference').find('.slds-truncate').contains('Component Reference').click({force: true});
    });

    //Search in Quick Find for “datatable” 
    cy.contains('Quick Find').find('.slds-input').type('datatable', {force: true} );
    
    cy.contains('Quick Find').find('.slds-input').should( ($input) => {
        //assert the text type
        expect($input).to.have.value('datatable');
    });

    //Under Lightning Web Components, click on the Components>lightning>“datatable” on the left menu panel
    cy.get('componentreference-sidebar').contains('datatable').find('.slds-truncate').contains('datatable').click({force: true});

    //Select Datatable from Inline Edit for the dropdown
    cy.get('lightning-tab-bar').should('be.visible').then(() => {
        cy.get('componentreference-playground-example').should('be.visible').then(() => {
            cy.get('div').find('.slds-combobox__form-element').should('be.visible').then(() => {
                //Open the Dropdown Menu
                cy.get('div').find('.slds-combobox__form-element').click({force: true});
                //Select “Datatable from Inline Edit” from the dropdown
                cy.contains('Data Table with Inline Edit').find('.slds-truncate').contains('Data Table with Inline Edit').click({force: true});
            });
        });
    });

 });

});
