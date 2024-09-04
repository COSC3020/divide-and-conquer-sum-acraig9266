# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

The complexity of the algorithm $T(n)$ ∈ $\Theta$(n)

1. If array has 2 or less elements add them.    T(2) = 2
2. Cut array into approximately 3 even thirds.     1
3. Sum each third recursively.               3T(n/3)

$T(n)$ =  {2       for  n <= 2}

$T(n)$ =  {3T(n/3) for  n >  2}

$T(n)$ = 3T(n/3)

$T(n)$ = 3(3T(n/3/3)) = 9T(n/9)

$T(n)$ = 3(3(3T(n/3/3/3))) = 27T(n/27)

$T(n)$ = 3^i * T(n/3^i)

i = $log{_3}{n}$

$T(n)$ = 3^ $log{_3}{n}$ * T(n/3^ $log{_3}{n}$)

T(n/3^ $log{_3}{n}$) = 2

$T(n)$ = 3^ $log{_3}{n}$ * 2

$T(n)$ = n * 2

$T(n)$ = 2n


