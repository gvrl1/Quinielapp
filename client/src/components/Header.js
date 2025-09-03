import React from 'react';
import './Header.css';

const Header = ({ ultimaActualizacion, onActualizar, loading }) => {
  const formatearFecha = (fecha) => {
    if (!fecha) return '';
    const date = new Date(fecha);
    return date.toLocaleString('es-AR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-title">
          <h1>🎲 Resultados de Loterías Argentinas</h1>
          <p>Quinielas, Quini 6 y Telekino en tiempo real</p>
        </div>
        
        <div className="header-actions">
          <div className="last-update">
            {ultimaActualizacion && (
              <span className="update-time">
                Última actualización: {formatearFecha(ultimaActualizacion)}
              </span>
            )}
          </div>
          
          <button 
            className={`update-button ${loading ? 'loading' : ''}`}
            onClick={onActualizar}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner"></span>
                Actualizando...
              </>
            ) : (
              <>
                🔄 Actualizar
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
