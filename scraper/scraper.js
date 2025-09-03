const axios = require('axios');
const cheerio = require('cheerio');

class QuinielaScraper {
  constructor() {
    this.baseUrl = 'https://quinieleando.com.ar';
    this.headers = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    };
  }

  async obtenerPagina(url) {
    try {
      const response = await axios.get(url, { headers: this.headers });
      return cheerio.load(response.data);
    } catch (error) {
      console.error(`Error al obtener la página ${url}:`, error.message);
      throw error;
    }
  }

  async obtenerQuinielaNacional() {
    try {
      const $ = await this.obtenerPagina(`${this.baseUrl}/quinielas/nacional/resultados-de-hoy`);
      
      const resultados = {
        nombre: 'Quiniela Nacional',
        fecha: this.obtenerFecha(),
        sorteos: {
          previa: { cabeza: null, numeros: [] },
          primera: { cabeza: null, numeros: [] },
          matutina: { cabeza: null, numeros: [] },
          vespertina: { cabeza: null, numeros: [] },
          nocturna: { cabeza: null, numeros: [] }
        }
      };

      // Buscar la tabla de resultados
      $('table tr').each((index, element) => {
        const $row = $(element);
        const $cells = $row.find('td');
        
        if ($cells.length >= 6) {
          const sorteo = $cells.eq(0).text().trim();
          const previa = $cells.eq(1).text().trim();
          const primera = $cells.eq(2).text().trim();
          const matutina = $cells.eq(3).text().trim();
          const vespertina = $cells.eq(4).text().trim();
          const nocturna = $cells.eq(5).text().trim();

          if (sorteo && sorteo.match(/^\d+$/)) {
            const numeroSorteo = parseInt(sorteo);
            if (numeroSorteo >= 1 && numeroSorteo <= 20) {
              if (previa) {
                const numero = this.extraerNumero(previa);
                if (numeroSorteo === 1) resultados.sorteos.previa.cabeza = numero;
                resultados.sorteos.previa.numeros.push({ sorteo: numeroSorteo, numero: numero });
              }
              if (primera) {
                const numero = this.extraerNumero(primera);
                if (numeroSorteo === 1) resultados.sorteos.primera.cabeza = numero;
                resultados.sorteos.primera.numeros.push({ sorteo: numeroSorteo, numero: numero });
              }
              if (matutina) {
                const numero = this.extraerNumero(matutina);
                if (numeroSorteo === 1) resultados.sorteos.matutina.cabeza = numero;
                resultados.sorteos.matutina.numeros.push({ sorteo: numeroSorteo, numero: numero });
              }
              if (vespertina) {
                const numero = this.extraerNumero(vespertina);
                if (numeroSorteo === 1) resultados.sorteos.vespertina.cabeza = numero;
                resultados.sorteos.vespertina.numeros.push({ sorteo: numeroSorteo, numero: numero });
              }
              if (nocturna) {
                const numero = this.extraerNumero(nocturna);
                if (numeroSorteo === 1) resultados.sorteos.nocturna.cabeza = numero;
                resultados.sorteos.nocturna.numeros.push({ sorteo: numeroSorteo, numero: numero });
              }
            }
          }
        }
      });

      return resultados;
    } catch (error) {
      console.error('Error al obtener quiniela nacional:', error);
      return { error: 'No se pudieron obtener los resultados' };
    }
  }

  async obtenerQuinielaMendoza() {
    try {
      const $ = await this.obtenerPagina(`${this.baseUrl}/quinielas/mendoza/resultados-de-hoy`);
      
      const resultados = {
        nombre: 'Quiniela Mendoza',
        fecha: this.obtenerFecha(),
        sorteos: {
          previa: { cabeza: null, numeros: [] },
          primera: { cabeza: null, numeros: [] },
          matutina: { cabeza: null, numeros: [] },
          vespertina: { cabeza: null, numeros: [] },
          nocturna: { cabeza: null, numeros: [] }
        }
      };

      // Buscar la tabla de resultados
      $('table tr').each((index, element) => {
        const $row = $(element);
        const $cells = $row.find('td');
        
        if ($cells.length >= 6) {
          const sorteo = $cells.eq(0).text().trim();
          const previa = $cells.eq(1).text().trim();
          const primera = $cells.eq(2).text().trim();
          const matutina = $cells.eq(3).text().trim();
          const vespertina = $cells.eq(4).text().trim();
          const nocturna = $cells.eq(5).text().trim();

          if (sorteo && sorteo.match(/^\d+$/)) {
            const numeroSorteo = parseInt(sorteo);
            if (numeroSorteo >= 1 && numeroSorteo <= 20) {
              if (previa) {
                const numero = this.extraerNumero(previa);
                if (numeroSorteo === 1) resultados.sorteos.previa.cabeza = numero;
                resultados.sorteos.previa.numeros.push({ sorteo: numeroSorteo, numero: numero });
              }
              if (primera) {
                const numero = this.extraerNumero(primera);
                if (numeroSorteo === 1) resultados.sorteos.primera.cabeza = numero;
                resultados.sorteos.primera.numeros.push({ sorteo: numeroSorteo, numero: numero });
              }
              if (matutina) {
                const numero = this.extraerNumero(matutina);
                if (numeroSorteo === 1) resultados.sorteos.matutina.cabeza = numero;
                resultados.sorteos.matutina.numeros.push({ sorteo: numeroSorteo, numero: numero });
              }
              if (vespertina) {
                const numero = this.extraerNumero(vespertina);
                if (numeroSorteo === 1) resultados.sorteos.vespertina.cabeza = numero;
                resultados.sorteos.vespertina.numeros.push({ sorteo: numeroSorteo, numero: numero });
              }
              if (nocturna) {
                const numero = this.extraerNumero(nocturna);
                if (numeroSorteo === 1) resultados.sorteos.nocturna.cabeza = numero;
                resultados.sorteos.nocturna.numeros.push({ sorteo: numeroSorteo, numero: numero });
              }
            }
          }
        }
      });

      return resultados;
    } catch (error) {
      console.error('Error al obtener quiniela Mendoza:', error);
      return { error: 'No se pudieron obtener los resultados' };
    }
  }

  async obtenerQuini6() {
    try {
      const $ = await this.obtenerPagina(`${this.baseUrl}/quini6`);
      
      const resultados = {
        nombre: 'Quini 6',
        fecha: this.obtenerFecha(),
        sorteos: []
      };

      // Buscar resultados de Quini 6 en diferentes selectores
      $('.resultado-quini6, .quini6-result, [class*="quini"], .resultado, .numeros').each((index, element) => {
        const $element = $(element);
        const texto = $element.text();
        const numeros = texto.match(/\d{2}/g);
        
        if (numeros && numeros.length === 6) {
          resultados.sorteos.push({
            sorteo: `Sorteo ${index + 1}`,
            numeros: numeros,
            fecha: this.obtenerFecha()
          });
        }
      });

      // Si no encuentra resultados específicos, buscar en tablas
      if (resultados.sorteos.length === 0) {
        $('table tr, .tabla tr, tbody tr').each((index, element) => {
          const $row = $(element);
          const texto = $row.text();
          const numeros = texto.match(/\d{2}/g);
          
          if (numeros && numeros.length >= 6) {
            resultados.sorteos.push({
              sorteo: `Sorteo ${index + 1}`,
              numeros: numeros.slice(0, 6),
              fecha: this.obtenerFecha()
            });
          }
        });
      }

      // Buscar en divs con números
      if (resultados.sorteos.length === 0) {
        $('div').each((index, element) => {
          const $div = $(element);
          const texto = $div.text().trim();
          const numeros = texto.match(/\d{2}/g);
          
          if (numeros && numeros.length === 6 && texto.length < 50) {
            resultados.sorteos.push({
              sorteo: `Sorteo ${index + 1}`,
              numeros: numeros,
              fecha: this.obtenerFecha()
            });
          }
        });
      }

      return resultados;
    } catch (error) {
      console.error('Error al obtener Quini 6:', error);
      return { error: 'No se pudieron obtener los resultados' };
    }
  }

  async obtenerTelekino() {
    try {
      const $ = await this.obtenerPagina(`${this.baseUrl}/telekino`);
      
      const resultados = {
        nombre: 'Telekino',
        fecha: this.obtenerFecha(),
        sorteos: []
      };

      // Buscar resultados de Telekino en diferentes selectores
      $('.resultado-telekino, .telekino-result, [class*="telekino"], .resultado, .numeros').each((index, element) => {
        const $element = $(element);
        const texto = $element.text();
        const numeros = texto.match(/\d{1,2}/g);
        
        if (numeros && numeros.length >= 5) {
          resultados.sorteos.push({
            sorteo: `Sorteo ${index + 1}`,
            numeros: numeros.slice(0, 5),
            fecha: this.obtenerFecha()
          });
        }
      });

      // Si no encuentra resultados específicos, buscar en tablas
      if (resultados.sorteos.length === 0) {
        $('table tr, .tabla tr, tbody tr').each((index, element) => {
          const $row = $(element);
          const texto = $row.text();
          const numeros = texto.match(/\d{1,2}/g);
          
          if (numeros && numeros.length >= 5) {
            resultados.sorteos.push({
              sorteo: `Sorteo ${index + 1}`,
              numeros: numeros.slice(0, 5),
              fecha: this.obtenerFecha()
            });
          }
        });
      }

      // Buscar en divs con números
      if (resultados.sorteos.length === 0) {
        $('div').each((index, element) => {
          const $div = $(element);
          const texto = $div.text().trim();
          const numeros = texto.match(/\d{1,2}/g);
          
          if (numeros && numeros.length >= 5 && texto.length < 50) {
            resultados.sorteos.push({
              sorteo: `Sorteo ${index + 1}`,
              numeros: numeros.slice(0, 5),
              fecha: this.obtenerFecha()
            });
          }
        });
      }

      return resultados;
    } catch (error) {
      console.error('Error al obtener Telekino:', error);
      return { error: 'No se pudieron obtener los resultados' };
    }
  }

  extraerNumero(texto) {
    if (!texto) return null;
    const match = texto.match(/\d{4}/);
    return match ? match[0] : null;
  }

  obtenerFecha() {
    return new Date().toLocaleDateString('es-AR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  obtenerFechaAnterior(diasAtras) {
    const fecha = new Date();
    fecha.setDate(fecha.getDate() - diasAtras);
    return fecha.toLocaleDateString('es-AR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}

module.exports = new QuinielaScraper();
