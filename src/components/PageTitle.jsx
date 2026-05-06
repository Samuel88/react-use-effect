import { useEffect } from 'react';

function PageTitle({ page }) {
    useEffect(() => {
        // Salva il titolo originale
        const originalTitle = document.title;

        // Crea il nuovo titolo basato sulla pagina
        const pageNames = {
            home: "Home",
            about: "Chi Siamo",
            contact: "Contatti",
            products: "Prodotti"
        };

        const newTitle = `MyApp - ${pageNames[page] || page}`;

        // Cambia il titolo della scheda del browser
        document.title = newTitle;
        console.log("📄 Titolo cambiato in:", newTitle);

        // Cleanup: ripristina il titolo originale quando il componente viene smontato
        return () => {
            document.title = originalTitle;
            console.log("🔄 Titolo ripristinato a:", originalTitle);
        };
    }, [page]); // Riesegui quando cambia la prop 'page'

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Pagina corrente</h5>
                <p className="card-text">
                    Stai visualizzando: <strong>{page}</strong>
                </p>
                <small className="text-muted">
                    Il titolo della scheda del browser è stato aggiornato automaticamente!
                </small>
            </div>
        </div>
    );
}

export default PageTitle;