describe("Тестирование смены темы", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://api.currencyapi.com/v3/latest?apikey=*", {
      fixture: "../fixtures/mocks/currencies.json",
    }).as("getAllCurrencies");
  });

  it("Меняет тему и проверяет изменение background-color", () => {
    cy.visit("http://localhost:3000");

    // background-color у html равен #030304 = rgb(3, 3, 4)
    cy.get("html").should("have.css", "background-color", "rgb(3, 3, 4)");

    cy.get("#cy-theme-toggler").click();

    // background-color у html равен #cbdeca = rgb(203, 222, 202)
    cy.get("html").should("have.css", "background-color", "rgb(203, 222, 202)");
  });
});
