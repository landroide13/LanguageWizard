import { Injectable } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ProgressModalComponent } from 'src/app/components/progress-modal/progress-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalCtrl: ModalController, private alertCtr: AlertController) { }

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

  async presentAlert(msg: string, header: string) {
    const alert = await this.alertCtr.create({
      header: `${header}`,
      message: `${msg}`,
      buttons: ['Close'],
    });

    await alert.present();
  }


}
