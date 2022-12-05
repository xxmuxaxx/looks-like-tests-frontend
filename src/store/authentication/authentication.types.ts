export type AuthenticationState = {
  user: any | null;
  token?: string;
  loading: boolean;
  error?: string;
};
