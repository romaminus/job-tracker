// 🧩 API Роути
// /applications
// GET /applications — отримати всі заявки
// POST /applications — створити нову
// PUT /applications/:id — оновити
// DELETE /applications/:id — видалити

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;
const DATA_FILE = path.join(__dirname, 'data', 'applications.json');


const readApplications = () => {
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') {
      return [];
    }
    console.error('Помилка читання файлу applications.json:', error);
    return [];
  }
};

const writeApplications = (applications) => {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(applications, null, 2), 'utf8');
  } catch (error) {
    console.error('Помилка запису файлу applications.json:', error);
  }
};

app.use(cors());
app.use(express.json());


app.get('/applications', (req, res) => {
  console.log('GET /applications request received');
  const applications = readApplications();
  res.json(applications);
});

app.post('/applications', (req, res) => {
  console.log('POST /applications request received with body:', req.body);
  const applications = readApplications();
  const newApplication = {
    id: Date.now().toString(),
    ...req.body,
    createdAt: new Date().toISOString(), 
    updatedAt: new Date().toISOString()  
  };
  applications.push(newApplication);
  writeApplications(applications);
  console.log('New application created:', newApplication);
  res.status(201).json(newApplication);
});

app.put('/applications/:id', (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  console.log(`PUT /applications/${id} request received with body:`, updatedData);

  let applications = readApplications();
  const index = applications.findIndex(app => app.id === id);

  if (index === -1) {
    console.log(`Application with ID ${id} not found.`);
    return res.status(404).json({ message: 'Заявку не знайдено.' });
  }

  applications[index] = {
    ...applications[index],
    ...updatedData,
    updatedAt: new Date().toISOString()
  };

  writeApplications(applications);
  console.log('Application updated:', applications[index]);
  res.status(200).json(applications[index]); 
});

app.delete('/applications/:id', (req, res) => {
  const { id } = req.params;
  console.log(`DELETE /applications/${id} request received`);

  let applications = readApplications();
  const initialLength = applications.length;
  applications = applications.filter(app => app.id !== id);

  if (applications.length === initialLength) {
    console.log(`Application with ID ${id} not found.`);
    return res.status(404).json({ message: 'Заявку не знайдено.' });
  }

  writeApplications(applications);
  console.log(`Application with ID ${id} deleted.`);
  res.status(204).send(); 
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Data will be stored in: ${DATA_FILE}`);
  console.log('Press Ctrl+C to stop the server.');
});