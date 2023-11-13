import {MenuItem, Select, SelectChangeEvent} from "@mui/material";
import React from "react";
import {Currency} from "../constants";

export const CurrencySelect = ({value, onChange}: {value: Currency, onChange: (s: Currency) => void}) => {
	const handleSelect = (event: SelectChangeEvent<Currency>) => {
		onChange(event.target.value as Currency);
	}

	return (
		<Select
			value={value}
			label="Age"
			onChange={handleSelect}
		>
			<MenuItem value={Currency.EUR}>{Currency.EUR}</MenuItem>
			<MenuItem value={Currency.USD}>{Currency.USD}</MenuItem>
			<MenuItem value={Currency.RUB}>{Currency.RUB}</MenuItem>
		</Select>
	)
}