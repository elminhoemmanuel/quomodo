$(document).ready(function(){
    $(".check-btn").click(function(){
        if ($(".details").val()==="") { 
            window.alert("Please enter Employee Full name/Employee ID")
        } else{
            var x = document.getElementById("greeting");
            x.style.display = "block";
            
        };
    })

});