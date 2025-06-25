import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { UiService } from 'src/app/core/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports:[IonicModule, CommonModule]
})
export class HeaderComponent  implements OnInit {

  @Input() title!: string;
  @Input() class?: string;
  @Input() color!: string;

  netStatus$: boolean = true;

  constructor(private ui:UiService) { }

  ngOnInit() {
    this.getNetworkStatus(); 
  }

  getNetworkStatus(){
    this.ui.status$.subscribe(isOnline => {
    if (!isOnline) {
      this.netStatus$ = false
      console.log('You are offline');
    } else {
      this.netStatus$ = true;
      console.log('Back online');
    }
    });
  }
  
}
