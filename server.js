const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');

const app = express();
const port = process.env.PORT || 3000;

// Configurar el fallback del historial para SPA
app.use(history({
  // Excluir archivos estáticos del fallback
  rewrites: [
    { from: /^\/api\/.*$/, to: function(context) {
      return context.parsedUrl.pathname;
    }}
  ]
}));

// Servir archivos estáticos desde el directorio dist
app.use(express.static(path.join(__dirname, 'dist')));

// Manejar todas las rutas para SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
