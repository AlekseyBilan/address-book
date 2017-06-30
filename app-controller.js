var taskManagerAppCtrl = taskManagerApp.controller("profileAppCtrl", function ($scope) {

    $scope.currentUser = {
        name:"Ivanov Ivan",
        email:"Ivan@gmail.com",
        addresses:[
            {id:1, nickname:"Main Home", postcode:"49988", street:"Karla Marksa", city:"Dnipro", state:"NY"},
            {id:2, nickname:"Anatoliy Home", postcode:"49088", street:"Karla Marksa", city:"Dnipro", state:"NC"},
            {id:3, nickname:"Nick Home", postcode:"99099", street:"Huffman Mill Rd", city:"Kyiv", state:"CA"}
        ],
        phones:[
            {id:1,nickname:"Main", phone:"+380999999999"},
            {id:2,nickname:"Anatoliy phone", phone:"+370999999990"}
        ]
    };

    $scope.addNewAddress = function (newAddress) {
        var arrlength = $scope.currentUser.addresses.length;
        newAddress.id = arrlength+1;
        var newItem = angular.copy(newAddress);
        $scope.currentUser.addresses.push(newItem);
        $scope.clearAddress();
    };

    $scope.addNewContact = function (newPhone) {
        var arrlength = $scope.currentUser.phones.length;
        newPhone.id = arrlength+1;
        var newItem = angular.copy(newPhone);
        $scope.currentUser.phones.push(newItem);
        $scope.clearPhone();
    };

    $scope.clearPhone = function () {
        $scope.newContact = {};
    };

    $scope.clearAddress = function () {
        $scope.newAddress = {};
    };

    $scope.remove = function (flag, id) {
        if(flag == 'phone'){
            var arr = $scope.currentUser.phones;
            for (var key in arr) {
                if(arr[key].id == id){
                    arr.splice(key, 1);
                }
            }
        } else if(flag == 'address'){
            var arr = $scope.currentUser.addresses;
            for (var key in arr) {
                if(arr[key].id == id){
                    arr.splice(key, 1);
                }
            }
        }
    };
});

