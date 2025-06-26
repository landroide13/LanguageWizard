import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LanguagePageRoutingModule } from './language-routing.module';

import { LanguagePage } from './language.page';
import { FabPortraitComponent } from 'src/app/components/fab-portrait/fab-portrait.component';
import { HeaderComponent } from "../../components/header/header.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, 
    LanguagePageRoutingModule,
    FabPortraitComponent,
    HeaderComponent
],
  declarations: [LanguagePage],
})
export class LanguagePageModule {}
