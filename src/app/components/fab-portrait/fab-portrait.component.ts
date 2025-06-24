import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit() {}

}
