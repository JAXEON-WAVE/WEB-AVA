const Database = require('better-sqlite3');
const db = new Database('Base de datos.db');

console.log('1. Total de registros:');
console.log(
  db.prepare('SELECT COUNT(*) AS total FROM registros').get().total
);

console.log('2. Nombres que contienen "pe":');
console.log(
  db.prepare('SELECT nombre, correo FROM registros WHERE nombre LIKE ?')
    .all('%pe%')
);

console.log('3. Registros por dia:');
console.log(
  db.prepare(`
    SELECT
      date(fecha) AS dia,
      COUNT(*) AS cantidad
    FROM registros
    WHERE date(fecha) IS NOT NULL
    GROUP BY date(fecha)
    ORDER BY date(fecha)
  `).all()
);

console.log('4. Ultimo registro:');
console.log(
  db.prepare('SELECT * FROM registros ORDER BY id DESC LIMIT 1').get()
);

db.close();