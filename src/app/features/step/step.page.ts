import { HttpErrorResponse } from '@angular/common/module.d-CnjH8Dlt';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { LevelDetail } from 'src/app/core/model/levelDetail';
import { LevelService } from 'src/app/core/services/level.service';
import { ModalService } from 'src/app/core/services/modal.service';

@Component({
  selector: 'app-step',
  templateUrl: './step.page.html',
  styleUrls: ['./step.page.scss'],
  standalone: false
})
export class StepPage implements OnInit, AfterViewInit {

  level!: LevelDetail;
  levelId!: number;

  activeIndex!: number;
  errorMessage!: string | null;

  constructor(
    private actRoute: ActivatedRoute,   
    private navCtr: NavController,
    private levelServ: LevelService,
    private modalServ: ModalService
  ) { }

  ngOnInit() {
    this.loadStep();
    this.animateClimb();
  }
 
  // Effect flip cat icon.
  ngAfterViewInit() {
    setInterval(() => {
      const el = document.querySelector('.flip-icon');
      el?.classList.add('flipped');
      setTimeout(() => el?.classList.remove('flipped'), 1000);
    }, 3000);  
  }

  //Load and Display Steps.
  loadStep(){
    this.actRoute.paramMap.subscribe(paramMap => {
      this.levelId = +this.actRoute.snapshot.paramMap.get('id')!;
      if(!paramMap.has('levelId') || null){
        this.navCtr.navigateBack('/levels');
        return;
      }
      this.levelServ.levelDetail(this.levelId).subscribe({
        next: (res) => {
          this.level = res;
          this.activeIndex = this.level.steps.length - 1;
        },
        error: (err: HttpErrorResponse) => {
          this.modalServ.presentAlert(err.message, 'Sorry API Unable to Load Steps')
          console.error('Failed to load level detail', err);
        }
      });
    })
  }
 
  //Progress Make the Cat Climb up next Steps.( Not Set yet.)
  async animateClimb() {
    for (let i = this.level.steps.length - 1; i >= 0; i--) {
      this.activeIndex = i;
      await this.delay(600); 
    }
  } 

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }



}  
