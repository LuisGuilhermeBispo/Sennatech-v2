import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../service/breadcrumb.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-vaga',
  templateUrl: './vaga.component.html',
  styleUrls: ['./vaga.component.scss'],
  providers: [HttpClient]
})
export class VagaComponent implements OnInit {
  vagaSelecionada: any[] = [];

  atividades: any[] = [];
  requisitos: any[] = [];
  qualificacoes: any[] = [];
  diferenciais: any[] = [];
  beneficios: any[] = [];

  vagasRelacionadas: any[] = [];

  constructor(private breadcrumbService: BreadcrumbService, 
              private http: HttpClient, 
              private route: ActivatedRoute,
              private router: Router) {}

  goToRelatedVaga(id: string) {
    this.router.navigate(['carreira/vaga', id]);

    this.ngOnInit();
  }

  async ngOnInit() {

    this.http.get<any[]>('../../../assets/vagas.json').subscribe(data => {
      const listaVagas = data;

      const id = this.route.snapshot.params['id'];

      const vagaFiltrada = listaVagas.filter(element => element.codVaga === id);
      const listaVagasRelacionadas = listaVagas.filter(element => (element.funcao === vagaFiltrada[0].funcao) && (element.codVaga !== id));

      this.vagaSelecionada = vagaFiltrada;
      this.vagasRelacionadas = listaVagasRelacionadas;

      this.atividades = vagaFiltrada[0].descricaoVaga.atividades;
      this.requisitos = vagaFiltrada[0].descricaoVaga.requisitos;
      this.qualificacoes = vagaFiltrada[0].qualificacoes.tecnologiasExigidas;
      this.diferenciais = vagaFiltrada[0].diferenciais.tecnologiasDesejaveis;
      this.beneficios = vagaFiltrada[0].beneficios;
      
      this.breadcrumbService.setBreadcrumb([
        { text: 'Home', route: '' },
        { text: 'Carreira', route: '/carreira' },
        { text: `Vaga ${vagaFiltrada[0].funcao}`, route: `/carreira/vaga/${id}` },
      ]);
    });

  }
}
