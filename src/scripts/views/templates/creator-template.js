import CONFIG from "../../globals/config";

const createRestaurantDetailTemplate = (restaurant) => `
<article class="card-item">
  <h2 class="card-title">${restaurant.name}</h2>
  <div class="card-detail">
    <div class="card-content">
      <div class="card-thumbnail">
        <img class="lazyload" 
          data-src="${CONFIG.BASE_IMAGE_URL}medium/${restaurant.pictureId}" 
          alt="Thumbnail ${restaurant.name}">
      </div>
      <div class="card-header">
        <p><i class="fas fa-map-marker-alt"></i> 
          ${restaurant.address}, ${restaurant.city}
        </p>
        <p><i class="fas fa-star"></i> ${restaurant.rating}</p>
      </div>
      <p class="card-description">${restaurant.description}</p>
    </div>
    <div class="card-option">
      <div class="menus">
        <div class="detail-food">
          <h3>Food Menus</h3>
          <ul>
              ${restaurant.menus.foods
                .map(
                  (food) => `
                <li>${food.name}</li>
              `
                )
                .join("")}
            </ul>
        </div>
        <div class="detail-drink">
          <h3>Drink Menus</h3>
          <ul>
            ${restaurant.menus.drinks
              .map(
                (drink) => `
              <li>${drink.name}</li>
            `
              )
              .join("")}
          </ul>
        </div>
      </div>
      <div class="reviews">
        <h3>Customer Reviews</h3>
        <div class="detail-review">
          ${restaurant.customerReviews
            .map(
              (review) => `
            <div class="detail-review-item">
              <div class="review-header">
                  <i class="fa fa-user-circle"></i> 
                  <div>
                    <span class="review-name">${review.name}</span> .
                    <span class="review-date">${review.date}</span>
                  </div>
              </div>
              <div class="review-body">
                ${review.review}
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    </div>
  </div>
  <div class="form-review">
    <form>
      <div class="mb-3 form-row">
        <label for="inputName" class="form-label">Name</label>
        <input name="inputName" type="text" class="form-control" id="inputName">
      </div>
      <div class="mb-3 form-row">
        <label for="inputReview" class="form-label">Review</label>
        <textarea name="inputReview" type="text" class="form-control" id="inputReview" style="resize: none; min-height: 150px;"> </textarea>
      </div>
      <button id="submit-review" type="submit" class="btn2">Submit</button>
    </form>
  </div>
</article>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <article class="card-item">
      <div class="card-thumbnail">
          <img class="lazyload" 
            data-src="${CONFIG.BASE_IMAGE_URL}small/${restaurant.pictureId}" 
            alt="Thumbnail ${restaurant.name}">
      </div>
      <div class="card-content container">
          <div class="card-header">
              <span>
                <i class="fas fa-map-marker-alt"></i> ${restaurant.city}
              </span>
              <span><i class="fas fa-star"></i> ${restaurant.rating}</span>
          </div>
          <h3 class="card-title">
            <a href="#/detail/${restaurant.id}" target="_self">${restaurant.name}</a>
          </h3>
          <p class="card-description">${restaurant.description}</p>
      </div>
  </article>
`;

const createSkeletonRestoTemplate = (count) => {
  let template = "";

  for (let i = 0; i < count; i += 1) {
    template += `
    <article class="card-item">
      <div class="card-thumbnail">
        <img
                class="card-thumbnail"
                width="100%" height="350px" 
                src="./images/placeholder.png" 
                alt="placeholder"
            />
        </div>
        <div class="card-content container">
          <div class="card-header">
              <span>
                    <img
                      class="fa-map-marker-alt"
                      src="../icons/location-dot-solid.svg"
                      alt="lokasi resto"
                      width="18px"
                      height="18px"
                    /> 
                Lorem Lorem ipsum dolor sit
              </span>
              <span>
                    <img
                      class="fa-star"
                      src="../icons/star-solid.svg"
                      alt="rating resto"
                      width="18px"
                      height="18px"
                    />
                    xx
              </span>
          </div>
          <h3 class="card-title">
            Lorem Lorem ipsum dolor sit
          </h3>
          <p class="card-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aspernatur, assumenda aut consectetur consequuntur debitis deleniti dicta dolorem dolorum eos exercitationem labore laboriosam magni nihil, nobis obcaecati optio perspiciatis placeat qui recusandae saepe sapiente sequi totam ullam ut.</p>
        </div>
    </article>
    `;
  }
  return template;
};

const createSkeletonFactTemplate = (count) => {
  let template = "";

  for (let i = 0; i < count; i += 1) {
    template += `
    <article class="card-item">
            <div class="card-thumbnail">
                <img
                    class="card-thumbnail"
                    width="100%" height="350px" 
                    src="./images/placeholder.png" 
                    alt="placeholder"
                />
            </div>
            <div class="card-content">
            <h3 class="card-title">
                Lorem Lorem ipsum dolor sit
            </h3>
            <p class="card-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aspernatur, assumenda aut consectetur consequuntur debitis deleniti dicta dolorem dolorum eos exercitationem labore laboriosam magni nihil, nobis obcaecati optio perspiciatis placeat qui recusandae saepe sapiente sequi totam ullam ut.</p>
            </div>
        </article>
  `;
  }
  return template;
};

const createFactItemTemplate = (foodfact) => `
 <article class="card-item">
            <div class="card-thumbnail">
            <img class="lazyload" 
              data-src="${foodfact.pictureId}" alt="Thumbnail ${foodfact.name}">
            </div>
            <div class="card-content">
                <h3 class="card-title"><a href="#">${foodfact.name}</a></h3>
                <p class="card-description">${foodfact.description}</p>
            </div>
        </article>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

export { createRestaurantItemTemplate, createRestaurantDetailTemplate, createSkeletonRestoTemplate, createSkeletonFactTemplate, createFactItemTemplate, createLikeButtonTemplate, createLikedButtonTemplate };
