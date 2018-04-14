$(document).ready(function(){

  $('#form').submit(function (e) {
    e.preventDefault();

    $('.form__group input').removeClass('error');
    $('.form__group textarea').removeClass('error');
    $('.form__group p').removeClass('form__error--show');

    // RegExp
    const IS_EMAIL = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const IS_PHONE = /^((\+)?[1-9]{1,2})?([-\s\.])?((\(\d{1,4}\))|\d{1,4})(([-\s\.])?[0-9]{1,12}){1,2}$/;

    const NAME = $('input[name="name"]').val();
    const EMAIL = $('input[name="email"]').val();
    const PHONE = $('input[name="phone"]').val();
    const MESSAGE = $('textarea[name="message"]').val();

    validateFields = () => {
      let validateName = true;
      let validateEmail = true;
      let validatePhone = true;
      let validateMessage = true;

      if (NAME.length < 3) {
        $('input[name="name"]').addClass('error');
        $('input[name="name"]').next().addClass('form__error--show');
        validateName = false;
      }

      if (!IS_EMAIL.test(EMAIL)) {
        $('input[name="email"]').addClass('error');
        $('input[name="email"]').next().addClass('form__error--show');
        validateEmail = false;
      }

      if (!IS_PHONE.test(PHONE)) {
        $('input[name="phone"]').addClass('error');
        $('input[name="phone"]').next().addClass('form__error--show');
        validatePhone = false;
      }

      if (MESSAGE.length < 10) {
        $('textarea[name="message"]').addClass('error');
        $('textarea[name="message"]').next().addClass('form__error--show');
        validateMessage = false;
      }

      if (validateName && validateEmail && validatePhone && validateMessage) {
        return true;
      } else {
        return false;
      }

    }

    if (validateFields()) {
      const data = {
        name: NAME.trim(),
        email: EMAIL,
        phone: PHONE,
        message: MESSAGE
      };
      let form = $(this);
      $.ajax({
        type: "POST",
        url: "mail.php",
        // data: form.serialize(),
        data: data,
        success: function () {
          console.log('submit form ==>', data);
          $('#modal').addClass('modal--show');
          $('body').addClass('hidden');
          setTimeout(function () {
            form.trigger("reset");
          }, 1000);
        },
        error: function () {
          console.log('ajax form error');
        }
      });
    } else {
      console.log('validation form error');
    }


  })


});