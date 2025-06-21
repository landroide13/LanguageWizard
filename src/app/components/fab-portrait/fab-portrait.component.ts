import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonIcon, IonFab } from "@ionic/angular/standalone";

@Component({
  selector: 'app-fab-portrait',
  templateUrl: './fab-portrait.component.html',
  styleUrls: ['./fab-portrait.component.scss'],
  imports: [IonicModule, CommonModule],
  standalone: true
})
export class FabPortraitComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
