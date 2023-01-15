import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login-page',
    pathMatch: 'full'
  },
  {
    path: 'gallery',
    loadChildren: () => import('./gallery/gallery.module').then( m => m.GalleryPageModule)
  },
  {
    path: 'album',
    loadChildren: () => import('./album/album.module').then( m => m.AlbumPageModule)
  },
  {
    path: 'tracks',
    loadChildren: () => import('./tracks/tracks.module').then( m => m.TracksPageModule)
  },
  {
    path: 'card-about',
    loadChildren: () => import('./pages/card-about/card-about.module').then( m => m.CardAboutPageModule)
  },
  {
    path: 'card-new-rel',
    loadChildren: () => import('./pages/card-new-rel/card-new-rel.module').then( m => m.CardNewRelPageModule)
  },
  {
    path: 'songs',
    loadChildren: () => import('./pages/songs/songs.module').then( m => m.SongsPageModule)
  },
  {
    path: 'player',
    loadChildren: () => import('./pages/player/player.module').then( m => m.PlayerPageModule)
  },
  {
    path: 'player/:song',
    loadChildren: () => import('./pages/player/player.module').then( m => m.PlayerPageModule)
  },
  {
    path: 'album1',
    loadChildren: () => import('./album-page/album1/album1.module').then( m => m.Album1PageModule)
  },
  {
    path: 'album2',
    loadChildren: () => import('./album-page/album2/album2.module').then( m => m.Album2PageModule)
  },
  {
    path: 'album3',
    loadChildren: () => import('./album-page/album3/album3.module').then( m => m.Album3PageModule)
  },
  {
    path: 'album4',
    loadChildren: () => import('./album-page/album4/album4.module').then( m => m.Album4PageModule)
  },
  {
    path: 'album5',
    loadChildren: () => import('./album-page/album5/album5.module').then( m => m.Album5PageModule)
  },
  {
    path: 'album6',
    loadChildren: () => import('./album-page/album6/album6.module').then( m => m.Album6PageModule)
  },
  {
    path: 'album7',
    loadChildren: () => import('./album-page/album7/album7.module').then( m => m.Album7PageModule)
  },
  {
    path: 'album8',
    loadChildren: () => import('./album-page/album8/album8.module').then( m => m.Album8PageModule)
  },
  {
    path: 'album9',
    loadChildren: () => import('./album-page/album9/album9.module').then( m => m.Album9PageModule)
  },
  {
    path: 'album10',
    loadChildren: () => import('./album-page/album10/album10.module').then( m => m.Album10PageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'login-page',
    loadChildren: () => import('./login-page/login-page.module').then( m => m.LoginPagePageModule)
  },
  {
    path: 'sign-up-page',
    loadChildren: () => import('./sign-up-page/sign-up-page.module').then( m => m.SignUpPagePageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
