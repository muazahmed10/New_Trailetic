import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
//  {
 //   path: '',
   // loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
 // },

{
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadChildren: () => import('./tab3/tab3.module').then(m => m.Tab3PageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
  },

  { path: 'dashboard',
   loadChildren: () => import('./dashboard/dashboard.module' ).then(m => m.DashboardPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
