import axios from "axios";

const base_url = import.meta.env.VITE_APP_BASE_URL;

type loginProps = {
  authenticationId?: string,
  password?: string,
  nickname?: string,
  phone?: string,
  memberId?: number
}

export function signupAPI({ authenticationId, password, nickname, phone }: loginProps) {
  console.log('signup called');
  return axios.post(`${base_url}/member/join`,
    {
      authenticationId,
      password,
      nickname,
      phone
    },
  ).then(({ data }) => {
    return data
  }).catch((err) => {
    alert(err.response.data.message);
    throw err
  }).then(() => {
    alert("회원가입이 완료되었습니다.");
  });
}

export function loginAPI({ authenticationId, password }: loginProps) {
  console.log('login called');
  return axios.post(`${base_url}/member/login`,
    {
      authenticationId,
      password,

    },
  ).catch((err) => {
    alert(err.response.data.message);
    throw err
  }).then((data) => {
    alert("로그인 완료되었습니다.");
    return data
  });
}

export function getUserDataAPI({ memberId }: loginProps) {
  console.log('get user data called');
  return axios.get(`${base_url}/member/info`,
    { headers: { memberId } },
  ).catch((err) => {
    alert(err.response.data.message);
    throw err
  }).then((data) => {
    return data.data.data
  });
}

type passwordAPIProps = {
  previousPassword: string,
  newPassword: string,
  newPasswordVerification: string,
  memberId: string
}
export function passwordAPI({ previousPassword, newPassword, newPasswordVerification, memberId }: passwordAPIProps) {
  console.log('patch password called');
  return axios.patch(`${base_url}/member/password`,
    {
      previousPassword,
      newPassword,
      newPasswordVerification
    },
    {
      headers: { memberId }
    }
  ).catch((err) => {
    alert(err.response.data.message);
    throw err
  }).then((data) => {
    return data
  });
}