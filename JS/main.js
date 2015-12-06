var app = angular.module('myApp',[]);
app.controller('mainController',function($scope){
	$scope.person = {
		name: 'Vishesh',
		city: 'Bangalore',
		greeted: false,
		};
});
app.controller('childController',function($scope){
	$scope.company = {
		comp1 : 'Wipro',
		comp2 : 'Infosys',
	};
	$scope.sayHello = function(){
		$scope.person.greeted = true;
	};
});
app.controller('PlayerController',['$scope', '$http', function($scope,$http){
		$scope.audio = document.createElement('audio');
		$scope.audio.src = '';
		$scope.playing = false;

		$scope.play = function(program) {
			    if($scope.playing === true){
			    	$scope.audio.pause();
			    };
			    var url = program.audio[0].format.mp4.$text;
			    $scope.audio.src = url;
			    $scope.audio.play();
			    $scope.playing = true;
  		};
		$scope.pause = function() {
		    $scope.audio.pause();
		    $scope.playing = false;
		};
		$scope.stop = function(){
			$scope.audio.pause();
    		$scope.audio.currentTime = 0;
			$scope.playing = false;			
		};
		$scope.audio.addEventListener('ended',function(){
			$scope.apply(function(){
				$scope.audio.pause();
    			$scope.audio.currentTime = 0;
			});
		});

		var apiKey = 'MDIxNDQwMzgzMDE0NDg3MTEwMjZlZjhhZQ000';
		var nprUrl = 'http://api.npr.org/query?id=61&fields=relatedLink,title,byline,text,audio,image,pullQuote,all&output=JSON';

		$http({
			method: 'JSONP',
			url: nprUrl + '&apiKey=' + apiKey + '&callback=JSON_CALLBACK'

		}).success(function(data, status){
			$scope.programs = data.list.story;
			console.log($scope.programs);

		}).error(function(data, status){

		});

	}]);
app.controller('RelatedController',['$scope',function($scope){
	}]);