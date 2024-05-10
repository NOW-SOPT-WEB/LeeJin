import axios from "axios";

const base_url = import.meta.env.VITE_APP_BASE_URL;

type loginProps = {
  authenticationId: string,
  password: string,
  nickname: string,
  phone: string
}
export function loginAPI({ authenticationId, password, nickname, phone }: loginProps) {
  console.log('login called', { base_url });
  return axios.post(`${base_url}/member/join`,
    {
      authenticationId,
      password,
      nickname,
      phone
    },
  ).then(({ data }) => {
    console.log({ base_url, data })
    return data
  });
}