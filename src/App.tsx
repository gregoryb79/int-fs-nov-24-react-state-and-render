import { useState } from "react";
import { Counter } from "./Counter";
import { AsyncCounter } from "./AsyncCounter";

// 1. add "SPA navigation" - menu with button to show the synced counters and another button to show the counter list
// 2. implement "static" counter list - show 4 counters with individual states
// 3. implement "dynamic" counter list
//      - show one button: "New counter" - clicking on it will add a counter to the screen
//      - next to each counter show a delete button to remove the counter from the screen
//      - counters should not be synced (each should have an individual state)
// Bonus - maintain the state of the counters when "navigating" back and forth  between the components

function App() {
  const [selectedView, setSelectedView] = useState<"synced" | "asynced">("synced");

  return (
    <>
      <nav>
        <button onClick={() => setSelectedView("synced")}>Synced Counters</button>
        <button onClick={() => setSelectedView("asynced")}>Counter List</button>
      </nav>
      <SyncedCounters />
      <CounterList />
    </>
  );
}


function SyncedCounters() {
  const [count, setCount] = useState(0);

  function half() {
    setCount(count / 2);
  }

  function decrease() {
    setCount(count - 1);
  }

  function increase() {
    setCount(count + 1);
  }

  function double() {
    setCount(count * 2);
  }

  function reset() {
    setCount(0);
  }

  return (
    <>
      <h2>Sync Counters</h2>
      <Counter count={count} onHalfClick={half} onDecreaseClick={decrease} onIncreaseClick={increase} onDoubleClick={double} onResetClick={reset} />
      <Counter count={count} onHalfClick={half} onDecreaseClick={decrease} onIncreaseClick={increase} onDoubleClick={double} onResetClick={reset} />
      <Counter count={count} onHalfClick={half} onDecreaseClick={decrease} onIncreaseClick={increase} onDoubleClick={double} onResetClick={reset} />
      <Counter count={count} onHalfClick={half} onDecreaseClick={decrease} onIncreaseClick={increase} onDoubleClick={double} onResetClick={reset} />
    </>
  );
}

function CounterList() {
  return (
    <>
      <h2>Async Counter</h2>
      <AsyncCounter />
    </>
  );
}

export default App;
