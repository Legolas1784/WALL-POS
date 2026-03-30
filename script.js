document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("formVenta");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            let producto = document.getElementById("producto").value;
            let precio = document.getElementById("precio").value;

            document.getElementById("mensaje").innerText =
                `✅ Venta registrada: ${producto} - $${precio}`;

            form.reset();
        });
    }

});