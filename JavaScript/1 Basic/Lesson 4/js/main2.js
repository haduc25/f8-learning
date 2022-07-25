/** Chuong 17. Form validation I
    198. Xử lý báo lỗi cơ bản


    
*/
 
    // Tạo function
    // Đối tượng `Validator`
    function Validator(options){

        // Tạo ra 1 biến obj lưu & quản lý rules
        var selectorRules = {};

        console.log(options); //return {form: 'form-1', rules: Array(2)}
        console.log(options.form); //return '#form-1'
        console.log(options.rules);// return (2) [undefined, undefined]

        // 

        // tách ra thành hàm 'validate'
        // hiện / ẩn lỗi
        // Hàm thực hiện 'validate'
        function validate(inputElement, rule){
            // var errorMessage = rule.test(inputElement.value); //vì ở dưới đã gán lại (rules[i](inputElement.value)) => chỉ cần khai báo 'errorMessage'
            var errorMessage;
            var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
            var parentOfInput = inputElement.parentElement;


            // console.log(selectorRules); //{#fullname: ƒ, #email: ƒ, #password: ƒ, #password_confirmation: ƒ}
            // console.log(rule.selector); //return rule mà users đang tác động vào / ex: #fullname, #email, #password, #password_confirmation

            // lấy ra rule cử từng thẻ input
            // Lấy ra các rules cửa selector
            var rules = selectorRules[rule.selector] //VD đang ở input là #fullname => selectorRules[#fullname]
            // console.log(rules); 


            // lặp qua 'rules'
            // Lặp qua từng rules & kiểm tra
            // Logic: Nếu có lỗi => dừng việc kiểm tra
            for (var i = 0; i < rules.length; i++) {
                // rule[i] tương tự như rule / ở trên 'rules[i](inputElement.value)' / rules[i](inputElement.value): rule thứ i (rules[i]) nhận vào là function nên có thể truyền trực tiếp value
                // vì là hàm => có thể truyền value 
                // gán 'errorMessage'

                // check rules
                // console.log(rules[0]); //
                // console.log(typeof rules[0]); //function

                errorMessage = rules[i](inputElement.value); //đã giải thích ở trên 

                // check qua từng rule
                // Logic: Nếu rules nào có lỗi => thoát khỏi vòng lặp (break)
                if(errorMessage) break;
            }

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

            // lắng nghe sự kiện submit
            // Khi submit form
            formElement.onsubmit = function(e){
                // Bỏ đi hành vi mặc định của btn submit
                e.preventDefault();


            };


            // vì options.rules = là array => duyệt qua array
            // Lặp qua mỗi rule và xử lý / gồm các hành vi (lắng nghe sự kiện: blur, input, ...)
            options.rules.forEach((rule) => {
                // Lưu lại các rules cho mỗi input
                // nameObj[] / [] thể hiện là key của obj
                // selectorRules[rule.selector] = rule.test;

                // console.log(selectorRules[rule.selector]); // undefined x5 (ban đầu khi chưa gán = rule.test)
                //// return
                // ƒ (value){
                //     // Kiểm tra xem users đã nhập hay chưa?
    
                //     // Logic: Nếu users có nhập 'value' (value = true) => return undefined / k có value => return 'Vui lòng nhập trườn…
                //  ƒ (value){
                //     // Check E-mail
                //     // Tham khảo
    
                //     // Keyword: javascript email regex
                //     // Link: https://www.w3resource.com/javascript/form/emai…
                //  ƒ (value){
                //     // Logic: nếu mà dữ liệu users nhập vào > hoặc = min => hợp lệ / là email => return 'undefined' ngược lại trả về thông báo lỗi
                //     return value.length >= min ? …
                //  ƒ (value){
                //     // Kiểm tra xem users đã nhập hay chưa?
    
                //     // Logic: Nếu users có nhập 'value' (value = true) => return undefined / k có value => return 'Vui lòng nhập trườn…
                //  ƒ (value){
                //     // getConfirmValue() return ''
                //     // Logic: Nếu dl nhập vào (value) = dữ liệu mà (getConfirmValue) 



                // Xử lý
                // Vì lúc chưa gán (selectorRules[rule.selector]) = (rule.test) => trả về undefined 
                // Logic: Nếu là 1 array
                if(Array.isArray(selectorRules[rule.selector])){
                    // Nếu là 1 array
                    // Nếu input nào có 2 rules trở lên => sẽ lọt vào đây => vì khi lần 1 đã là array
                    // Logic: Vì đã là array => dùng push: để đẩy pt vào array / đẩy rule (thứ 2 trở lên vào array)
                    selectorRules[rule.selector].push(rule.test)
                    
                    //// checking
                    // var saving = selectorRules[rule.selector].push(rule.test)
                    // console.log(saving); //return 2 / vì có 2 rules trùng input
                }else{
                    // Nếu k phải array
                    // Logic: k phải array => gán cho nó thành array
                    selectorRules[rule.selector] = [rule.test];
                    // console.log(selectorRules[rule.selector]);   
                }



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


            //// check obj
            //console.log(selectorRules); //{#fullname: ƒ, #email: ƒ, #password: ƒ, #password_confirmation: ƒ}

            // khi đã lưu rule
            // password_confirmation có 2 rules
            // return {#fullname: Array(1), #email: Array(1), #password: Array(1), #password_confirmation: Array(2)}
        }
    }



    // Định nghĩa Rules
    // Tạo ra các phương thức gồm các rules 

    // * Nguyên tắc của các rules
    // 1. Khi có lỗi => trả ra message lỗi
    // 2. Khi hợp lệ => trả về 'undefined'


    // isRequired
    Validator.isRequired = function(selector, message){ //nhận vào selector
        // return selector; //(2) ['#fullname', '#email']  

        return {
            selector: selector,
            test: function(value){
                // Kiểm tra xem users đã nhập hay chưa?

                // Logic: Nếu users có nhập 'value' (value = true) => return undefined / k có value => return 'Vui lòng nhập trường này'
                // dùng trim(): bỏ space đầu, cuối
                return value.trim() ? undefined : message || 'Vui lòng nhập trường này'; 
            }
        } // (2) [{…}, {…}]
    }

    // isEmail
    Validator.isEmail = function(selector, message){ //nhận vào selector
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
                return regex.test(value) ? undefined : message || 'Trường này phải là E-mail';

            }
        } // (2) [{…}, {…}]
    }

    // min Length / độ dài tối thiểu
    Validator.minLength = function(selector, min, message){
        return {
            selector: selector,
            test: function(value){
                // Logic: nếu mà dữ liệu users nhập vào > hoặc = min => hợp lệ / là email => return 'undefined' ngược lại trả về thông báo lỗi
                return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} ký tự`;
            }
        } // (2) [{…}, {…}]
    }

    // Confirmation password
    Validator.isConfirmed = function(selector, getConfirmValue, message){
        // Hàm getConfirmValue => là 1 callback
        return {
            selector: selector,
            test: function(value){
                // getConfirmValue() return ''
                // Logic: Nếu dl nhập vào (value) = dữ liệu mà (getConfirmValue) return => thì return 'undefined' ngược lại trả về thông báo lỗi
                // Nếu message có value => return message ngược lại return giá trị mặc định
                return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác';
            }
        }
    }  



























    // Call function
    // Mong muốn sử dụng sau khi hoàn thành thư viện
    Validator({
        form: '#form-1', //truyền vào form cần validate
        errorSelector: '.form-message',
        rules: [
            Validator.isRequired('#fullname', 'Vui lòng nhập tên đầy đủ của bạn'), //truyền vào CSS Selector của input cần rule 'isRequired()'
            Validator.isRequired('#email'), //truyền vào CSS Selector của input cần rule 'isRequired()'
            Validator.isEmail('#email'), //truyền vào CSS Selector của input cần rule 'isEmail()'
            // Validator.isRequired('#password'), //truyền vào CSS Selector của input cần rule 'isRequired()'
            Validator.minLength('#password', 6), //truyền vào CSS Selector của input cần rule 'minLength()'
            Validator.isRequired('#password_confirmation'), //rule 'isRequired()' / đang bị ghi đè
            Validator.isConfirmed('#password_confirmation', function() {
                // đối số thứ 1 (#password_confirmation) là selector
                // đối số thứ 2 là function => return ra text
                // return 'HELLO'; //Mong muốn đến khi hoàn thành người dùng nhập trên password phải trùng với text return
                // getConfirmValue() return 'cái gì đó' / nếu value (ở trong rules check) != return => tb lỗi 
                // ở vd trên trong form phải nhập đúng 'HELLO' => k xuất ra tb lỗi

                // Lấy ra form password
                // #form-1: cho selector này vào để k bị nhàm lẫn nếu có nhiều form
                // Element.value: lấy ra value

                // Logic: khi isConfirmed() được exec -> lấy value của input '#password' & và so sánh với chuỗi users nhập vào input '#password_confirmation'
                return document.querySelector('#form-1 #password').value;
            }, 'Mật khẩu nhập lại không chính xác'), //custom message => thêm đối số thứ 3


            // List need code
            // Xong phan add nhieu rules cho 1 input => isDone
            // Bấm vào 'submit' => valid hết tất cả các trường
        ]
    });









    // Youtube: 24/07/2022
    // https://youtu.be/O2PpHVKGsIg
    // https://youtu.be/Zu3XREOy6_M

    // Youtube: 25/07/2022
    // https://youtu.be/sYtC6kzzHBE
    // https://youtu.be/oWGYoj5rUa4
