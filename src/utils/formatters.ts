import moment from 'moment';

interface FormattersTypes {
  date?: Date;
  value?: number;
  num?: number;
  decimals?: number;
  document?: String;
  month?: number;
  dateStr?: String;
}

const formatters = {
  //converts dates to Brazilian format
  date: ({date}: FormattersTypes) => moment(date).format('DD/MM/YYYY'),

  //convert numbers to liters
  volume: (value: FormattersTypes) =>
    String(value).replace(/(\d+)(\d{3}$)/g, '$1.$2'),

  // converts values ​​to Brazilian currency
  BRL: ({num, decimals = 2}: FormattersTypes) => {
    return num
      ? `R$ ${parseFloat(String(num).replace(',', '.'))
          .toFixed(decimals)
          .replace('.', ',')
          .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}`
      : 'R$ 0,00';
  },

  // converts values ​​to US currency
  USD: ({num, decimals = 2}: FormattersTypes) => {
    return num
      ? `$ ${parseFloat(String(num).replace(',', '.'))
          .toFixed(decimals)
          .replace('.', ',')
          .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}`
      : '$ 0,00';
  },

  // automatically converts numbers to CPF or CNPJ
  cnpjCpf: ({document}: FormattersTypes) => {
    if (document) {
      if (document.length === 11) {
        return document.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
      }
      if (document.length === 14) {
        return document.replace(
          /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
          '$1.$2.$3/$4-$5',
        );
      }
      return document;
    }
    return '-';
  },

  // convert formatted dates to Javascript's Date type
  toDate: ({dateStr}: FormattersTypes) => {
    if (dateStr) {
      const date = new Date(dateStr);
      return new Date(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate(),
        date.getUTCHours(),
        date.getUTCMinutes(),
        date.getUTCSeconds(),
      );
    }
    return 'Pass dateStr';
  },

  // abbreviate large numbers for short strings  (1.000 => 1K | 1.000.000 => 1M)
  abbrNum: ({num, decimals}: FormattersTypes) => {
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
        num += abbrev[i];
        break;
      }
    }

    return num;
  },
};

export default formatters;
