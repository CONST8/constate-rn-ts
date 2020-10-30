interface validatorsTypes {
  email?: any | ((v: any) => void);
  password?: any | ((v: any) => void);
  nickname?: any | ((v: any) => void);
  confirmPassword?: any | ((v: any) => void);
  PasswordVerify?: boolean;
}

const validators = {
  validEmail: ({email}: validatorsTypes) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) === true) {
      return true;
    } else {
      return false;
    }
  },
  PasswordSize: ({password}: validatorsTypes) => {
    let reg = password;
    if (reg.length >= 8) {
      return true;
    } else {
      return false;
    }
  },
  ConfirmPassword: ({
    password,
    confirmPassword,
    PasswordVerify,
  }: validatorsTypes) => {
    if (PasswordVerify) {
      if (password === confirmPassword) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  },
  nicknameValid: ({nickname}: validatorsTypes) => {
    let reg = /^([a-zA-Z0-9\u0600-\u06FF\u0660-\u0669\u06F0-\u06F9_.-]+)$/;
    if (reg.test(nickname) === true) {
      return true;
    } else {
      return false;
    }
  },
  uuid: (uuid: string): boolean => {
    const reg = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    if (reg.test(uuid) === true) {
      return true;
    }
    return false;
  }
};

export default validators;
