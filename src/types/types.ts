export interface IUser {
  id?: string;
  email: string;
  name: string;
  role: string;
  subscription: ISubscription & ISubscription['plan'];
  tokens: ISubscription['tokens'];
}


export interface ISubscription {
  id: string;
  tokens: string;
  plan: IPlan & IPlan['type'];
}

export interface IPlan {
  id: string;
  type: string;
  currency: string;
}