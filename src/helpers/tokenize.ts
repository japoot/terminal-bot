/*
 * tokenize returns array
 * of tokens broken by any non-whitespace char in str
 * empty str returns null
 */
export default function tokenize(str: string) {
  return str.match(/\S+/g);
}
