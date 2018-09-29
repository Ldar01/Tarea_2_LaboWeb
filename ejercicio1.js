var producto ={
    Codigo :"",
    Descripcion: "",
    Tipo: "",
    Precio: 0,
    Venta: 0,
    Stock: 0
}

var arregloProd = [];
/*No lo pude hacer mas formal debido al tiempo y tambien me cuesta, pero he puesto la idea de como seria*/
function Agregar(codigo,Descripcion,tipo,Precio,Venta,Stock){
    arregloProd.push({codigo,Descripcion,tipo,Precio,Venta,Stock});
}

function ModificarStock(codigo, cantidad){
    for(let i = 0;i<arregloProd.length;i++){
        if(arregloProd[i].Codigo == codigo){
            arregloProd[i].Stock = cantidad;
        }
    }
}

function MostrarStock_vacio(){
    for(let i = 0;i<arregloProd.length; i++){
        if(arregloProd[i].Stock == 0){
            console.log(arregloProd[i]);
        }
    }
}

function Promedio_Ventas(){
    var suma = 0;
    var resultado = 0 ;
    for(let i =0; i<arregloProd.length; i++){
        suma = suma+arregloProd[i].Venta;
    }
    resultado = suma/arregloProd.length;
    return resultado;
}