var tombol = document.querySelector(".container-tombol");
var layar = document.querySelector("#layar");
var resetlayar = false;
var bolehhitung = false;
var tmpVal = '';
var operator = '';

tombol.addEventListener("click", function(e){

    var tombolClick = e.target;
    var nilaiTombol = tombolClick.innerText;
    
    if(nilaiTombol == "C"){
        layar.value = "";
    } 
    else if(nilaiTombol == "<"){
        layar.value = layar.value.slice(0, -1);
    }
     else if(nilaiTombol == "="){
        if(bolehhitung == true){
    	  layar.value = eval(tmVal + operator + layar.value);
    	  bolehhitung = false;	
    	}
    }
    else if(tombolClick.classList.contains("operator")){
    	if(bolehhitung == true){
    	  layar.value = eval(tmVal + operator + layar.value);
    	  bolehhitung = false;	
    	}

    	tmVal = layar.value;
    	operator= nilaiTombol;
    	resetlayar = true;
    }
    else{
    	if(resetlayar == true){
    		layar.value = nilaiTombol;
    		resetlayar = false;
    		bolehhitung = true;
    	}else {
           layar.value = layar.value + nilaiTombol;
        }
    }

});