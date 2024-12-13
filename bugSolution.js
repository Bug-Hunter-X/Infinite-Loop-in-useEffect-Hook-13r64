```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [shouldIncrement, setShouldIncrement] = useState(false);

  useEffect(() => {
    if (shouldIncrement) {
      setCount(prevCount => prevCount + 1);
      setShouldIncrement(false); // Reset to prevent further increments
    }
  }, [shouldIncrement, count]); // Added count to prevent a warning

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setShouldIncrement(true)}>Increment</button>
    </div>
  );
}
```