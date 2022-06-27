# Desafio de admissão - Atena.io
Servidor implementado utilizando `Node.js` + `Express` utilizando `PostgreSQL` como banco de dados e o `Prisma ORM` para facilitar o acesso e edição do banco de dados

## Dependências
Para facilitar a montagem do servidor, montei uma _Dockerização_ do banco de dados para facilitar sua montagem. Logo, é necessário ter instalado:
* Docker
* Docker Compose

Neste momento removi o servidor `express` do docker para facilitar a execução de comandos referentes ao banco de dados, por este motivo o `npm` ou `yarn` são necessários para executar o programa

## Executando 
### Banco de dados - Docker
Para executar o banco de dados com o docker execute 
```
docker compose up
``` 
Na primeira execução pode levar algum tempo devido ao tempo de montagem, caso queira ter certeza que o docker será montado corretamente, na primeira vez que usar execute usando a flag build: 
```
docker compose up --build
```

### Servidor - Express
Durante a primeira montagem precisamos executar as migrações e comandos referente ao prisma, em ordem são:
```
npx prisma generate
npx prisma migrate dev
node prisma/seed.js
```

Com tudo configurado podemos executar o programa com o comando:
```
npm start
```