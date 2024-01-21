describe("template spec", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://api.currencyapi.com/v3/latest?apikey=*", {
      fixture: "../fixtures/mocks/currencies.json",
    }).as("getAllCurrencies");
  });

  it("Проверяет навигацию по страницам", () => {
    // Home page
    cy.visit("http://localhost:3000");

    cy.get("#cy-home").should("exist");

    cy.url().should("eq", "http://localhost:3000/");

    cy.contains("Timeline").click();

    // Timeline
    cy.get("#cy-timeline").should("exist");

    cy.url().should("eq", "http://localhost:3000/timeline");

    cy.contains("Bank card").click();

    // Bank map
    cy.get("#cy-bank-map").should("exist");

    cy.url().should("eq", "http://localhost:3000/banks");

    cy.contains("Contacts").click();

    // Contacts
    cy.get("#cy-contacts").should("exist");

    cy.url().should("eq", "http://localhost:3000/contacts");

    cy.contains("Home").click();

    // Home
    cy.get("#cy-home").should("exist");

    cy.url().should("eq", "http://localhost:3000/");
  });
});
