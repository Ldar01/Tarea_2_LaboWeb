function conversor(medida,unidad_med,u_conv, tipo_med){
    var resultado;
    switch(tipo_med){
        case "l":
        case "L":
            switch(u_conv){
                case "cm":
                    resultado = medida * 100;
                    return resultado+"cm";
                    break;
                case "km":
                    resultado = medida/1000;
                    return resultado+"km";
                    break;
                case "ft":
                    resultado = medida* 3.28084;
                    return resultado+"ft";
                    break;
                case "m":
                    if(unidad_med == "cm"){
                        resultado = medida /100;
                        return resultado+"m";
                    }
                    else if(unidad_med == "km"){
                        resultado = medida * 1000;
                        return resultado+"m";
                        
                    }
                    else if( unidad_med == "ft"){
                        resultado = medida/3.2808;
                        return resultado+"m";
                    }
                    break;
            }
            break;
        case "t":
        case "T":
            switch(u_conv){
                case "c":
                    resultado = (medida-32)/1.8000;
                    return resultado+"c";
                    break;
                case "f":
                    resultado = (medida*1.8000)+32;
                    return resultado+"f";
                    break;
                case "k":
                    if(unidad_med == "f"){
                        resultado =((medida - 32)/1.8000)+273.15;
                        return resultado+"k";
                    }
                    else if(unidad_med == "c"){
                        resultado = medida +273.15;
                        return resultado+"k";
                    }
                    break;

            }
            break;
    }
}