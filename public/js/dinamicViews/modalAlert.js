export const modal = ()=> {
    swal.fire({
    icon: "success",
    title: "Gracias por tu compra!",
    text: "Tu orden estara lista en 15 minutos",
    background: "#222",
    iconColor: "#00bfb2",
    customClass: {
        confirmButton: 'modal-btn',
        title: 'modal-title',
        text: 'modal-subtitle'
    }
    });
}