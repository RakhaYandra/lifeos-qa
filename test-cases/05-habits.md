# TC-HABIT — Habits & heatmap

| ID | Kasus | Langkah | Ekspektasi | Pri |
|---|---|---|---|---|
| HAB-01 | Centang hari ini | CENTANG | Streak +1, sel hari ini menyala | High |
| HAB-02 | Centang ganda | CENTANG 2x hari sama | Upsert, streak tetap (tak dobel) | Medium |
| HAB-03 | Heatmap 30 hari | Bandingkan grid vs `/habits/:id/logs` | Sel cocok 1:1 dengan done | High |
| HAB-04 | Streak bolong | Habit dengan jeda kemarin | Streak reset (hitung dari kemarin bila hari ini kosong) | High |
| HAB-05 | Weekly streak | Habit weekly 3x/pekan | Streak pekan benar | Medium |
| HAB-06 | Tambah habit | Nama + daily/weekly | Default target 1, aktif | Medium |
| HAB-07 | Frekuensi ngawur | API frequency "hourly" | 400 | Low |
