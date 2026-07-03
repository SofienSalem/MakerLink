import { Component, OnInit } from '@angular/core';


const DATATABL: any = [
  {
    name: 'Bitcoin',
    icon: './assets/images/crypto-currencies/bitcoin.svg',
    price: '10513.00',
    quantity: '-7%',
    marketcap: '179,470,305,923',
    CirculatingSupply: '16,819,612 BTC',
    volume: '9,578,830,000',
    cmgrMonth: '8.11% / 57',
    inflation: '0.36%',
  },
  {
    name: 'Ethereum',
    icon: './assets/images/crypto-currencies/eos.svg',
    price: '966.61',
    quantity: '-6%',
    marketcap: '95,270,125,036',
    CirculatingSupply: '97,145,024 ETH',
    volume: '3,466,060,000',
    cmgrMonth: '22.62% / 29',
    inflation: '0.64%',
  },
  {
    name: 'Ripple',
    icon: './assets/images/crypto-currencies/ripple.svg',
    price: '1.2029',
    quantity: '-11%',
    marketcap: '47,649,145,657',
    CirculatingSupply: '38,739,144,704 XRP',
    volume: '2,081,450,000',
    cmgrMonth: '10.85% / 53',
    inflation: '0.06%',
  },
  {
    name: 'Bitcoin Cash',
    icon: './assets/images/crypto-currencies/bitcoincash.svg',
    price: '1547.00',
    quantity: '-11%',
    marketcap: '26,720,210,956',
    CirculatingSupply: '16,925,988 BCH',
    volume: '598,337,000',
    cmgrMonth: '21.30% / 6',
    inflation: '0.32%',
  },
  {
    name: 'Cardano',
    icon: './assets/images/crypto-currencies/cardano.svg',
    price: '0.550768',
    quantity: '-9%',
    marketcap: '14,279,800,786',
    CirculatingSupply: '25,927,069,696 ADA',
    volume: '466,381,000',
    cmgrMonth: '205.35% / 3',
    inflation: '0.00%',
  },
  {
    name: 'Litecoin',
    icon: './assets/images/crypto-currencies/litecoin.svg',
    price: '173.86',
    quantity: '-7%',
    marketcap: '9,670,920,267',
    CirculatingSupply: '54,873,584 LTC',
    volume: '430,524,000',
    cmgrMonth: '6.87% / 57',
    inflation: '0.80%',
  },
  {
    name: 'EOS',
    icon: './assets/images/crypto-currencies/eos.svg',
    price: '13.394',
    quantity: '5%',
    marketcap: '8,420,143,033',
    CirculatingSupply: '621,412,800 EOS',
    volume: '2,864,780,000',
    cmgrMonth: '53.25% / 6',
    inflation: '11.56%',
  },
  {
    name: 'NEM',
    icon: "./assets/images/crypto-currencies/nem.svg",
    price: '0.935049',
    quantity: '-11%',
    marketcap: '8,415,440,999',
    CirculatingSupply: '8,999,999,488 XEM',
    volume: '66,061,000',
    cmgrMonth: '26.99% / 33',
    inflation: '0.24%',
  },
  {
    name: 'Stellar',
    icon: './assets/images/crypto-currencies/stellar.svg',
    price: '0.467813',
    quantity: '2%',
    marketcap: '8,358,735,080',
    CirculatingSupply: '17,867,683,840 XLM',
    volume: '370,297,000',
    cmgrMonth: '13.12% / 41',
    inflation: '0.19%',
  },
  {
    name: 'NEO',
    icon: './assets/images/crypto-currencies/neo.svg',
    price: '118.61',
    quantity: '-9%',
    marketcap: '7,693,400,000',
    CirculatingSupply: '65,000,000 NEO',
    volume: '318,308,000',
    cmgrMonth: '62.68% / 15',
    inflation: '0.00%',
  },
  {
    name: 'IOTA',
    icon: './assets/images/crypto-currencies/iota.svg',
    price: '2.34',
    quantity: '-14%',
    marketcap: '6,504,100,862',
    CirculatingSupply: '2,779,530,240 MIOTA',
    volume: '103,132,000',
    cmgrMonth: '23.27% / 7',
    inflation: '-0.02%',
  },
  {
    name: 'Dash',
    icon: './assets/images/crypto-currencies/dash.svg',
    price: '747.222',
    quantity: '-8%',
    marketcap: '5,881,413,815',
    CirculatingSupply: '7,833,738 DASH',
    volume: '96,147,900',
    cmgrMonth: '19.19% / 47',
    inflation: '0.81%',
  },
  {
    name: 'Monero',
    icon: './assets/images/crypto-currencies/monero.svg',
    price: '305.16',
    quantity: '-11%',
    marketcap: '4,778,157,533',
    CirculatingSupply: '15,633,286 XMR',
    volume: '100,788,000',
    cmgrMonth: '11.88% / 44',
    inflation: '0.78%',
  },
  {
    name: 'TRON',
    icon: './assets/images/crypto-currencies/tron.svg',
    price: '0.067691',
    quantity: '-5%',
    marketcap: '4,450,560,896',
    CirculatingSupply: '65,748,193,280 TRX',
    volume: '581,651,000',
    cmgrMonth: '142.69% / 4',
    inflation: '0.00%',
  },
  {
    name: 'Bitcoin Gold',
    icon: './assets/images/crypto-currencies/bitcoinglod.svg',
    price: '181.39',
    quantity: '-7%',
    marketcap: '3,084,108,676',
    CirculatingSupply: '16,779,700 BTG',
    volume: '199,652,000',
    cmgrMonth: '-25.44% / 3',
    inflation: '0.34%',
  },
];
@Component({
  selector: 'app-crypto-currencies',
  templateUrl: './crypto-currencies.component.html',
  styleUrls: ['./crypto-currencies.component.scss']
})
export class CryptoCurrenciesComponent implements OnInit {
  constructor() {
    this.refreshData();
  }
  page = 1
  tableData = DATATABL
  collectionSize:any
  tableDataSize = DATATABL.length;

  ngOnInit(): void {}

  refreshData(){
    this.tableData.map((data: any, i: number) =>({id:i+1, ...data})).slice((this.page -1)* this.tableDataSize + this.tableDataSize)
  }
}
