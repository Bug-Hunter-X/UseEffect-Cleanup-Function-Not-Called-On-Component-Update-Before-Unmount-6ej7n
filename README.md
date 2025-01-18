# React useEffect Cleanup Function Not Called On Component Update Before Unmount

This example demonstrates a subtle issue where the cleanup function in a React `useEffect` hook might not be called if the component updates before it unmounts. This can lead to memory leaks or other unexpected behavior.

## Problem

The `useEffect` hook's cleanup function is designed to run before the next effect execution or when the component unmounts. However, if a component receives an update before it gets unmounted, the cleanup might be skipped.

## Solution

The solution involves carefully managing the effect dependencies and ensuring the cleanup function handles all necessary cleanup actions.  Using a flag to track if the component should be cleaned up helps ensure that all necessary cleanup happens regardless of update cycles.