$(function() {
    $('#btn-save').on('click'), function() {
        var radio = $('#genderer').val();
        var firstname = $('inputfirst').val();
        var lastname = $('#inpulast').val();
        var Email = $('#inputEmail4').val();
        var formEmail=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,6})+$/;
        var pass = $('#inputPassword4').val();
        var cpass = $('#inputPassword5').val();
        var option = $('#inputState').val();
        var textarea = $('#exampleFormControlTextarea1').val();
        var checkbox= $('#gridCheck').val();
        


        if (radio.value == ""){
            $('#empty').text('please choos the gender').css('color','red');
            $('#gender').css('border','ipx solid red');
        }else
        if (firstname == ""){
            $('#empty').text('please enter user name').css('color','red');
            $('#inputfirst').css('border','ipx solid red');
        }else
        if (lastname.value == ""){
            $('#empty').text('please enter last name').css('color','red');
            $('#inpulast').css('border','ipx solid red');
        }else
        if (Email.value == ""){
            $('#empty').text('please enter your email').css('color','red');
            $('#inputEmail4').css('border','ipx solid red');
        }else
        if (formEmail.value == ""){
            $('#empty').text('form email  must be aaa@vaa.aaa').css('color','red');
            $('#inputEmail4').css('border','ipx solid red');
        }else
        if (pass.length < 4 ){
            $('#empty').text('pleas enter password minst 6chareckter').css('color','red');
            $('#inputPassword4').css('border','ipx solid red');
        }else
        if (cpass == pass){
            $('#empty').text('password not the same').css('color','red');
            $('#inputPassword5').css('border','ipx solid red');
        }else
        if (option == ""){
            $('#empty').text('pleas choose the gender').css('color','red');
            $('#inputState').css('border','ipx solid red');
        }else
        if (textarea < 6 ){
            $('#empty').text('please write something ').css('color','red');
            $('#exampleFormControlTextarea1').css('border','ipx solid red');
        }else
        if (checkbox.checked == false){
            $('#empty').text('please check the information').css('color','red');
            $('#gridCheck').css('border','ipx solid red');
        }else
        //else
        if ( firstname !==""){
            $('#inputfirst').css('border', '1px solid blue');
        }if ( lastname !==""){
            $('#inputlast').css('border', '1px solid blue');
        }if ( formEmail.test(Email)){
            $('#inputEmail4').css('border', '1px solid blue');
        }if (pass.length>4 || pass.length == 4){
            $('#inputPassword4').css('border', '1px solid blue');
        }if (cpass!== ""){
            $('#inputPassword5').css('border', '1px solid blue');
        }if (option!== ""){
            $('#inputState').css('border', '1px solid blue');
        }if (textarea!== ""){
            $('#exampleFormControlTextarea1').css('border', '1px solid blue');
        }
        if(firstname !== "" && lastname !== "" &&Email !== "" && pass !== "" &&option)


    }

});