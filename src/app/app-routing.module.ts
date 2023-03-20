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
// import { BreadcrumbResolverService } from './service/breadcrumb-resolver.service';

const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {path: 'home', component: HomeComponent, data: { breadcrumb: 'Home' }},
      {path: 'sobre', component: SobreComponent, data: { breadcrumb: 'Sobre' }},
      {path: 'servicos', component: ServicosComponent, data: { breadcrumb: 'Serviços' }},
      {path: 'cases', component: CasesComponent, data: { breadcrumb: 'Cases' },
        // children: [
        //   {
        //     path: ':id',
        //     component: CasesComponent,
        //     data: { breadcrumb: (data: any) => `${data.user.name}` },
        //     resolve: { user: BreadcrumbResolverService }
        //   }
        // ]
      },
      {path: 'parceiros', component: ParceirosComponent, data: { breadcrumb: 'Parceiros' } },
      {path: 'carreira', component: CarreiraComponent, data: { breadcrumb: 'Carreira' } },
      {path: 'contato', component: ContatoComponent, data: { breadcrumb: 'Contato' } },
      {path: '**', component: ErrorComponent},
     ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
