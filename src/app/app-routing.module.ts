import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'language',
    pathMatch: 'full'
  },
  {
    path: 'language',
    loadChildren: () => import('./features/language/language.module').then( m => m.LanguagePageModule)
  },
  {
    path: 'levels',
    loadChildren: () => import('./features/level/level.module').then( m => m.LevelPageModule)
  },
  {
    path: 'levels/:levelId',
    loadChildren: () => import('./features/step/step.module').then( m => m.StepPageModule)
  },
  {
    path: 'slideshows/:slideshowId',
    loadChildren: () => import('./features/slideshow/slideshow.module').then( m => m.SlideshowPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
