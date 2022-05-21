const assert = require("assert");

Feature("Add Review Restaurant");

Before(({ I }) => {
  I.amOnPage("/");
});

Scenario("Adding Review restaurant", async ({ I }) => {
  I.seeElement(".card-item");
  I.seeElement(".card-title a");

  const findResto = locate(".card-title a").first();
  I.wait(1);
  I.click(findResto);

  I.seeElement(".form-row");
  I.seeElement("#inputName");
  I.fillField("#inputName", "Handa");

  I.seeElement(".form-row");
  I.seeElement("#inputReview");
  I.fillField("#inputReview", "Tidak Ramah Bintang 1");

  I.seeElement("#submit-review");
  I.click("#submit-review");

  const getName = locate(".review-name").last();
  const checkInput = await I.grabTextFrom(getName);

  const getReview = locate(".review-body").last();
  const checkReview = await I.grabTextFrom(getReview);

  assert.strictEqual(checkInput, "Handa");
  assert.strictEqual(checkReview, "Tidak Ramah Bintang 1");
});
