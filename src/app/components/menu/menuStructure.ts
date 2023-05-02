import terms from "src/app/utils/searchTerms";

const menuStructure = [
    {
        link: '/sobre',
        tittle: 'Sobre',
        terms: terms.sobre
    },
    { 
        link: '/servicos', 
        tittle: 'Serviços',
        terms:  terms.servicos
    },
    { 
        link: '/cases', 
        tittle: 'Cases',
        terms: terms.cases,
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
        terms: terms.parceiros
    },
    { 
        link: '/carreira',
        tittle: 'Carreira',
        term: terms.carreira,
    },
    { 
        link: '/contato', 
        tittle: 'Contato',
        terms: terms.contato 
    },
];

export default menuStructure;