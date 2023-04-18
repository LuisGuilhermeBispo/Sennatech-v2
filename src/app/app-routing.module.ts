import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { CasesComponent } from './pages/cases/cases.component';
import { CaseComponent } from './pages/case/case.component';
import { ParceirosComponent } from './pages/parceiros/parceiros.component';
import { CarreiraComponent } from './pages/carreira/carreira.component';
import { VagaComponent } from './pages/vaga/vaga.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { ErrorComponent } from './pages/error/error.component';
import { InscricaoComponent } from './pages/inscricao/inscricao.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { breadcrumb: 'Home' }
  },
  {
    path: 'sobre',
    component: SobreComponent,
    data: { breadcrumb: 'Sobre' }
  },
  {
    path: 'servicos',
    component: ServicosComponent,
    data: { breadcrumb: 'Serviços' }
  },
  {
    path: 'cases',
    component: CasesComponent,
    data: { breadcrumb: 'Cases' },
  },
  {
    path: 'cases/case',
    component: CaseComponent,
    data: { breadcrumb: 'Case' }
  },
  {
    path: 'parceiros',
    component: ParceirosComponent,
    data: { breadcrumb: 'Parceiros' }
  },
  {
    path: 'carreira',
    component: CarreiraComponent,
    data: { breadcrumb: 'Carreira' },
  },
  {
    path: 'carreira/vaga',
    component: VagaComponent,
    data: { breadcrumb: 'Vaga' }
  },
  {
    path: 'carreira/vaga/inscricao',
    component: InscricaoComponent,
    data: { breadcrumb: 'Inscrição' }
  },
  {
    path: 'contato',
    component: ContatoComponent,
    data: { breadcrumb: 'Contato' }
  },
  {
    path: '**',
    component: ErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
