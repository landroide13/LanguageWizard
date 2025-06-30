import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { ModalService } from 'src/app/core/services/modal.service';

@Component({
  selector: 'app-progress-modal',
  templateUrl: './progress-modal.component.html',
  styleUrls: ['./progress-modal.component.scss'],
  imports:[IonicModule, CommonModule],
  standalone: true
})
export class ProgressModalComponent  implements OnInit {

  @Input() userProgress: number = 0;
  @Input() otherUsersProgress: { name: string; progress: number }[] = [];

  constructor(
    private modalCtrl: ModalController
  ) {}

  ngOnInit(): void {}

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
