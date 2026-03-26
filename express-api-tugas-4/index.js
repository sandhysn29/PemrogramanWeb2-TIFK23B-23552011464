const express = require('express');
const app = express();
const PORT = 3000;

// middleware untuk baca JSON dari body
app.use(express.json());

// test route awal
app.get('/', (req, res) => {
    res.send('API berjalan dengan Express!');
});

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server jalan di http://localhost:${PORT}`);
});

// Simulasi data user
let students = [
  { id: 1, nama: "Andi", jurusan: "Informatika" },
  { id: 2, nama: "Budi", jurusan: "Sistem Informasi" },
  { id: 3, nama: "Citra", jurusan: "Teknik Komputer" },
];

// Get semua user
app.get('/students', (req, res) => {
    res.json(students);
});

// Get student berdasarkan ID
app.get('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ message: "Student tidak ditemukan" });
    }

    res.json(student);
});

// Create student baru
app.post('/students', (req, res) => {
    const { nama, jurusan } = req.body;

    const newStudent = {
        id: students.length + 1,
        nama,
        jurusan
    };

    students.push(newStudent);

    res.status(201).json(newStudent);
});

// Update student berdasarkan ID
app.put('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { nama, jurusan } = req.body;

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ message: "Student tidak ditemukan" });
    }

    student.nama = nama;
    student.jurusan = jurusan;

    res.json(student);
});

// Delete student berdasarkan ID
app.delete('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);

    students = students.filter(s => s.id !== id);

    res.json({ message: "Student berhasil dihapus" });
});