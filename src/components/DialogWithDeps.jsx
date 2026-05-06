import { useEffect } from 'react';

function DialogWithDeps({ roomId }) {
    useEffect(() => {
        console.log("🔌 setup: connect room", roomId);

        return () => {
            console.log("❌ cleanup: disconnect room", roomId);
        };
    }, [roomId]); // dipendenza

    return <div>Dialog room: {roomId}</div>;
}

export default DialogWithDeps;