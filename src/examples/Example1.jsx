import { useState } from 'react';
import Dialog from '../components/Dialog.jsx';

function Example1() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(s => !s)}>Toggle</button>
      {show && <Dialog />}
    </>
  );
}
export default Example1;

/*
ESEMPIO 1: MOUNT e UNMOUNT con useEffect

Questo esempio mostra cosa succede quando un componente viene aggiunto o rimosso dal DOM.
Il componente Dialog appare e scompare quando clicchi il bottone Toggle.

Prova a:
1. Aprire la console del browser (F12)
2. Cliccare "Toggle" per far apparire il Dialog
3. Cliccare di nuovo "Toggle" per farlo sparire
4. Osservare i messaggi nella console

***

COSA SUCCEDE PASSO PER PASSO:

🔵 PRIMO CLICK - Dialog appare (MOUNT):
1. React vede che show è diventato true
2. React aggiunge il componente Dialog al DOM
3. Subito dopo, React esegue il useEffect di Dialog
4. Nella console appare: "Dialog useEffect: setup"

🔴 SECONDO CLICK - Dialog sparisce (UNMOUNT):
1. React vede che show è diventato false
2. React rimuove il componente Dialog dal DOM
3. Prima di rimuoverlo, React esegue la funzione di cleanup
4. Nella console appare: "Dialog useEffect: cleanup"

***

CONCETTI CHIAVE:
- MOUNT = quando un componente viene aggiunto al DOM per la prima volta
- UNMOUNT = quando un componente viene rimosso dal DOM definitivamente
- useEffect con array vuoto [] si esegue solo al mount
- La funzione return dentro useEffect è il CLEANUP, si esegue solo all'unmount
- Il cleanup serve per "pulire" ciò che abbiamo fatto nel setup (es. timer, connessioni, ecc.)

*/