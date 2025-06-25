import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/core/model/language';
import { LanguageService } from '../../core/services/language.service';

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

}

