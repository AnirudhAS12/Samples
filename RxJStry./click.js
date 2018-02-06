import {Observable} from 'rxjs';
alert("edas");
var button = document.querySelector('button');
Observable.fromEvent(button, 'click')
  .throttleTime(1000)
  .scan(count => count + 1, 0)
  .subscribe(count => console.log(`Clicked ${count} times`));
