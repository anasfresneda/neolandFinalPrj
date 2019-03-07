import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Components importados:
import { MainComponent } from './main/main.component';
import { FormComponent } from './form/form.component';
import { FichaComponent } from './ficha/ficha.component';
import { AboutComponent } from './about/about.component';
import { FuncionamientoComponent } from './funcionamiento/funcionamiento.component';
import { DownloadComponent } from './download/download.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch:'full'},
  //MAIN
  { path: 'home', component: MainComponent, children:[
    { path: 'home/about', component: AboutComponent},
    { path: 'home/funcionamiento', component: FuncionamientoComponent},
    //{ path: 'home/galeriaurbana', component: UrbanaComponent},
    { path: 'home/galeria', component: GaleriaComponent},
    { path: 'home/app', component:DownloadComponent}
  ]},
  //ROUTER-OUTLET:
  { path: 'ficha/:autorId', component: FichaComponent},
  { path: 'registro', component: FormComponent},
  { path: 'contact', component: ContactComponent},
  //Users only:
  { path: 'admin', component: LoginComponent, children:[
    { path: 'admin/registros', component: AdminComponent}
  ]},
  { path: '**', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
