import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesPage } from './pages.page';

const routes: Routes = [
  {
    path: 'pages',
    component: PagesPage,
    children: [
      {
        path: 'chats',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../chats/chats.module').then(m => m.ChatsPageModule)
          },
          {
            path: 'chat/:key/:username/:msgs/:msg_len',
            loadChildren: () =>
              import('../chats/chat/chat.module').then(m => m.ChatPageModule)
          }
        ]
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../settings/settings.module').then(m => m.SettingsPageModule)
          },
          {
            path: 'layout',
            loadChildren: () =>
              import('../settings/layout/layout.module').then(m => m.LayoutPageModule)
          },
          {
            path: 'app-info',
            loadChildren: () =>
              import('../settings/app-info/app-info.module').then(m => m.AppInfoPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/pages/chats',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/pages/chats',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesPageRoutingModule {}
