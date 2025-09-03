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
    
  });
});
