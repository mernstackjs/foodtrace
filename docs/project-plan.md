# FoodTrace - Projektplan

### Blockchain-Based Food Traceability System

## 1. Projektidé

FoodTrace är ett system där man kan följa en livsmedelsprodukt från producent till butik.

Jag börjar med kyckling.

Kunden ska kunna skanna en QR-kod och se produktens historia.

Exempel:

**Producent → Processor → Kvalitetskontroll → Kylförvaring → Transport → Butik → Kund**

---

## 2. Problem

Idag kan kunden ofta se:

- produktnamn
- ursprungsland
- packdatum
- bäst före-datum

Men kunden kan inte alltid se hela produktens resa.

Med FoodTrace kan kunden se mer information om produkten.

Blockchain används för att spara viktiga steg i historiken.

---

## 3. Mål

Målet är att bygga en enkel fungerande prototyp.

Systemet ska kunna:

- skapa ett produktparti
- lägga till nya steg
- registrera kvalitetskontroll
- registrera kylförvaring
- registrera transport
- registrera när produkten kommer till butik
- skapa en QR-kod
- visa hela historiken för kunden

---

## 4. Roller

### Admin

Kan hantera användare och roller.

### Producer

Kan skapa ett nytt produktparti.

### Processor

Kan registrera bearbetning och packning.

### Quality Inspector

Kan registrera kvalitetskontroll.

### Cold Storage

Kan registrera kylförvaring.

Exempel:

- plats
- temperatur
- starttid
- sluttid
- status

### Transporter

Kan registrera transport.

### Retailer

Kan registrera att produkten har kommit till butiken.

### Customer

Behöver inget konto.

Kunden skannar QR-koden och ser produktens historia.

---

## 5. Exempel

Produkt:

**Chicken Breast**

Batch ID:

`CHK-2026-001`

Exempel:

```text
Producent
↓
Batch skapades

Processor
↓
Produkten bearbetades och packades

Quality Inspector
↓
Kvalitetskontroll godkänd

Cold Storage
↓
Produkten lagrades i kylrum

Transporter
↓
Produkten transporterades

Retailer
↓
Produkten kom till butiken

Customer
↓
Skannar QR-koden och ser hela historiken
```

---

## 6. Kylförvaring

FoodTrace ska kunna visa när produkten har varit i kylförvaring.

Information som kan registreras:

- kylrum eller lager
- temperatur
- starttid
- sluttid
- status

Exempel:

```text
Batch: CHK-2026-001
Plats: Warehouse A
Temperatur: 4°C
Status: Godkänd
```

---

## 7. Teknik

Projektet använder:

### Frontend

- React

### Backend

- Node.js
- Express

### Databas

- MongoDB

### Blockchain

- Solidity
- Hardhat
- viem

### Realtime

- Socket.IO

### Login och roller

- JWT
- RBAC

### Infrastruktur

- Docker
- Docker Compose

---

## 8. Blockchain

Jag ska skapa ett eget smart contract i Solidity.

Smart contractet ska kunna göra saker som:

```text
createBatch()
addCheckpoint()
addQualityCheck()
addColdStorage()
transferCustody()
getBatch()
```

Blockchain kan spara:

- Batch ID
- actor wallet
- status
- kvalitet
- temperatur
- timestamp
- viktiga steg i historiken

---

## 9. MongoDB

MongoDB används för vanlig information.

Exempel:

- users
- roles
- produktinformation
- bilder
- beskrivningar
- QR-information

All information behöver inte sparas på blockchain.

---

## 10. Socket.IO

Socket.IO används för realtime.

Exempel:

När en kvalitetskontroll blir godkänd kan frontend få information direkt.

Användaren behöver inte uppdatera sidan.

Exempel på events:

```text
batch:created
batch:updated
quality:approved
coldstorage:updated
custody:transferred
```

---

## 11. QR-kod

Varje batch får en QR-kod.

När kunden skannar QR-koden kan kunden se:

- produktnamn
- ursprung
- produktionsdatum
- packdatum
- bäst före-datum
- kvalitetsstatus
- kylförvaring
- transport
- butik
- hela historiken

---

## 12. Enkel arkitektur

```text
React
  |
REST API + Socket.IO
  |
Node.js + Express
  |
  |-----------|
  |           |
MongoDB    Blockchain
           Solidity
           Hardhat
```

---

# 13. Plan för 5 veckor

## Vecka 1 – Planering och setup

Jag ska:

- planera projektet
- bestämma roller
- planera smart contract
- skapa GitHub repository
- skapa projektstruktur
- installera React
- installera Node.js
- installera MongoDB
- installera Hardhat
- skapa Docker setup

---

## Vecka 2 – Smart Contract

Jag ska:

- skapa batch
- lägga till olika steg
- lägga till kvalitetskontroll
- lägga till kylförvaring
- lägga till transport
- skapa roller
- skriva tester

---

## Vecka 3 – Backend

Jag ska:

- skapa REST API
- skapa login
- använda JWT
- använda RBAC
- koppla MongoDB
- koppla blockchain
- skapa QR-kod
- lägga till Socket.IO

---

## Vecka 4 – Frontend

Jag ska:

- skapa login
- skapa dashboard
- skapa batch-formulär
- visa produktens historia
- visa kylförvaring
- visa transport
- skapa QR-sida
- skapa customer view

---

## Vecka 5 – Test och presentation

Jag ska:

- testa systemet
- fixa buggar
- förbättra design
- skapa demo-data
- skriva README
- dokumentera projektet
- ta screenshots
- förbereda presentation
- förbereda Pecha Kucha

---

# 14. MVP

Första versionen är klar när:

1. Producer kan skapa en batch.
2. Olika aktörer kan lägga till information.
3. Quality Inspector kan registrera kvalitetskontroll.
4. Cold Storage kan registrera kylförvaring.
5. Transporter kan registrera transport.
6. Retailer kan registrera att produkten har kommit fram.
7. Viktig information sparas på blockchain.
8. Kunden kan skanna en QR-kod.
9. Kunden kan se hela produktens historia.
10. Smart contract har tester.

---

# 15. Framtida funktioner

Senare kan FoodTrace också ha:

- fisk
- nötkött
- flera butiker
- product recall
- IoT temperatursensorer
- certifikat
- mobilapp
- publik testnet
- analytics dashboard

Detta behövs inte i första versionen.

---

## Sammanfattning

FoodTrace ska visa hur blockchain kan användas för att följa en livsmedelsprodukt.

Jag börjar med kyckling.

Kunden ska kunna skanna en QR-kod och se produktens resa från producent till butik.

Systemet ska också kunna visa kvalitetskontroll, kylförvaring och transport.
