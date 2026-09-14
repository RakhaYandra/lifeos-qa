# TC-HL — Sehat+Belajar, Travel, Keputusan, Aset, Relasi

| ID | Kasus | Langkah | Ekspektasi | Pri |
|---|---|---|---|---|
| HL-01 | Upsert health | Simpan tidur+mood 2x sehari | 1 baris/tanggal (update, bukan dobel) | High |
| HL-02 | Mood di luar 1-5 | API mood 9 | 400 | Medium |
| HL-03 | Workout list | Catat + list | Muncul terbaru dulu | Low |
| HL-04 | Learning progress | Tambah + tampil | Bar 40% sesuai | Low |
| TRV-01 | Actual cost | Detail trip Bandung | 430000 = SUM itinerary | High |
| TRV-02 | Tanggal terbalik | API end < start | 400 | Medium |
| DEC-01 | Ranking | Laptop: ThinkPad vs Air | ThinkPad #1 (69 vs 47) | High |
| DEC-02 | Nilai + rank ulang | Tambah nilai | Rank hitung ulang, seri = rank sama | Medium |
| AST-01 | Garansi | Kulkas warranty 2026-10-05 | Flag expiring (≤90 hari) | Medium |
| AST-02 | Wishlist progres | Sepatu 600rb/1.8jt | 33% | Low |
| DOC-01 | Upcoming dokumen | List upcoming | Kontrak kos (T16 ≤30) muncul; STNK jauh tidak | High |
| CT-01 | Follow-up due | Budi (terakhir 07-01, 30 hari) | Flag FOLLOW-UP | High |
| CT-02 | SAPA | SAPA Budi | last_contact = hari ini, flag hilang | High |
| CT-03 | Tak pernah kontak | Pak Hendra (NULL) | followup_due true | Medium |
