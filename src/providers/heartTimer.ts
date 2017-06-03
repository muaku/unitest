import { Subject, BehaviorSubject} from 'rxjs';

export class HeartTimer {

    timeInterval
    timer
    public countdownTime : Subject<any> = new BehaviorSubject<string>("");

    constructor() { }

    startHeartTimer(hearts){
        this.countdownTimer(hearts, 59, 59)
    }

     // coundown time by min,sec
  private countdownTimer(hearts,mins, secs) {
    this.timeInterval = setInterval(() => {
      secs--
      if(secs < 0){
        secs = 59
        mins--
      }
      // if reach 1 hour
      if(mins === 0 && secs === 0){
        console.log("report +1 heart")
        // +1 heart
        hearts++
        console.log("hearts: ", hearts)
        // if hearts larger than 3, then stop coundownTimer & hide timer board
        if(hearts >= 3){
          clearInterval(this.timeInterval)
          console.log("hide timer board")
        } else {  
          // else if heart is not full yet, reset mins,secs and count it again
          mins = 59
          secs = 59
        }
      }
      this.timer = (mins < 10 ? "0":"") + mins + ":" + (secs < 10 ? "0":"") + secs
      // use event emiter to emit time to show on heartcoin component
      console.log(this.timer)
      // Emit this.timer
      this.countdownTime.next(this.timer)
      
    },1000)
  }

    
}