import { useState } from "react";
import styles from "./Counter.module.scss";

export function Counter() {
    console.log("Render Counter");
    const [count, setCount] = useState(0);

    return (
        <article className={styles.container}>
            <button onClick={() => {
                setCount(count - 1);
                console.log(count);
            }}>-</button>
            <span>{count}</span>
            <button onClick={() => {
                setCount(count + 1);
                console.log(count);
            }}>+</button>
        </article>
    );
}
