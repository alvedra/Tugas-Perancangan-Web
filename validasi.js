
function validateForm() {
    var nama = document.forms["formregis"]["nama"].value;
    var nim = document.forms["formregis"]["nim"].value;
    var jk = document.forms["formregis"]["jk"].value;
    var kota = document.forms["formregis"]["kota"].value;
    var tanggal = document.forms["formregis"]["tanggal"].value;
    var alamat = document.forms["formregis"]["alamat"].value;
    var tujuan1 = document.forms["formregis"]["hobi1"].checked;
    var tujuan2 = document.forms["formregis"]["hobi2"].checked;
    var tujuan3 = document.forms["formregis"]["hobi3"].checked;
    var tujuan4 = document.forms["formregis"]["hobi4"].checked;
    var validate = true;
    if (nama == "") {
        document.getElementById("validasinama").style.display = "block";
        validate = false;
    }else{
        document.getElementById("validasinama").style.display = "none";
    }
    if (nim == "") {
        document.getElementById("validasinim").style.display = "block";
        validate = false;
    }else{
        document.getElementById("validasinim").style.display = "none";
    }
    if (jk == "") {
        document.getElementById("validasijk").style.display = "block";
        validate = false;
    }else{
        document.getElementById("validasijk").style.display = "none";
    }
    if (kota == "") {
        document.getElementById("validasikota").style.display = "block";
        validate = false;
    }else{
        document.getElementById("validasikota").style.display = "none";
    }
    if (tanggal == "") {
        document.getElementById("validasitanggal").style.display = "block";
        validate = false;
    }else{
        document.getElementById("validasitanggal").style.display = "none";
    }
    if (alamat == "") {
        document.getElementById("validasialamat").style.display = "block";
        validate = false;
    }else{
        document.getElementById("validasialamat").style.display = "none";
    }
    if (tujuan1 == false && tujuan2 == false && tujuan3 == false && tujuan4 == false) {
        document.getElementById("validasitujuan").style.display = "block";
        validate = false;
    }else{
        document.getElementById("validasitujuan").style.display = "none";
    }
    if(validate){alert("Berhasil mengisi!");}
    return validate;
}