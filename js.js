function Mostrar() {
  const uf = document.getElementById("estados").value;

  let nome, capital, gentUF, gentCapital;

  switch (uf) {
    case "AC":
      nome = "Acre";
      capital = "Rio Branco";
      gentUF = "acriano";
      gentCapital = "riobranquense";
      break;

    case "AL":
      nome = "Alagoas";
      capital = "Maceió";
      gentUF = "alagoano";
      gentCapital = "maceioense";
      break;

    case "AP":
      nome = "Amapá";
      capital = "Macapá";
      gentUF = "amapaense";
      gentCapital = "macapaense";
      break;

 case "AM":
      nome = "Amazonas";
      capital = "Manaus";
      gentUF = "amazonense";
      gentCapital = "manauara";
      break;

    case "BA":
      nome = "Bahia";
      capital = "Salvador";
      gentUF = "baiano";
      gentCapital = "soteropolitano";
      break;

    case "CE":
      nome = "Ceará";
      capital = "Fortaleza";
      gentUF = "cearense";
      gentCapital = "fortalezense";
      break;

    case "DF":
      nome = "Distrito Federal";
      capital = "Brasília";
      gentUF = "brasiliense";
      gentCapital = "brasiliense";
      break;

    case "ES":
      nome = "Espírito Santo";
      capital = "Vitória";
      gentUF = "capixaba";
      gentCapital = "vitoriense";
      break;

    case "GO":
      nome = "Goiás";
      capital = "Goiânia";
      gentUF = "goiano";
      gentCapital = "goianiense";
      break;

    case "MA":
      nome = "Maranhão";
      capital = "São Luís";
      gentUF = "maranhense";
      gentCapital = "ludovicense";
      break;

    case "MT":
      nome = "Mato Grosso";
      capital = "Cuiabá";
      gentUF = "mato-grossense";
      gentCapital = "cuiabano";
      break;

    case "MS":
      nome = "Mato Grosso do Sul";
      capital = "Campo Grande";
      gentUF = "sul-mato-grossense";
      gentCapital = "campo-grandense";
      break;

    case "MG":
      nome = "Minas Gerais";
      capital = "Belo Horizonte";
      gentUF = "mineiro";
      gentCapital = "belo-horizontino";
      break;

    case "PA":
      nome = "Pará";
      capital = "Belém";
      gentUF = "paraense";
      gentCapital = "belenense";
      break;

    case "PB":
      nome = "Paraíba";
      capital = "João Pessoa";
      gentUF = "paraibano";
      gentCapital = "pessoense";
      break;

    case "PR":
      nome = "Paraná";
      capital = "Curitiba";
      gentUF = "paranaense";
      gentCapital = "curitibano";
      break;

    case "PE":
      nome = "Pernambuco";
      capital = "Recife";
      gentUF = "pernambucano";
      gentCapital = "recifense";
      break;

    case "PI":
      nome = "Piauí";
      capital = "Teresina";
      gentUF = "piauiense";
      gentCapital = "teresinense";
      break;

    case "RJ":
      nome = "Rio de Janeiro";
      capital = "Rio de Janeiro";
      gentUF = "fluminense";
      gentCapital = "carioca";
      break;

    case "RN":
      nome = "Rio Grande do Norte";
      capital = "Natal";
      gentUF = "potiguar";
      gentCapital = "natalense";
      break;

    case "RS":
      nome = "Rio Grande do Sul";
      capital = "Porto Alegre";
      gentUF = "gaúcho";
      gentCapital = "porto-alegrense";
      break;

    case "RO":
      nome = "Rondônia";
      capital = "Porto Velho";
      gentUF = "rondoniense";
      gentCapital = "porto-velhense";
      break;

    case "RR":
      nome = "Roraima";
      capital = "Boa Vista";
      gentUF = "roraimense";
      gentCapital = "boa-vistense";
      break;

    case "SC":
      nome = "Santa Catarina";
      capital = "Florianópolis";
      gentUF = "catarinense";
      gentCapital = "florianopolitano";
      break;

    case "SP":
      nome = "São Paulo";
      capital = "São Paulo";
      gentUF = "paulista";
      gentCapital = "paulistano";
      break;

    case "SE":
      nome = "Sergipe";
      capital = "Aracaju";
      gentUF = "sergipano";
      gentCapital = "aracajuano";
      break;

    case "TO":
      nome = "Tocantins";
      capital = "Palmas";
      gentUF = "tocantinense";
      gentCapital = "palmense";
      break;

    default:
      nome = "";
      capital = "";
      gentUF = "";
      gentCapital = "";
      break;
  }

}


  