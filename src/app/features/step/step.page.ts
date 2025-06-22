import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { LevelDetail } from 'src/app/core/model/levelDetail';
import { LevelService } from 'src/app/core/services/level.service';

@Component({
  selector: 'app-step',
  templateUrl: './step.page.html',
  styleUrls: ['./step.page.scss'],
  standalone: false
})
export class StepPage implements OnInit {

  level!: LevelDetail;
  levelId!: number;

  constructor(private actRoute: ActivatedRoute, 
    private navCtr: NavController,
    private levelServ: LevelService
  
  ) { }

  ngOnInit() {
    this.loadStep();
  }

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
          console.log(res)
        },
        error: (err) => {
          console.error('Failed to load level detail', err);
        }
      });
    })
  }

}  
