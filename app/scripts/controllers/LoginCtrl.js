/**
 * Created by Surendra on 1/6/2015.
 */
angular.module('myApp')
    .controller('LoginCtrl', function ($scope,$location,LoginService) {
        $scope.username="";
        $scope.password="";
        $scope.authenticate=function(){
            if($scope.validate()){
                var reqData={};
                reqData.username=$scope.username;
                reqData.password=$scope.password;
                LoginService.authService(reqData,successCB=function(data){
                        debugger;
                        if(data.result.userType=="admin"){
                            $location.path('/home');
                        }
                        else{
                            $scope.validateMsg="Please enter valid credential.";
                            $scope.username="";
                            $scope.password="";
                        }
                    },
                    failureCB=function(data){
                        alert('fail');
                    });
            }
            if ($scope.username=="demo" && $scope.password=="demo") {

            }
        }
        $scope.validate=function(){
            if($scope.username.trim()=="" || $scope.username==undefined){
                $scope.validateMsg="Please enter Username";
                return false;
            }
            if($scope.password.trim()=="" || $scope.password==undefined){
                $scope.validateMsg="Please enter Password";
                return false;
            }
            return true;
        }

    });
