```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [isUnmounting, setIsUnmounting] = useState(false);

  useEffect(() => {
    return () => {
      setIsUnmounting(true);
      console.log('Component unmounting...');
    };
  }, []);

  useEffect(() => {
    if (!isUnmounting) {
       console.log('Component rendered with count:', count);
    }
    return () => {
      if (!isUnmounting) {
        console.log('Component cleaning up...');
      }
    };
  }, [count, isUnmounting]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```