angular.module('minisite')
    .service('sendFormService', ['$http', '$q', function ($http, $q) {
        this.sendFormToUrl = function (username, company, phone, email, uploadUrl) {
            var formData = new FormData();
            var param = uploadUrl.split('/');

            formData.append('username', username);
            formData.append('company', company);
            formData.append('phone', phone);
            formData.append('email', email);

            if (param[0] === 'test') {
                return $q(function (resolve, reject) {
                    setTimeout(function () {
                        if (param[1] === 'success') {
                            resolve('Success')
                        } else {
                            reject('Error')
                        }
                    }, 1000)
                })
            } else {
                return $http.post(uploadUrl, formData, {
                    transformRequest: angular.identity,
                    headers: {'Content-Type': undefined}
                })
            }
        }
    }]);
