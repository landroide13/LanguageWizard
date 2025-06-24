import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Slide } from 'src/app/core/model/slide';
import { SlideService } from '../../core/services/slide.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
  imports: [IonicModule, CommonModule]
})
export class SlideComponent  implements OnInit, OnChanges {

  @Input() id!:number;
  slide!:Slide | null;

  constructor(private slideServ: SlideService) { }

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
      next: slide => this.slide = slide,
      error: (err) => console.error('Failed to load slide:', err)
    })
  }

  clearState(): void {
    this.slide = null;
  }
  
}
