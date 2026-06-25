import { mysqlTable, int, varchar } from 'drizzle-orm/mysql-core';

export const kategori = mysqlTable('kategori', {
  id_kategori: int('id_kategori').autoincrement().primaryKey(),
  nama_kategori: varchar('nama_kategori', { length: 100 }).notNull(),
});