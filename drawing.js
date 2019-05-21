
function kiri(){
    let z='';
    var  ukuran = 5 
    for (let a=1; a<=ukuran; a++){
        for (let b=a; b<=ukuran ;b++){
            z += ' '
        }for (c=1;c<=a;c++){
            z += '*',a
        }for (d=2;d<c;d++){
            z += '*',a
        }z += '<br><br>'
    }document.getElementById("Hasil").innerHTML = z
}

function segitiga(){
    let m ='';
    for (let i=0;i<5;i++){
        m += ' * ' }     
}document.getElementById("Hasil").innerHTML = m

function kanan(){
    let z='';
for (let i=1; i<=5; i++){
    for (let j=1; j<=i ;j++){
        z += ' '
    }for(k=i;k<=5;k++){
        z += ' * '
    }
    z += '<br><br>'
}document.getElementById("Hasil").innerHTML = z
}
