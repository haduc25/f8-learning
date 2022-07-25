/** Chuong 17. Form validation I
    198. Xử lý báo lỗi cơ bản


    
*/
 
    // Tạo function
    // Đối tượng `Validator`
    function Validator(options){
        console.log(options); //return {form: 'form-1', rules: Array(2)}
        console.log(options.form); //return '#form-1'
        console.log(options.rules);// return (2) [undefined, undefined]

        // 

        // tách ra thành hàm 'validate'
        // hiện / ẩn lỗi
        // Hàm thực hiện 'validate'
        function validate(inputElement, rule){
            var errorMessage = rule.test(inputElement.value);
            var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
            var parentOfInput = inputElement.parentElement;

            // Xử lý khi có lỗi
            if(errorMessage){
                // gán tb lỗi ra html
                errorElement.innerText = errorMessage;
                // add class
                parentOfInput.classList.add('invalid');
            }else{
                // remove error
                errorElement.innerText = '';
                // remove class 
                parentOfInput.classList.remove('invalid');
            }
        }

        // Lấy element của form ELement cần 'validate'
        var formElement = document.querySelector(options.form);

        if(formElement){
            // console.log(formElement);

            // vì options.rules = là array => duyệt qua array
            options.rules.forEach((rule) => {
                // console.log(rule); //return  {selector: '#fullname', test: ƒ} {selector: '#email', test: ƒ}

                // lấy ra vale từ rules
                // console.log(rule.selector); //return #fullname #email

                // lấy ra thẻ input / đi từ 'formElement'
                var inputElement = formElement.querySelector(rule.selector);

                // console.log(inputElement); 
                // <input id="fullname" name="fullname" type="text" placeholder="VD: Sơn Đặng" class="form-control">
                // <input id="email" name="email" type="text" placeholder="VD: email@domain.com" class="form-control">
                
                if(inputElement){
                    // Event on blur
                    // Xử lý trường hợp blur khỏi 'input'
                    inputElement.onblur = () => {
                        //phần này đã tách ra thành hàm 'validate' / từ đây đến

                        // console.log('blur: '+ rule.selector);
                        // return
                        // blur: #fullname
                        // blur: #email

                        // console.log(inputElement.value); //lấy ra value của thẻ 'input'
                        // console.log(rule); //return {selector: '#fullname', test: ƒ} / khi blur input #fullname

                        // value: inputElement.value
                        // test function: rule.test


                        // // run function / check error
                        // var errorMessage = rule.test(inputElement.value);
                        // // console.log(errorMessage); //return Vui lòng nhập trường này / undefined

                        // // lấy ra 'form-message'
                        // var errorElement = inputElement.parentElement.querySelector('.form-message');
                        // // console.log(errorElement); //return <span class="form-message"></span>

                        // // Lấy ra thẻ cha của inputElement
                        // var parentOfInput = inputElement.parentElement;
                        // // console.log(parentOfInput); //return <div class="form-group">…</div>

                        // // Xử lý khi có lỗi
                        // if(errorMessage){
                        //     // gán tb lỗi ra html
                        //     errorElement.innerText = errorMessage;
                        //     // add class
                        //     parentOfInput.classList.add('invalid');
                        // }else{
                        //     // remove error
                        //     errorElement.innerText = '';
                        //     // remove class 
                        //     parentOfInput.classList.remove('invalid');
                        // }

                        //// Lấy ra thẻ cha của inputElement
                        //// dùng parentElement: lấy ra thẻ cha của element hiện tại / (Element.parentElement)
                        // console.log(inputElement.parentElement); // <div class="form-group">…</div>

                        //// từ thẻ cha -> tìm ra 'form-message'
                        // console.log(inputElement.parentElement.querySelector('.form-message')); // <span class="form-message"></span>

                        //phần này đã tách ra thành hàm 'validate' / đến đây nè!


                        // call function
                        validate(inputElement, rule);
                    }


                    // Xử lý trường hợp mỗi khi người dùng nhập vào 'input'
                    inputElement.oninput = () => {
                        // console.log(inputElement.value); 
                        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                        var parentOfInput = inputElement.parentElement;


                        // khi người dùng nhập dl => remove error & class
                        // remove error
                        errorElement.innerText = '';
                        // remove class 
                        parentOfInput.classList.remove('invalid');

                    }

                }

            });
        }
    }



    // Định nghĩa Rules
    // Tạo ra các phương thức gồm các rules 

    // * Nguyên tắc của các rules
    // 1. Khi có lỗi => trả ra message lỗi
    // 2. Khi hợp lệ => trả về 'undefined'


    // isRequired
    Validator.isRequired = function(selector){ //nhận vafp selector
        // return selector; //(2) ['#fullname', '#email']  

        return {
            selector: selector,
            test: function(value){
                // Kiểm tra xem users đã nhập hay chưa?

                // Logic: Nếu users có nhập 'value' (value = true) => return undefined / k có value => return 'Vui lòng nhập trường này'
                // dùng trim(): bỏ space đầu, cuối
                return value.trim() ? undefined : 'Vui lòng nhập trường này'; 
            }
        } // (2) [{…}, {…}]
    }

    // isEmail
    Validator.isEmail = function(selector){ //nhận vào selector
        // return selector; //(2) ['#fullname', '#email']  
        
        return {
            selector: selector,
            test: function(value){
                // Check E-mail
                // Tham khảo

                // Keyword: javascript email regex
                // Link: https://www.w3resource.com/javascript/form/email-validation.php

                // Kt = biểu thức chính quy
                
                var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

                // Logic: nếu mà dữ liệu users nhập vào (regex.test(value)) hợp lệ / là email => return 'undefined' ngược lại trả về thông báo lỗi
                return regex.test(value) ? undefined : 'Trường này phải là E-mail';

            }
        } // (2) [{…}, {…}]
    }

    // min Length / độ dài tối thiểu
    Validator.minLength = function(selector, min){
        return {
            selector: selector,
            test: function(value){
                // Logic: nếu mà dữ liệu users nhập vào > hoặc = min => hợp lệ / là email => return 'undefined' ngược lại trả về thông báo lỗi
                return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} ký tự`;
            }
        } // (2) [{…}, {…}]
    }





























    // Call function
    // Mong muốn sử dụng sau khi hoàn thành thư viện
    Validator({
        form: '#form-1', //truyền vào form cần validate
        errorSelector: '.form-message',
        rules: [
            Validator.isRequired('#fullname'), //truyền vào CSS Selector của input cần rule 'isRequired()'
            Validator.isEmail('#email'), //truyền vào CSS Selector của input cần rule 'isEmail()'
            // Validator.isRequired('#password'), //truyền vào CSS Selector của input cần rule 'isRequired()'
            Validator.minLength('#password', 6), //truyền vào CSS Selector của input cần rule 'minLength()'
        ]
    });









    // Youtube: 24/07/2022
    // https://youtu.be/O2PpHVKGsIg
    // https://youtu.be/Zu3XREOy6_M

    // Youtube: 25/07/2022
    // https://youtu.be/sYtC6kzzHBE
