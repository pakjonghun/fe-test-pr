import { useCallback, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(true);

  const onClickPlus = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const onClickMinus = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  const onOff = useCallback(() => {
    setIsOn(false);
  }, []);

  return (
    <div>
      <span data-testid='count'>{count}</span>
      <div>
        <button data-testid='minus' disabled={!isOn} onClick={onClickMinus}>
          -
        </button>
        <button data-testid='plus' disabled={!isOn} onClick={onClickPlus}>
          +
        </button>

        <button
          data-testid='switch'
          onClick={onOff}
          style={{ backgroundColor: "blue" }}
        >
          on
        </button>
      </div>
    </div>
  );
}

export default App;
