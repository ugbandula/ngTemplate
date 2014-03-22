angular.module('firepost', [
	'ngTouch',
	'ui.router',
	'firepost.features.welcome',
	'firepost.features.login',
	'firepost.features.account'
])

.config(function ($urlRouterProvider) {
	$urlRouterProvider.otherwise("/");
});