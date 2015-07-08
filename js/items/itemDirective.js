/**
 * Created by liuzhangjun on 2015-7-5.
 */
main.directive('items',function(){
    return{
        restrict:'E',
        replace:true,
        templateUrl:'items.html'
    }
});