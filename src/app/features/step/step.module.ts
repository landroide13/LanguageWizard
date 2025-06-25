import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StepPageRoutingModule } from './step-routing.module';

import { StepPage } from './step.page';
import { FabPortraitComponent } from "../../components/fab-portrait/fab-portrait.component";
import { HeaderComponent } from "../../components/header/header.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StepPageRoutingModule,
    FabPortraitComponent,
    HeaderComponent
],
  declarations: [StepPage]
})
export class StepPageModule {}
