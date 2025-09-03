import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import QuinielaCard from './components/QuinielaCard';
import Quini6Card from './components/Quini6Card';
import TelekinoCard from './components/TelekinoCard';
import LoadingSpinner from './components/LoadingSpinner';
import TVMode from './components/TVMode';

function App() {
  const [resultados, setResultados] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ultimaActualizacion, setUltimaActualizacion] = useState(null);

  useEffect(() => {
    obtenerResultados();
    // Actualizar cada 5 minutos
    const interval = setInterval(obtenerResultados, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const obtenerResultados = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/resultados');
      if (!response.ok) {
        throw new Error('Error al obtener los resultados');
      }
      const data = await response.json();
      setResultados(data);
      setUltimaActualizacion(data.ultimaActualizacion);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const actualizarResultados = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/actualizar', { method: 'POST' });
      if (!response.ok) {
        throw new Error('Error al actualizar los resultados');
      }
      await obtenerResultados();
    } catch (err) {
      setError(err.message);
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading && !resultados) {
    return (
      <div className="app">
        <Header />
        <div className="loading-container">
          <LoadingSpinner />
          <p>Cargando resultados...</p>
        </div>
      </div>
    );
  }

  return (
    <TVMode>
      <div className="app">
        <Header 
          ultimaActualizacion={ultimaActualizacion}
          onActualizar={actualizarResultados}
          loading={loading}
        />
        
        <main className="main-content">
          {error && (
            <div className="error-message">
              <p>⚠️ {error}</p>
              <button onClick={obtenerResultados} className="retry-button">
                Reintentar
              </button>
            </div>
          )}

          <div className="results-grid">
            {resultados?.quinielaNacional && (
              <QuinielaCard 
                data={resultados.quinielaNacional} 
                title="Quiniela Nacional"
                color="blue"
              />
            )}
            
            {resultados?.quinielaMendoza && (
              <QuinielaCard 
                data={resultados.quinielaMendoza} 
                title="Quiniela Mendoza"
                color="green"
              />
            )}
            
            {resultados?.quini6 && (
              <Quini6Card 
                data={resultados.quini6} 
                title="Quini 6"
                color="purple"
              />
            )}
            
            {resultados?.telekino && (
              <TelekinoCard 
                data={resultados.telekino} 
                title="Telekino"
                color="orange"
              />
            )}
          </div>

          {loading && (
            <div className="loading-overlay">
              <LoadingSpinner />
              <p>Actualizando...</p>
            </div>
          )}
        </main>
      </div>
    </TVMode>
  );
}

export default App;