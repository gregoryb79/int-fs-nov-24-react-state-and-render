import { useState } from "react";
import styles from "./Counter.module.scss";

export function Counter() {
    console.log("Render Counter");
    const [count, setCount] = useState(0);

    return (
        <article className={styles.container}>
            <button onClick={() => {
                const currCount = count/2;
                setCount(currCount);
                console.log(currCount);
            }}>➗2</button>
            <button onClick={() => {
                const currCount = count-1;
                setCount(currCount);
                console.log(currCount);
            }}>➖1</button>
            <span>{count}</span>
            <button onClick={() => {
                const currCount = count+1;
                setCount(currCount);
                console.log(currCount);
            }}>➕1</button>
            <button onClick={() => {
                const currCount = count*2;
                setCount(currCount);
                console.log(currCount);
            }}>✖️2</button>
            <button onClick={() => {
                const currCount = 0;
                setCount(currCount);
                console.log(currCount);
            }}>Reset</button>
        </article>
    );
}
