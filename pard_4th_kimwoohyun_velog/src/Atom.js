
import { atom } from "recoil";

export const  myInfoName = atom({
  key: 'myInfoName',
  default: "김우현",
});

export const  myInfoEmail = atom({
  key: 'myInfoEmail',
  default: "kwh4481@naver.com",
});

export const  myInfoPW = atom({
  key: 'myInfoPW',
  default: "kwh4481",
});

export const  myInfoComent = atom({
  key: 'myInfoComent',
  default: "4기 웹파트 과제4 파이팅!",
});
