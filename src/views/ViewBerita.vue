<template>
<div class="viewberita">
    <Navbar2/>
    <!-- START KONTEN -->
    <div class="container">
        <h5 class="mt-5">FINANCE > ENERGI</h5>
        <h1 class="mt-3">Penyebab Kebakaran Kilang Balongan Masih Misteri, Apakah Disengaja?</h1>
        <div class="row mt-5">
            <div class="col-10">
                <p class="text-muted">SENIN, 5 APRIL 2021 10:20 WIB</p>
            </div>
            <div class="col-2">
                <span class="fab fa-facebook-square mx-2"></span>
                <span class="fab fa-twitter mx-2"></span>
                <span class="fab fa-whatsapp mx-2"></span>
                <span class="fa fa-link mx-2"></span>
            </div>
        </div>
        <div>
            <img class="mb-3" :src="require('@/assets/images/berita/penyebab-kebakaran.png')" alt="" width="1100px">
            <p>Jakarta - Muncul spekulasi bahwa kebakaran tangki di Kilang Balongan, Indramayu, Jawa Barat disengaja.
                Ada ulah mafia migas yang ikut campur kata Pengamat Ekonomi Energi Universitas Gadjah Mada Fahmy Radhi.
            </p>
            <p>"Sebagai kilang modern, Balongan mestinya punya pengamanan berlapis dalam menghadapi kebakaran, termasuk
                disebabkan petir. Bahkan, indikator sistem pengamanan tersebut adalah zero accidents," kata dia melalui
                pesan singkat kepada detikcom, kemarin Minggu (4/4/2021).</p>
            <p>Kebakaran kilang tersebut, menurutnya semakin memperbesar indikasi adanya pihak yang tidak ingin
                Indonesia memiliki kilang minyak.</p>
            <p>"Sebelumnya, rencana pengembangan Kilang Cilacap, Bontang dan Tuban juga belum dapat direalisasikan.
                Dengan terbakarnya kilang Balongan, impor BBM semakin membesar, yang menguntungkan bagi mafia migas
                berburu rente pada impor BBM," sebutnya.</p>
            <p>Pertamina, menurutnya harus melakukan investigasi secara transparan. Itu wajib dilakukan untuk memastikan
                kebakaran di Kilang Balongan murni kecelakaan, bukan ada unsur kesengajaan yang dilakukan mafia migas.
            </p>
            <p>"Momentum yang tepat bagi Ahok, yang mendapat penugasan dari Jokowi memberantas mafia migas, untuk
                membuktikan bahwa kebakaran tersebut bukan ulah mafia migas," tambahnya.</p>
            <p>Dihubungi terpisah, Direktur Eksekutif Energy Watch Mamit Setiawan tak bisa menduga-duga apakah kebocoran
                tangki disengaja atau tidak.</p>
            <p>"Terkait dengan disengaja atau tidak mungkin saya tidak bisa menyatakan itu ya, mungkin nanti pihak
                penyidik yang menyampaikan. Tetapi buat saya, berdasarkan informasi yang beredar kan sudah ada pengaduan
                dari masyarakat sebelumnya terkait dengan adanya bau kalau tidak salah, ada bau menyengat beberapa jam
                sebelum kejadian," terangnya.</p>
            <p>Menurutnya, hal yang dia jelaskan di atas sudah menjadi indikasi bahwa ada yang salah di Kilang Balongan,
                entah apakah sistem keamanan di Pertamina tidak berjalan, dia mengatakan itu harus dicari tahu lebih
                dalam. Sebab, begitu ada kebocoran atau pengaduan sudah selayaknya Pertamina langsung segera bertindak.
            </p>
            <p>"Tinggal kita lihat hasil penyidikan dari kepolisian terus juga para pihak berwajib yang lain, dari
                Kementerian ESDM untuk menyelidiki lebih lanjut terkait dengan hal ini," tambah Mamit.</p>
        </div>
    </div>
    <!-- END KONTEN -->
<Footer1/>
</div>
    
</template>

<script>
import Navbar2 from '../components/Navbar2.vue'
import Footer1 from '../components/Footer1.vue'

export default {
    name: 'ViewBerita',
    components: {
        Navbar2,
        Footer1
    }
}
</script>