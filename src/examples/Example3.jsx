import { useState, useEffect } from 'react';
import PageTitle from '../components/PageTitle.jsx';

function Example3() {
    const [currentPage, setCurrentPage] = useState("home");

    return (
        <div>
            <div className="mb-3">
                <label className="form-label">
                    Scegli la pagina:
                </label>
                <select
                    className="form-select"
                    value={currentPage}
                    onChange={(e) => setCurrentPage(e.target.value)}
                >
                    <option value="home">🏠 Home</option>
                    <option value="about">ℹ️ Chi Siamo</option>
                    <option value="contact">📧 Contatti</option>
                    <option value="products">🛒 Prodotti</option>
                </select>
            </div>

            <hr />

            <PageTitle page={currentPage} />

            <div className="alert alert-info mt-3">
                <strong>Guarda il titolo della scheda del browser!</strong><br />
                Cambia quando selezioni una pagina diversa.
            </div>
        </div>
    );
}

export default Example3;

/*
ESEMPIO 3: useEffect con SIDE EFFECTS del browser

Questo esempio mostra come useEffect può interagire con API del browser.
Il componente PageTitle cambia il titolo della scheda del browser quando riceve una nuova prop.

Prova a:
1. Aprire la console del browser (F12)
2. Guardare il titolo della scheda del browser (in alto)
3. Cambiare la pagina nel menu a tendina
4. Osservare come cambia il titolo della scheda
5. Controllare i messaggi nella console

***

COSA SUCCEDE PASSO PER PASSO:

🔵 MOUNT del componente PageTitle:
1. Il componente PageTitle viene aggiunto al DOM
2. useEffect si esegue e cambia document.title
3. Il titolo della scheda browser cambia da "Vite + React" a "MyApp - Home"
4. Nella console appare: "📄 Titolo cambiato in: MyApp - Home"

🔄 CAMBIO di pagina (nuova prop):
1. La prop 'page' cambia (es. da "home" a "about")
2. React ri-renderizza PageTitle con la nuova prop
3. useEffect si riesegue perché la dipendenza [page] è cambiata
4. Il titolo della scheda cambia: "MyApp - Chi Siamo"
5. Nella console appare: "📄 Titolo cambiato in: MyApp - Chi Siamo"

🔴 UNMOUNT del componente (se togli PageTitle dall'albero):
1. React esegue il cleanup prima di rimuovere il componente
2. Il titolo della scheda torna a quello originale: "Vite + React"
3. Nella console appare: "🔄 Titolo ripristinato a: Vite + React"

***

CONCETTI CHIAVE:
- useEffect può modificare cose FUORI dal componente (document.title, localStorage, ecc.)
- Queste sono chiamate "side effects" (effetti collaterali)
- È importante fare cleanup per ripristinare lo stato precedente
- Il cleanup previene "memory leaks" e comportamenti strani
- document.title è utile per SPA (Single Page Applications)

ESEMPIO PRATICO:
In una vera app, ogni "pagina" dovrebbe avere un titolo diverso
per migliorare l'esperienza utente e l'SEO.

*/