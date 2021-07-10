import { FormatterCpfCnjpTypes, FormatterAbrevNumbTypes, FormatterCurrencyTypes } from "./types";

// automatically converts numbers to CPF or CNPJ
export const FormatterCpfCnjp = ({num}: FormatterCpfCnjpTypes) => {
  if (num) {
    if (num.length === 11) {
      return num.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }
    if (num.length === 14) {
      return num.replace(
        /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
        '$1.$2.$3/$4-$5',
      );
    }
    return num;
  }
  return '-';
}

// abbreviate large numbers for short strings  (1.000 => 1K | 1.000.000 => 1M)
export const FormatterAbrevNumb = ({num, decimals = 2}: FormatterAbrevNumbTypes) => {
  decimals = Math.pow(10, decimals);
  const abbrev = ['K', 'M', 'B', 'T'];
  for (let i = abbrev.length - 1; i >= 0; i--) {
    const size = Math.pow(10, (i + 1) * 3);
    if (size <= num) {
      num = Math.round((num * decimals) / size) / decimals;
      if (num === 1000 && i < abbrev.length - 1) {
        num = 1;
        i++;
      }
      num += parseFloat(abbrev[i]);
      break;
    }
  }

  return num;
}

// converts values ​​to currency
export const FormatterCurrency = ({num, prefix = '$', decimals}: FormatterCurrencyTypes) => {
  return num
    ? `${prefix} ${parseFloat(String(num).replace(',', '.'))
        .toFixed(decimals)
        .replace('.', ',')
        .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}`
    : `${prefix} 0,00`;
}
