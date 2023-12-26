export interface IUser {
  id: string;
  email: string;
  name: string;
  role: string;
  subscription: ISubscription;
}

export interface ISubscription {
  id: string;
  tokens: string;
  plan: IPlan;
}

export interface IPlan {
  id: string;
  type: string;
  currency: string;
}