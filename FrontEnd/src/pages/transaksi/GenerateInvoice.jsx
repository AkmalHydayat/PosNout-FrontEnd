import { useEffect, useState } from "react";

const InvoiceGenerator = () => {
  const [invoiceNumber, setInvoiceNumber] = useState("");

  useEffect(() => {
    generateInvoice();
  }, []);

  const generateInvoice = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear().toString().slice(-2);
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const day = currentDate.getDate().toString().padStart(2, "0");

    const formattedDate = `PP${day}${month}${year}`;

    // Check if the date has changed
    if (formattedDate !== invoiceNumber.substring(0, 8)) {
      // If the date has changed, reset the counter
      setInvoiceNumber(`${formattedDate}0001`);
    } else {
      // If it's the same date, increment the counter
      const currentCount = parseInt(invoiceNumber.substring(8), 10);
      const newCount = (currentCount + 1).toString().padStart(4, "0");
      setInvoiceNumber(`${formattedDate}${newCount}`);
    }
  };
};

export default InvoiceGenerator;
