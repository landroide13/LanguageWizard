import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AlertController, IonicModule } from '@ionic/angular';
import { Slidedetail, Slide } from 'src/app/core/model/slide';
import { SlideService } from '../../core/services/slide.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/module.d-CnjH8Dlt';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
  imports: [IonicModule, CommonModule]
})
export class SlideComponent  implements OnInit, OnChanges {

  @Input() id!:number;
  slide!:Slidedetail | null;
  @Input() order!:number; 
  @Output() btnNext = new EventEmitter();

  constructor(
    private slideServ: SlideService,
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() { 
    this.loadSlide();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['id'] && this.id !== null) {
      this.loadSlide();
    } else { 
      this.clearState();
    }
  }

  loadSlide(){
    this.slideServ.getSlideById(this.id).subscribe({
      next: (slide: Slidedetail) => this.slide = slide,
      error: (err: HttpErrorResponse) => {
          if (err.status === 404) {
            this.presentAlert(err.message)
          } else {
            this.presentAlert(err.message)
            console.error('Unexpected error', err);
          }
        }
    })
  }
 
  clearState(): void { 
    this.slide = null;
  }

  async presentAlert(err: string) {
    const alert = await this.alertController.create({
      header: 'Sorry, This Lesson is not Available',
      buttons: ['Close'],
    });

    await alert.present();
  }

  onNextSlide(){
    this.btnNext.emit()
  }
  
  
}
