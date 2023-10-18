import { useState, useEffect } from "react";

const DateNow = () => {
  // State untuk menyimpan tanggal saat ini
  const [currentDate, setCurrentDate] = useState(new Date());

  // Gunakan useEffect untuk memperbarui tanggal saat komponen pertama kali dimuat
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000); // Setiap 60000 ms (1 menit)

    // Membersihkan interval saat komponen dibongkar (unmounted)
    return () => clearInterval(interval);
  }, []);

  // Mengambil hari dalam bentuk teks (Inggris)
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const day = days[currentDate.getDay()];

  // Mengambil tanggal, bulan, dan tahun dari objek Date
  const hari = currentDate.getDate().toString().padStart(2, "0"); // Tanggal
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Bulan (Ingat, Januari dimulai dari 0)
  const year = currentDate.getFullYear(); // Tahun

  return { day, hari, month, year };
};

export default DateNow;
