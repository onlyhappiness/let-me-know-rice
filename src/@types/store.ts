export interface IStore {
  name: string;
  address: string;
  phone: string;
}

export interface IUpdateStore {
  name: string;
  address: string;
  phone: string;
  content?: string;
  operaionHours?: string;
  closedDays?: string;
}
