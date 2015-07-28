var jaaraApp = angular.module('jaaraApp', []);

jaaraApp.controller('JaaralaisetCtrl', function ($scope, $http, $document) {
  $http.get('http://crossorigin.me/http://www.nakedeye.fi/jaarappis/jaaralaiset.json')
    .success(function(data) {
      $scope.jaaralaiset = data;
  });

  var searchBar = angular.element(document.querySelector('.searchBarWrapper'));
  var searchBarTop = searchBar.prop('offsetTop') - 10; // add margin
  $document.bind('scroll', function(e) {
    if (window.scrollY >= searchBarTop) {
      searchBar.addClass('sticky');
    } else {
      searchBar.removeClass('sticky');
    }

  });

  $scope.compare = function(item) { 
    var query = ($scope.query || "").toLowerCase();
    var firstName = (item.firstname || "").toLowerCase();
    var lastName = (item.lastname || "").toLowerCase();
    var fullName = firstName + " " + lastName;
    
    return firstName.indexOf(query) === 0 || lastName.indexOf(query) === 0 || fullName.indexOf(query) === 0;
  }

});

//http://crossorigin.me/http://www.nakedeye.fi/jaarapp/jaaralaiset.json