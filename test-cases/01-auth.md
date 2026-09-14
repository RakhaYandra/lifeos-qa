# TC-AUTH — Login & sesi

| ID | Kasus | Langkah | Ekspektasi | Pri |
|---|---|---|---|---|
| AUTH-01 | Login valid | Email seed + password benar → Masuk | Dasbor tampil, token tersimpan | High |
| AUTH-02 | Password salah | Password keliru → Masuk | Error "Email atau kata sandi salah.", tetap di login | High |
| AUTH-03 | Email tak terdaftar | Email asing → Masuk | Error sama (tak bocorkan user) | Medium |
| AUTH-04 | Form kosong | Submit tanpa isi | Validasi browser, tak ada request | Low |
| AUTH-05 | Token basi | Hapus `lifeos_token`, reload | Kembali ke login | Medium |
| AUTH-06 | Register kedua | POST register akun baru (seed sudah ada) | 403 `single_user_only` | Medium |
| AUTH-07 | Akses tanpa token | GET /v1/me tanpa header | 401 | High |
| AUTH-08 | Token palsu | GET /v1/me token acak | 401 | High |
| AUTH-09 | Logout | Keluar → reload | Kembali login, token terhapus | Medium |
