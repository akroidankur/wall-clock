import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent  implements OnInit, OnDestroy {

  constructor() { }

  images: Array<String> = [];
  currentIndex: number = 0;

  private imagePathPrefix: string = '../../assets/'
  private imagePathSuffix: string = '.jpg'

  private destroy$ = new Subject<void>();

  ngOnInit() {
    this.updateImagePath();
    interval(3000)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      });
  }

  ngOnDestroy(): void{
    this.destroy$.next();
    this.destroy$.complete();
  }

  updateImagePath(): void {
    this.images = Array.from({ length: 20 }, (_, i) => `${this.imagePathPrefix}${i + 1}${this.imagePathSuffix}`);
  }
}
