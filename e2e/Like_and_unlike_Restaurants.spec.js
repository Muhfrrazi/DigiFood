const assert = require("assert");

Feature("Like and Unlike Restaurants");

Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

Scenario("showing empty liked restaurants", ({ I }) => {
  I.seeElement("#restaurants");
  I.see(`You don't have any Favorite Cafe or Restaurant`, "#restaurants");
});

Scenario("like and unlike one restaurant", async ({ I }) => {
  I.see(`You don't have any Favorite Cafe or Restaurant`, "#restaurants");

  I.amOnPage("/");

  I.see("Loading Data......", "#loading");
  I.wait(1);

  I.seeElement(".card-item");
  I.seeElement(".card-title a");

  const firstRestaurant = locate(".card-title a").first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(".card-title a");

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeElement(".card-item");
  const likedRestaurantTitle = await I.grabTextFrom(".card-title a");

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.click(firstRestaurant);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.dontSeeElement(firstRestaurant);

  I.see(`You don't have any Favorite Restaurant`, "#restaurants");
});
