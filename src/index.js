const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();
app.use(cors());
app.use(express.json());
app.set('view engine', 'ejs');


const port = 3000;

async function getConnection() {
  const connection = await mysql.createConnection({
    host: 'sql.freedb.tech',
    user: 'freedb_reactiveDetectives',
    password: 'jJVJ$$p#s%2SpCg',
    database: 'freedb_MisProyectos',
  });

  connection.connect();
  return connection;
}

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

app.get('/listProject', async (req, res) => {
  try {
    const conn = await getConnection();
    const queryProjects =
      'SELECT * FROM projects INNER JOIN users ON users.idusers = projects.fk_idusers';
    const [results] = await conn.query(queryProjects);
    conn.end();
    res.json(results);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'Error al obtener los datos de los proyectos.' });
  }
});
app.get('/newCard/:idprojects', async (req, res) => {
  const id = req.params.idprojects;
  const selectProject =
    'SELECT * FROM projects INNER JOIN users ON users.idusers = projects.fk_idusers WHERE idprojects = ?';
  const conn = await getConnection();
  const [results] = await conn.query(selectProject, [id]);
  if (results.length === 0) {
    res.render('notFound');
  } else {
    res.render('detailCard', {
      project: results[0],
    });
  }
  console.log(results[0]);
  conn.end();
});

app.post('/newCard', async (req, res) => {
  const newCard = req.body;

  let sqlAuthor = 'INSERT INTO users (autor, job, image) VALUES (?, ?, ?)';
  let valuesAuthor = [newCard.autor, newCard.job, newCard.image];
  const conn = await getConnection();
  const [results, fields] = await conn.query(sqlAuthor, valuesAuthor);
  const sqlProject =
    'INSERT INTO projects (name, slogan, repo, demo, technologies, `desc`, photo, fk_idusers) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  let valuesProject = [
    newCard.name,
    newCard.slogan,
    newCard.repo,
    newCard.demo,
    newCard.technologies,
    newCard.desc,
    newCard.photo,
    results.insertId,
  ];
  const [resultsInsert] = await conn.query(sqlProject, valuesProject);
  let response = {
    success: true,
    cardURL: `https://proyectorium.onrender.com/newCard/${resultsInsert.insertId}`,
  };
  res.json(response);
  conn.end();
});

//delete
app.delete('/deleteProject/:id', async (req, res) => {
  const projectId = req.params.id;

  try {
    const connection = await getConnection();

    const [result] = await connection.query(
      'DELETE FROM projects WHERE idprojects = ?',
      [projectId]
    );
    connection.end();
    res.json({ success: true, message: 'Project deleted successfully.' });
  } catch (error) {
    console.error('Error deleting project:', error);
    res.status(500).json({ success: false, error: 'Error deleting project.' });
  }
});

const staticServerPathWeb = './src/public-react';
app.use(express.static(staticServerPathWeb));

const staticServerCSS = './src/public-css';
app.use(express.static(staticServerCSS));

const staticServerImg = './src/images';
app.use(express.static(staticServerImg));
