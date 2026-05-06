# React useEffect Tutorial

Questo progetto è un tutorial interattivo per imparare **useEffect** in React attraverso esempi pratici e ben commentati.

## 🎯 Obiettivo

Comprendere i concetti fondamentali di `useEffect`:
- **Mount/Unmount** di componenti
- **Dipendenze** e quando l'effetto si riesegue
- **Cleanup function** per pulire gli effetti
- **Side effects** del browser (document.title, timer, ecc.)

## 🔄 Le tre fasi di vita di React

### **Trigger**
Ci sono due motivi per cui un componente si renderizza:
- **Render iniziale**: quando l'app si avvia (`createRoot().render()`)
- **Re-render**: quando lo **state del componente** (o di un antenato) viene aggiornato

### **Render**
React chiama ricorsivamente le funzioni dei componenti per creare il **Virtual DOM** (rappresentazione JavaScript della struttura HTML). In questa fase React:
- Calcola cosa dovrebbe essere visualizzato
- Confronta con il DOM precedente (**riconciliazione**)
- **NON tocca ancora il DOM reale**

### **Commit**
React applica le modifiche al DOM reale (inserisce/aggiorna/rimuove nodi). In questa fase:
- Se un elemento viene **inserito** nel DOM si parla di **MOUNT**
- Se un elemento viene **rimosso** dal DOM si parla di **UNMOUNT**
- `useLayoutEffect` si esegue **durante** il commit, prima del paint
- `useEffect` viene schedulato per **dopo** il commit e il paint

### **useEffect e le fasi di vita**
React eseguirà la tua **setup function** al **primo render** (mount) e dopo ogni commit con dipendenze cambiate. Quando le dipendenze cambiano, React prima eseguirà la **cleanup function** (se fornita) con i valori vecchi, e poi eseguirà la **setup function** con i valori nuovi. La **cleanup** viene chiamata anche una volta finale all'**unmount** del componente.

### **Timing di esecuzione importante**
⚡ **Distinzione fondamentale**:
- **`useLayoutEffect`**: si esegue **sincrono durante il commit**, prima del paint del browser (blocca il rendering)
- **`useEffect`**: si esegue **generalmente dopo il paint**, ma può eseguire **prima del paint** se causato da interazione utente (click)
- React 17+ ha reso `useEffect` completamente asincrono per migliorare le performance

⚡ **Sequenza completa** (caso generale):
1. **Render** → 2. **Commit** (DOM update + `useLayoutEffect`) → 3. **Paint** (UI visibile) → 4. **`useEffect`**

⚡ **Eccezione importante**: Per eventi da interazione utente (click), `useEffect` può eseguire **prima** del paint

⚡ **Ordine sequenziale garantito**:
Anche se sono asincrone, React **garantisce** che:
- **Mount**: Solo setup (prima volta)
- **Update** (dipendenze cambiate): Prima cleanup (valori vecchi) → poi setup (valori nuovi)
- **Unmount**: Solo cleanup finale
- Questo previene conflitti e memory leaks

> **Regola generale**: `useEffect` non blocca mai la UI - si esegue dopo che l'utente vede già i cambiamenti!

## 🚀 Come eseguire il progetto

```bash
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
```

Poi apri il browser su `http://localhost:5173`

## 📚 Gli esempi

### **Esempio 1: Mount/Unmount**
- Mostra come `useEffect` si comporta quando un componente appare/scompare
- **Concetto chiave**: effetti che si eseguono solo al mount con `[]`
- **Cleanup**: funzione che si esegue all'unmount

### **Esempio 2: Dipendenze**
- Mostra come `useEffect` si riesegue quando cambiano le dipendenze
- **Concetto chiave**: array delle dipendenze `[variabile]`
- **Cleanup + Setup**: prima cleanup, poi nuovo setup

### **Esempio 3: Side Effects**
- Mostra come interagire con API del browser (document.title)
- **Concetto chiave**: effetti che modificano cose fuori dal componente
- **Cleanup**: ripristinare lo stato precedente

## 🎮 Come usare gli esempi

1. **Apri sempre la console del browser** (F12) per vedere i messaggi
2. **Leggi i commenti** nel codice - sono molto dettagliati per scopo didattico
3. **Sperimenta** cliccando i bottoni e cambiando i valori
4. **Osserva** cosa succede nella console e nel browser

## 🏗️ Struttura del progetto

```
src/
├── components/          # Componenti riutilizzabili
│   ├── Dialog.jsx       # Componente per esempio 1
│   ├── DialogWithDeps.jsx # Componente per esempio 2
│   ├── PageTitle.jsx    # Componente per esempio 3
│   └── UseEffectExplanation.jsx # Scheletro didattico per lezioni
├── examples/            # I 3 esempi principali
│   ├── Example1.jsx     # Mount/Unmount
│   ├── Example2.jsx     # Dipendenze
│   └── Example3.jsx     # Side Effects
└── App.jsx              # Menu per navigare tra esempi
```

## 💡 Perché i commenti sono così lunghi?

I commenti dettagliati nei primi esempi sono **intenzionali** per scopi didattici:
- Aiutano a **interiorizzare** ogni passaggio del ciclo di vita React
- **Scompongono** processi complessi in step comprensibili
- Creano **abitudini mentali** per ragionare su mount/unmount/re-render

Negli esempi successivi i commenti diventano più concisi quando i concetti base sono acquisiti.

## 🔧 Tecnologie utilizzate

- **React 19** + **Vite** per lo sviluppo
- **Bootstrap 5.3.8** per lo styling minimo
- **StrictMode** attivo per individuare problemi di cleanup

## 📖 Prossimi passi

Dopo aver completato questi esempi, sarai pronto per:
- Effetti con timer e intervalli
- Fetch di dati con useEffect
- Gestione di eventi del browser
- Pattern avanzati di cleanup