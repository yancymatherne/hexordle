import { writable } from 'svelte/store';

// https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores
// https://dev.to/delanyobott/comment/1egh0

export const localStore = (key, initial) => {                 // receives the key of the local storage and an initial value

  const toString = (value) => value ? JSON.stringify(value) : ''  // helper function
  const toObj = JSON.parse                                    // helper function

  if (localStorage.getItem(key) === null) {                   // item not present in local storage
    localStorage.setItem(key, toString(initial))              // initialize local storage with initial value
  }

  const saved = toObj(localStorage.getItem(key))              // convert to object

  const store = writable(saved)          // create the underlying writable store

  store.subscribe((value) => localStorage.setItem(key, toString(value)));

  return store;
}
