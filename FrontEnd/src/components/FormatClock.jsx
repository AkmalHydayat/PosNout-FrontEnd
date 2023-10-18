import { useState, useEffect } from "react";

const Clock = () => {
  // State untuk menyimpan waktu saat ini

  const [time24Hour, setTime24Hour] = useState(new Date());

  // Gunakan useEffect untuk memperbarui waktu saat komponen pertama kali dimuat
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime24Hour(now);
    }, 1000); // Setiap 1000 ms (1 detik)

    // Membersihkan interval saat komponen dibongkar (unmounted)
    return () => clearInterval(interval);
  }, []);

  // Format waktu dalam 24 jam (format militer)
  const formattedTime24Hour = time24Hour.toLocaleTimeString("en-US", {
    hour12: false,
  });

  return <div>{formattedTime24Hour}</div>;
};

export default Clock;
