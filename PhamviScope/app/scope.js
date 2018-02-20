var app = angular.module("myApp",[]);


  app.controller("controllerTop", function($scope) {
    $scope.name = "Đặng Tuấn Huy";
    $scope.chuvu ="Developer";
  });
  app.controller("controllerBottom", function($scope) {
    $scope.name = "Minh Trung";
    $scope.chuvu ="Designer";
  });
  //Ứng dụng Json Dữ liệu kiểu bản tin
  app.controller("controllerJson",function($scope){
    $scope.user =
    {
      name : "Hachi",
      chuvu : "kurama"
    };
  });
  //Ứng dụng Json Dữ liệu kiểu bản tin gọi theo kiểu khác
  // app.controller("controllerJson1",function($scope){
  //   var user =
  //   {
  //     name : "You",
  //     chuvu : "Guiky"
  //   };
    //$scope.user = user;
  //  $scope.user = user.chuvu;
  // });
  // Ứng dụng ng-repeat Duyệt qua các phần tử mảng kết hợp bộ lọc filter
  app.controller("controllerJson1",function($scope){
    var user =
    {
      name : "Hanako",
      chuvu : "Guiky"
    };
    var user =
    [
      {name:"Phạm Nhật Hải", chuvu:"Null"},
      {name:"Minh Trung", chuvu:"Null"},
      {name:"Kim Chi", chuvu:"Null"},
      {name:"Thành Thái", chuvu:"Null"},
      {name:"Thảo", chuvu:"Test"},
    ];
    $scope.userArray = user;
  });
