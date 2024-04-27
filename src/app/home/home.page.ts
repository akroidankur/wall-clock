import { Component, OnDestroy, OnInit } from '@angular/core';
import { ScreenOrientation, OrientationLockOptions } from '@capacitor/screen-orientation';
import { BackButtonListenerEvent, App } from '@capacitor/app';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  private backButtonListener: any;

  constructor() { }

  ngOnInit(): void {
    this.lockScreenOrientation();
    this.setupBackButtonListener();
  }

  async lockScreenOrientation() {
    try {
      const options: OrientationLockOptions = { orientation: 'landscape' };

      await ScreenOrientation.lock(options);
    } catch (error) {
      console.error('Error locking screen orientation', error);
    }
  }

  async unlockScreenOrientation() {
    try {
      await ScreenOrientation.unlock();
    } catch (error) {
      console.error('Error unlocking screen orientation', error);
    }
  }

  private setupBackButtonListener() {
    this.backButtonListener = App.addListener('backButton', (event: any) => {
      this.handleBackButton(event);
    });
  }

  private handleBackButton(event: BackButtonListenerEvent) {
    this.unlockScreenOrientation();
    App.exitApp();
  }

  ngOnDestroy() {
    if (this.backButtonListener) {
      this.backButtonListener.remove();
    }
  }
}
