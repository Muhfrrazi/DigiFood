import RestaurantResource from "../../data/restaurant-source";
import { createFactItemTemplate, createRestaurantItemTemplate } from "../templates/creator-template";
import Fact from "../../data/facts.json";

const Home = {
  async render() {
    return `
    <div class="container">
      <h2 class="content-title">Explore Restaurant</h2>
      <div id="loading">
      
      </div>
      <section id="card-list" class="card-list">

      </section>

      <h2 class="content-title">Food Fact <span class="content-desc"><br>Fun Fact About All Foods</span></h2>
      <section id="fact-list" class="card-list fact">

      </section>
    </div>
    `;
  },

  async afterRender() {
    const loading = document.querySelector("#loading");
    loading.innerHTML = '<div class="loader"></div>';

    try {
      const restaurants = await RestaurantResource.listRestaurants();
      const restaurantsContainer = document.querySelector("#card-list");

      restaurants.forEach((Restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(Restaurant);
      });

      loading.style.display = "none";
    } catch (err) {
      loading.style.display = "none";
      restaurantsContainer.innerHTML = `Error: ${err}, swipe up to refresh!`;
    }

    const factResto = await Fact.factFood;
    const factContainer = document.querySelector("#fact-list");
    factResto.forEach((foodfact) => {
      factContainer.innerHTML += createFactItemTemplate(foodfact);
    });
  },
};

export default Home;
