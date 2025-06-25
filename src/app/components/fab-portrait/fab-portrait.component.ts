import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-fab-portrait',
  templateUrl: './fab-portrait.component.html',
  styleUrls: ['./fab-portrait.component.scss'],
  imports: [IonicModule, CommonModule],
  standalone: true
})
export class FabPortraitComponent  implements OnInit {

  @Input() vertical!: string;
  @Input() horizontal!: string;

  constructor(private router: Router) { }

  ngOnInit() {} 

  navBack(){
    this.router.navigateByUrl('/')
  }

  navToLevels(){
    this.router.navigateByUrl('/levels/0')
  }
}
