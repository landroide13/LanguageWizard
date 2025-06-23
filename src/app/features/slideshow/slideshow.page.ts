import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Slideshow } from 'src/app/core/model/slideshow';
import { SlideshowService } from 'src/app/core/services/slideshow.service';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.page.html',
  styleUrls: ['./slideshow.page.scss'],
  standalone: false
})
export class SlideshowPage implements OnInit {

  slideShow!: Slideshow;
  slideShowId!: number;

  constructor(
    private slideShowServ: SlideshowService, 
    private actRoute: ActivatedRoute, 
    private navCtr: NavController
  ) { }

  ngOnInit() {
    this.getSlides();
  }

  getSlides(){
    this.actRoute.paramMap.subscribe(paramMap => {
      const id = +this.actRoute.snapshot.paramMap.get('slideshowId')!;
      if(!paramMap.has('slideshowId') || null){
        this.navCtr.navigateBack('/levels/0');
        console.log(id)
        return;
      }
      this.slideShowId = id;
      console.log(this.slideShowId)
      this.slideShowServ.getSlide(this.slideShowId).subscribe({
        next: (res) => {
          this.slideShow = res;
          console.log(res)
        },
        error: (err) => {
          console.error('Failed to load slide', err);
        }
      });
    })
  }



}
