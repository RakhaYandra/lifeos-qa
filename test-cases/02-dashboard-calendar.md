# TC-DASH — Dasbor & Kalender

| ID | Kasus | Langkah | Ekspektasi | Pri |
|---|---|---|---|---|
| DASH-01 | KPI cocok DB | Bandingkan kartu vs query (`tasks due/overdue`, `trx summary`, streaks) | Angka sama persis | High |
| DASH-02 | Field internal | Cek response `/dashboard` mentah | Tak ada field debug (`_ts` terdokumentasi/bukan) | Low |
| DASH-03 | DB kosong | DB fresh tanpa seed → Dasbor | Nol semua, tak ada NaN/chart rusak | Medium |
| CAL-01 | Agregat bulan | Buka Kalender Sep 2026 | Task/reminder/subs/milestone muncul di tanggal benar | High |
| CAL-02 | Pindah bulan | ←/→ ke Okt & Agu | Data sesuai bulan, sel kosong rapi | Medium |
| CAL-03 | Lebih 3 item | Tanggal dengan >3 event | Tampil 3 + "+N" | Low |
| CAL-04 | API mati | Matikan API → buka Kalender | Tak crash (halaman lain tunjukkan error) | Medium |
