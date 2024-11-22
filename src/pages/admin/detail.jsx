import withLayout from "@/layouts/withLayout";

const DetailPage = () => {
  return (
    <div className="p-6 w-full bg-white border border-gray-200 rounded-lg mb-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-black">Alamat 12 Green House</h1>
        <a
          href="https://drive.google.com/file/d/1mwShBcZXTOBWQZRHQQkJPC9bM_iOjvCq/view?usp=sharing"
          download
          className="px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600"
        >
          Download Buku Panduan
        </a>
      </div>

      <div className="space-y-4 text-black">
        <div>
          <h2 className="font-semibold">Green House 1 dan 2</h2>
          <p>Pemilik: Kelompok</p>
          <p>
            Lokasi:{" "}
            <a
              href="https://goo.gl/maps/bv6zuZvRBSUyQTobA?g_st=aw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Link Lokasi
            </a>
          </p>
          <p>Koordinat: -8.2530158, 112.3770298</p>
          <p>Dikelola bersama oleh anggota kelompok.</p>
        </div>

        <div>
          <h2 className="font-semibold">Green House 3</h2>
          <p>Pemilik: Pak Ilham</p>
          <p>
            Lokasi:{" "}
            <a
              href="https://maps.google.com/?q=-8.263718,112.363576&entry=gps&g_st=ac"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Link Lokasi
            </a>
          </p>
          <p>Koordinat: -8.2637180, 112.3635758</p>
          <p>Terletak di daerah yang lebih tinggi dibanding lainnya.</p>
        </div>

        <div>
          <h2 className="font-semibold">Green House 4</h2>
          <p>Pemilik: Pak Anwar</p>
          <p>
            Lokasi:{" "}
            <a
              href="https://maps.google.com/?q=-8.264779,112.361921&entry=gps&g_st=ac"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Link Lokasi
            </a>
          </p>
          <p>Koordinat: -8.2647794, 112.3619209</p>
          <p>Berada dekat dengan Green House 3.</p>
        </div>

        <div>
          <h2 className="font-semibold">Green House 5</h2>
          <p>Pemilik: Pak Yudi</p>
          <p>
            Lokasi:{" "}
            <a
              href="https://goo.gl/maps/PGhaHoDvsijHyEGA6?g_st=ac"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Link Lokasi
            </a>
          </p>
          <p>Koordinat: -8.2628795, 112.3637599</p>
          <p>Lokasi ini cukup dekat dengan Green House 3 dan 4.</p>
        </div>

        <div>
          <h2 className="font-semibold">Green House 6 dan 12</h2>
          <p>Pemilik: Mas Da'o</p>
          <p>
            Lokasi:{" "}
            <a
              href="https://goo.gl/maps/XrA3fZqyvWkzPB19A?g_st=ac"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Link Lokasi
            </a>
          </p>
          <p>Koordinat: -8.2670084, 112.3627557</p>
          <p>Keduanya berdekatan dan dikelola bersama.</p>
        </div>

        <div>
          <h2 className="font-semibold">Green House 7</h2>
          <p>Pemilik: Pak Samuri</p>
          <p>
            Lokasi:{" "}
            <a
              href="https://goo.gl/maps/jaTM4S6EyvGAJhDH9?g_st=ac"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Link Lokasi
            </a>
          </p>
          <p>Koordinat: -8.2595612, 112.3505054</p>
          <p>Posisinya lebih terpisah di area yang lebih luas.</p>
        </div>

        <div>
          <h2 className="font-semibold">Green House 8</h2>
          <p>Pemilik: Mas Erdis</p>
          <p>
            Lokasi:{" "}
            <a
              href="https://goo.gl/maps/N391pV6o4gKLWQS9A?g_st=ac"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Link Lokasi
            </a>
          </p>
          <p>Koordinat: -8.2635547, 112.3620902</p>
          <p>Berada di dekat Green House lainnya.</p>
        </div>

        <div>
          <h2 className="font-semibold">Green House 9</h2>
          <p>Pemilik: -</p>
          <p>
            Lokasi:{" "}
            <a
              href="https://goo.gl/maps/ds1i2SJzb7qixJe49?g_st=ac"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Link Lokasi
            </a>
          </p>
          <p>Koordinat: -8.2652469, 112.3639144</p>
          <p>Berdekatan dengan Green House lainnya.</p>
        </div>

        <div>
          <h2 className="font-semibold">Green House 10</h2>
          <p>Pemilik: Pak Ali</p>
          <p>
            Lokasi:{" "}
            <a
              href="https://goo.gl/maps/hMoh9TbcAy3gqD9d6?g_st=ac"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Link Lokasi
            </a>
          </p>
          <p>Koordinat: -8.2648218, 112.3634430</p>
          <p>
            Berada dalam kluster yang sama dengan beberapa Green House lainnya.
          </p>
        </div>

        <div>
          <h2 className="font-semibold">Green House 11</h2>
          <p>Pemilik: Mas Erdis</p>
          <p>
            Lokasi:{" "}
            <a
              href="https://goo.gl/maps/iDoWJdZy9DrbaayR9?g_st=ac"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Link Lokasi
            </a>
          </p>
          <p>Koordinat: -8.2642289, 112.3605717</p>
          <p>Dikelola oleh Mas Erdis.</p>
        </div>

        <div>
          <h2 className="font-semibold">Green House 12</h2>
          <p>Pemilik: Mas Da'o</p>
          <p>
            Lokasi:{" "}
            <a
              href="https://goo.gl/maps/XrA3fZqyvWkzPB19A?g_st=ac"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Link Lokasi
            </a>
          </p>
          <p>Koordinat: -8.2670084, 112.3627557</p>
          <p>Berada dekat dengan Green House 6 dan dikelola bersama.</p>
        </div>
      </div>
      {/* Footer */}
      <footer className="w-full text-center py-1 border-t border-gray-300">
        <p className="text-gray-600 text-sm">
          © 2024 Politeknik Elektronika Negeri Surabaya
        </p>
      </footer>
    </div>
  );
};

export default withLayout(DetailPage, "admin");
