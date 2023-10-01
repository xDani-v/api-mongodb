const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;


// Conexión a MongoDB, no usar localhost sino la IP lcoal
mongoose.connect('mongodb://127.0.0.1:27017/usuarios', { useNewUrlParser: true, useUnifiedTopology: true });

// Middlewares
app.use(bodyParser.json());

// Rutas
app.use('/api/users', userRoutes);

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
