import React from 'react';
import './QuinielaCard.css';

const QuinielaCard = ({ data, title, color }) => {
  if (!data || data.error) {
    return (
      <div className={`quiniela-card ${color}`}>
        <div className="card-header">
          <h2>{title}</h2>
        </div>
        <div className="card-content">
          <p className="error-message">
            {data?.error || 'No hay datos disponibles'}
          </p>
        </div>
      </div>
    );
  }

  const renderSorteo = (sorteoData, nombreSorteo) => {
    if (!sorteoData || !sorteoData.numeros || sorteoData.numeros.length === 0) return null;

    return (
      <div className="sorteo-section">
        <div className="sorteo-header">
          <h3 className="sorteo-title">{nombreSorteo.toUpperCase()}, {data.nombre}. {data.fecha}</h3>
          {sorteoData.cabeza && (
            <div className="cabeza-info">
              <span className="cabeza-label">Cabeza:</span>
              <span className="cabeza-numero">{sorteoData.cabeza}</span>
              <span className="cabeza-descripcion">- (ver sueños...)</span>
            </div>
          )}
        </div>
        <div className="numeros-grid">
          {sorteoData.numeros.map((item, index) => (
            <div key={index} className={`numero-item ${item.sorteo === 1 ? 'cabeza' : ''}`}>
              <span className="numero-sorteo">{item.sorteo}</span>
              <span className="numero-ganador">{item.numero}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className={`quiniela-card ${color}`}>
      <div className="card-header">
        <h2>{title}</h2>
        <span className="card-date">{data.fecha}</span>
      </div>
      
      <div className="card-content">
        {data.sorteos ? (
          <div className="sorteos-container">
            {renderSorteo(data.sorteos.previa, 'Previa')}
            {renderSorteo(data.sorteos.primera, 'Primera')}
            {renderSorteo(data.sorteos.matutina, 'Matutina')}
            {renderSorteo(data.sorteos.vespertina, 'Vespertina')}
            {renderSorteo(data.sorteos.nocturna, 'Nocturna')}
          </div>
        ) : (
          <p className="no-data">No hay datos disponibles</p>
        )}
      </div>
    </div>
  );
};

export default QuinielaCard;
