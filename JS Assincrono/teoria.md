### Promises
Objeto de processamento assíncrono
Inicialmente, o valor dela é desconhecido, pode se tornar:
resolved ou rejected

Estados:
1) Pending
2) Fulfilled
3) Rejected

### APIs e Fetch
#### API
- Application Programming Interface
- Intermediar os resultados do back com o que é apresentado no front a partir de URLs]

#### Fetch
fetch(url, options)
    .then(response => response.json())
    .then(json => console.log(json))
//retorna uma promise

opções: POST, GET, PUT, DELETE, etc
fetch('https://endereco-api.com/', {
    method: 'GET',
    cache: 'no-cache',
})
    .then(response => response.json())