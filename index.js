const fs = require('fs')
const csv = require('csv-parse')
const stream = fs.createReadStream('notas_alunos.csv')


const streamCsv = csv({
    headers: true,
    delimiter: ';',
    quote: '"'
})
    .on('data', data => console.log(data))
    .on('end', () => console.log('Leitura das notas concluidas!'))
stream.pipe(streamCsv)


fs.appendFileSync('alunos_situacao.csv', 'Média dos alunos:')

