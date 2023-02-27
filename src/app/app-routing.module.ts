import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CarreiraComponent } from './pages/carreira/carreira.component';
import { CasesComponent } from './pages/cases/cases.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { ParceirosComponent } from './pages/parceiros/parceiros.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { SobreComponent } from './pages/sobre/sobre.component';

const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {path: 'home', component: HomeComponent},
      {path: 'sobre', component: SobreComponent},
      {path: 'servicos', component: ServicosComponent},
      {path: 'cases', component: CasesComponent },
      {path: 'parceiros', component: ParceirosComponent },
      {path: 'carreira', component: CarreiraComponent },
      {path: 'contato', component: ContatoComponent },
      {path: '**', component: ErrorComponent},
     ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
