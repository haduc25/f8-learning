    // Tạo function
    // Đối tượng `Validator`
    function Validator(options){
        // Lấy thẻ cha của 'errorElement' / Fix lỗi khi có nhiều thẻ <div> bao quanh 
        function getParent(element, selector){
            while(element.parentElement){
                if(element.parentElement.matches(selector)){
                    // The matches() method of the Element interface tests whether the element would be selected by the specified CSS selector.
                    // https://developer.mozilla.org/en-US/docs/Web/API/Element/matches

                    // Logic: Tìm thấy 'selector' / 'form-group' => trả về element cha
                    return element.parentElement;
                }

                // Logic: 
                // Lần lặp 1: element = inputElement
                // Nếu k matches với 'form-group' => gán với thẻ cha của 'inputElement'
                // Lần lặp 2: element = thẻ cha của inputElement / ở vd này là div
                // Nếu k matches với 'form-group' => gán với thẻ cha của thẻ div trên
                // Lặp cho đến khi matches với 'form-group' => return thẻ cha ra ngoài

                element = element.parentElement;

            }
        }

        // Tạo ra 1 biến obj lưu & quản lý rules
        var selectorRules = {};

        console.log(options); //return {form: 'form-1', rules: Array(2)}
        console.log(options.form); //return '#form-1'
        console.log(options.rules);// return (2) [undefined, undefined]

        // Hàm thực hiện 'validate'
        function validate(inputElement, rule){
            var errorMessage;
            var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
            var parentOfInput = getParent(inputElement, options.formGroupSelector);

            // Lấy ra các rules cửa selector
            var rules = selectorRules[rule.selector] //VD đang ở input là #fullname => selectorRules[#fullname]

            // Lặp qua từng rules & kiểm tra
            // Logic: Nếu có lỗi => dừng việc kiểm tra
            for (var i = 0; i < rules.length; i++) {
                switch(inputElement.type){
                    case 'checkbox':
                    case 'radio':
                        errorMessage = rules[i](
                            // Logic: nối chuỗi 'rule.selector' + chuỗi ':checked' => input[name="gender"]:checked
                            formElement.querySelector(rule.selector + ':checked') //tìm radio được checked
                        );
                        break;
                    default:
                        errorMessage = rules[i](inputElement.value);
                }

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


            // convert từ string -> boolean
            // Logic vd: true -> false -> true => chuyển về boolean / false -> true -> false => chuyển về boolean
            return !!errorMessage;
        }

        // Lấy element của form ELement cần 'validate'
        var formElement = document.querySelector(options.form);

        if(formElement){
            // lắng nghe sự kiện submit
            formElement.onsubmit = function(e){
                // Bỏ đi hành vi mặc định của btn submit
                e.preventDefault();

                // tạo biến 'isValid' check loi
                var isFormValid = true;

                // Lặp qua từng rules và validate
                options.rules.forEach(rule => {
                    var inputElement = formElement.querySelector(rule.selector);
                    // dùng biến để check dl return từ validate
                    var isValid = validate(inputElement, rule); //validate luon khi btn clickeds

                    // vì 'errorMessage' == true => thêm class & 'errorMessage' == false => xóa class
                    if(isValid){
                        // khi value return ra là lỗi => gán 'isFormValid' = false => thể hiện việc có lỗi xảy ra
                        // gán 'isFormValid' = false
                        isFormValid = false;
                    }
                });

                if(isFormValid){
                    if(typeof options.onSubmit === 'function'){
                        // Lấy ra tất cả thẻ 'input' ở trạng thái 'enable' trong form này
                        // Logic: lấy ra tất cả thẻ có 'name' ([name]), và k có attribute disabled(not([disabled])) 
                        var enableInput = formElement.querySelectorAll('[name]:not([disabled])');
                        var formValues = Array.from(enableInput).reduce((values, input) => {
                            switch(input.type){
                                case 'checkbox':
                                    // k nhập gì return 1 chuỗi rỗng
                                    if(!input.matches(':checked')){
                                        values[input.name] = ''; //fav-color: ""
                                        return values;
                                    } 
                                 
                                    // Check box => cần phải trả về 1 array / 
                                    // Logic: Nếu value của check box (values[input.name]) k phải là 1 array => gán thành 1 array 
                                    if(!Array.isArray(values[input.name])){
                                        // gán = array
                                        values[input.name] = [];
                                    }

                                    // push value vào trong array
                                    values[input.name].push(input.value);

                                    break;

                                case 'radio':
                                    const valueOfRadioButton = 'input[name = "' + input.name + '"]:checked';

                                    // gán giá trị vào obj
                                    values[input.name] = formElement.querySelector('input[name = "' + input.name + '"]:checked').value;    
                                    break;

                                case 'file':
                                    //gán cho array nhận vào là files
                                    values[input.name] = input.files; //avatar: FileList {0: File, length: 1}
                                    break;

                                default:
                                    values[input.name] = input.value;
                            }

                            return values; //{fullname: '', email: 'haducvcvb@gmail.com', password: 'abcd1234', password_confirmation: 'abcd1234'}

                        }, {})
                        options.onSubmit(formValues);
                    }
                    else{
                        formElement.submit();
                    }

                }
            };

            options.rules.forEach((rule) => {
                // Xử lý
                // Logic: Nếu là 1 array
                if(Array.isArray(selectorRules[rule.selector])){
                    // Logic: Vì đã là array => dùng push: để đẩy pt vào array / đẩy rule (thứ 2 trở lên vào array)
                    selectorRules[rule.selector].push(rule.test)
                }else{
                    // Nếu k phải array
                    // Logic: k phải array => gán cho nó thành array
                    selectorRules[rule.selector] = [rule.test];
                    // console.log(selectorRules[rule.selector]);   
                }
                // lấy ra thẻ input / đi từ 'formElement'
                var inputElements = formElement.querySelectorAll(rule.selector); //vì radio có nhiều pt trùng 'name' nên phải dùng 'querySelectorAll'
                    Array.from(inputElements).forEach((inputElement) => {
                    
                    if(inputElement){
                        // Event on blur
                        // Xử lý trường hợp blur khỏi 'input'
                        inputElement.onblur = () => {
                            validate(inputElement, rule);
                        }


                        // Xử lý trường hợp mỗi khi người dùng nhập vào 'input'
                        inputElement.oninput = () => {
                            var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
                            var parentOfInput = inputElement.parentElement;
                            // remove error
                            errorElement.innerText = '';
                            // remove class 
                            parentOfInput.classList.remove('invalid');
                        }
                    }
                    });
            });
        }
    }


    // isRequired
    Validator.isRequired = function(selector, message){ //nhận vào selector
        // return selector; //(2) ['#fullname', '#email']  

        return {
            selector: selector,
            test: function(value){
                // Kiểm tra xem users đã nhập hay chưa?
                // Logic: Nếu users có nhập 'value' (value = true) => return undefined / k có value => return 'Vui lòng nhập trường này'
                return value ? undefined : message || 'Vui lòng nhập trường này'; 
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
                // Link: https://www.w3resource.com/javascript/form/email-validation.php
                
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