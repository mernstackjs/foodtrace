# FoodTrace – Smart Contract Design

## Syfte

Smart contractet sparar viktiga steg i produktens historia.

## Roller

- Admin
- Producer
- Processor
- Quality Inspector
- Cold Storage
- Transporter
- Retailer

## Batch

En batch kan innehålla:

```text
batchId
productName
origin
status
currentOwner
createdAt
```

## Funktioner

```solidity
createBatch()
addCheckpoint()
addQualityCheck()
addColdStorage()
transferCustody()
getBatch()
```

## Events

```solidity
BatchCreated
CheckpointAdded
QualityCheckAdded
ColdStorageAdded
CustodyTransferred
```

## Permissions

Exempel:

```text
Producer → createBatch
Quality Inspector → addQualityCheck
Cold Storage → addColdStorage
Transporter → transferCustody
```

## Blockchain Data

Blockchain lagrar endast viktig information:

- Batch ID
- wallet address
- status
- kvalitet
- temperatur
- timestamp

Övrig data sparas i MongoDB Cluster.