import { NgModule } from '@angular/core';
import { NoPreloading, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./_pages/pages/pages.module').then(m => m.PagesPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./_pages/chats/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'new-chat',
    loadChildren: () => import('./_pages/chats/new-chat/new-chat.module').then( m => m.NewChatPageModule)
  },
  {
    path: 'device',
    loadChildren: () => import('./_pages/settings/device/device.module').then( m => m.DevicePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
