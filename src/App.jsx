// App.jsx
import React, { useEffect, useRef, useState } from 'react';
import './App.css';

function FadeInSection({ children }) {
  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    const current = domRef.current;
    if (current) observer.observe(current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={domRef} className={`fade-in ${isVisible ? 'visible' : ''}`}>
      {children}
    </div>
  );
}

function App() {
  const articles = [
    {
      title: "Cómo establecer rutinas efectivas",
      content: "Descubre cómo crear hábitos duraderos con pequeños cambios diarios."
    },
    {
      title: "Alimentos para potenciar tu energía",
      content: "Conoce los mejores alimentos para mantener altos tus niveles de energía."
    },
    {
      title: "Por qué descansar es clave",
      content: "Dormir bien mejora tus resultados físicos y mentales."
    }
  ];

  return (
    <>
<nav className="navbar">
  <div className="navbar-inner">
    <a href="#" className="navbar-left">
      <img src="/images/logo.png" alt="FitFlow logo" className="navbar-logo" />
      <span className="navbar-name">FitFlow</span>
    </a>
    <ul className="navbar-menu">
      <li><a href="#features">Características</a></li>
      <li><a href="#screenshots">Capturas</a></li>
      <li><a href="#cta">Descargar</a></li>
    </ul>
  </div>
</nav>

<main className="container">
  <section className="hero">
    <img src="/images/logo.png" alt="logo" className="logo" />
    <h1>FitFlow</h1>
    <p>Tu compañero ideal para mantenerte en forma.</p>
    <a href="#" className="download-button">Descargar en iOS</a>
  </section>

        <FadeInSection>
          <section className="features" id="features">
            <div className="feature">
              <h2>Seguimiento Diario</h2>
              <p>Registra tus entrenamientos y progreso fácilmente.</p>
            </div>
            <div className="feature">
              <h2>Planes Personalizados</h2>
              <p>Recibe rutinas adaptadas a tus objetivos.</p>
            </div>
            <div className="feature">
              <h2>Integración con Salud</h2>
              <p>Sincroniza tus datos con la app Salud de Apple.</p>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="screenshots" id="screenshots">
            <h2>Explora FitFlow</h2>
            <div className="screenshot-gallery">
              <img src="/captura1.png" alt="Captura 1" />
              <img src="/captura2.png" alt="Captura 2" />
              <img src="/captura3.png" alt="Captura 3" />
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="blog">
            <h2>Últimos artículos</h2>
            <div className="articles">
              {articles.map((article, index) => (
                <div key={index} className="article">
                  <h3>{article.title}</h3>
                  <p>{article.content}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="cta" id="cta">
            <h2>Comienza tu viaje fitness hoy</h2>
            <a href="#" className="download-button">Descargar en iOS</a>
          </section>
        </FadeInSection>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-logo">
            <img src="/images/logo.png" alt="FitFlow logo" />
          </div>
          <div className="footer-text">
            <p>&copy; {new Date().getFullYear()} FitFlow. Todos los derechos reservados.</p>
            <p>
              <a href="mailto:contacto@fitflow.com">Contacto</a> ·
              <a href="https://twitter.com/fitflow" target="_blank" rel="noopener noreferrer">Twitter</a> ·
              <a href="https://instagram.com/fitflow" target="_blank" rel="noopener noreferrer">Instagram</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
