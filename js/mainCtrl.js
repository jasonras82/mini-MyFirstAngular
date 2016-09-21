app.controller('mainCtrl', function($scope) {
  $scope.newFriend = 'add your name here';

  $scope.addFriend = function(newFriend) {
    this.friends.push({name: newFriend});
  };

  $scope.friends = [
    {name: 'Justin'},
    {name: 'JJ'},
    {name: 'Alex'},
    {name: 'Mikkel'}
  ];
});
