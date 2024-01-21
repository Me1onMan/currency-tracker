describe("My first test", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://api.currencyapi.com/v3/latest?apikey=*", {
      fixture: "../fixtures/mocks/currencies.json",
    }).as("getAllCurrencies");
  });

  it("Открывает страницу, выбирает валюту, проверяет изменения и закрывает модальное окно", () => {
    cy.visit("http://localhost:3000");

    cy.contains("Belarusian Rouble").click();

    cy.get(".cy-modal").should("be.visible");

    cy.get(".cy-dropdown").click();

    cy.get(".cy-dropdown-item").contains("EUR (Euro)").click();

    cy.get(".cy-dropdown").should("contain", "EUR (Euro)");

    cy.get(".cy-input").type("740");

    cy.get(".cy-output").invoke("val").should("equal", "485.23251357127685");

    cy.contains("CLOSE").click();

    cy.get(".cy-modal").should("not.exist");
  });
});
