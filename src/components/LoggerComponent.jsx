import { useEffect, useState } from "react";

function LoggerComponent() {
    console.log("➡️ Render: corpo del componente");

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("✅ useEffect (mount/update): effetto eseguito dopo il commit");

        return () => {
            console.log("🧹 Cleanup useEffect: prima del prossimo commit o dell'unmount");
        };
    }, [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(c => c + 1)}>Incrementa</button>
        </div>
    );
}

export default LoggerComponent;