import { DateTime } from "luxon";
import dictionary from "../data/guessList.json";
import solutionList from "../data/solutionList.json";

/**
 * Check that the given word is valid.
 */
 export const isValidWord = (word: string) => dictionary.includes(word);

 /**
  * Get the index for the solution by the given date.
  *
  * @param date defaults to today
  * @returns index of the solutionList
  */
 export const getTodaysWordIndex = (date = DateTime.local()) =>
     DateTime.fromISO(date.toISODate(), { zone: 'utc' }).toSeconds() % solutionList.length;

 /**
  * Get the solution word by the given date.
  * @param date defaults to today
  * @returns word from the solutionList
  */
 export const getTodaysWord = (date = DateTime.local()) =>
     solutionList[getTodaysWordIndex(date)];