import { atom } from "recoil";

export const authenticated = atom({
  key: "auth",
  default: { login: false, user: [] },
});

export const uploadbox = atom({
  key: "uploadform",
  default: false,
});
