import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Slides } from 'ionic-angular'
import { AlertController } from 'ionic-angular';

// question service
import { Classic } from "../../providers/classic"

@IonicPage()
@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class Question {

  datas: any;
  hasAnswered = false
  gameFinished = false
  isEndOfSlides = false
  showText
  spaceBetween = 200;
  score = 0
  numOfQuestion = 0
  showTimeLeft
  setTimer
  oneMoreChance = false
  showTryAgain = false
  oneMoreChanceCounter = 0
  outOfChance = false
  currentSlideIndex = 0
  incorrectIndex
  unregisterBackButtonAction: any

  @ViewChild(Slides) slides: Slides
  @ViewChild("nav") nav: NavController

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public _classicProvider: Classic, public platform: Platform,
              private alertCtrl: AlertController) {
    
    this.getQuestion()
    
  }

  ionViewDidLoad() {
    this.incorrectIndex = [0,1,2,3]
    // dont allow to swipe
    this.slides.lockSwipes(true)
    this.countdownTimer(20)
  }


// register back btn
  ionViewWillEnter() {
    this.inittializeBackBtn()
  }
// unregister back btn
  ionViewDidLeave() {
    this.unregisterBackButtonAction && this.unregisterBackButtonAction()
  }

  inittializeBackBtn() {
    this.unregisterBackButtonAction = this.platform.registerBackButtonAction(() => {
      this.customHandleBackBtn()
    }, 10)
  }

  // back btn custom handler
  private customHandleBackBtn() {
    console.log("Release back btn")
    // show confirm alert if game havnt finished yet
    if(!this.gameFinished) {
         this.confirmAlertHandler()
    } else {
      // if game is finished, then navigate to Home
      this.navCtrl.push("Home")
    }
 
  }

  // Confirm Alert handler
  private confirmAlertHandler() {
    let alert = this.alertCtrl.create({
      title: "You really want to exit?",
      message: "If you exit, all the question will mark as incorrect",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked")
          }
        },
        {
          text: "Yes",
          handler: () => {
            console.log("Back to Home")
            // clear timer (counter) &&  Navagate back to Home
            if(this.setTimer) clearInterval(this.setTimer)
            this.navCtrl.push("Home")
          }
        }
      ]
    })
    // present alert
    alert.present()
  }
  
//
  getQuestion(){
    this._classicProvider.getQuestion().subscribe(question => {
      this.datas = question.data
      console.log("datas: ", this.datas)
    })
  }

  //
  selectAnswer(answer){
    clearInterval(this.setTimer)  // clear countdownTimer
    this.slides.lockSwipes(false)   // allow slide to swipe
    this.hasAnswered = true   // show answer-popup
    if(answer.isCorrect){
      console.log("Show pop up Correct answer")
      this.showText = "CORRECT"
      this.score ++
      // if 2 times answer option is selected, but user got correct answer
      if(this.oneMoreChance){
        this.oneMoreChance = false
      }
      
    }else {
      console.log("Show pop up Wrong answer")
      this.showText = "WRONG"
    }

      
    // delay befor go to next slide, or end game
    if(this.oneMoreChance){       // if user anable 2 times answer
      setTimeout(() => {
        this.hasAnswered = false    // hide answer-popup
        // show Try again screen
        this.showTryAgain = true
        // delay 2s before resuming the game
        setTimeout(() => {
          this.showTryAgain = false   // hide try again screen
          this.countdownTimer(10)     // start timer again
          this.oneMoreChance = false  // set oneMoreChance back to false
        },2000)

      },1000)
    }else{
      // count number of question, coz last slide not slide anymore
      if(this.isEndOfSlides){
          this.numOfQuestion++        
      }
      //
       setTimeout(() => {
        this.hasAnswered = false    // hide answer-popup
        if(this.isEndOfSlides){ // if end of slide
          console.log("Pop up End the GAME and show score!")
          console.log("You got ", this.score)
          this.gameFinished = true    // show endgame popup
          this.isEndOfSlides = false
        }else{
          this.slideNext(300)
          this.slides.lockSwipes(true)  // dont allow slide to swipe
        }
      }, 1000)
    }
   
    

  }

  // slide to next
  slideNext(speed){
    this.endOfSlides()
    this.outOfChance = false  // enable 2 times answer button
    this.oneMoreChanceCounter = 0   // set oneMoreChanceCounter to 0 back again
    this.numOfQuestion++    // count number of question, by slide
    this.slides.slideNext(speed, true)
    this.showTimeLeft = "20"  // show fake time
    this.countdownTimer(20)
  }
  // end of slides
  endOfSlides(){
    this.slides.ionSlideReachEnd.subscribe(() => {
      console.log("this is the last slide")
      this.isEndOfSlides = true
    })
  }

  // Countdown Timer
  countdownTimer(startTime){
    this.setTimer = setInterval(() => {
      var timeLeft = startTime --
      if(timeLeft < 10){
        this.showTimeLeft = "0" + timeLeft
      } else {
        this.showTimeLeft = timeLeft
      }
      if(timeLeft === 0) {    // Time out
        clearInterval(this.setTimer)
        console.log("TIME OUT")
        // show continue alert
        if(this.isEndOfSlides){ // handle last slide alert
          this.numOfQuestion++ 
          this.timeoutAlert()       
        }else {
          this.timeoutAlert()
        }
        
      }
    },1000)
  }

  // Continue Alert, sho when timeout has trigger
  private timeoutAlert() {
    this.slides.lockSwipes(false)   // allow slide to swipeable
    // alert
    let alert = this.alertCtrl.create({
      title: "Time out!",
      buttons: [{
        text: "Continue",
        handler: () => {
          // if last slide
          if(this.isEndOfSlides) {
            this.gameFinished = true
          }else {
            this.slideNext(300)
          }
        }
      }]
    })
    alert.present()
  }

  // answer2Time
  answer2Time(){
    this.oneMoreChance = true
    this.oneMoreChanceCounter++
    // can click try again button only 2 times
    if(this.oneMoreChanceCounter === 2){
      this.outOfChance = true
    }
  }

  // Option: Cut 1 answer
  cutChoice(){
    console.log("Clicked")
    if(this.slides.isBeginning() === true) {
      console.log("BEGINING OF SLIDEs")
      this.currentSlideIndex = 0 
    } else {
      console.log("Else SLide ")
      this.currentSlideIndex = this.slides.getActiveIndex()   // get current slide index
    }
    
    console.log("CURRENT SLIDE: ", this.currentSlideIndex)
    for(var i=0; i<4; i++){
      if(this.datas[this.currentSlideIndex].answers[i].isCorrect === true){
        console.log("Correct Answer is: ", i)
        this.incorrectIndex.splice(i,1)    // at position i remove 1 item
        i = 5;  // stop for loop
      }
    }
    
    console.log("incorrectIndex: ", this.incorrectIndex)
    //
    this.getRandomInt(0,2, function(ranIndex){
      if(ranIndex){
        document.getElementById(""+ranIndex).style.backgroundColor = "red"
        console.log("ranCutIndex: ", ranIndex)
      }
      
      // disabled incorrect choice
      //console.log("Disabled: ",this.incorrectIndex[ranIndex]) 
      //console.log("Disabled: ",this.datas[ranCutIndex])   
      //this.incorrectIndex.splice(ranIndex,1)    // at postion ranCutIndex remove 1 item
    })
    

  }

  getRandomInt(min, max, callback) {
    min = Math.ceil(min)
    max = Math.floor(max)
    var ranIndex = Math.floor(Math.random() * (max-min)) + min
    callback(ranIndex)
  }
 

}
