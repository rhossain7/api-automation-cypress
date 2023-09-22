/// <reference types="cypress" />

it('google test', () => {
  cy.visit('https://google.com')
  cy.get('.SDkEP').type('Automation Step by Steps{enter}')
  cy.get(':nth-child(4) > .g > .N54PNb > .jGGQ5e > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .notranslate > :nth-child(2) > .byrV5b > .qLRx3b').click()
})