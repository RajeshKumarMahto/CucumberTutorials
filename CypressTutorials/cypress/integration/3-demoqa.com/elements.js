/// <reference types="cypress" />


describe("Element testing using cypress", ()=>{

beforeEach("Visit the URL", ()=> {
        cy.visit("https://demoqa.com/")
        cy.get(":nth-child(1) > :nth-child(1) > .card-body > h5").click()
    })


// it("Text Box examples", () => {
   
//     cy.get(":nth-child(1) > .element-list > .menu-list > #item-0 > .text").click()
//     cy.get("#userName").type("RajeshMahto")
//     cy.get("#userEmail").type("RajeshMahto@test.com")
//     cy.get("#currentAddress").type("Village: Santhaldih, Post: Harihapur, Dhanbad, Jharkhand-828401")
//     cy.get("#permanentAddress").type("Village: Santhaldih, Post: Harihapur, Dhanbad, Jharkhand-828401")
//     cy.get("#submit").click()
//     cy.get("#name").should('have.text', "Name:RajeshMahto")
//     cy.get("#email").should("have.text", "Email:RajeshMahto@test.com")
// })

// it("Checkbox verification", ()=>{
    
//     cy.get(':nth-child(1) > .element-list > .menu-list > #item-1').click()
//     cy.get('label > .rct-title').click();
//     cy.get('#result').should('contain.text', 'home')
    

// })


it("Radio Button verification", ()=>{
    cy.get("div[class='element-list collapse show'] li[id='item-2'] span[class='text']").click()
    cy.get(":nth-child(2) > .custom-control-label").click()
    cy.get(".text-success").should('have.text', 'Yes')
    cy.get('label[for=yesRadio]').parent().find('input').should('be.checked')
    cy.get(':nth-child(3) > .custom-control-label').click()
    cy.get('label[for=yesRadio]').parent().find('input').should('not.be.checked')
    cy.get('.text-success').should('have.text', 'Impressive')
    cy.get('label[for=impressiveRadio]').parent().find('input').should('be.checked')
    cy.get("label[for*='noRadio']").parent().find('input').should('be.disabled')
})

it("Web Tables", ()=>{
    cy.get("div[class='element-list collapse show'] li[id='item-3']").click()
    cy.get("div.rt-tbody > div").eq(2).should("contain.text", "Alden")
    
})


})