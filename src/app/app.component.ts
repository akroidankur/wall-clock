import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    this.initializeApp();
  }

  initializeApp() {
    SplashScreen.show({
      showDuration: 2000,
      autoHide: true,
    });
  }
}


// for screen awake
// app/src/main/java/{your-package-name}/
// package io.ankurapps.clock;

// import android.os.Bundle;
// import android.view.WindowManager.LayoutParams;
// import com.getcapacitor.BridgeActivity;

// public class MainActivity extends BridgeActivity {
//     @Override
//     public void onCreate(Bundle savedInstanceState) {
//         super.onCreate(savedInstanceState);
//         // other initialization code (if any)

//         // Keep the screen awake
//         getWindow().addFlags(LayoutParams.FLAG_KEEP_SCREEN_ON);
//     }
// }
