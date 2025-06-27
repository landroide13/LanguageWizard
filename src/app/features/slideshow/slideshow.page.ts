import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { Slideshow } from 'src/app/core/model/slideshow';
import { SlideshowService } from 'src/app/core/services/slideshow.service';
import { ScreenOrientation } from '@capacitor/screen-orientation';
import { Slide } from 'src/app/core/model/slide';
import { HttpErrorResponse } from '@angular/common/module.d-CnjH8Dlt';
import { SlideService } from 'src/app/core/services/slide.service';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.page.html',
  styleUrls: ['./slideshow.page.scss'],
  standalone: false
})
export class SlideshowPage implements OnInit, OnDestroy {

  slideShow!: Slideshow;
  slideShowId!: number;
  seletedSlide!: Slide | null;
  nextSelectedSlide!: Slide | null;

  isAlertOpen = false;
  alertButtons = ['Action'];

  constructor(
    private slideShowServ: SlideshowService, 
    private actRoute: ActivatedRoute, 
    private navCtr: NavController,
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.getSlides();
    this.toLandscape();   
  }

  getSlides(){
    this.actRoute.paramMap.subscribe(paramMap => {
      const id = +this.actRoute.snapshot.paramMap.get('slideshowId')!;
      if(!paramMap.has('slideshowId') || null){
        this.navCtr.navigateBack('/levels/0');
        return;
      }
      this.slideShowId = id;
      this.slideShowServ.getSlide(this.slideShowId).subscribe({
        next: (res) => {
          this.slideShow = res;
        },
        error: (err) => {
          if (err.status === 404) {
            this.presentAlert('Sorry, This Content is Unable');
            this.router.navigate(['/levels/0']);  
          } else {
            this.presentAlert('Sorry, There is a problem with server.');
            this.router.navigate(['/levels/0']);
            console.error('Unexpected error', err); 
          }
        }
      });
    })
  }

  async toLandscape(){
    try {
      await ScreenOrientation.lock({ orientation: 'landscape' });
    } catch (err) {
      console.error('Failed to lock orientation', err);
    }
  }

  async ngOnDestroy() {
    try {
      await ScreenOrientation.unlock();
    } catch (err) {
      console.error('Failed to unlock orientation', err);
    }
  }

  onSelectedSlide(slide:Slide){
    this.seletedSlide = slide;
    console.log(slide)
  }

  onSelectNextSlide(){
    let id = this.seletedSlide?.id! + 1;
    this.slideShowServ.getSlide(this.slideShowId).subscribe({
      next: (res) => {
          this.seletedSlide = res.slides[id];
        },
      error: (err: HttpErrorResponse) => {
        if(err.status === 404) {
          this.presentAlert('Sorry, This Content is Unable');
          this.router.navigate(['/levels/0']);  
        } else {
          this.presentAlert('Sorry, There is a problem with server.');
          this.router.navigate(['/levels/0']);
          console.error('Unexpected error', err.message); 
        }
      }
    }) 
  }

  async presentAlert(err: string) {
    const alert = await this.alertController.create({
      header: `${err}`,
      buttons: ['Close'],
    });
    await alert.present();
  }


}
