import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';


import {MaterialModule} from '../app/material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { CasesComponent } from './pages/cases/cases.component';
import { ParceirosComponent } from './pages/parceiros/parceiros.component';
import { CarreiraComponent } from './pages/carreira/carreira.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { ResultadosComponent } from './pages/resultados/resultados.component';
import { ErrorComponent } from './pages/error/error.component';
import { SearchComponent } from './components/shared/search/search.component';
import { PaginationComponent } from './components/shared/pagination/pagination.component';
import { CarouselComponent } from './components/shared/carousel/carousel.component';
import { BreadcrumbComponent } from './components/shared/breadcrumb/breadcrumb.component';
import { SliderComponent } from './components/shared/slider/slider.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CaseComponent } from './pages/case/case.component';
import { VagaComponent } from './pages/vaga/vaga.component';



@NgModule({
  declarations: [
    MenuComponent,
    AppComponent,
    FooterComponent,
    HomeComponent,
    SobreComponent,
    ServicosComponent,
    CasesComponent,
    ParceirosComponent,
    CarreiraComponent,
    ContatoComponent,
    ResultadosComponent,
    ErrorComponent,
    SearchComponent,
    PaginationComponent,
    CarouselComponent,
    BreadcrumbComponent,
    SliderComponent,
    CaseComponent,
    VagaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    CarouselModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
