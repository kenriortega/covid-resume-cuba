const fetch = require("node-fetch");
const fs = require("fs-extra");

const URL_COVID_CUBA =
  "https://covid19cuba.github.io/covid19cubadata.github.io/api/v2/full.json";

const getResumeDailyCovid19Cuba = async () => {
  try {
    const resp = await fetch(URL_COVID_CUBA);
    const data = await resp.json();

    // Extract resume data
    const {
      all: { updated, resume, world_countries, affected_provinces }
    } = data;

    return {
      updated,
      resume,
      world_countries,
      affected_provinces
    };
  } catch (err) {
    return new Error(`Error was catch: ${err.message}`);
  }
};

(async () => {
  try {
    const {
      updated,
      resume,
      world_countries,
      affected_provinces
    } = await getResumeDailyCovid19Cuba();

    const updatedParsered = updated.replace("/", "-").replace("/", "-");
    const [
      diagnosticados,
      activos,
      recuperados,
      fallecidos,
      diagnosticadosNuevos,
      recuperadosNuevos,
      ...restOfElementes
    ] = resume;

    const dataToWrite = {
      updateAt: updatedParsered,
      resume: [
        diagnosticados,
        activos,
        recuperados,
        fallecidos,
        diagnosticadosNuevos,
        recuperadosNuevos
      ],
      extendResume: restOfElementes,
      affected_provinces,
      world_countries
    };
    await fs.writeJson(`./data/latest.json`, dataToWrite);
  } catch (err) {
    console.log(err);
  }
})();
