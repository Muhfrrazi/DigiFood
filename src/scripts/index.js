/* eslint-disable no-shadow */
import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import restoData from "../DATA.json";

let menuButton = document.getElementById("menu-button");
let closeButton = document.getElementById("close-button");
let mainElement = document.querySelector("main");

menuButton.addEventListener("click", (event) => {
  document.getElementById("sidebar-menu").style.width = "70%";
  event.stopPropagation();
});

closeButton.addEventListener("click", (event) => {
  document.getElementById("sidebar-menu").style.width = "0";
  event.stopPropagation();
});

mainElement.addEventListener("click", (event) => {
  document.getElementById("sidebar-menu").style.width = "0";
  event.stopPropagation();
});

let postList = document.getElementById("post-list");
let post = "";

restoData.restaurants.forEach((restaurant) => {
  post += `
        <article class="post-item">
            <div class="post-thumbnail">
                <img src="${restaurant.pictureId}" alt="Thumbnail ${restaurant.name}">
            </div>
            <div class="post-header">
                    <span><i class="fas fa-map-marker-alt"></i> ${restaurant.city}</span>
                    <span><i class="fas fa-star"></i> ${restaurant.rating}</span>
                </div>
            <div class="post-content">
            <h3 class="post-title"><a href="#">${restaurant.name}</a></h3>
                <p class="post-description">${restaurant.description}</p>
            </div>
        </article>
    `;
});

postList.innerHTML = post;

let factList = document.getElementById("fact-list");
let fact = "";

restoData.factFood.forEach((factFood) => {
  fact += `
        <article class="post-item">
            <div class="post-thumbnail">
                <img src="${factFood.pictureId}" alt="Thumbnail ${factFood.name}">
            </div>

            <div class="post-content">
                <h3 class="post-title"><a href="#">${factFood.name}</a></h3>
                <p class="post-description">${factFood.description}</p>
            </div>
        </article>
    `;
});

factList.innerHTML = fact;
