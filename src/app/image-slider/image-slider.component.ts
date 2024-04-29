import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent  implements OnInit, OnDestroy {
  readonly vid1 = '../../assets/InShot_20240311_210943600.mp4'
  readonly vid2 = '../../assets/VID20240313071016.mp4'

  images: Array<String> = [];
  currentIndex: number = 0;

  private readonly imagePathPrefix: string = '../../assets/'
  private readonly imagePathSuffix: string = '.jpg'

  private destroy$ = new Subject<void>();

  constructor() { }

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
