angular.module('minisite')
    .directive('phone', function() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            ctrl.$validators.phone = function(modelValue, viewValue) {
                var PHONE_REGEXP = /(^04\d{7}$)|(^(050|052|053|054|055)\d{7}$)/;
                if (ctrl.$isEmpty(modelValue)) {
                    return true;
                }
                if (PHONE_REGEXP.test(viewValue)) {
                    return true;
                }
                return false;
            };
        }
    };
});

