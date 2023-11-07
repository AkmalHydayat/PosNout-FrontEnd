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
  setShowModal,
  pb,
  rounded,
  me4,
  w45,
  hidenBlock,
  delay,
  delay2,
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
      <div className={`flex flex-col transition-all ease-in-out text-gray-300`}>
        <div className="text-center transition-all ease-in-out basis-1/6 ">
          <div
            className={`-translate-y-0.5 transition-all ${pb} border-b-[1px] border-gray-300 dark:border-colorDarkOne`}
          >
            <div
              onClick={() => setShowModal(true)}
              className={`mx-auto ${delay} cursor-pointer mb-2 scale-105 transition-all rounded-full flex  justify-center items-center bg-gray-200 dark:bg-colorDarkOne/40  ${widthUserImg}`}
            >
              <PiUserThin
                className={`my-auto text-gray-900 dark:text-colorTwo ${delay}  ${fontSize6xl}`}
              />
            </div>
            <h1
              className={`text-gray-900 dark:text-colorTwo font-acme font-semibold ${inlineHiden} ${delay}  transition-all ease-in-out`}
            >
              Akmal Hydayat
            </h1>
          </div>
        </div>
        <div
          className={`mt-4 space-y-1 flex flex-col ${textCenter}  ${delay} ease-in-out transition-all font-titilium font-semibold basis-4/6  text-gray-900 dark:text-colorTwo`}
        >
          {listNav.map((item) => (
            <React.Fragment key={item.id}>
              {item.list === "Produk" ? (
                <div className="transition-all ease-in-out">
                  <div
                    onClick={toggleProdukDropdown}
                    className={`ps-3 py-2 translate-y-0.5 relative group transition-transform ease-in-out hover:text-purple-600 rounded-s-xl cursor-pointer ms-1 ${me4}  flex `}
                  >
                    <span className="">
                      <item.icon className={` ${w45} me-4`} />
                    </span>

                    <span
                      className={`${inlineHiden} ${delay}  transition-all ease-in-out `}
                    >
                      {item.list}
                    </span>
                    <span
                      className={`ms-[60px] ${inlineHiden} ${delay}  transition-all ease-in-out mt-1`}
                    >
                      {showProdukDropdown ? <FiChevronUp /> : <FiChevronDown />}
                    </span>
                    <span className={`${hidenBlock} ms-12 -mt-1`}>
                      {item.list}
                    </span>
                  </div>

                  {produk.map((ProdukItem) => (
                    <NavLink
                      to={ProdukItem.linkPath}
                      key={ProdukItem.id}
                      className={({ isActive }) => {
                        return `ps-3 py-2 scale-100 transition-all ${delay2} dark:bg-colorDarkTwo  group flex ${
                          showProdukDropdown
                            ? "visible relative transition-[transform,opacity] ease-in translate-y-0 opacity-100"
                            : "invisible absolute transition-none -translate-y-2 opacity-0 "
                        }  hover:text-purple-600 rounded-s-xl ${textCenter} ${mSDrop} ms-1 ${
                          isActive
                            ? `bg-gray-200 dark:bg-colorDarkOne/70 border-e-4 ${rounded} border-purple-600 border-box  text-purple-600`
                            : "bg-colorTwo dark:bg-colorDarkTwo"
                        }`;
                      }}
                    >
                      <span className="">
                        <ProdukItem.icon className={`${w45} me-3`} />
                      </span>
                      <span
                        className={`${inlineHiden} ${delay}  transition-all ease-in-out`}
                      >
                        {ProdukItem.list}
                      </span>
                      <span
                        className={`${hidenBlock} ms-12 -mt-1 transition-all ease-in-out`}
                      >
                        {ProdukItem.list}
                      </span>
                    </NavLink>
                  ))}
                </div>
              ) : item.list === "Laporan" ? (
                <div>
                  <div
                    onClick={toggleLaporanDropdown}
                    className={`ps-3 py-2 translate-y-0.5 ${delay} relative group transition-transform hover:text-purple-600 rounded-s-xl  cursor-pointer ms-1 ${me4} flex`}
                  >
                    <span className="">
                      <item.icon className={`${w45} me-4`} />
                    </span>
                    <span
                      className={`${inlineHiden} ${delay}  transition-all ease-in-out`}
                    >
                      {item.list}
                    </span>

                    <span
                      className={`ms-[50px] ${inlineHiden} ${delay} transition-all ease-in-out mt-1`}
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
                        return `ps-3 py-2 scale-100 transition-all dark:bg-colorDarkTwo ${delay2}  group flex ${
                          showLaporanDropdown
                            ? "visible relative transition-[transform,opacity] ease-in  translate-y-0 opacity-100"
                            : "invisible absolute transition-none -translate-y-2 opacity-0 "
                        }  hover:text-purple-600 rounded-s-xl ${textCenter} ${mSDrop} ms-1 ${
                          isActive
                            ? `bg-gray-200 dark:bg-colorDarkOne/70 border-e-4 ${rounded} border-purple-600 border-box  text-purple-600`
                            : "bg-colorTwo dark:bg-colorDarkTwo"
                        }`;
                      }}
                    >
                      <span className="">
                        <laporanItem.icon className={`  ${w45} me-3`} />
                      </span>
                      <span
                        className={`${inlineHiden} ${delay}  transition-all ease-in-out`}
                      >
                        {laporanItem.list}
                      </span>
                      <span
                        className={`${hidenBlock} ms-12 -mt-1 transition-all ease-in-out`}
                      >
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
                    return `ps-3 py-2 transition-all hover:text-purple-600 dark:bg-colorDarkTwo translate-y-0.5  relative group ${me4}  flex ms-1 ${
                      isActive
                        ? `bg-gray-200 dark:bg-colorDarkOne/70 border-e-4 ${rounded} border-purple-600 group border-box text-purple-600`
                        : "bg-colorTwo"
                    }`;
                  }}
                >
                  <span className="">
                    <item.icon className={`  ${w45} me-4`} />
                  </span>
                  <span
                    className={`${inlineHiden} ${delay}  transition-all ease-in-out`}
                  >
                    {item.list}
                  </span>
                  <span
                    className={`${hidenBlock} transition-all ease-in-out ms-12 -mt-1  `}
                  >
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
