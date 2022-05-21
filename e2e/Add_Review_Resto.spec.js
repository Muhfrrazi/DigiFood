Feature("Add Review Restaurant");

Before(({ I }) => {
  I.amOnPage("/");
});

Scenario("Adding Review restaurant", async ({ I }) => {
  I.wait(5);

  I.seeElement(".card-item");
  I.wait(5);

  I.click(locate(".card-item a").first());
  I.wait(5);

  I.seeElement(".form-row");
  I.seeElement("#inputName");
  I.fillField("#inputName", "Automatic review");
  I.wait(5);

  I.seeElement(".form-row");
  I.seeElement("#inputReview");
  I.fillField("#inputReview", "test");
  I.wait(5);

  I.seeElement("#submit-review");
  I.wait(5);
  I.click("#submit-review");
});
