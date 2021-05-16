import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ulster',
    loadChildren: () => import('./ulster/ulster.module').then( m => m.UlsterPageModule)
  },
  {
    path: 'munster',
    loadChildren: () => import('./munster/munster.module').then( m => m.MunsterPageModule)
  },
  {
    path: 'connaught',
    loadChildren: () => import('./connaught/connaught.module').then( m => m.ConnaughtPageModule)
  },
  {
    path: 'connaughtcounties',
    loadChildren: () => import('./connaughtcounties/connaughtcounties.module').then( m => m.ConnaughtcountiesPageModule)
  },
  {
    path: 'leinster',
    loadChildren: () => import('./leinster/leinster.module').then( m => m.LeinsterPageModule)
  },
  {
    path: 'leinstercounties',
    loadChildren: () => import('./leinstercounties/leinstercounties.module').then( m => m.LeinstercountiesPageModule)
  },
  {
    path: 'ulstercounties',
    loadChildren: () => import('./ulstercounties/ulstercounties.module').then( m => m.UlstercountiesPageModule)
  },
  {
    path: 'munstercounties',
    loadChildren: () => import('./munstercounties/munstercounties.module').then( m => m.MunstercountiesPageModule)
  },
  {
    path: 'world',
    loadChildren: () => import('./world/world.module').then( m => m.WorldPageModule)
  },
  {
    path: 'worldcountries',
    loadChildren: () => import('./worldcountries/worldcountries.module').then( m => m.WorldcountriesPageModule)
  },
  {
    path: 'antrim',
    loadChildren: () => import('./antrim/antrim.module').then( m => m.AntrimPageModule)
  },
  {
    path: 'antrim',
    loadChildren: () => import('./antrim/antrim.module').then( m => m.AntrimPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
