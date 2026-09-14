# TC-REV — Review, Reminders, Settings

| ID | Kasus | Langkah | Ekspektasi | Pri |
|---|---|---|---|---|
| REV-01 | Weekly auto-stat | Buat review pekan | stats terisi (tasks_due/done, expense, habit_checks) | High |
| REV-02 | Monthly stat | Buat 2026-10 | tasks_due 0, income/expense Okt | Medium |
| REV-03 | Periode rusak | monthly "2026-13", yearly "2026-09" | 400 `invalid_period` | Medium |
| REV-04 | Yearly extra | achievements + next_year | Tersimpan & tampil | Low |
| REM-01 | Recurrence next | Reminder monthly 10-01 | next 10-01, days_until 17 (per 09-14) | High |
| REM-02 | Yearly rollover | Ulang tahun lewat tahun ini | next tahun depan | Medium |
| REM-03 | Upcoming filter | within_days | Hanya 0≤d≤N | Medium |
| SET-01 | Update warn | budget_warn_pct 50 | Status budget ikut ambang baru | Medium |
