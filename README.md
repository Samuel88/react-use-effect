# React useEffect Tutorial

Questo progetto è un tutorial interattivo per imparare **useEffect** in React attraverso esempi pratici e ben commentati.

## 🤔 Cos'è useEffect?

`useEffect` è un **hook** di React che permette di eseguire codice in risposta ai cambiamenti del ciclo di vita di un componente — dopo che è stato montato, aggiornato o prima che venga rimosso.

Serve a gestire i **side effects**: operazioni che interagiscono con qualcosa *fuori* dal componente React, come:

- **Fetch di dati** da un'API
- **Timer** (`setTimeout`, `setInterval`)
- **Sottoscrizioni** a eventi del browser o websocket
- **Manipolazione diretta del DOM** (es. `document.title`)
- **Logging** e analytics

Senza `useEffect`, queste operazioni andrebbero nel corpo del componente e verrebbero eseguite ad ogni render, causando comportamenti inattesi e loop infiniti.

```jsx
useEffect(() => {
  // setup: codice da eseguire al mount o quando le dipendenze sono cambiate
  return () => {
    // cleanup: eseguito prima del prossimo effetto o all'unmount
  };
}, [/* dipendenze */]);
```

## 🔄 Le tre fasi di vita di React

### **Trigger**
Ci sono due motivi per cui un componente si renderizza:
- **Render iniziale**: quando l'app si avvia (`createRoot().render()`)
- **Re-render**: quando lo **state del componente** (o di un antenato) viene aggiornato

### **Render**
React chiama ricorsivamente le funzioni dei componenti per creare il **Virtual DOM** (rappresentazione JavaScript della struttura HTML). In questa fase React:
- Calcola cosa dovrebbe essere visualizzato
- Confronta con il **precedente albero React** (**riconciliazione**) — non con il DOM reale
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
- **`useEffect`**: si esegue **generalmente dopo il paint** del browser

⚡ **Sequenza completa** (caso generale):
1. **Render** → 2. **Commit** (DOM update + `useLayoutEffect`) → 3. **Paint** (UI visibile) → 4. **`useEffect`**

⚡ **Eccezione importante (React 18+)**: Per eventi discreti da interazione utente (click, keydown), `useEffect` viene eseguito **sincronamente prima** del paint — stesso comportamento di `useLayoutEffect`.

#### Approfondimento: eventi discreti e coerenza visiva

In React 18, il comportamento di `useEffect` cambia a seconda di *cosa* ha scatenato il re-render: per certi eventi utente, React lo esegue prima che il browser aggiorni lo schermo.

> **TLDR**: Se un `useEffect` viene scatenato da un click o da un tasto, React lo esegue **prima** del paint per evitare che l'utente veda la UI in uno stato visivo inconsistente.

**Cos'è un evento discreto?**
Un'azione puntuale e intenzionale dell'utente: click, keydown, tap. Si contrappone a eventi continui come scroll o resize.

**Comportamento normale** (caso generale):
```
Render → Commit → Paint (utente vede la UI) → useEffect
```

**Con evento discreto (React 18+)**:
```
Render → Commit → useEffect → Paint
```

**Perché React fa questa eccezione?**
Per coerenza visiva. Se un click apre un menu e `useEffect` ne calcola la posizione, eseguirlo dopo il paint farebbe vedere all'utente per un frame il menu posizionato male. Anticipandolo al pre-paint, la UI è già corretta quando l'utente la vede.

**In pratica ti cambia qualcosa?**
Quasi mai. Conta solo se il tuo `useEffect` modifica aspetti visivi e hai bisogno di sapere esattamente quando vengono applicati. Per fetch, log e sottoscrizioni non fa alcuna differenza.

⚡ **Ordine sequenziale garantito**:
Anche se sono asincrone, React **garantisce** che:
- **Mount**: Solo setup (prima volta)
- **Update** (dipendenze cambiate): Prima cleanup (valori vecchi) → poi setup (valori nuovi)
- **Unmount**: Solo cleanup finale
- Questo previene conflitti e memory leaks

> **Regola generale**: `useEffect` di norma non blocca la UI — si esegue dopo il paint. Fa eccezione il caso React 18+ con eventi discreti (vedi sopra).

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