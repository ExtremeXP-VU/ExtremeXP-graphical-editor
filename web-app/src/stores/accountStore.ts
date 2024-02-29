import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const initialAccountState = {
  isLogin: false,
  username: '',
  token: '',
};

export const useAccountStore = create<typeof initialAccountState>()(
  persist(() => initialAccountState, { name: 'account-store' })
);

const setIsLogin = (isLogin: boolean) => {
  useAccountStore.setState({ isLogin });
};

const setUsername = (username: string) => {
  useAccountStore.setState({ username });
};

const setToken = (token: string) => {
  useAccountStore.setState({ token });
};

export const login = (username: string, token: string) => {
  setUsername(username);
  setToken(token);
  setIsLogin(true);
};

export const logout = () => {
  useAccountStore.setState(initialAccountState);
  useAccountStore.persist.clearStorage();
};
