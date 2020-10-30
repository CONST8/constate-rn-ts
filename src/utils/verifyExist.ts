import {baseURL} from '../services/api';
const url = `${baseURL}/verifyExists`;

const requestOptions = (body: object) => {
  return {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };
};

const verifyExist = {
  email: async (email: string | ((v: any) => void)) => {
    const response = await fetch(`${url}/email`, requestOptions({email}))
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) {
          const error = (data && data.message) || res.status;
          return Promise.reject(error);
        }
        console.log(
          data.exists ? `\x1b[31memail: ${email}` : `\x1b[32memail: ${email}`,
        );

        return data;
      })
      .catch((error) => {
        return {error: true};
      });
    return response;
  },
};

export default verifyExist;
