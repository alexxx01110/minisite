angular.module('minisite')
    .directive('resize', ['$window', function ($window) {
    return {
        restrict: 'A',
        link: function (scope, element) {

            var defaultHeight = 1080,
                height = 0,
                counter = 0,
                width = 0,
                breakPoint0 = 750,
                breakPoint1 = 1024,
                breakPoint2 = 1266,
                showCallbackForm = scope.showCallbackForm,
                showCallbackFormOld = scope.showCallbackForm;

                // scope.height = $window.document.body.clientHeight;
                // deltaHeight = $window.document.body.clientHeight - defaultHeight;
            function getTanDeg (deg) {
                var rad = deg * Math.PI/180;
                return Math.tan(rad);
            }

            function onResize () {
                width = $window.innerWidth;
                counter = 0;

                if ($window.innerHeight > defaultHeight) {
                    height = $window.innerHeight
                }
                if (!showCallbackForm) {
                    scope.showCallbackForm = false;
                    scope.scrollToCallbackForm = true;
                } else {
                    scope.showCallbackForm = showCallbackFormOld;
                    scope.scrollToCallbackForm = false;
                }
                scope.style = function () {
                    switch (true) {
                        case (width >= breakPoint1 && width < breakPoint2):
                            showCallbackForm = true;
                            scope.showCallbackForm = true;
                            return {
                                'width': (534 + element[0].offsetHeight / (getTanDeg(79.8) + 10.3)) + 'px',
                                'height': height - 374 + 'px'
                            };
                        case (width >= breakPoint2):
                            showCallbackForm = true;
                            scope.showCallbackForm = true;
                            return {
                                'width': (617 + (element[0].offsetHeight) / (getTanDeg(79.8) + 10.7)) + 'px',
                                'height': height - 408 + 'px'
                            };
                        default:
                            showCallbackForm = scope.showCallbackForm;
                            showCallbackFormOld = scope.showCallbackForm;
                            if (scope.scrollToCallbackForm && scope.showCallbackForm) {
                                $window.scrollTo(0, element[0].offsetTop);
                            }
                            return {
                                'width': 'auto',
                                'height': 'auto'
                            }
                    }
                };
                scope.$digest();
            }
            function cleanUp() {
                angular.element($window).off('resize', onResize);
            }

            element.ready(onResize);

            angular.element($window).on('resize', onResize);

            scope.$on('$destroy', cleanUp);

        }
    };
}]);
