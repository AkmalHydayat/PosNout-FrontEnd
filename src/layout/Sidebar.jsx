/* eslint-disable react/prop-types */
import React, { useState } from "react";

import { NavLink } from "react-router-dom";
// import { LiaUserSolid } from "react-icons/lia";
// import { LuUser2 } from "react-icons/lu";
import { PiUserThin, PiUser } from "react-icons/pi";
import { HiOutlineShoppingCart, HiOutlineArchiveBox } from "react-icons/hi2";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import {
  BsHouse,
  BsBoxSeam,
  BsFileEarmarkText,
  BsFileEarmarkSpreadsheet,
  BsFileEarmarkBarGraph,
  BsTags,
  BsPass,
  BsInboxes,
} from "react-icons/bs";
const Sidebar = ({
  widthUserImg,
  inlineHiden,
  // fontSize,
  textCenter,
  fontSize6xl,
  mSDrop,
  pb,
  rounded,
  me4,
  w45,
  hidenBlock,
  delay,
}) => {
  const listNav = [
    {
      id: 1,
      list: "Dashboard",
      linkPath: "/Dashboard",
      icon: BsHouse,
    },
    {
      id: 2,
      list: "Produk",
      linkPath: "/Produk",
      icon: HiOutlineArchiveBox,
    },
    {
      id: 3,
      list: "Stok",
      linkPath: "/Stok",
      icon: BsBoxSeam,
    },
    {
      id: 4,
      list: "Transaksi",
      linkPath: "/Transaksi",
      icon: HiOutlineShoppingCart,
    },

    {
      id: 5,
      list: "Laporan",
      linkPath: "/Laporan",
      icon: BsFileEarmarkText,
    },
    {
      id: 6,
      list: "User/Karyawan",
      linkPath: "/Karyawan",
      icon: PiUser,
    },
  ];

  const produk = [
    {
      id: 1,
      list: "Kategori",
      linkPath: "/KategoriProduk",
      icon: BsTags,
    },
    {
      id: 2,
      list: "Satuan",
      linkPath: "/SatuanProduk",
      icon: BsPass,
    },
    {
      id: 3,
      list: "Daftar",
      linkPath: "/DaftarProduk",
      icon: BsInboxes,
    },
  ];

  const laporan = [
    {
      id: 1,
      list: "Penjualan",
      linkPath: "/LaporanPenjualan",
      icon: BsFileEarmarkBarGraph,
    },
    {
      id: 2,
      list: "Stok",
      linkPath: "/LaporanStok",
      icon: BsFileEarmarkSpreadsheet,
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
    <div className="my-10">
      <div className={`flex flex-col text-gray-300`}>
        <div className="text-center basis-1/6 ">
          <div
            className={`-translate-y-0.5 transition-all ease-in ${pb} border-b-[1px] border-gray-300 dark:border-colorDarkOne`}
          >
            <div
              className={`mx-auto mb-2 scale-105 text-gray-900 dark:text-colorTwo transition-all ease-in rounded-full flex  justify-center items-center bg-gray-200 dark:bg-colorDarkOne/40  ${widthUserImg}`}
            >
              <PiUserThin className={`my-auto ${fontSize6xl}`} />
            </div>
            <h1
              className={`text-gray-900 dark:text-colorTwo font-acme font-semibold ${inlineHiden} transition-all ease-in`}
            >
              Akmal Hydayat
            </h1>
          </div>
        </div>
        <div
          className={`mt-4 space-y-1 flex flex-col ${textCenter}   ease-in  font-titilium font-semibold basis-4/6  text-gray-900 dark:text-colorTwo`}
        >
          {listNav.map((item) => (
            <React.Fragment key={item.id}>
              {item.list === "Produk" ? (
                <div className={`transition-all ease-in`}>
                  <div
                    onClick={toggleProdukDropdown}
                    className={`ps-3 py-2 translate-y-0.5 relative group  ease-in hover:text-purple-600 rounded-s-xl cursor-pointer ms-1 ${me4}  flex `}
                  >
                    <span className="">
                      <item.icon className={` ${w45} ${delay} me-4`} />
                    </span>

                    <span className={`${inlineHiden} ${delay} ease-in `}>
                      {item.list}
                    </span>
                    <span
                      className={`ms-[60px] ${inlineHiden} ${delay}   ease-in mt-1`}
                    >
                      {showProdukDropdown ? <FiChevronUp /> : <FiChevronDown />}
                    </span>
                    <span className={`${hidenBlock}  ease-in ms-12 -mt-1`}>
                      {item.list}
                    </span>
                  </div>

                  {produk.map((ProdukItem) => (
                    <NavLink
                      to={ProdukItem.linkPath}
                      key={ProdukItem.id}
                      className={({ isActive }) => {
                        return `ps-3 py-2 scale-100 text-gray-900 dark:text-colorTwo  bg-colorTwo dark:bg-colorDarkTwo  group flex ${
                          showProdukDropdown
                            ? `visible relative transition-all ease-in translate-y-0  opacity-100 `
                            : "invisible absolute   -translate-y-2 opacity-0 "
                        }  hover:text-purple-600 rounded-s-xl ${textCenter} ${mSDrop} ms-1 ${
                          isActive
                            ? `bg-gray-200 dark:bg-colorDarkOne/60 border-e-4 ${rounded} border-purple-600   text-purple-600`
                            : " dark:bg-colorDarkTwo"
                        }`;
                      }}
                    >
                      <span className="">
                        <ProdukItem.icon className={`${w45} me-3 ${delay}`} />
                      </span>
                      <span className={`${inlineHiden} ${delay} ease-in`}>
                        {ProdukItem.list}
                      </span>
                      <span className={`${hidenBlock} ms-12 -mt-1  ease-in`}>
                        {ProdukItem.list}
                      </span>
                    </NavLink>
                  ))}
                </div>
              ) : item.list === "Laporan" ? (
                <div className={`transition-all ease-in`}>
                  <div
                    onClick={toggleLaporanDropdown}
                    className={`ps-3 py-2 translate-y-0.5  relative group  hover:text-purple-600 rounded-s-xl  cursor-pointer ms-1 ${me4} flex`}
                  >
                    <span className="">
                      <item.icon className={`${w45} me-4 ${delay}`} />
                    </span>
                    <span className={`${inlineHiden}  ${delay}  ease-in`}>
                      {item.list}
                    </span>

                    <span
                      className={`ms-[50px] ${inlineHiden} ${delay}  ease-in mt-1`}
                    >
                      {showLaporanDropdown ? (
                        <FiChevronUp />
                      ) : (
                        <FiChevronDown />
                      )}
                    </span>
                    <span className={`${hidenBlock} ms-12 -mt-1  `}>
                      {item.list}
                    </span>
                  </div>
                  {laporan.map((laporanItem) => (
                    <NavLink
                      to={laporanItem.linkPath}
                      key={laporanItem.id}
                      className={({ isActive }) => {
                        return `ps-3 py-2 scale-100  text-gray-900 dark:text-colorTwo bg-colorTwo dark:bg-colorDarkTwo group flex ${
                          showLaporanDropdown
                            ? `visible relative transition-all ease-in translate-y-0`
                            : "invisible absolute  -translate-y-2 opacity-0 "
                        }  hover:text-purple-600 rounded-s-xl ${textCenter} ${mSDrop} ms-1 ${
                          isActive
                            ? `bg-gray-200 dark:bg-colorDarkOne/60 border-e-4 ${rounded} border-purple-600   text-purple-600`
                            : " dark:bg-colorDarkTwo"
                        }`;
                      }}
                    >
                      <span className="">
                        <laporanItem.icon className={` ${delay} ${w45} me-3`} />
                      </span>
                      <span className={`${inlineHiden} ${delay}`}>
                        {laporanItem.list}
                      </span>
                      <span className={`${hidenBlock} ms-12 -mt-1 `}>
                        {laporanItem.list}
                      </span>
                    </NavLink>
                  ))}
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
                    return `ps-3 py-2   hover:text-purple-600 bg-colorTwo transition-all ease-in dark:bg-colorDarkTwo translate-y-0.5  relative group ${me4}  flex ms-1 ${
                      isActive
                        ? `bg-gray-200 dark:bg-colorDarkOne/60 border-e-4 ${rounded} border-purple-600   text-purple-600`
                        : `bg-colorTwo transition-all ease-in dark:bg-colorDarkTwo`
                    }`;
                  }}
                >
                  <span className={``}>
                    <item.icon className={` ${delay} ${w45} me-4`} />
                  </span>
                  <span className={`${inlineHiden} ${delay}`}>{item.list}</span>
                  <span className={`${hidenBlock}  ease-in ms-12 -mt-1  `}>
                    {item.list}
                  </span>
                </NavLink>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
