(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

function LunchCheckController ($scope,
                       $filter,  ) {
  $scope.items = "";

  $scope.click = function (string) {

 if(string=="")
{$scope.col="red";
    $scope.ans="Please enter data first";

  return;
}
    var splitted=string.split(',');
    var x=0;

    for(var i=0;i<splitted.length;i++)

    if(splitted[i] != "" ) {
    var y=0;

      for(var j=0;j<splitted[i].length;j++)
      if(splitted[i].charAt(j) == " " )
      y++;

   if(splitted[i].length!=y)
   x++;
}
getAns($scope,x);

  };
}

function getAns($scope,x)
{
  if(x==0)
{  $scope.ans="Empty";
}
  else if(x<=3)

  {

    $scope.col="green";
      var p="Enjoy"
  $scope.ans=p;
}
else
 {$scope.col="green";

  $scope.ans= "Too much!";
}
}



})();
