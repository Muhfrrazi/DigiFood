const assert = require("assert");

Feature("Like Resto");

Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

Scenario("showing empty liked restaurants", ({ I }) => {
  I.seeElement("#restaurants");
  I.see(`You don't have any Favorite Cafe or Restaurant`, "#restaurants");
});

Scenario("Liking a restaurant", async ({ I }) => {
  I.see(`You don't have any Favorite Cafe or Restaurant`, "#restaurants");

  I.amOnPage("/");
  I.wait(3);

  I.seeElement(".card-item");
  I.seeElement(".card-title a");

  const firstResto = locate(".card-title a").first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.wait(3);
  I.click(firstResto);

  I.seeElement("#likeButton");
  I.wait(3);
  I.click("#likeButton");

  I.amOnPage("/#/favorites");
  I.seeElement(".card-item");

  const favoritedRestoTitle = await I.grabTextFrom(".card-title");
  assert.strictEqual(firstRestoTitle, favoritedRestoTitle);
});
