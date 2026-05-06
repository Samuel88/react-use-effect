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
- È il **render iniziale** del componente
- Lo **state del componente** (o di un antenato) è stato aggiornato (re-render)

### **Render**
React chiama la funzione del componente, calcola l'albero di elementi, **valuta** gli hook, ma in questa fase **non tocca ancora il DOM**.

### **Commit**
React applica le modifiche al DOM (inserisce/aggiorna/rimuove nodi), poi esegue gli effetti (`useEffect` e cleanup degli effetti precedenti). In questa fase:
- Se un elemento viene **inserito** nel DOM si parla di **MOUNT**
- Se un elemento viene **rimosso** dal DOM si parla di **UNMOUNT**

### **useEffect e le fasi di vita**
React eseguirà la tua **setup function**. Dopo ogni commit con dipendenze cambiate, React prima eseguirà la **cleanup function** (se fornita) con i valori vecchi, e poi eseguirà la **setup function** con i valori nuovi.

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