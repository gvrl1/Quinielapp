// Configuración específica para modo TV
export const TV_CONFIG = {
  // Intervalos de actualización
  UPDATE_INTERVAL: 5 * 60 * 1000, // 5 minutos
  ROTATION_INTERVAL: 30 * 1000, // 30 segundos
  
  // Configuración de pantalla
  FULLSCREEN_DELAY: 5000, // 5 segundos para ocultar controles
  AUTO_FULLSCREEN: false, // No entrar automáticamente en pantalla completa
  
  // Configuración de fuentes para diferentes resoluciones
  FONT_SIZES: {
    '1920x1080': {
      base: 18,
      header: 3.5,
      cardTitle: 2.2,
      numbers: 2.0,
      buttons: 1.3
    },
    '2560x1440': {
      base: 24,
      header: 4.5,
      cardTitle: 2.8,
      numbers: 2.5,
      buttons: 1.6
    },
    '3840x2160': {
      base: 32,
      header: 6.0,
      cardTitle: 3.5,
      numbers: 3.0,
      buttons: 2.0
    }
  },
  
  // Configuración de colores para mejor contraste en TV
  COLORS: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    cardBackground: '#ffffff',
    textPrimary: '#2c3e50',
    textSecondary: '#6c757d',
    accent: '#3498db',
    success: '#27ae60',
    warning: '#f39c12',
    error: '#e74c3c'
  },
  
  // Configuración de animaciones
  ANIMATIONS: {
    duration: 0.3,
    easing: 'ease-out',
    bounceIn: 'bounceIn 0.6s ease-out',
    slideIn: 'slideIn 0.6s ease-out'
  },
  
  // Configuración de grid para diferentes tamaños de pantalla
  GRID_CONFIG: {
    '1920x1080': {
      columns: 'repeat(auto-fit, minmax(500px, 1fr))',
      gap: '40px',
      padding: '40px'
    },
    '2560x1440': {
      columns: 'repeat(auto-fit, minmax(600px, 1fr))',
      gap: '60px',
      padding: '60px'
    },
    '3840x2160': {
      columns: 'repeat(auto-fit, minmax(800px, 1fr))',
      gap: '80px',
      padding: '80px'
    }
  }
};

// Función para detectar resolución de pantalla
export const getScreenResolution = () => {
  const width = window.screen.width;
  const height = window.screen.height;
  
  if (width >= 3840) return '3840x2160';
  if (width >= 2560) return '2560x1440';
  return '1920x1080';
};

// Función para obtener configuración basada en resolución
export const getConfigForResolution = (resolution) => {
  return {
    fontSizes: TV_CONFIG.FONT_SIZES[resolution] || TV_CONFIG.FONT_SIZES['1920x1080'],
    grid: TV_CONFIG.GRID_CONFIG[resolution] || TV_CONFIG.GRID_CONFIG['1920x1080']
  };
};
