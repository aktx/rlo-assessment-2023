export enum Currency {
	RUB = 'RUB',
	USD = 'USD',
	EUR = 'EUR',
}

export interface CurrencyDetalisation {
	nominal: number;
	limit: number;
}

export const AVALIABLE_NOMINALS: Record<Currency, CurrencyDetalisation[]> = {
	RUB: [{nominal: 50, limit: 2},
		{nominal: 100, limit: 0},
		{nominal: 500, limit: 2},
		{nominal:1000, limit: 1},
		{nominal: 5000, limit: 2}
	],
	USD: [{nominal: 1,limit: 100}, {nominal:2, limit: 30}, {nominal:5, limit: 10}, {nominal: 20, limit: 2}, {nominal: 50, limit: 10}, {nominal:100, limit: 0}],
	EUR: [{nominal:5, limit: 10}, {nominal:10, limit: 10}, {nominal:20, limit: 10}, {nominal:50,limit: 10}, {nominal:100, limit: 10}, {nominal:200, limit: 10}, {nominal:500, limit: 10}],
};