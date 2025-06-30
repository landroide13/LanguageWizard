import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule, ToastController } from '@ionic/angular';
import { distinctUntilChanged, skip } from 'rxjs';
import { UiService } from 'src/app/core/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports:[IonicModule, CommonModule],
  standalone: true
})
export class HeaderComponent  implements OnInit {

  @Input() title!: string;
  @Input() class?: string;
  @Input() color?: string;

  netStatus$: boolean = true;

  constructor(private ui:UiService, 
    private toastController: ToastController
  ){}

  ngOnInit() {
    this.ui.isOnline$
      .pipe( 
        distinctUntilChanged(),
        skip(1),
      )
      .subscribe(async isOnline => {
        this.netStatus$ = isOnline;
        const toast = await this.toastController.create({
          message: isOnline ? 'Back online' : 'You are offline',
          duration: 3000,
          color: isOnline ? 'success' : 'danger',
        });
        await toast.present();
      }
    );   
  }
  
}
