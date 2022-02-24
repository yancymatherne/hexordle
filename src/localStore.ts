import { writable } from 'svelte/store';
import { browser } from "$app/env";

// https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores
// https://dev.to/delanyobott/comment/1egh0

export const localStore = (key: string, initial)=> {
  const toString = (value) => value ? JSON.stringify(value) : '';
  const toObj = JSON.parse;

  if (browser && localStorage.getItem(key) === null) {
    // The item is not present in local storage.
    // Initialize local storage with the initial value parameter.
    localStorage.setItem(key, toString(initial));
  }

  // Use initial value from localStorage or the initial value parameter if we are in SSR.
  const saved = browser ? toObj(localStorage.getItem(key)) : initial;

  const store = writable(saved);

  // Subscribe to store updates to keep localStorge in sync.
  browser && store.subscribe((value) => localStorage.setItem(key, toString(value)));

  return store;
}
