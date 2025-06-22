import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LevelPageRoutingModule } from './level-routing.module';

import { LevelPage } from './level.page';
import { FabPortraitComponent } from "../../components/fab-portrait/fab-portrait.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LevelPageRoutingModule,
    FabPortraitComponent
],
  declarations: [LevelPage]
})
export class LevelPageModule {}
