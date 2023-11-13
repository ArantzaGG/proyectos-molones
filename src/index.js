const express = require('express');
const cors = require ('cors');
const mysql = require ('mysql2/promise');

const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

async function getConnection() {
  const connection = await mysql.createConnection({
    host: 'sql.freedb.tech',
    user: 'freedb_reactiveDetectives',
    password: 'SVDJ$*k973B?AtX',
    database: 'freedb_ProyectosMolones',
  });

  connection.connect();
  return connection;
}

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

const staticServerPathWeb = './web/dist/';
app.use(express.static(staticServerPathWeb));

app.get('/listProject', async (req, res) =>{
    try {
      const conn = await getConnection();
      const queryProjects = 'SELECT * FROM projects INNER JOIN users ON users.idusers = projects.fk_idusers';
      const [results] = await conn.query(queryProjects);
      conn.end();
      res.json(results);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener los datos de los proyectos.' });
    }
  });
