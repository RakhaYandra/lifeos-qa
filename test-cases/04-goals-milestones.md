# TC-GOAL — Goals, Quarterly, Milestones

| ID | Kasus | Langkah | Ekspektasi | Pri |
|---|---|---|---|---|
| GOAL-01 | Tiga tab | annual/quarterly/monthly | Masing-masing filter `?level=` benar | High |
| GOAL-02 | Parent dropdown | Tambah quarterly | Hanya annual di opsi | Medium |
| GOAL-03 | Parent monthly | Tambah monthly | Opsi quarterly+annual, bukan monthly | Medium |
| GOAL-04 | Cascade salah | API: quarterly parent monthly | 400 `invalid_parent` | High |
| GOAL-05 | Annual berparent | API: annual + parent | 400 `invalid_parent` | Medium |
| GOAL-06 | Progress cap | current > target | 100, tak lebih | Medium |
| GOAL-07 | Update progres | UPDATE nilai | Progress hitung ulang | High |
| MS-01 | Tambah milestone | +MILESTONE di goal | Muncul di goal itu, overdue bila lewat | High |
| MS-02 | DONE milestone | DONE | completed_at terisi, overdue hilang | High |
| MS-03 | Upcoming | GET /milestones/upcoming | Hanya pending ≤14 hari, terurut | Medium |
| MS-04 | Tanggal rusak | API target_date "besok" | 400 | Low |
