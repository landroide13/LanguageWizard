import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-fab-landscape',
  templateUrl: './fab-landscape.component.html',
  styleUrls: ['./fab-landscape.component.scss'],
  imports: [IonicModule, CommonModule],
  standalone: true
})
export class FabLandscapeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
