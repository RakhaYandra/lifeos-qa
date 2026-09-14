# TC-TASK — Tugas & Projects

| ID | Kasus | Langkah | Ekspektasi | Pri |
|---|---|---|---|---|
| TASK-01 | Quick-add inbox | Ketik → Catat | Muncul status inbox, tanpa due | High |
| TASK-02 | Filter status | Pilih `in_progress` | Hanya status itu | Medium |
| TASK-03 | Tab today/week | Alih mode | today = due hari ini; week = 7 hari dari start | High |
| TASK-04 | Complete | DONE pada task | Status completed + completed_at terisi, progress project naik | High |
| TASK-05 | Overdue flag | Task due kemarin, non-completed | Label OVERDUE + days_remaining negatif | High |
| TASK-06 | Completed tak overdue | Task completed dengan due lampau | Tak ada OVERDUE | High |
| TASK-07 | PUT full-replace | Update tanpa `due_date` | due_date terhapus (by design — wajib kirim penuh) | Medium |
| TASK-08 | Due rusak | API: `due_date: "besok"` | 400 | Medium |
| TASK-09 | Status ngawur | API: `status: "ngawur"` | 400 | Medium |
| TASK-10 | Hapus + confirm | DEL → batal vs ya | Batal tak hapus; ya hapus + hilang dari list | Medium |
| TASK-11 | Judul kosong | API: title "" | 400 | Low |
| PROJ-01 | Progress | 1 dari 4 task selesai | 25% + done/total benar | High |
| PROJ-02 | Complete project | Status → completed | completed_at terisi otomatis | Medium |
