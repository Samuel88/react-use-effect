import { useEffect } from 'react';

/*
COMPONENTE DIDATTICO: Scheletro di useEffect

Questo componente è uno scheletro per mostrare agli studenti
la struttura completa di useEffect durante le lezioni.

NON è parte degli esempi interattivi, ma serve come
riferimento visivo per spiegare la teoria.
*/

function UseEffectExplanation() {
    useEffect(() => {
        // 🔧 SETUP FUNCTION (callback principale)
        // Questa funzione si esegue:
        // - Al MOUNT del componente
        // - Ogni volta che cambia una DIPENDENZA

        console.log("✅ Setup: effetto eseguito");

        // Qui metti il codice che vuoi eseguire:
        // - connessioni a servizi esterni
        // - subscription a eventi
        // - avvio di timer/intervalli
        // - modifiche al DOM o API del browser
        // - fetch di dati

        // 🧹 CLEANUP FUNCTION (funzione di pulizia)
        // Questa è OPZIONALE ma molto importante
        return () => {
            // Questa funzione si esegue:
            // - Prima di ogni NUOVO SETUP (quando cambiano le dipendenze)
            // - All'UNMOUNT del componente

            console.log("🧹 Cleanup: pulizia effetto");

            // Qui metti il codice di pulizia:
            // - chiudi connessioni
            // - rimuovi event listeners
            // - cancella timer/intervalli
            // - ripristina stato precedente
            // - cancella fetch in corso
        };
    }, []); // 📝 ARRAY DELLE DIPENDENZE

    // [] = esegui solo al mount/unmount
    // [variabile] = riesegui quando 'variabile' cambia
    // nessun array = riesegui ad ogni render (EVITA!)

    return (
        <div>
            <h2>Componente di esempio</h2>
            <p>Questo componente mostra la struttura completa di useEffect</p>
        </div>
    );
}

export default UseEffectExplanation;

/*
ORDINE DI ESECUZIONE:

1. 🔵 MOUNT:
   - Solo SETUP function

2. 🔄 UPDATE (con dipendenze cambiate):
   - Prima CLEANUP (con valori vecchi)
   - Poi SETUP (con valori nuovi)

3. 🔴 UNMOUNT:
   - Solo CLEANUP finale

La cleanup function è fondamentale per:
- Prevenire memory leaks
- Evitare comportamenti strani
- Mantenere l'app performante
- Essere un developer professionale!
*/