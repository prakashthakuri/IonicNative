import {Component, OnInit} from '@angular/core';
import { Vibration } from '@ionic-native/vibration/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Brightness } from '@ionic-native/brightness/ngx';
import {TextToSpeech} from '@ionic-native/text-to-speech/ngx';
import {BatteryStatus, BatteryStatusResponse} from '@ionic-native/battery-status/ngx';
import {Screenshot} from '@ionic-native/screenshot/ngx';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
    providers: [BatteryStatus]
})

export class HomePage {
  brightness: number;
  text: string;
  stat: any;

  screen: any;
  state = false;
  constructor(private vibrator: Vibration,
              private camera: Camera,
              private bright: Brightness,
              private tts: TextToSpeech,
              // public batteryStatus: BatteryStatus
              private screenShot: Screenshot,
              private toastController: ToastController
              ) {
  }

  async  presentToast() {
      const toast = await  this.toastController.create({
          message: 'This is a Toast Message.',
          duration: 2000
      });
      toast.present();
  }

  async presentToastWithOptions(){
      const toast = await this.toastController.create({
          header: 'Toast header',
          message: 'Click to Close',
          position: 'top',
          buttons: [
              {
                  side: 'start',
                  icon: 'star',
                  text: 'Favorite',
                  handler: () => {
                      console.log('Favorite clicked');
                  }
              }, {
                  text: 'Done',
                  role: 'cancel',
                  handler: () => {
                      console.log('Cancel clicked');
                  }
              }
          ]
      });
      toast.present();
  }

      //  subscription = this.batteryStatus.onChange().subscribe(status => {
      //     console.log(status.level, status.isPlugged);
      //     this.btlvl = status.level;
      //     // if (status.isPlugged === true) {
      //     //     this.btstat = 'The Mobile is Charging';
      //     // } else {
      //     //     this.btstat = 'Charging is Unplugged';
      //     // }
      // });


  // ngOnInit(): void {
  //     console.log('ionViewLoad for Battery Status');
  //     // @ts-ignore
  //     this.batteryStatus.onChange().subscribe(status => {
  //         this.stat = status.level;
  //         console.log(status.level, status.isPlugged);
  //     });
  // }

  btnClick() {
    console.log('Vibration');
    this.vibrator.vibrate(1000);
  }

  // async takePicture(): Promise<any> {
  //
  //   try {
  //     this.image = await this.camera.getPicture(this.options);
  //
  //   } catch (e) {
  //     console.log(e);
  //   }
  //
  //
  // }

  setBrightness() {

    const newBrightness = this.brightness / 10;
    this.bright.setBrightness(newBrightness);
    console.log('Set Brightness');

  }
 async getBrightness() {
    const currentBrightness = await this.bright.getBrightness();
    console.log('Working');
    console.log('The Current Brightness is: ' + currentBrightness);
  }

  // Text To Speech

  async sayText(): Promise<any> {

    try{
      await this.tts.speak(this.text);
      console.log('successful');

    } catch (e) {
      console.log(e);

    }

  }

}
