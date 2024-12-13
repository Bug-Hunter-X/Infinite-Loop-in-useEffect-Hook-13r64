# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications involving the `useEffect` hook: creating an infinite loop by incorrectly setting state based on the state itself within the effect.  The `bug.js` file shows the erroneous code, while `bugSolution.js` provides the corrected implementation.

## Bug Description:
The `useEffect` hook in `bug.js` attempts to increment the count state variable in each render cycle, creating an infinite loop.  This leads to performance issues and ultimately crashes the React application. 

## Solution:
The solution (`bugSolution.js`) corrects the logic. Instead of directly updating the `count` with `setCount(count+1)`, it updates the count conditionally only if a certain criteria is met. For example this could be an external trigger or a timeout condition preventing infinite renders.