/*
Problem Definition:

Create a new word by swapping some or all of the characters of a given word. There are two
criteria for this:
- Must be greater than the original word (alphabetically).
- Must be the smallest word that satisfies the first condition. 

=================
My random thoughts:

We need to rearrange a string with swapping positions also considering character value and generate strings in different character orders like (1, 2, 3) (2, 1, 3)
This is a permutation problem https://en.wikipedia.org/wiki/Permutation
Calculate greatness by lexical order
Generate in lexicographical order: https://en.wikipedia.org/wiki/Permutation#Generation_in_lexicographic_order

This function taken from: https://www.nayuki.io/page/next-lexicographical-permutation-algorithm
*/
function swapAlgorithm(input) {
  input = input.split('')
  // Find non-increasing suffix
  let i = input.length - 1
  while (i > 0 && input[i - 1] >= input[i]) i--

  if (i <= 0) throw new Error('No swapping possible')

  // Find the rightmost successor to pivot in the suffix
  let j = input.length - 1
  while (input[j] <= input[i - 1]) j--

  // Swap the pivot with the rightmost character
  const temp = input[i - 1]
  input[i - 1] = input[j]
  input[j] = temp

  // Reverse suffix
  j = input.length - 1
  while (i < j) {
    const temp = input[i]
    input[i] = input[j]
    input[j] = temp
    i++
    j--
  }

  const result = input.join('')

  return result
}

module.exports = swapAlgorithm
