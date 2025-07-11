import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlideshowPageRoutingModule } from './slideshow-routing.module';

import { SlideshowPage } from './slideshow.page';
import { FabPortraitComponent } from "../../components/fab-portrait/fab-portrait.component";
import { SlideComponent } from "../../components/slide/slide.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlideshowPageRoutingModule,
    FabPortraitComponent,
    SlideComponent
],
  declarations: [SlideshowPage]
})
export class SlideshowPageModule {}
