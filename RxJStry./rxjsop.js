import Observable from 'rxjs';
var observable=Observable.interval(1000);
var observer ={
    next:function(value){
        console.log(value);
    }
};
observable.map(function(value){
    return value*2;
})
.subscribe(observer);