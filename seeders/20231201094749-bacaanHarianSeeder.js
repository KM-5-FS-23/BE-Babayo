'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('BacaanHarian', [
      {
        judul: 'Membuat Game pakai Unity untuk Pemula',
        kategori: 'Artikel',
        isi: `Sobat Skilvul, apakah kamu tertarik menjadi seorang game developer? Kalau iya, kamu pasti tidak asing lagi dengan Unity. Buat kamu yang masih belum tahu atau ingin mengenal lebih lanjut mengenai Unity, yuk baca artikel ini sampai akhir ya!

        Apa Itu Unity?
        
        Unity adalah aplikasi yang populer digunakan untuk mengembangkan game lintas platform, termasuk desktop, seluler, dan konsol. Unity menyediakan berbagai tools dan fitur lengkap yang membuat pengembangan game menjadi lebih mudah diakses oleh pengembang game dari semua tingkat, mulai dari pemula hingga profesional. Kemudahan dan user interface yang sederhana ini yang membuat Unity menjadi aplikasi populer di kalangan pengembang game.
        
        Keuntungan Menggunakan Unity untuk Game Development!
        
        Beberapa manfaat menggunakan Unity untuk pengembangan game antara lain:
        
        1. Kompatibilitas lintas platform
        
        Unity memungkinkan pengembang membuat game untuk berbagai platform, termasuk iOS, Android, Windows, Mac, dan konsol seperti PlayStation dan Xbox.
        
        2. Editor yang tangguh
        
        Editor Unity menyediakan user interface yang ramah pengguna dengan berbagai tools dan fitur lengkap untuk membuat game 2D dan 3D.
        
        3. Mendukung pembuatan script
        
        Unity mendukung beberapa bahasa pemrograman, termasuk C# dan JavaScript sehingga pengembang dapat menyesuaikan game mereka sesuai keinginan.
        
        4. Dukungan komunitas
        
        Unity memiliki komunitas pengembang yang besar dan aktif yang secara teratur membagikan pengetahuan mereka, memberikan dukungan, dan berkontribusi pada pengembangan alat dan fitur baru.
        
        Buat Game Pertama Kamu di Unity!
        
        Secara keseluruhan, Unity adalah pilihan yang sangat baik untuk pengembang game pemula karena menyediakan berbagai alat dan sumber daya yang dapat membantu para pemula untuk mulai mengembangkan dan mewujudkan ide game mereka.
        
        Nah, Sobat Skilvul sekarang ini sudah ada banyak tutorial dan sumber yang tersedia online untuk membantu kamu mempelajari cara membuat game menggunakan Unity. Salah satunya melalui salah satu episode Terra Talks. Beberapa waktu lalu, Skilvul melalui program Terra Talks berdiskusi dengan Najib Firdaus, seorang Game Developer di MonsterAR, berdiskusi seputar profesi sebagai Game Developer di Indonesia. Tidak hanya itu, Najib juga berbagi tutorial mengenai cara pembuatan game di Unity. Cari tahu lebih lanjut mengenai cara pembuatan game di Unity melalui Terra Talks episode Developing Your First Game with Unity yang bisa kamu tonton di Youtube Skilvul ya.`,
        tanggal: new Date(),
        user_id: 1,
      },
      {
        judul: 'Kesempatan Karir 3D Animator di Masa Depan',
        kategori: 'Artikel',
        isi: `Sobat Skilvul, apakah pernah terpikir dalam benak kamu kira-kira gimana ya rasanya jadi seorang 3D animator? Apakah memulai karier sebagai 3D animator di Indonesia adalah pilihan yang tepat? Yuk cari tahu jawabannya dalam artikel berikut ini!

        Beberapa waktu lalu, Skilvul berkesempatan untuk berdiskusi dengan Michelle Wibowo selaku Co-Founder Bunnydog Studio, salah satu studio animasi 3D di Indonesia. Dalam kesempatan itu, Michelle membagikan pengalaman dan pengetahuannya selama berkarier sebagai 3D Animator.
        
        Q: Apakah bidang animasi memiliki prospek yang panjang ke depannya?
        
        “Kalau untuk di Indonesia sendiri ya sangat besar karena industri animasi di Indonesia itu bisa terbilang cukup baru. Jadi masih di early stage, jadi untuk mencapai level yang setara dengan di Amerika atau Eropa itu kita masih panjang jalannya dan opportunity kita untuk mencapai ke arah situ masih ada sekali gitu. Selain itu juga, kita pun dilirik di antara negara-negara di asia lainnya untuk sebagai service provider karena dengan resources kita yang sangat banyak. Di South East Asia itu studio animasi yang sudah lebih dulu dikenal itu di Malaysia dan Thailand tapi mereka tetap ga bisa memenuhi demand jadi di Indonesia ini kita paling kuat di human resources gitu. Selain itu, platform streaming seperti Netflix dan Disney sekarang juga mengincar regional content seperti di* South East Asia* ini yang sesuai dengan culture di regional ini.
        
        Q: Apa saja hal-hal yang dibutuhkan untuk bisa memulai karier sebagai 3D Animator?
        
        “Yang pertama yang paling penting ada critical thinking skill dan bisa adaptasi dengan cepat. Dalam konteks pekerjaan pertama saya, mereka udah ada ekspektasi saya udah harus bisa. Apalagi untuk iklan yang *deadlinenya *cukup cepat. Kalau sebagai Animator atau 3D Artist di industri kami ini yang penting itu juga ada artistic understanding. Jadi ini gak sebatas hanya teknis saja. Kayak di industri animation ini kan perpaduan antara creativity dan technology juga gitu. Jadi kayak bisa memahami good acting untuk animator, terus untuk memahami design principles, dan bisa menggambar juga itu suatu hal yang plus. Jadi banyak artistic skills yang digunakan dalam animation production. Dan yang penting juga sih networking karena industri animasi ini kan bisa dibilang cukup kecil terutama di Indonesia kita kan masih baru berkembang. Most likely, semua orang saling kenal dan kalian bisa mengembangkan karier dengan banyak ketemu orang-orang di industri ini dan yang penting juga be nice karena dengan industri yang kecil ini juga reputasi itu juga cepet terbentuk dan cepet nyebarnya juga sih.”
        
        Q: Apa langkah awal sebagai pemula untuk menjadi Animator?
        
        “Langkah awal itu pasti ke Youtube cari tutorial jadi setidaknya udah bisa menjalankan software-softwarenya. Dan untuk mencari free resources juga sebenarnya cukup banyak. Jadi untuk menjadi animator itu kita menggerakan karakter ya dan kalau dari TV Show yang kita kerjakan itu kan harus dibikin dari awal, tapi untuk menjadi animator itu untuk latihan atau personal project banyak banget free karakter yang bisa kita download gratis dan bisa coba gerak-gerakin sendiri dan dari situ bisa belajar untuk memahami dan menerapkan 12 prinsip animasi. Dan ada buku kitabnya animator itu The Animators Survival Kit karyanya Richard Williams, itu kayak intro to animation.
        
        Sobat Skilvul, bisa disimpulkan bahwa demand atau permintaan untuk 3D Animator akan terus meningkat karena industri hiburan, termasuk film, televisi, dan video game, semakin mengandalkan animasi 3D. Tapi perlu kamu perhatikan juga karena hal itu, persaingan di industri animasi 3D juga bisa semakin meningkat. Untuk bisa bersaing, tentunya sangat penting untuk mengembangkan keahlian yang kuat dan mengikuti tren serta tools terbaru untuk tetap kompetitif nantinya. Jangan khawatir, kamu bisa mulai belajar animasi 3D dengan mengikuti kelas Animasi Dasar 3D yang ada di Skilvul. Yuk mulai karier sebagai 3D animator dan jadi talenta digital selanjutnya bersama Skilvul.`,
        tanggal: new Date(),
        user_id: 2,
      },
      {
        judul: 'Rahasia Menjadi UI/UX Designer yang Dilirik HRD',
        kategori: 'Artikel',
        isi: `Sobat Skilvul, apakah kamu tertarik untuk menjadi seorang UI/UX Designer? Apakah kamu pernah bertanya-tanya, sebenarnya UI/UX Designer seperti apa yang gampang dilirik HRD atau recruiter?

        Untuk menjawab segala pertanyaan dan kegelisahan kamu, beberapa waktu lalu Skilvul melalui program Terra Talks berdiskusi bersama Thomas Budiman selaku Product Design & Creative Direction di PSYT Ltd. Thomas yang telah memiliki pengalaman bertahun-tahun di dunia UI/UX Design membagikan rahasia untuk menjadi seorang UI/UX Designer yang akan dilirik HRD. Yuk cari tahu rahasianya dalam artikel ini!
        
        1. Pelajari Fundamental Desain dan Ikuti Tren Desain
        
        Untuk menjadi seorang UI/UX Designer, tentunya kamu harus mempelajari ilmu-ilmu dasar mengenai fundamental desain. Seperti di antaranya terkait design thinking, elemen desain, mempelajari software atau tools yang digunakan untuk membuat UI/UX design, hingga wireframing dan prototyping.
        
        Selain itu, untuk menjadi seorang UI/UX Designer yang gampang dilirik HRD, kamu tentunya tidak cukup hanya memahami fundamental desain tetapi juga harus terus mengikuti tren desain yang ada. Selalu update mengenai tren desain yang ada bisa menambah nilai kompetitif kamu di mata HRD, loh!
        
        2. Tunjukkan Kemampuan melalui Portfolio
        
        Setelah kamu mempelajari dan memahami ilmu-ilmu dasar seputar UI/UX Design, selanjutnya kamu harus mulai membangun portfolio yang bisa mencerminkan kemampuan sekaligus pengalaman kamu. Kalau kamu bertanya portfolio seperti apa sih yang bagus? Jawaban singkatnya tentu saja yang bisa menunjukan nilai unik kamu sebagai seorang UI/UX Designer. Kalau kamu bertanya gimana caranya membuat portfolio kalau belum punya pengalaman kerja? Jawabannya yaitu coba buat proyek khayalan. Karya yang kamu tunjukkan di portfolio tidak harus selalu bersumber dari proyek sungguhan yang telah kamu kerjakan. Pada intinya, yang penting portfolio bisa menunjukan kemampuan kamu sebagai UI/UX Designer. Ingat ya Sobat Skilvul, penting untuk kamu bisa menunjukkan nilai unik kamu dalam portfolio agar semakin dilirik HRD!
        
        3. Bangun Koneksi dengan Para Desainer Lainnya
        
        Salah satu cara untuk mengembangkan karir kamu sebagai UI/UX Designer adalah dengan membangun networking atau koneksi dengan sesama UI/UX Designer. Membangun koneksi bisa kamu lakukan dengan cara mengikuti komunitas maupun mengikuti lomba terkait UI/UX Design. Cara ini berguna tidak hanya untuk menambah ilmu terkait UI/UX Design, tetapi juga dapat membuka jalan untuk kamu mendapatkan proyek atau pekerjaan sebagai UI/UX Designer.
        
        Sobat Skilvul, apakah sekarang kamu mulai ada gambaran bagaimana menjadi seorang UI/UX Designer yang gampang dilirik HRD? Kalau masih bingung mau jadi UI/UX Designer mulai dari mana, kamu bisa daftar kelas UI/UX Design Mastery di Skilvul. Di kelas tersebut, selain belajar mengenai dasar-dasar ilmu UI/UX Design dengan mentor profesional, kamu juga berkesempatan untuk memperluas networking melalui group exclusive UI/UX Design Mastery Discord Server. Mulai karir impian kamu sebagai UI/UX Designer dengan Skilvul dan jadilah talenta digital selanjutnya!`,
        tanggal: new Date(),
        user_id: 3,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('BacaanHarian', null, {});
  }
};
