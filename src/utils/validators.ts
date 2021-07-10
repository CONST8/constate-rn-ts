import { ValidatorEmailTypes, ValidatorNicknameTypes, ValidatorPasswordTypes } from "./types";

export const ValidatorEmail = ({email}: ValidatorEmailTypes) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(email) === true) {
    return true;
  } else {
    return false;
  }
}

export const ValidatorPassword = ({password}: ValidatorPasswordTypes) => {
  let reg = password;
  if (reg.length >= 8) {
    return true;
  } else {
    return false;
  }
}

export const ValidatorNickname = ({nickname}: ValidatorNicknameTypes) => {
  let reg = /^([a-zA-Z0-9\u0600-\u06FF\u0660-\u0669\u06F0-\u06F9_.-]+)$/;
  if (reg.test(nickname) === true) {
    return true;
  } else {
    return false;
  }
}
