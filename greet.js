const setTimeout=(Time)=>{
    if(Time>=6 && Time<=9){
        console.log(`Good Morning`)
    }else if(Time>=9 && Time<=12){
        console.log(`Good Noon`)
    }
    else if(Time>=12 && Time<=16){
        console.log(`Good AfterNoon`)
    }else if (Time>=16 && Time <= 20){
        console.log(`Good Evening`)
    }else if (Time>=20 && Time <=24){
        console.log(`Good Night`)
    }else {console.log(`Good Bye`)}
    
}
setTimeout(6)
setTimeout(12)
setTimeout(15)
setTimeout(18)
setTimeout(23)
setTimeout(1)