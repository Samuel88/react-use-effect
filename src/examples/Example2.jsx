import { useState } from "react";
import DialogWithDeps from "../components/DialogWithDeps.jsx";

function Example2() {
    const [show, setShow] = useState(false);
    const [roomId, setRoomId] = useState("general");

    return (
        <div>
            <label>
                Choose room:{" "}
                <select
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value)}
                >
                    <option value="general">general</option>
                    <option value="travel">travel</option>
                    <option value="music">music</option>
                </select>
            </label>

            <button onClick={() => setShow((s) => !s)} style={{ marginLeft: 8 }}>
                {show ? "Close Dialog" : "Open Dialog"}
            </button>

            <hr />

            {show && <DialogWithDeps roomId={roomId} />}
        </div>
    );
}

export default Example2;

/*
ESEMPIO 2: useEffect con DIPENDENZE

Questo esempio mostra cosa succede quando useEffect ha delle dipendenze nell'array.
Quando una dipendenza cambia, l'effetto viene rieseguito!

Prova a:
1. Aprire la console del browser (F12)
2. Cliccare "Open Dialog" per far apparire il componente
3. Cambiare la stanza nel menu a tendina (general → travel → music)
4. Osservare i messaggi nella console
5. Cliccare "Close Dialog" per chiudere il componente

***

COSA SUCCEDE PASSO PER PASSO:

🔵 QUANDO APRI IL DIALOG (MOUNT):
1. Il componente DialogWithDeps viene aggiunto al DOM
2. useEffect si esegue per la prima volta
3. Nella console appare: "🔌 setup: connect room general"

🔄 QUANDO CAMBI STANZA (UPDATE con nuova dipendenza):
1. La prop roomId cambia (es. da "general" a "travel")
2. React confronta le dipendenze: [roomId] è cambiato!
3. PRIMA esegue il cleanup con il valore VECCHIO: "❌ cleanup: disconnect room general"
4. POI esegue il setup con il valore NUOVO: "🔌 setup: connect room travel"

🔴 QUANDO CHIUDI IL DIALOG (UNMOUNT):
1. Il componente viene rimosso dal DOM
2. React esegue il cleanup un'ultima volta
3. Nella console appare: "❌ cleanup: disconnect room [stanza-corrente]"

***

CONCETTI CHIAVE:
- useEffect con dipendenze [roomId] si riesegue ogni volta che roomId cambia
- Quando l'effetto si riesegue: PRIMA cleanup, POI setup
- Il cleanup riceve sempre i valori "vecchi" delle variabili
- Il setup riceve sempre i valori "nuovi" delle variabili
- All'unmount viene sempre eseguito il cleanup finale

ESEMPIO PRATICO:
Se stai connettendoti a una chat room, devi disconnetterti dalla room vecchia
prima di connetterti a quella nuova!

*/