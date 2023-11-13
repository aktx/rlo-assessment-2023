import {Button} from "@mui/material";
import React, {useCallback, useEffect, useState} from 'react';
import {AVALIABLE_NOMINALS, Currency} from "../constants";
import {getCurrencies} from "./bankomat.service";
import {CurrencySelect} from "./CurrencySelect";
import {CurrencyInput} from "./CurrencyInput";


export const Bankomat = () => {
	const [selectedCurrency, setSelectedCurrency] = useState<Currency>(Currency.RUB);
	const [inputValue, setInputValue] = useState('');
	const [result, setResult] = useState('');
	const [allCurrencies, setAllCurrencies] = useState<Record<Currency, {value: number}>>();

	useEffect( () => {
		(async () => {
			const allCurrencies = await getCurrencies();
			setAllCurrencies(allCurrencies.data);
		})();
	}, []);

	const handleClick = useCallback(() => {
		console.log(selectedCurrency, inputValue);
		let a = +inputValue;
		const currentCurrency = AVALIABLE_NOMINALS[selectedCurrency];
		const r = currentCurrency.reverse().reduce((acc, {nominal, limit}) => {
			const maxAvaliableCurrency = Math.min(Math.floor(a / nominal), limit);
			console.log("-> maxAvaliableCurrency", maxAvaliableCurrency, a, nominal, limit, a / nominal);
			if (a / nominal >= 1) {
				a -= nominal * maxAvaliableCurrency;
				return [...acc, `${nominal}*${maxAvaliableCurrency}`]
			}
			return acc;
		}, [] as string[]);
		if (a) {
			setResult('Не получилось :(');
		} else {
			if (allCurrencies) {
				r.push(`В долларах это: ${+inputValue / allCurrencies[selectedCurrency].value}`)
			}
			setResult(r.join(','));
		}
	}, [allCurrencies, inputValue, selectedCurrency]);

	return (
		<>
			<CurrencySelect value={selectedCurrency} onChange={setSelectedCurrency}/>
			<CurrencyInput value={inputValue} onChange={setInputValue}/>
			<Button onClick={handleClick}>Расчитать</Button>
			<br/>
			{result}
		</>
	);
};