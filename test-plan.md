# Test Plan — LifeOS (API + Web)

Objek uji: `lifeos` (Go/Gin + SQLite, JWT single-user) + `lifeos-web`
(React + TS, 13 halaman). Versi: main per 14 Sep 2026.

## 1. Scope

Dalam: 13 halaman web + 30+ endpoint `/v1` (auth, CRUD semua modul,
validasi cascade goals, streak, budget aktual, ranking, auto-stat review).
Luar: multi-user (single-user by design), deploy/infra, performance
(terpisah: k6, bukan di sini).

## 2. Pendekatan

* Manual fungsional + boundary + negatif (dokumen ini).
* Otomatis API: Newman (`postman_collection.json`, 75 cek) — laporan di `reports/`.
* Otomatis UI: Playwright (`e2e/`, Chromium headless) — smoke kritis + screenshot.
* Laporan gabungan: `LifeOS-QA-Report.xlsx` (generate via `tools/build_report.py`).

## 3. Environment

* API lokal `:8080` (SQLite fresh migrate + seed), web `:5174`.
* Akun: `aku@lifeos.local / Rahasia123`.
* Browser: Chromium headless (Playwright 1243).

## 4. Kriteria

* Masuk: API `/healthz` 200, web 200, login sukses.
* Keluar: semua TC tereksekusi, tak ada bug Critical/High terbuka,
  Newman 100%, e2e hijau.

## 5. Risiko

* Seed tanggal tetap (Sep 2026): hasil overdue/streak Hypertensi geser
  bila dijalankan jauh setelah Sep 2026 → lampirkan tanggal run.
* PUT full-replace (by design): uji eksplisit agar tak dianggap bug.
