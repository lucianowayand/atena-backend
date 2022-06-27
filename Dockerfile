FROM node:lts

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

COPY prisma ./prisma/

COPY .env ./

COPY . .

RUN npm install --frozen-lockfile
RUN npx prisma generate

EXPOSE 5000

# COMMENT THIS FOR PROD
ENTRYPOINT [ "node", "src/index.js" ]
