import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { TimeComponent } from '../time/time.component';
import { CalendarComponent } from '../calendar/calendar.component';
import { ImageSliderComponent } from '../image-slider/image-slider.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    TimeComponent,
    CalendarComponent,
    ImageSliderComponent
  ]
})
export class HomePageModule {}
