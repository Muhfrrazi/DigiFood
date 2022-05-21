const assert = require("assert");

Feature("Unlike Resto");

Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

Scenario("showing empty liked restaurants", ({ I }) => {
  I.seeElement("#restaurants");
  I.see(`You don't have any Favorite Cafe or Restaurant`, "#restaurants");
});

Scenario("Unliking a restaurant", async ({ I }) => {
  I.see(`You don't have any Favorite Cafe or Restaurant`, "#restaurants");

  I.amOnPage("/");
  I.wait(1);

  I.seeElement(".card-item");
  I.seeElement(".card-title a");

  const favoriteResto = locate(".card-title a").first();
  const checkTitleFirst = await I.grabTextFrom(favoriteResto);
  I.wait(3);
  I.click(favoriteResto);

  I.seeElement("#likeButton");
  I.wait(3);
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeElement(".card-title");

  const checkTitleSecond = await I.grabTextFrom(".card-title");
  assert.strictEqual(checkTitleFirst, checkTitleSecond);

  I.seeElement(".card-title a");

  const UnfavoritedResto = locate(".card-title a").first();
  await I.grabTextFrom(UnfavoritedResto);
  I.wait(3);
  I.click(UnfavoritedResto);

  I.seeElement("#likeButton");
  I.wait(1);
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.see(`You don't have any Favorite Cafe or Restaurant`, "#restaurants");
});
