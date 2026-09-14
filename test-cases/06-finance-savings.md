# TC-FIN — Keuangan, tabungan

| ID | Kasus | Langkah | Ekspektasi | Pri |
|---|---|---|---|---|
| FIN-01 | Summary cocok | summary vs SUM SQL bulan | income/expense/net sama | High |
| FIN-02 | Budget aktual | List budgets | actual = SUM expense kategori, util% benar | High |
| FIN-03 | Status budget | Safe/warning/over | Ambang warn dari settings (80) | High |
| FIN-04 | Nominal 0/negatif | API amount 0 / -100 | 400 | Medium |
| FIN-05 | Tipe ngawur | API type "ngawur" | 400 | Medium |
| FIN-06 | Subs upcoming | List vs next_billing | days_until benar, upcoming ≤14 hari | Medium |
| FIN-07 | Annual cost | Subs monthly 54999 | 659988 | Low |
| SAV-01 | ETA tabungan | Dana darurat 8/20jt @800rb | ETA 15 bulan, progres 40% | High |
| SAV-02 | Lunas / tanpa cicilan | current≥target atau monthly 0 | ETA -1 (tak terestimasi) | Medium |
