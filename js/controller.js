var jaaraApp = angular.module('jaaraApp', []);

jaaraApp.controller('JaaralaisetCtrl', function ($scope, $http) {
  $http.get('http://crossorigin.me/http://www.nakedeye.fi/jaarappis/jaaralaiset.json')
       .success(function(data) {
         $scope.jaaralaiset = data;
  });

  $scope.compare = function(item) { 
    var query = ($scope.query || "").toLowerCase();
    var firstName = (item.firstname || "").toLowerCase();
    var lastName = (item.lastname || "").toLowerCase();
    var nickName = (item.nickname || "").toLowerCase();
    var fullName = firstName + " " + lastName;

    return firstName.indexOf(query) === 0 || lastName.indexOf(query) === 0 ||
      nickName.indexOf(query) === 0 || fullName.indexOf(query) === 0;
  }

});

//http://crossorigin.me/http://www.nakedeye.fi/jaarapp/jaaralaiset.json