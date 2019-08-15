export interface AddressUtxo {
  type: 'AddressUtxo'
  addUtxos: AddAddressUtxo[]
  removeUtxos: RemoveUtxo[]
}

export interface TxHistory {
  type: "TxHistory"
  addTxHistory: TxDelta[]
}

export interface TradeOfferUtxo {
  type: "TradeOfferUtxo"
  addUtxos: AddTradeOfferUtxo[]
  removeUtxos: RemoveUtxo[]
}

interface AddAddressUtxo {
  tx: string
  vout: number
  valueSatoshis: number
  valueToken: string
  valueTokenBase: string
  tokenIdHex: string | null
}

interface AddTradeOfferUtxo {
  outputVout: number
  inputTx: string
  inputVout: number
  pricePerToken: string
  scriptPrice: string
  isInverted: boolean
  sellAmountTokenBase: string
  receivingAddress: string
  tokenIdHex: string
}

interface RemoveUtxo {
  tx: string
  vout: number
}

interface TxDelta {
  tx: string
  deltaSatoshis: number
  deltaToken: string
  deltaTokenBase: string
  tokenIdHex: string | null
  timestamp: number
}
