/**
 * Created by liuzhangjun on 2015-7-4.
 */
main.directive('webHead',function(){
    return{
        restrict:'E',
        replace:true,
        templateUrl:'webHead.html'
    }
});
main.directive('carousel',function(){
    return{
        restrict:'E',
        replace:true,
        templateUrl:'carousel.html'
    }
});
main.directive('catalogList',function(){
    return{
        restrict:'E',
        replace:true,
        templateUrl:'catalogList.html'
    }
});