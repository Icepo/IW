/**
 * Created by liuzhangjun on 2015-7-4.
 */
main.controller('mainController',function($scope,$state){
    var images=[
        {
            "image": "../img/1.jpg",
            "strategy": "检索策略1"
        },
        {
            "image": "../img/2.jpg",
            "strategy": "检索策略2"
        },
        {
            "image": "../img/3.jpg",
            "strategy": "检索策略3"
        }
    ];
    /*carousel*/
    function addSlide(target, image) {
        target.push(getSlide(target, image));
    };
    function addSlides(target, images, qty) {
        for (var i=0; i < qty; i++) {
            addSlide(target, images[i]);
        }
    };
    $scope.slides = [];
    addSlides($scope.slides, images,images.length);
    function getSlide(target, image) {
        var i = target.length;
        return {
            id: (i + 1),
            img: image.image,
            strategy:image.strategy
        };
    };
    $scope.doStrategy=function(strategy){
        console.log(strategy);
        $state.go('itemList')
    };
});