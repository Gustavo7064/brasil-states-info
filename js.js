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

  }}