# Tugas Basic REST API dengan Express.js

Nama    : Sandhy Safarudin Nurdiansyah <br>
NIM     : 23552011464 <br>
Kelas   : TIF K23B

---

# Dokumentasi Code dan Hasil

## 1. Setup Express & Server

<img width="896" height="520" alt="setup express   server" src="https://github.com/user-attachments/assets/c819d00b-36e4-4a21-9e6d-c0baf750fc42" />

Penjelasan:

* `express()` → membuat instance server
* `app.use(express.json())` → agar server bisa membaca request body JSON

---

## 2. Endpoint Home

<img width="988" height="444" alt="endpoint home" src="https://github.com/user-attachments/assets/40b10b21-df0d-4342-b9f1-0af5a39e3ea3" />

Endpoint:

```
GET http://localhost:3000
```

Response:

<img width="910" height="182" alt="image" src="https://github.com/user-attachments/assets/b869c462-9aca-4792-be0b-da4e029068d0" />

---

## 3. Menjalankan Server

<img width="1220" height="444" alt="menjalankan server" src="https://github.com/user-attachments/assets/c99e81a1-4f8b-4d3d-80f3-c06cb83aedbb" />

Penjelasan:

* Server berjalan di port **3000**
* Bisa diakses melalui:

```
http://localhost:3000
```

---

## 4. Data Dummy (Simulasi Database)

<img width="1142" height="520" alt="simulasi data student" src="https://github.com/user-attachments/assets/bda6e89b-4d8c-469a-88d5-9356da63a4af" />

Penjelasan:

* Data disimpan dalam array
* Berfungsi sebagai pengganti database sementara

---

## 📡 5. GET Semua Mahasiswa

<img width="850" height="444" alt="get semua student" src="https://github.com/user-attachments/assets/3ec492e2-0527-468c-801f-9e26248da455" />

Endpoint:

```
GET http://localhost:3000/students
```

Response:
<img width="911" height="419" alt="image" src="https://github.com/user-attachments/assets/5335554d-1c7a-405f-a5c7-080e37b22a2c" />

Penjelasan:

* Menampilkan semua data mahasiswa dalam bentuk JSON

---

## 6. GET Mahasiswa Berdasarkan ID

<img width="1480" height="748" alt="get student berdasarkan ID" src="https://github.com/user-attachments/assets/e08c7f8f-fb5c-4944-b488-3d0202c7b348" />

Endpoint:
```
GET http://localhost:3000/students/2
```

Response:
<img width="909" height="203" alt="image" src="https://github.com/user-attachments/assets/9b26b65f-6d54-4b01-90d4-edb1e5f8066e" />

Jika tidak ditemukan:
<img width="908" height="161" alt="image" src="https://github.com/user-attachments/assets/842f6223-f8d7-451c-ac77-22014aa0f44d" />

---

## 7. POST Tambah Mahasiswa

<img width="910" height="824" alt="create student baru" src="https://github.com/user-attachments/assets/f7c5bdfe-7ddc-4f2b-9376-d2a8fdd90695" />

Endpoint:
```
POST http://localhost:3000/students
```

Body JSON:
<img width="882" height="121" alt="image" src="https://github.com/user-attachments/assets/79617d91-bdaa-4299-b50f-d1dfc4608dd7" />

Response:
<img width="910" height="197" alt="image" src="https://github.com/user-attachments/assets/0d28f38d-973a-4d3e-a7b1-efd8939b5d28" />

Penjelasan:

* Menambahkan data mahasiswa baru ke array

---

## 8. PUT Update Mahasiswa
<img width="1480" height="900" alt="update student berdasarkan id" src="https://github.com/user-attachments/assets/4959c3e7-26b7-44ae-b762-fedfc64ac82b" />

Endpoint:
```
PUT http://localhost:3000/students/4
```
Body JSON:
<img width="887" height="118" alt="image" src="https://github.com/user-attachments/assets/4cb97df3-9920-4154-8c2a-93d54e397ebf" />

Response:
<img width="910" height="204" alt="image" src="https://github.com/user-attachments/assets/4ed921a4-a90c-4d9b-9fab-d23a42326e99" />

Penjelasan:
* Mengubah data mahasiswa berdasarkan ID

---

## 9. DELETE Mahasiswa
<img width="1126" height="596" alt="delete student berdasarkan id" src="https://github.com/user-attachments/assets/fa478d76-25f3-4bdb-8d41-65bd53926508" />

Endpoint:
```
DELETE http://localhost:3000/students/4
```

Response:
<img width="908" height="161" alt="image" src="https://github.com/user-attachments/assets/ecea0b36-9f1e-47fd-8270-49f63afb4613" />

Penjelasan:
* Menghapus data mahasiswa berdasarkan ID

---

---

# Kesimpulan

* API berhasil dibuat menggunakan Express.js
* Mendukung operasi CRUD:

  * GET (Read)
  * POST (Create)
  * PUT (Update)
  * DELETE (Delete)
* Data masih menggunakan array (dummy), belum menggunakan database
