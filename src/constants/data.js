import images from "./images";

const wines = [
  {
    title: "Chapel Hill Shiraz",
    price: "R$56",
    tags: "AU | Garrafa",
  },
  {
    title: "Catena Malbee",
    price: "R$59",
    tags: "AU | Garrafa",
  },
  {
    title: "La Vieillw Rose",
    price: "R$44",
    tags: "FR | 750 ml",
  },
  {
    title: "Rhino Pale Ale",
    price: "R$31",
    tags: "CA | 750 ml",
  },
  {
    title: "Irish Guinness",
    price: "R$26",
    tags: "IE | 750 ml",
  },
];

const cocktails = [
  {
    title: "Aperol Spritz",
    price: "R$20",
    tags: "Aperol | Villa Marchesi prosecco | soda | 30 ml",
  },
  {
    title: "Dark 'N' Stormy",
    price: "R$16",
    tags: "Rum escuro | Cerveja de gengibre | Fatia de limão",
  },
  {
    title: "Daiquiri",
    price: "R$10",
    tags: "Rum | Suco cítrico | Açúcar",
  },
  {
    title: "Old Fashioned",
    price: "R$31",
    tags: "Bourbon | Açúcar mascavo | Angostura Bitters",
  },
  {
    title: "Negroni",
    price: "R$26",
    tags: "Gin | Vermute doce | Campari | Enfeite de laranja",
  },
];

const awards = [
  {
    imgUrl: images.award01,
    title: "Guia Michelin - Bib Gourmand",
    subtitle: "Reconhecimento por excelente relação qualidade-preço.",
  },
  {
    imgUrl: images.award02,
    title: "Estrela em Ascensão",
    subtitle: "Prêmio concedido ao talento emergente na gastronomia.",
  },
  {
    imgUrl: images.award03,
    title: "Certificado de Hospitalidade AA",
    subtitle: "Prêmio de excelência em atendimento e hospitalidade.",
  },
  {
    imgUrl: images.award05,
    title: "Chef de Destaque",
    subtitle: "Reconhecimento ao chef com desempenho excepcional no ano.",
  },
];

export default { wines, cocktails, awards };
