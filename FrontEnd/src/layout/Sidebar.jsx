/* eslint-disable react/prop-types */
import React, { useState } from "react";

import {
  faBoxArchive,
  faCartShopping,
  faChevronDown,
  faChevronRight,
  faCubesStacked,
  faDolly,
  faFileInvoiceDollar,
  faGaugeHigh,
  faLayerGroup,
  faScaleUnbalanced,
  faTableList,
  faTag,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const Sidebar = ({
  widthUserImg,
  inlineHiden,
  fontSize,
  textCenter,
  fontSize6xl,
  mSDrop,
  setShowModal,
  pb,
  rounded,
  me4,
  w45,
  hidenBlock,
}) => {
  const listNav = [
    {
      id: 1,
      list: "Dashboard",
      linkPath: "/Dashboard",
      icon: faGaugeHigh,
    },
    {
      id: 2,
      list: "Produk",
      linkPath: "/Produk",
      icon: faTableList,
    },
    {
      id: 3,
      list: "Stok",
      linkPath: "/Stok",
      icon: faBoxArchive,
    },
    {
      id: 4,
      list: "Transaksi",
      linkPath: "/Transaksi",
      icon: faCartShopping,
    },

    {
      id: 5,
      list: "Laporan",
      linkPath: "/Laporan",
      icon: faFileInvoiceDollar,
    },
    {
      id: 6,
      list: "User/Karyawan",
      linkPath: "/Karyawan",
      icon: faUser,
    },
  ];

  const produk = [
    {
      id: 1,
      list: "Kategori",
      linkPath: "/KategoriProduk",
      icon: faTag,
    },
    {
      id: 2,
      list: "Satuan",
      linkPath: "/SatuanProduk",
      icon: faDolly,
    },
    {
      id: 3,
      list: "Daftar",
      linkPath: "/DaftarProduk",
      icon: faCubesStacked,
    },
  ];

  const laporan = [
    {
      id: 1,
      list: "Penjualan",
      linkPath: "/LaporanPenjualan",
      icon: faScaleUnbalanced,
    },
    {
      id: 2,
      list: "Stok",
      linkPath: "/LaporanStok",
      icon: faLayerGroup,
    },
  ];

  const [showProdukDropdown, setShowProdukDropdown] = useState(false);

  // Handler untuk mengaktifkan dropdown sesuai item produk yang di-klik

  // State untuk mengendalikan tampilan dropdown "Laporan"
  const [showLaporanDropdown, setShowLaporanDropdown] = useState(false);

  const toggleProdukDropdown = () => {
    setShowProdukDropdown(!showProdukDropdown);
    setShowLaporanDropdown(false); // Menonaktifkan dropdown Laporan
  };

  const toggleLaporanDropdown = () => {
    setShowLaporanDropdown(!showLaporanDropdown);
    setShowProdukDropdown(false); // Menonaktifkan dropdown Product
  };
  return (
    <div className="my-8">
      <div className={`flex flex-col font-titilium text-gray-300`}>
        <div className="text-center basis-1/6 ">
          <div
            className={`-translate-y-0.5 transition-all ${pb} border-b-2 border-gray-400`}
          >
            <div
              onClick={() => setShowModal(true)}
              className={`mx-auto cursor-pointer mb-2 scale-105 transition-all rounded-full flex justify-center items-center bg-gray-200  ${widthUserImg}`}
            >
              <FontAwesomeIcon
                icon={faUser}
                className={`my-auto text-gray-400 ${fontSize6xl}`}
              />
            </div>
            <h1
              className={`text-gray-900 font-acme font-semibold ${inlineHiden} `}
            >
              Akmal Hydayat
            </h1>
          </div>
        </div>
        <div
          className={`mt-4 space-y-1 flex flex-col ${textCenter} ${fontSize} basis-4/6 text-gray-900`}
        >
          {listNav.map((item) => (
            <React.Fragment key={item.id}>
              {item.list === "Produk" ? (
                <div
                  onClick={toggleProdukDropdown}
                  className={`ps-3 py-2 translate-y-0.5 relative group transition-all hover:text-purple-600 rounded-s-xl cursor-pointer ${me4}   `}
                >
                  <span className="">
                    <FontAwesomeIcon
                      icon={item.icon}
                      className={`${w45} me-4`}
                    />
                  </span>
                  <span className={inlineHiden}>{item.list}</span>
                  <span className={`ms-[75px] ${inlineHiden}`}>
                    <FontAwesomeIcon
                      icon={showProdukDropdown ? faChevronDown : faChevronRight}
                    />
                  </span>
                  <span className={`${hidenBlock} ms-3.5`}>{item.list}</span>
                </div>
              ) : item.list === "Laporan" ? (
                <div
                  onClick={toggleLaporanDropdown}
                  className={`ps-3 py-2 translate-y-0.5 relative group transition-all hover:text-purple-600 rounded-s-xl  cursor-pointer ${me4}`}
                >
                  <span className="">
                    <FontAwesomeIcon icon={item.icon} className="w-4 me-4" />
                  </span>
                  <span className={inlineHiden}>{item.list}</span>

                  <span className={`ms-[64px] ${inlineHiden}`}>
                    <FontAwesomeIcon
                      icon={
                        showLaporanDropdown ? faChevronDown : faChevronRight
                      }
                    />
                  </span>
                  <span className={`${hidenBlock} ms-4`}>{item.list}</span>
                </div>
              ) : (
                <NavLink
                  onClick={() => {
                    setShowProdukDropdown(false);
                    setShowLaporanDropdown(false);
                  }}
                  to={item.linkPath}
                  key={item.id}
                  className={({ isActive }) => {
                    return `ps-3 py-2 hover:text-purple-600 translate-y-0.5 transition-all relative group  ${
                      isActive
                        ? `bg-gray-200 border-e-4 ${rounded} border-purple-600 border-box  text-purple-600`
                        : "bg-colorTwo"
                    }`;
                  }}
                >
                  <span className="">
                    <FontAwesomeIcon icon={item.icon} className="me-4" />
                  </span>
                  <span className={inlineHiden}>{item.list}</span>
                  <span className={`${hidenBlock} ms-3.5`}>{item.list}</span>
                </NavLink>
              )}

              {/* Dropdown "Produk" yang akan tampil jika showProdukDropdown adalah true */}
              {item.list === "Produk" && showProdukDropdown && (
                <React.Fragment>
                  {produk.map((ProdukItem) => (
                    <NavLink
                      to={ProdukItem.linkPath}
                      key={ProdukItem.id}
                      className={({ isActive }) => {
                        return ` ps-3 py-2  transition-all relative group hover:text-purple-600 block ${textCenter} ${mSDrop} ${
                          isActive
                            ? `bg-gray-200 border-e-4 ${rounded}  border-purple-600 border-box  text-purple-600`
                            : `bg-colorTwo `
                        }`;
                      }}
                    >
                      <span className="">
                        <FontAwesomeIcon
                          icon={ProdukItem.icon}
                          className={` w-5 me-2 `}
                        />
                      </span>
                      <span className={`${inlineHiden}`}>
                        {ProdukItem.list}
                      </span>
                      <span className={`${hidenBlock} ms-5`}>
                        {ProdukItem.list}
                      </span>
                    </NavLink>
                  ))}
                </React.Fragment>
              )}
              {item.list === "Laporan" && showLaporanDropdown && (
                <React.Fragment>
                  {laporan.map((laporanItem) => (
                    <NavLink
                      to={laporanItem.linkPath}
                      key={laporanItem.id}
                      className={({ isActive }) => {
                        return `ps-3 py-2 scale-100 transition-all relative group  hover:text-purple-600 rounded-s-xl  ${textCenter} ${mSDrop} ${
                          isActive
                            ? `bg-gray-200 border-e-4 ${rounded} border-purple-600 border-box  text-purple-600`
                            : "bg-colorTwo"
                        }`;
                      }}
                    >
                      <span className="me-2 ">
                        <FontAwesomeIcon icon={laporanItem.icon} />
                      </span>
                      <span className={`${inlineHiden} `}>
                        {laporanItem.list}
                      </span>
                      <span className={`${hidenBlock} ms-5`}>
                        {laporanItem.list}
                      </span>
                    </NavLink>
                  ))}
                </React.Fragment>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
