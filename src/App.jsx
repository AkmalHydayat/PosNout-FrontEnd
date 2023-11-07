import { BrowserRouter, Route, Routes } from "react-router-dom";

import Kategori from "./pages/kategori/Kategori";
import Stok from "./pages/stok/Stok";
import Transaksi from "./pages/transaksi/Transaksi";
import LaporanStok from "./pages/laporanStok/LaporanStok";
import LaporanPenjualan from "./pages/laporanPenjualan/LaporanPenjualan";
import User from "./pages/karyawan/Karyawan";
import LoginPage from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Satuan from "./pages/satuanProduk/Satuan";
import Produk from "./pages/daftarProduk/Produk";
import ButtonSide from "./components/ButtonSide";
import Sidebar from "./layout/Sidebar";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

function App() {
  const [
    iconToggle,
    sideWidth,
    widthUserImg,
    inlineHiden,
    contentWidth,
    fontSize,
    textCenter,
    fontSize6xl,
    mSDrop,
    me4,
    sideActive,
    rounded,
    w45,
    pb,
    ps,
    hidenBlock,
    widthLogFilter,
    delay,
  ] = ButtonSide();
  const isHomePage = window.location.pathname === "/";

  return (
    <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale={"en-gb"}>
      <BrowserRouter>
        <div className="flex w-full transition-all ease-in dark:bg-colorDarkOne h-screen overflow-y-scroll">
          {isHomePage ? null : (
            <div
              className={`${sideWidth}  transition-all ease-in bg-colorTwo dark:bg-colorDarkTwo dark:shadow-black shadow-sm2 shadow-black/20 h-screen fixed`}
            >
              <Sidebar
                iconToggle={iconToggle}
                sideWidth={sideWidth}
                widthUserImg={widthUserImg}
                inlineHiden={inlineHiden}
                fontSize={fontSize}
                textCenter={textCenter}
                fontSize6xl={fontSize6xl}
                mSDrop={mSDrop}
                me4={me4}
                sideActive={sideActive}
                rounded={rounded}
                w45={w45}
                pb={pb}
                hidenBlock={hidenBlock}
                delay={delay}
              />
              <div>{iconToggle}</div>
            </div>
          )}
          <div
            className={`${contentWidth} ${
              isHomePage ? "" : ps
            } transition-all ease-in`}
          >
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/Dashboard" element={<Dashboard delay={delay} />} />
              <Route path="/KategoriProduk" element={<Kategori />} />
              <Route path="/Stok" element={<Stok />} />
              <Route path="/Transaksi" element={<Transaksi />} />
              <Route path="/SatuanProduk" element={<Satuan />} />
              <Route path="/DaftarProduk" element={<Produk />} />
              <Route
                path="/LaporanPenjualan"
                element={<LaporanPenjualan widthLogFilter={widthLogFilter} />}
              />
              <Route path="/LaporanStok" element={<LaporanStok />} />
              <Route path="/Karyawan" element={<User />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </LocalizationProvider>
  );
}

export default App;
