import Swal from "sweetalert2";

function AlertShow(title, width, icon) {
  const Toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 2000,
    background: "rgb(147 51 234)",
    color: "#f5f5f5",
    iconColor: "#f5f5f5",
  });

  Toast.fire({
    icon: icon,
    title: title,
    width: width,
  });
}

export default AlertShow;
