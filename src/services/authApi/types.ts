export interface IToken {
  value: string;
}

export enum Roles {
  TEACHER = "TEACHER",
  STUDENT = "STUDENT",
  ADMIN = "ADMIN",
}

export interface IUser {
  username: string;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  email?: string;
  phone?: string;
  activated?: boolean;
  // authorities: Roles[];
  authorities: { name: Roles }[];
}

export type RegistrationDTO = {
  username: string;
  password: string;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  email?: string;
  phone?: string;
};

export type LoginDTO = {
  username: string;
  password: string;
  rememberMe?: boolean;
};
