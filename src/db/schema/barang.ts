import { 
  mysqlTable, 
  int, 
  varchar, 
  text, 
  mysqlEnum 
} from 'drizzle-orm/mysql-core';
import { kategori } from './kategori.js'; // Import tabel kategori

export const barang = mysqlTable('barang', {
  id_barang: int('id_barang').autoincrement().primaryKey(),
  // Menghubungkan ke tabel kategori
  id_kategori: int('id_kategori').references(() => kategori.id_kategori),
  nama_barang: varchar('nama_barang', { length: 100 }).notNull(),
  merk: varchar('merk', { length: 50 }),
  tipe: varchar('tipe', { length: 50 }),
  spesifikasi: text('spesifikasi'),
  tersedia: mysqlEnum('tersedia', ['Iya', 'Tidak']),
});