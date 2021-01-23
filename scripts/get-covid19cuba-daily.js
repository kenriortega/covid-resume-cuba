const fetch = require('node-fetch');
const fs = require('fs-extra')

const URL_COVID_CUBA = 'https://covid19cuba.github.io/covid19cubadata.github.io/api/v2/full.json'

const getResumeDailyCovid19Cuba = async () => {
    try {
        const resp = await fetch(URL_COVID_CUBA)
        const data = await resp.json()

        // Extract resume data
        const { all: { updated, resume, world_countries } } = data

        return {
            updated, resume, world_countries
        }
    } catch (err) {
        return new Error(`Error was catch: ${err.message}`)
    }
}



    ; (async () => {
        try {
            const { updated, resume, world_countries } = await getResumeDailyCovid19Cuba()

            const updatedParsered = updated.replace("/", "-").replace("/", "-")
            const [diagnosticados, activos, recuperados, evacuados, fallecidos, ...restOfElementes] = resume

            const dataToWrite = {
                updateAt: updatedParsered,
                resume: [diagnosticados, activos, recuperados, evacuados, fallecidos],
                extendResume: restOfElementes,
                world_countries
            }
            await fs.writeJson(`./data/latest.json`, dataToWrite)
        } catch (err) {
            console.log(err)
        }
    })()