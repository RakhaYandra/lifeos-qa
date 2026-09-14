# lifeos-qa

QA portfolio untuk LifeOS — test plan, 56 test cases, eksekusi ber-evidence,
4 bug report nyata, Newman API suite, Playwright e2e, laporan Excel.

## Hasil (run 2026-09-14, env terisolasi)

| Suite | Hasil |
|---|---|
| Test cases | 56/56 Pass |
| Newman API (`lifeos` collection) | 75/75 assertions |
| Playwright e2e (Chromium headless) | 21/21 |
| `go test` + swagger validate | Pass, service 83.4% |
| Bug terbuka | 4 (1 Medium, 3 Low) |

Laporan utama: [`reports/LifeOS-QA-Report.xlsx`](reports/LifeOS-QA-Report.xlsx)
(Cover, Test Cases, Execution Log, Bug Reports, Summary + grafik —
generate via `tools/build_report.py`, jangan edit manual).

## Struktur

```
test-plan.md          # scope, pendekatan, kriteria masuk/keluar
data/testcases.yaml   # 56 kasus (sumber kebenaran)
data/bugs.yaml        # 4 bug nyata + repro
data/results.yaml     # hasil run API (generate)
tools/build_report.py # generate XLSX (openpyxl)
e2e/                  # Playwright TS (auth, flows, ui, ui2)
reports/              # newman.json, playwright.json, XLSX
```

## Cara run (urutan penting — isolasi!)

```bash
# 1. DB fresh + API uji (jangan pakai DB live!)
rm -f /tmp/qa-test.db
goose -dir ../lifeos/migrations sqlite /tmp/qa-test.db up
sqlite3 /tmp/qa-test.db < ../lifeos/seed/seed.sql
PORT=18091 JWT_SECRET=qa-secret DB_PATH=/tmp/qa-test.db \
  FRONTEND_URL=http://localhost:5199 /tmp/qa-api &

# 2. Newman DULU (probe create+delete, sensitif urutan)
npx newman run ../lifeos/api/postman_collection.json \
  --env-var baseUrl=http://localhost:18091

# 3. API checks, 4. e2e (webServer otomatis :5199)
python3 /tmp/qa_run.py   # → data/results.yaml (skrip di repo? tidak — ad-hoc)
cd e2e && npx playwright test

# 5. Generate laporan
python3 tools/build_report.py
```

## Bug temuan (ringkas)

* BUG-001 (Medium): PUT full-replace hapus field tak dikirim — by design, UI kirim penuh.
* BUG-002 (Low): `GET /dashboard` bocorkan field internal `_ts`.
* BUG-003 (Low): pesan validasi gin mentah bocor ke UI.
* BUG-004 (Low): label form tanpa `htmlFor` — asosiasi label-input tak valid, automation flaky.
