import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../service/breadcrumb.service';

@Component({
  selector: 'app-carreira',
  templateUrl: './carreira.component.html',
  styleUrls: ['./carreira.component.scss']
})
export class CarreiraComponent implements OnInit {
  constructor(private breadcrumbService: BreadcrumbService) {}

  ngOnInit() {
    this.breadcrumbService.setBreadcrumb(['Home', 'Carreira']);
  }
  vagas = [
    { location: 'Brasil - Remoto', vagaNome: 'Front End CSS Developer', link: './vaga' },
    { location: 'Brasil - Remoto', vagaNome: 'Front End CSS Developer', link: './vaga'  },
    { location: 'Brasil - Remoto', vagaNome: 'Front End CSS Developer', link: './vaga'  },
    { location: 'Brasil - Remoto', vagaNome: 'Front End CSS Developer', link: './vaga'  },
    { location: 'Brasil - Remoto', vagaNome: 'Front End CSS Developer', link: './vaga'  },
    { location: 'Brasil - Remoto', vagaNome: 'Front End CSS Developer', link: './vaga'  },
    { location: 'Brasil - Remoto', vagaNome: 'Front End CSS Developer', link: './vaga'  },
    { location: 'Brasil - Remoto', vagaNome: 'Front End CSS Developer', link: './vaga'  },
    { location: 'Brasil - Remoto', vagaNome: 'Front End CSS Developer', link: './vaga'  },
    { location: 'Brasil - Remoto', vagaNome: 'Front End CSS Developer', link: './vaga'  },
    { location: 'Brasil - Remoto', vagaNome: 'Front End CSS Developer', link: './vaga'  },
    { location: 'Brasil - Remoto', vagaNome: 'Front End CSS Developer', link: './vaga'  }
    ];
}

