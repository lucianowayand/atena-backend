FROM node:16-alpine
RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

COPY prisma ./prisma/

COPY .env ./

COPY . .

RUN npm install --frozen-lockfile
RUN npx prisma generate

EXPOSE 5000

CMD ["npm", "start"]