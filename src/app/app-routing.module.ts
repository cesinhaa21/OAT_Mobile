import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/home.module').then(m => m.HomePageModule)
  },
  { 
    path: 'filmes', 
    loadChildren: './filmes/listagem.module#ListagemPageModule' 
  },
  { 
    path: 'adicionar', 
    loadChildren: './adicionarFilme/formulario.module#FormularioPageModule' 
  },
  { 
    path: 'modal', 
    loadChildren: './modal/modal.module#ModalPageModule' 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
