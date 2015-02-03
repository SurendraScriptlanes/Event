/**
 * Created by Surendra on 1/15/2015.
 */
angular.module('myApp')
    .service('LoginService', function($http) {
        // AngularJS will instantiate a singleton by calling "new" on this function

        var that=this;
        that.APP_HEADERS={
            'X-Parse-Application-Id':'fPpi71FwJYx2wg1VK1ImHeAndIWltrn7Q510nzVR',
            'X-Parse-REST-API-Key':'XBI4rlNzP0gGPtxT6VFyT9QysC24egPsVzrEYaN1'
        };

        that.URL="https://api.parse.com/1/";

        this.authService=function(reqData,successCB,failureCB){

            $http({ method : 'POST',
                data:reqData,
                url : that.URL+'functions/authUser',
                headers:that.APP_HEADERS
            })
                .success(function(data, status) {
                    successCB(data);
                })
                .error(function(data, status) {
                    failureCB(data);
                })
        }
    });
