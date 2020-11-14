function compraCalcular(){
    tarjeta_elegido = document.getElementById("tarjeta").checked;
    contado_elegido = document.getElementById("contado").checked;
    precio = document.getElementById("precio-compra").value;
    if(tarjeta_elegido){
        if(precio < 5000){
            document.getElementById("impuesto-compra").innerHTML = precio * 0.2;
        }else{
            document.getElementById("impuesto-compra").innerHTML = precio * 0.1;
        }
    }else if(contado_elegido){
        if(precio < 3000){
            document.getElementById("impuesto-compra").innerHTML = precio * 0.03;
        }else{
            document.getElementById("impuesto-compra").innerHTML = precio * 0.07;
        }
    }
}

function ventaCalcular(){
    cantidad_productos = document.getElementById("cantidad-productos").value;
    precio_unitario = document.getElementById("precio-venta").value;
    if(precio_unitario<=10000){
        if(cantidad_productos<=5){
            document.getElementById("impuesto-venta").innerHTML = precio_unitario * cantidad_productos * 0.1;
            document.getElementById("mensaje-error").innerHTML = "";
        }else{
            document.getElementById("mensaje-error").innerHTML = "ERROR. CANTIDAD DE PRODUCTOS EXCEDIDA";
            document.getElementById("impuesto-venta").innerHTML = "";
        }
    }else{
        document.getElementById("mensaje-error").innerHTML = "";
        document.getElementById("impuesto-venta").innerHTML = precio_unitario * cantidad_productos * 0.5;
    }
    console.log(cantidad_productos);
}