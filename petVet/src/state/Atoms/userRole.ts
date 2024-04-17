import { atom } from "recoil";

export const userRole=atom({
    key: 'loggedUser',
    default: ""
})