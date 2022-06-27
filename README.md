# Desafio de admissão - Atena.io
Servidor implementado utilizando `Node.js` + `Express` utilizando `PostgreSQL` como banco de dado e o `Prisma ORM` para facilitar o acesso e edição do banco de dados

## Dependências

### Docker
Para facilitar a montagem do servidor, montei uma _Dockerização_ do programa para facilitar a montagem do programa

Logo, é necessário ter instalado:
* Docker
* Docker Compose

### Manualmente
Caso seja necessário a montagem manual do programa ele necessita:
* NPM
* PostgreSQL

instale a versão mais recente do `Node.js` usando o comando `npm install latest` e configure o banco de dados `PostgreSQL` como for necessário.

## Executando 
### Docker
Para executar o programa com o docker execute 
```
docker compose up
``` 
Na primeira execução pode levar algum tempo devido ao tempo de montagem, caso queira ter certeza que o docker será montado corretamente, na primeira vez que usar execute usando a flag build: 
```
docker compose up --build
```

### Manualmente
Com o `NodeJs` e `PostgreSQL` configurados precisamos instalar as dependencias do package.json e criar as migrações do prisma antes de executar o projeto. fazemos isso com os comandos:
```
npm install --frozen-lockfile 
npx prisma generate
```
Caso não ocorram erros podemos executar o programa com o comando 
```
npm start
```