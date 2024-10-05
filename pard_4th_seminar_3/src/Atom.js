import { atom } from "recoil";

export const myInfoAge = atom({
  key: 'myInfoAge',
  default : 23,
});

export const myInfoName = atom({
  key: 'myInfoName',
  default : '권채채'
}); 