import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../service/breadcrumb.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent implements OnInit {
  currentPage: number = 1;

  pageChanged(page: number) {
    this.currentPage = page;
  }
  
  getPaginatedServicos() {
    const startIndex = (this.currentPage - 1) * 8;
    const endIndex = startIndex + 8;
    return this.servicos.slice(startIndex, endIndex);
  }

  constructor(private breadcrumbService: BreadcrumbService) {}

  ngOnInit() {
    this.breadcrumbService.setBreadcrumb(['Home', 'Serviços']);

  }
  servicos = [
    { nome: 'Nomenclatura do Serviço1', descricao: 'Breve descritivo sobre o serviço ou exemplos de aplicações.', img: '../../../assets/images/iconExemple.png' },
    { nome: 'Nomenclatura do Serviço2', descricao: 'Breve descritivo sobre o serviço ou exemplos de aplicações.', img: '../../../assets/images/iconExemple.png'  },
    { nome: 'Nomenclatura do Serviço3', descricao: 'Breve descritivo sobre o serviço ou exemplos de aplicações.', img: '../../../assets/images/iconExemple.png'  },
    { nome: 'Nomenclatura do Serviço4', descricao: 'Breve descritivo sobre o serviço ou exemplos de aplicações.', img: '../../../assets/images/iconExemple.png'  },
    { nome: 'Nomenclatura do Serviço5', descricao: 'Breve descritivo sobre o serviço ou exemplos de aplicações.', img: '../../../assets/images/iconExemple.png'  },
    { nome: 'Nomenclatura do Serviço6', descricao: 'Breve descritivo sobre o serviço ou exemplos de aplicações.', img: '../../../assets/images/iconExemple.png'  },
    { nome: 'Nomenclatura do Serviço7', descricao: 'Breve descritivo sobre o serviço ou exemplos de aplicações.', img: '../../../assets/images/iconExemple.png'  },
    { nome: 'Nomenclatura do Serviço8', descricao: 'Breve descritivo sobre o serviço ou exemplos de aplicações.', img: '../../../assets/images/iconExemple.png'  },
    { nome: 'Nomenclatura do Serviço9', descricao: 'Breve descritivo sobre o serviço ou exemplos de aplicações.', img: '../../../assets/images/iconExemple.png'  },
    { nome: 'Nomenclatura do Serviço10', descricao: 'Breve descritivo sobre o serviço ou exemplos de aplicações.', img: '../../../assets/images/iconExemple.png'  },
    { nome: 'Nomenclatura do Serviço11', descricao: 'Breve descritivo sobre o serviço ou exemplos de aplicações.', img: '../../../assets/images/iconExemple.png'  },
    { nome: 'Nomenclatura do Serviço12', descricao: 'Breve descritivo sobre o serviço ou exemplos de aplicações.', img: '../../../assets/images/iconExemple.png'  }
    ];
}
