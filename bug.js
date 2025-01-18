```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render
    console.log('Component rendered with count:', count);
    return () => {
      // Cleanup function: runs before the next effect or component unmount
      console.log('Component unmounting or updating...');
    };
  }, [count]); // Only re-run the effect if 'count' changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```