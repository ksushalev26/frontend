let Rx = window.rxjs;

let map = Rx.operators.map;

let ajax = Rx.ajax.ajax;

Rx.forkJoin([
    ajax('https://informer.maximarkets.org/wss/server.ashx?id=0').pipe(
        map(data => data.response)),
    ajax('https://api.openweathermap.org/data/2.5/weather?q=Dnipropetrovsk,ua&units=metric&appid=417c0f89e42ea2bb6fd8d3687faceef3&lang=ru').pipe(
        map(data => data.response)),
    ajax('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3').pipe(
        map(data => data.response))
]).subscribe({
    next: value => console.log(value),
    complete: () => console.log('This is how it ends!'),
   });