(function () {
    angular.module(appConfig.appName).directive('controls', ['StreamsStateManager', function (StreamsStateManager) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'templates/controls.html',
            controller: function ($scope) {
                $scope.showAllControls = false;

                $scope.StreamsStateManager = StreamsStateManager;

                $scope.fullscreenMode = false;

                $scope.showControls = function () {
                    $scope.showAllControls = !$scope.showAllControls;
                }

                $scope.toggleStreamList = function () {
                    StreamsStateManager.showStreamOverviewList = !StreamsStateManager.showStreamOverviewList;
                }

                $scope.toggleChat = function () {
                    StreamsStateManager.showChat = !StreamsStateManager.showChat;
                }

                $scope.toggleFullscreen = function () {
                    var applicationView = Windows.UI.ViewManagement.ApplicationView.getForCurrentView();
                    if (applicationView.isFullScreenMode) {
                        applicationView.exitFullScreenMode();
                        $scope.fullscreenMode = false;
                    } else {
                        applicationView.tryEnterFullScreenMode();
                        $scope.fullscreenMode = true;
                    }
                    
                }
                
                $scope.swapMainAndPreview = function () {
                    StreamsStateManager.swapActiveAndPreview();
                }

                $scope.showAllStreams = function () {
                    var msgBox = new Windows.UI.Popups.MessageDialog('Feature is under development');
                    msgBox.showAsync();
                    //StreamsStateManager.showAllStreams();
                }

                $scope.showAbout = function () {
                    var msgBox = new Windows.UI.Popups.MessageDialog('StreamViewer for Windows 10 by Serg Nigths. Feedback is welcomed: serj.nights@live.com');
                    msgBox.showAsync();
                }
            },
            link: function (scope, elem, attrs) {
               
            }
        };
    }]);
})();