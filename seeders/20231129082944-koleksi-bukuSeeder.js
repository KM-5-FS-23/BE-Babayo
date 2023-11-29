'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('KoleksiBuku', [
      {
        judul: 'Ayat-Ayat Cinta',
        bahasa: 'Indonesia',
        penulis: 'Habiburrahman El-Shirazy',
        tahun_terbit: 2015,
        kategori: 'Romance',
        sinopsis: 'Fahri yang telah menyelesaikan studinya di Mesir kini tinggal di Edinburg, Skotlandia dan bekerja sebagai dosen di University of Edinburg. Sayangnya, kehidupannya di Eropa harus dijalaninya sendirian sejak sang istri, Aisha menghilang dalam perjalanannya ke Palestina.',
        gambar: 'https://bukurepublika.id/wp-content/uploads/2019/02/AAC2_film_dpn.jpg',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        judul: 'Cinderella Tanpa Sepatu Kaca',
        bahasa: 'Indonesia',
        penulis: 'Indah Hanaco',
        tahun_terbit: 2017,
        kategori: 'Romance',
        sinopsis: 'Astrid Florita bukan Cinderella, dia hidup di Planet Kemiskinan. Usianya masih belia, tapi sudah harus menghidup diri sendiri dan adik semata wayangnya, Willa. Keadaan memaksa Astrid tumbuh menjadi gadis tangguh yang pantang menyerah.',
        gambar: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1541381411i/42631231.jpg',
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('KoleksiBuku', null, {});
  },
};
