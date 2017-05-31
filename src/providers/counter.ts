import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class CounterProvider {


  constructor(public http: Http) {
    // var endtime = new Date()
    // console.log("Now time: ", endtime)
    // endtime.setHours(endtime.getHours() + 1)
    // console.log("endtime: ", endtime)

  }

  initializeClock(id, endtime){
        var clock = document.getElementById(id);
        var timeinterval = setInterval(function(){
            var t:any = this.getTimeRemaining(endtime)
            console.log('hours: '+ t.hours +
                            'minutes: ' + t.minutes +
                            'seconds: ' + t.seconds)

                // clock.innerHTML = 'days: ' + t.days + '<br>' +
                //                 'hours: '+ t.hours + '<br>' +
                //                 'minutes: ' + t.minutes + '<br>' +
                //                 'seconds: ' + t.seconds;
                if(t.total<=0){
                    clearInterval(timeinterval);
                }
        },1000)
    }

    getTimeRemaining(endtime){
        var now = new Date().toString()
        var t = Date.parse(endtime.toString()) - Date.parse(now);     // parse time to millisecond
        var seconds = Math.floor( (t/1000) % 60 );
        var minutes = Math.floor( (t/1000/60) % 60 );
        var hours = Math.floor( (t/(1000*60*60)) % 24 );
        var days = Math.floor( t/(1000*60*60*24) );
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    }

    

}











