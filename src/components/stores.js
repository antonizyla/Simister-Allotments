import { writable } from "svelte/store";
import { browser } from "$app/env";

export const allowedCookies = writable(
    (browser && localStorage.getItem("allowedCookies")) || 'false'
);
allowedCookies.subscribe((val) => browser && (localStorage.allowedCookies = val));
