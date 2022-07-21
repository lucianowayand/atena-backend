# Desafio de admissão - Fullstack
Servidor implementado utilizando `Node.js` + `Express` utilizando `PostgreSQL` como banco de dados e o `Prisma ORM` para facilitar o acesso e edição do banco de dados.

Está incluso na pasta requests arquivos http de execução de requests, para serem executados usando o Rest client ou o programa Insomnia

## Dependências
Para facilitar a montagem do servidor, montei uma _Dockerização_ do servidor para facilitar sua montagem. Logo, é necessário ter instalado:
* Docker
* Docker Compose

Caso deseje montar manualmente, sugiro que instale o gerenciador de pacotes `npm`e instale a versão do node `latest`
* PostgreSQL
* Node.js

## Executando 
### Com o Docker
Para executar o servidor com o docker execute 

```bash
docker compose up
``` 

Na primeira execução pode levar algum tempo devido ao tempo de montagem, caso queira ter certeza que o docker será montado corretamente, na primeira vez que usar execute usando a flag build: 

```bash
docker compose up --build
```

Após feito a montagem do servidor é preciso que em outro terminal sejam executados os comandos relacionados ao prisma, são eles:

```bash
  docker-compose run atena-backend npx prisma generate
  docker-compose run atena-backend npx prisma migrate dev
  docker-compose run atena-backend node prisma/seed.js
```


### Manualmente
Para executar o servidor manualmente execute na pasta raiz do projeto:
```
npm install nodemon -g
npm install
```
Altere o caminho ao banco de dados PostgreSQL no arquivo `.env` para o seu endereço de conexão especifico.

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
