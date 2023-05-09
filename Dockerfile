FROM node:18 AS build

WORKDIR /app

RUN --mount=type=secret,id=GH_PAT \ 
  echo "//npm.pkg.github.com/:_authToken=$(cat /run/secrets/GH_PAT)" >> ~/.npmrc
RUN echo "@waymeet:registry=https://npm.pkg.github.com" >> ~/.npmrc

# Install dependencies
COPY src/ ./src/
COPY package*.json index.js ./
RUN npm ci --omit=dev

# Bundle app source
FROM gcr.io/distroless/nodejs:18 AS base

COPY --from=build /app /app

WORKDIR /app
EXPOSE 80
CMD ["server.js"]