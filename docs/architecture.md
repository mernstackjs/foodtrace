# FoodTrace – Arkitektur

## Översikt

FoodTrace använder:

- React
- Node.js + Express
- MongoDB Cluster
- Solidity + Hardhat
- Socket.IO
- Docker

## Arkitektur

```text
React
  |
REST API + Socket.IO
  |
Node.js + Express
  |
  |-------- MongoDB Cluster
  |
  |-------- Smart Contract
             Solidity
             Hardhat
```

## Frontend

React används för:

- login
- dashboard
- skapa batch
- lägga till information
- visa produktens historia
- QR-kod

## Backend

Node.js och Express används för:

- REST API
- JWT
- roller
- MongoDB
- blockchain
- Socket.IO

## MongoDB

MongoDB Cluster lagrar vanlig data:

- users
- roller
- produktinformation
- bilder
- QR-information

## Blockchain

Blockchain lagrar viktiga händelser:

- Batch ID
- status
- kvalitet
- temperatur
- actor wallet
- timestamp

## Socket.IO

Socket.IO används för realtime-uppdateringar.

## Docker

Docker används för frontend, backend och lokal blockchain-miljö.