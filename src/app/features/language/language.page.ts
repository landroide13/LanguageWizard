import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/core/model/language';
import { LanguageService } from '../../core/services/language.service';
import { ModalService } from '../../core/services/modal.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
  standalone: false
})
export class LanguagePage implements OnInit {

  languages: Language[] = [];

  errorMessage: string | null = null;

  constructor(
    private langService: LanguageService,
    private modalServ: ModalService
  ){ }

  ngOnInit() {
    this.getLanguages();
  }

  getLanguages(){
    this.langService.getLanguages().subscribe(
      (langs: Language[]) => {
      this.languages = langs
      console.log(langs)
    },
    (error: string) => {
      this.errorMessage = error; 
    }
  )}

  openModal(){
    this.modalServ.presentAlert('Sorry this language is not Available', 'Sorry')
  }

}

