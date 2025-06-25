import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProgressModalComponent } from 'src/app/components/progress-modal/progress-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalCtrl: ModalController) { }

  async openProgressModal() {
    const modal = await this.modalCtrl.create({
      component: ProgressModalComponent,
      componentProps: { userProgress: 60, 
        otherUsersProgress: [
          { name: 'Alice', progress: 80 },
          { name: 'Bob', progress: 60 },
          { name: 'Karen', progress: 50 },
        ] }
    });
    await modal.present();
  }

}
