
var pilih = prompt("Masukan Pilihan =");
switch(pilih){
    case '1':
        console.log("If Else");
        var nilai = prompt("masukan nilai 1-10");
        console.log(nilai);
        if(nilai > 5){
            console.log("Lulus");
        }else{
            console.log("Tidak Lulus")
        }
        break;
    case '2':
        console.log("Ternary operator");
        var umur = prompt("Masukan Umur anda ");
        var a =(umur > 17)?"Bisa buat Sim" : "Tidak bisa buat sim";
        console.log(a);
        break;
    
    case '3':
        console.log("for Loop");
        for(var i = 0 ; i < 10 ; i++){
            console.log("nomor ",i);
        }
        break;

        case '4':
            let person = {
                firstName: "ivan",
                lastName: "andri",
                id: 1234,
                alamat: "jalan pendidikan",
                status: "Mahasiswa"
            }
            for(let a in person){
                console.log(a, ":", person[a]);
            }
            break;

        case '5':
            var hewan = ["beruang", "Lumba-Lumba", "Semut", "Unta" ];
            for(let b of hewan){

                console.log(b);
            }
}



