angular.module('minisite')
    .controller('callbackController', ['$scope', 'sendFormService', function ($scope, sendFormService) {
        $scope.form = {};
        $scope.user = {};
        $scope.showCallbackForm = false;
        // $scope.showCallbackFormOld = true;
        $scope.formSending = false;
        $scope.formSubmitted = false;
        $scope.formRespondMsg = '';

        $scope.callbackFormToggle = function () {
            // $scope.showCallbackFormOld = $scope.showCallbackForm;
            $scope.showCallbackForm = !$scope.showCallbackForm;
        };
        $scope.closeModal = function () {
            $scope.user = {};
            $scope.form.callbackForm.$setPristine();
            $scope.form.callbackForm.$setUntouched();
            $scope.formSubmitted = false;
            $scope.formSending = false;
        };

        $scope.submit = function (formData) {
            $scope.formSending = true;
            sendFormService.sendFormToUrl(formData.name, formData.company, formData.phone, formData.email, 'test/success')
                .then(function (res) {
                    $scope.formSubmitted = true;
                    $scope.formRespondMsg = formData.name + ' תודה '

                })
                .catch(function (err) {
                    $scope.formSending = false;
                    $scope.formRespondMsg = formData.name + ' סליחה '
                })
        }
    }]);
