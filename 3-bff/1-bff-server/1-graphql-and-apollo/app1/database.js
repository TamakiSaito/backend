// csvからjsonタイプへ変換するpackage
const csvToJson = require('convert-csv-to-json')

const database = {
  teams: [],
  people: [],
  roles: [],
  softwares: [],
  equipments: [],
  supplies: [],
}

// ObjectをforEachするためにObject.keysが必要
Object.keys(database).forEach((key) => {
  database[key] = [
    ...database[key],
    // ","で区切ってcsvからjsonタイプへデータ変更
    ...csvToJson.fieldDelimiter(',').getJsonFromCsv(`./data/${key}.csv`)
  ]
  // stringになってしまうのでNumberをNumberへ変換
  if (database[key].length > 0) {
    const firstItem = database[key][0];
    Object.keys(firstItem).forEach((itemKey) => {
      if (database[key].every((item) => {
        return /^-?\d+$/.test(item[itemKey])
      })) {
        database[key].forEach((item) => {
          item[itemKey] = Number(item[itemKey])
        })
      }
    })
  }
})

// jsだからexportするにはモジュール化する必要がある
module.exports = database