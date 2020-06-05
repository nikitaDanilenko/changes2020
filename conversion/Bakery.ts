const fs = require('fs')
const csvParser = require('csv-parser')

export type BakeryData = {
  date: Date,
  bread: number,
  rolls: number,
  croissants: number,
  pastry: number,
  cake: number,
  seasonalBread: number
}

type RawBakeryData = {
  Datum: Date,
  Warengruppe: number,
  Umsatz: number
}

export const parseRaw = (filePath: string) => {
  const results: RawBakeryData[] = []
  fs.createReadStream(filePath)
    .on('error', () => console.log('Failure during file stream creation'))
    .on('data', (data) => {
        const rawData = {
          Datum: new Date(data["Datum"]),
          Warengruppe: parseInt(data["Warengruppe"]),
          Umsatz: parseFloat(data["Umsatz"])
        }
        results.push(data)
      }
    )
    .pipe(csvParser())
  return results
}

const groupOrZero = (rawBakeryData: RawBakeryData, position: number) => {
  return rawBakeryData.Warengruppe == position ? rawBakeryData.Warengruppe : 0
}

const mkSingleBakeryData = (rawBakeryData: RawBakeryData) => {
  return {
    date: rawBakeryData.Datum,
    bread: groupOrZero(rawBakeryData, 0),
    rolls: groupOrZero(rawBakeryData, 1),
    croissants: groupOrZero(rawBakeryData, 2),
    pastry: groupOrZero(rawBakeryData, 3),
    cake: groupOrZero(rawBakeryData, 4),
    seasonalBread: groupOrZero(rawBakeryData, 5)
  }
}


const mkBakeryData: (rawBakeryEntries: RawBakeryData[]) => BakeryData[] = (rawBakeryEntries: RawBakeryData[]) => {
  const singletons = rawBakeryEntries.map(mkSingleBakeryData)
  const map = new Map<Date, BakeryData>()
  singletons.forEach(bakeryData => {
    if (map.has(bakeryData.date)) {
      const inMap = map.get(bakeryData.date)
      const newData = {
        date: bakeryData.date,
        bread: bakeryData.bread + inMap.bread,
        rolls: bakeryData.rolls + inMap.rolls,
        croissants: bakeryData.croissants + inMap.croissants,
        pastry: bakeryData.pastry + inMap.pastry,
        cake: bakeryData.cake + inMap.cake,
        seasonalBread: bakeryData.seasonalBread + inMap.seasonalBread
      }
      map.set(bakeryData.date, newData)
    } else
      map.set(bakeryData.date, bakeryData)
  })

  return rawBakeryEntries.map(mkSingleBakeryData)
}