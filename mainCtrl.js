angular.module("d3zee")
.controller("mainCtrl", function($scope) {
  var data = [1,2,34,4,5,60,6,6,70,17,79,7,78,65,12,34];
  d3zee.upBar("#thing1", data, true);
  d3zee.rightBar("#thing2", data, true);
  d3zee.leftBar("#thing3", data, true);
  d3zee.downBar("#thing4", data, true);
  d3zee.pie("#thing5", data, true);
  d3zee.donut("#thing6", data, true);
  d3zee.forceCircles("#thing7", data, true);
  d3zee.forceSquares("#thing8", data, true);
});
