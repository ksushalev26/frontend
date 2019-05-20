let urls = ['https://informer.maximarkets.org/wss/server.ashx?id=0', 'https://api.openweathermap.org/data/2.5/weather?q=Dnipropetrovsk,ua&units=metric&appid=417c0f89e42ea2bb6fd8d3687faceef3&lang=ru', 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3&fbclid=IwAR11i1U07wwN-gpaZUCj0BEzqfZ-yMXTsS_lIBzt3UEHFVkYI8V0OHnU1BQ'];
let Observable = Rx.Observable;

function makeRequest(url) {
    return Observable.of(
        $.ajax({
            type: 'GET',
            url: url,
            dataType: 'json',               
            success: function(res) {            
                console.log(res);							
            },
            error: function(err) {
                console.log(err);				
            },
            complete: function(){}
        })
    )
}

Observable.from(urls)
  .mergeMap(url => makeRequest(url))
  .toArray()
  .subscribe(response => console.log(response)); 