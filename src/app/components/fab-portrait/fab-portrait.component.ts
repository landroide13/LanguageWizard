import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ModalService } from 'src/app/core/services/modal.service';

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
  @Input() side!: string;
  @Input() onOpenModal!: () => void;

  constructor(
    private router: Router,
    private modalService: ModalService,
  ) { }

  ngOnInit() {} 

  navBack(){
    this.router.navigateByUrl('/')
  } 

  navToSteps(){ 
    this.router.navigateByUrl('/levels/0')
  }

  navToLevels(){
    this.router.navigateByUrl('/levels')
  }

  openModal() {
    this.modalService.openProgressModal();
  }

  showQrMessage(){
    this.modalService.presentAlert('Sorry this Feature is not Availible', 'Sorry')
  } 

}
