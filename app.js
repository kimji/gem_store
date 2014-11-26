(function() {
  var app = angular.module('gemStore', ['store-directives']);

  app.controller('StoreController', [ '$http', function($http){
    this.products = [];// gems;

    $http.get('./store-products.json').success(function(data){
      this.products = data;
    });
  }]);

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);

      this.review = {};
    };
  });


})();
