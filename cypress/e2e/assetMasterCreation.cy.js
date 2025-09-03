describe("Landing page", () => {
  it("navigates to login page when clicking sign-in button", () => {
    // 1. Visit landing page
    cy.visit("/");

    // 2. Click the "Sign In" button
    // 👇 Replace selector with your actual element
    cy.get('[data-testid="sign-in-btn"]').click();

    // 3. Verify we navigated to login page
    // Option A: Check URL
    cy.url().should("include", "/auth/jwt/sign-in?returnTo=%2Fdashboard");

    // Option B: Check text on login page
    cy.get('[data-testid="sign-in-form"]').click();

    cy.get(
      ":nth-child(2) > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .minimal__nav__ul > :nth-child(1) > .MuiButtonBase-root"
    ).click();
    cy.get(
      ".css-qr6njo-MuiCollapse-root > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .minimal__nav__ul > :nth-child(1) > .MuiButtonBase-root"
    ).click();

    // asset name
    cy.get('[name="name"]').type("Table c");
    // category
    cy.get("#\\:rn\\:").click(); // 👈 escape special chars in id
    cy.get("#\\:rn\\:-option-2").click();

    // asset tag
    cy.get('[name="tag"]').type("TBL-C");

    // description
    cy.get('[name="description"]').type("cypress testing");

    cy.get('.css-iuob16-MuiStack-root > .MuiButtonBase-root').click();
  });
});
