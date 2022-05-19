/* eslint-disable new-cap */
import API_ENDPOINT from "../globals/api-endpoint";

class ResrtaurentSource {
  static async listRestaurants() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async postRestaurant(data) {
    const rawResponse = await fetch(API_ENDPOINT.POST_REVIEW, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const rawResponseJson = await rawResponse.json();
    return rawResponseJson.customersReviews;
  }
}

export default ResrtaurentSource;