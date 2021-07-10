
// Formatters
export interface FormatterCurrencyTypes {
  num: number;
  decimals?: number;
  prefix: string;
}

export interface FormatterAbrevNumbTypes {
  num: number;
  decimals?: number;
}
export interface FormatterCpfCnjpTypes {
  num: string;
}


// Validators
export interface ValidatorEmailTypes {
  email: string;
}

export interface ValidatorPasswordTypes {
  password: string;
}

export interface ValidatorNicknameTypes {
  nickname: string;
}

