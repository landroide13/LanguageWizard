import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/core/model/language';
import { LanguageService } from '../../core/services/language.service';
import { ModalService } from '../../core/services/modal.service';
import { HttpErrorResponse } from '@angular/common/module.d-CnjH8Dlt';

@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
  standalone: false
})
export class LanguagePage implements OnInit {

  languages: Language[] = [];

  constructor(
    private langService: LanguageService,
    private modalServ: ModalService
  ){ }

  ngOnInit() {
    this.getLanguages();
  }

  // Load and Display Languages.
  getLanguages(){
    this.langService.getLanguages().subscribe(
      (langs: Language[]) => {
      this.languages = langs
    },
    (error: HttpErrorResponse) => {
      this.modalServ.presentAlert(error.message, 'Sorry API Error');
    }
  )}

  // Display Alert with error.
  openModal(){
    this.modalServ.presentAlert('Sorry this language is not Available', 'Sorry')
  }


  
}

