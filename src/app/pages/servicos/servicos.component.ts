import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../service/breadcrumb.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent implements OnInit {
  constructor(private breadcrumbService: BreadcrumbService) {}

  ngOnInit() {
    this.breadcrumbService.setBreadcrumb(['Home', 'Serviços']);

  }
  servicos = [
    { nome: 'Nomenclatura do Serviço', descricao: 'Breve descritivo sobre o serviço ou exemplos de aplicações.', img: '../../../assets/images/iconExemple.png' },
    { nome: 'Nomenclatura do Serviço', descricao: 'Breve descritivo sobre o serviço ou exemplos de aplicações.', img: '../../../assets/images/iconExemple.png'  },
    { nome: 'Nomenclatura do Serviço', descricao: 'Breve descritivo sobre o serviço ou exemplos de aplicações.', img: '../../../assets/images/iconExemple.png'  },
    { nome: 'Nomenclatura do Serviço', descricao: 'Breve descritivo sobre o serviço ou exemplos de aplicações.', img: '../../../assets/images/iconExemple.png'  },
    { nome: 'Nomenclatura do Serviço', descricao: 'Breve descritivo sobre o serviço ou exemplos de aplicações.', img: '../../../assets/images/iconExemple.png'  },
    { nome: 'Nomenclatura do Serviço', descricao: 'Breve descritivo sobre o serviço ou exemplos de aplicações.', img: '../../../assets/images/iconExemple.png'  },
    { nome: 'Nomenclatura do Serviço', descricao: 'Breve descritivo sobre o serviço ou exemplos de aplicações.', img: '../../../assets/images/iconExemple.png'  },
    { nome: 'Nomenclatura do Serviço', descricao: 'Breve descritivo sobre o serviço ou exemplos de aplicações.', img: '../../../assets/images/iconExemple.png'  },
    { nome: 'Nomenclatura do Serviço', descricao: 'Breve descritivo sobre o serviço ou exemplos de aplicações.', img: '../../../assets/images/iconExemple.png'  },
    { nome: 'Nomenclatura do Serviço', descricao: 'Breve descritivo sobre o serviço ou exemplos de aplicações.', img: '../../../assets/images/iconExemple.png'  },
    { nome: 'Nomenclatura do Serviço', descricao: 'Breve descritivo sobre o serviço ou exemplos de aplicações.', img: '../../../assets/images/iconExemple.png'  },
    { nome: 'Nomenclatura do Serviço', descricao: 'Breve descritivo sobre o serviço ou exemplos de aplicações.', img: '../../../assets/images/iconExemple.png'  }
    ];
}
