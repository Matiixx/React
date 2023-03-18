import { random } from "lodash";
import { generateSpaces } from "./generateFunctions";

type Results = {
  spaces: Space[];
};

type Space = {
  name: string;
};

/**
 * TODO:
 * 1) //Fix the API
 * 2) Extract functions for generating numbers.
 */

/**
 * 1) searchSpaces should returns object of type Results that contains spaces as field.
 *    We need to just create that object, the easiest way is wrap spaces into curly brackets.
 * 2) It will be better (for users) if strings are compared after converted to lower case 
 * 3) I'm not sure if random function was used properly. As I noticed random function from lodash 
 *    without any parameters returns integer number 0 or 1. So we have 50% chance of API failure.
 *    Fixed it with set floating parama as true. Now it return floating number between 0 and 1.
 *  
 */

const ALL_PARKING_SPACES: Space[] = [
  ...generateSpaces("Kraków HQ")(1, 20),
  ...generateSpaces("Milano")(21, 50),
  ...generateSpaces("Munich")(51, 80),
];

const CHANCE_OF_FAILURE = 0.1;
const MIN_TIME_MILLIS = 100;
const MAX_TIME_MILLIS = 1000;

const searchSpaces = (searchText: string): Promise<Results> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (random(true) > CHANCE_OF_FAILURE) {
        const spaces = ALL_PARKING_SPACES.filter(
          ({ name }) => name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
        );
        res({ spaces });
      } else {
        rej(new Error("Network error"));
      }
    }, random(MIN_TIME_MILLIS, MAX_TIME_MILLIS, false));
  });
};

export { searchSpaces };
