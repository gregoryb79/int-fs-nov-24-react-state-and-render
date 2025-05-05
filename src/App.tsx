import { useState } from "react";
import { Counter } from "./Counter";
import styles from "./App.module.scss";

// 1. add "SPA navigation" - menu with button to show the synced counters and another button to show the counter list
// 2. implement "static" counter list - show 4 counters with individual states
// 3. implement "dynamic" counter list
//      - show one button: "New counter" - clicking on it will add a counter to the screen
//      - next to each counter show a delete button to remove the counter from the screen
//      - counters should not be synced (each should have an individual state)
// 4. add up/down buttons in each counter in the list to re-order the counters
// Bonus - maintain the state of the counters when "navigating" back and forth  between the components

function App() {
  const [currentTab, setCurrentTab] = useState<"synced" | "list">("synced");
  const [count, setCount] = useState(0);
  const [counters, setCounters] = useState<number[]>([]);


  return (
    <>
      <Nav onSyncedClick={() => setCurrentTab("synced")} onListClick={() => setCurrentTab("list")} />
      {currentTab === "synced" ? <SyncedCounters count={count} setCount={setCount} /> : <CounterList counters={counters} setCounters={setCounters}/>}
    </>
  );
}

type NavProps = {
  onSyncedClick: () => void;
  onListClick: () => void;
};
function Nav({ onSyncedClick, onListClick }: NavProps) {
  return (
    <nav className={styles.nav}>
      <button onClick={onSyncedClick}>Synced</button>
      <button onClick={onListClick}>List</button>
    </nav>
  );
}
type SyncedCountersProps = {
  count: number;  
  setCount: (count: number) => void;
}
function SyncedCounters({count, setCount}: SyncedCountersProps) {  

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
      <Counter count={count} onHalfClick={half} onDecreaseClick={decrease} onIncreaseClick={increase} onDoubleClick={double} onResetClick={reset} />
      <Counter count={count} onHalfClick={half} onDecreaseClick={decrease} onIncreaseClick={increase} onDoubleClick={double} onResetClick={reset} />
      <Counter count={count} onHalfClick={half} onDecreaseClick={decrease} onIncreaseClick={increase} onDoubleClick={double} onResetClick={reset} />
      <Counter count={count} onHalfClick={half} onDecreaseClick={decrease} onIncreaseClick={increase} onDoubleClick={double} onResetClick={reset} />
    </>
  );
}
type CounterListProps = {
  counters: number[];
  setCounters: (counters: number[]) => void;
}
function CounterList({counters, setCounters}: CounterListProps) {
  

  function newCounter() {
    setCounters([...counters, 0]);
  }

  function half(index: number) {
    counters[index] = counters[index] / 2;
    setCounters([...counters]);    
  }

  function decrease(index: number) {
    counters[index] = counters[index] - 1;
    setCounters([...counters]); 
  }

  function increase(index: number) {
    counters[index] = counters[index] + 1;
    setCounters([...counters]); 
  }

  function double(index: number) {
    counters[index] = counters[index] * 2;
    setCounters([...counters]); 
  }

  function reset(index: number) {
    counters[index] = 0;
    setCounters([...counters]); 
  }

  function deleteCounter(index: number) {
    const newCounters = [...counters];
    newCounters.splice(index, 1);
    setCounters(newCounters);
  }

  function moveUp(index: number) {    
    if (index > 0) {
      const newCounters = [...counters];
      const temp = newCounters[index - 1];
      newCounters[index - 1] = newCounters[index];
      newCounters[index] = temp;
      setCounters(newCounters);
    }
  }

  function moveDown(index: number) {    
    const newCounters = [...counters];
    if (index < newCounters.length - 1) {      
      const temp = newCounters[index + 1];
      newCounters[index + 1] = newCounters[index];
      newCounters[index] = temp;
      setCounters(newCounters);
    }
  }
  
  return (
    <>
      <button className={styles.newCounterButton} onClick={newCounter}>New counter</button>
      <ul>
        {counters.map((count, index) => 
          <li className={styles.li} key={index}>            
            <Counter count={count} onHalfClick={() => half(index)} onDecreaseClick={() => decrease(index)} onIncreaseClick={() => increase(index)} onDoubleClick={() => double(index)} onResetClick={() => reset(index)} />          
            <button onClick={() => deleteCounter(index)}>Delete</button>
            <button onClick={() => moveUp(index)}>⬆</button>
            <button onClick={() => moveDown(index)}>⬇</button>
          </li>)}
      </ul>
    </>
  );
}

export default App;
