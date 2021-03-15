import mapbox from "mapbox-gl";

const iconURLs = {
  activityPic: "http://i.imgur.com/WbMOfMl.png",
  hotelPic: "http://i.imgur.com/D9574Cu.png",
  restaurantPic: "http://i.imgur.com/cqR6pUI.png",
};

const buildMarker = function (type, coordinates) {
  if (type === "activity") {
    return iconURLs.activityPic;
  }
  if (type === "hotel") {
    return iconURLs.hotelPic;
  }
  if (type === "restaurant") {
    return iconURLs.restaurantPic;
  }
};

export default buildMarker;
