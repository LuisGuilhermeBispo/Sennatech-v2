import terms from "src/app/utils/searchTerms";

const menuStructure = [
    {
        link: '/sobre',
        tittle: 'Sobre',
        terms: terms.sobre,
        description: 'Somos parceiros das melhores soluções digitais.'
    },
    { 
        link: '/servicos', 
        tittle: 'Serviços',
        terms:  terms.servicos,
        description: 'Somos parceiros das melhores soluções digitais.'
    },
    { 
        link: '/cases', 
        tittle: 'Cases',
        terms: terms.cases,
        description: 'Clientes que afirmam nossa experiência.',
        childrens: [
            {
                link: '/cases/case/:id',
                tittle: 'Case',
                terms: terms.case
            }
        ]
    },
    { 
        link: '/parceiros',
        tittle: 'Parceiros',
        terms: terms.parceiros,
        description: 'Curadoria de parceiros reconhecidos.'
    },
    { 
        link: '/carreira',
        tittle: 'Carreira',
        terms: terms.carreira,
        description: 'Vamos nos conectar? Faça parte do nosso time.'
    },
    { 
        link: '/contato', 
        tittle: 'Contato',
        terms: terms.contato,
        description: 'Quer mais detalhes? Fale conosco.'
    },
];

export default menuStructure;