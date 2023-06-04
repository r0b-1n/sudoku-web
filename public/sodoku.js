import { ai_sodoku } from './openai.mjs';

var val = ai_sodoku();

console.log(val)

var sodoku = "_ _ _ 6 _ _ 7 _ _ _ _ _ 9 _ _ _ _ 4 _ _ _ _ _ 1 8 _ 3 _ _ _ _ _ _ _ 9 5 _ _ 7 _ _ _ 4 _ _ 6 _ _ _ _ _ _ _ _ 1 _ 8 3 _ _ _ _ _ 4 _ _ _ _ 5 _ _ _ _ _ 2 _ _ 6 _ _ _ _"
var numbers = sodoku.split(' ').join("")