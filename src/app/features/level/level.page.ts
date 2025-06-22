import { Component, OnInit } from '@angular/core';
import { Level } from 'src/app/core/model/level';
import { LevelService } from 'src/app/core/services/level.service';

@Component({
  selector: 'app-level',
  templateUrl: './level.page.html',
  styleUrls: ['./level.page.scss'],
  standalone: false
})
export class LevelPage implements OnInit {

  levels: Level[] = [];
  errorMessage: string | null = null;

  constructor(private levelService: LevelService) { }

  ngOnInit() { 
    this.getLevels();
  }

  getLevels(){
    this.levelService.getLevels().subscribe(
      (levels: Level[]) => {
        console.log(levels)
        this.levels = levels
      },
       (error: string) => {
        this.errorMessage = error; 
      }
    )
  }

}
