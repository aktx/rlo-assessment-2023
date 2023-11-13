import { Input } from "@mui/material";
import React, {ChangeEvent} from 'react'

export const CurrencyInput = ({value, onChange}: {value: string, onChange: (s: string) => void}) => {
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.value);
	}
	return (
		<Input value={value} type='number' onChange={handleChange} placeholder="Введите валюту" />
	);
};
