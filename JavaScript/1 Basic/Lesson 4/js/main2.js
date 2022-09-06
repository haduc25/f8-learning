/** Chuong 17. Form validation I
    198. Xử lý báo lỗi cơ bản


    
*/
 
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

                // Ex: từ trong ra 
                // src: div.form-group>div1>div2>div3
                // với vòng lặp trên sẽ lặp ra div3 => div2 => div1 => div.form-group / đến đây vòng lặp dừng

                element = element.parentElement;

            }
        }

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
            // var errorElement = inputElement.parentElement.querySelector(options.errorSelector); // gây ra lỗi nếu có nhiều thẻ cha của 'inputElement'
            // Thay thế để fix lỗi nhiều thẻ cha của 'inputElement'
            // var errorElement = getParent(inputElement, 'form-group');
            var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
            // var parentOfInput = inputElement.parentElement; /// Thay thế để fix lỗi nhiều thẻ cha của 'inputElement'
            var parentOfInput = getParent(inputElement, options.formGroupSelector);


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
                // Để check radio btn & checkbox => thêm switch case
                // inputElement.type: lấy ra type của tehr input, vd: text, password, radio...
                // console.log(inputElement.type); //return 

                switch(inputElement.type){
                    case 'checkbox':
                    case 'radio':
                        // console.log(rule.selector); //return input[name="gender"]

                        errorMessage = rules[i](
                            // Mong muốn: lấy ra những radio được checked
                            // rule.selector: là css selector truyền vào / input[name="gender"]
                            // Logic: nối chuỗi 'rule.selector' + chuỗi ':checked' => input[name="gender"]:checked
                            formElement.querySelector(rule.selector + ':checked') //tìm radio được checked
                        );
                        break;
                    default:
                        errorMessage = rules[i](inputElement.value);
                }




                // rule[i] tương tự như rule / ở trên 'rules[i](inputElement.value)' / rules[i](inputElement.value): rule thứ i (rules[i]) nhận vào là function nên có thể truyền trực tiếp value
                // vì là hàm => có thể truyền value 
                // gán 'errorMessage'

                // check rules
                // console.log(rules[0]); //
                // console.log(typeof rules[0]); //function

                // errorMessage = rules[i](inputElement.value); //đã giải thích ở trên // đã thêm vào switch case

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
            // console.log(formElement);

            // lắng nghe sự kiện submit
            // Khi submit form
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
                    // console.log(isValid);

                    // Nếu 'isValid' = false / k có lỗi / ngược lại 'isValid' = true => có lỗi 
                    // vì 'errorMessage' == true => thêm class & 'errorMessage' == false => xóa class
                    if(isValid){
                        // khi value return ra là lỗi => gán 'isFormValid' = false => thể hiện việc có lỗi xảy ra
                        // gán 'isFormValid' = false
                        isFormValid = false;
                    }
                });

                if(isFormValid){
                    // true => k co loi
                    // console.log('Không có lỗi');


                    if(typeof options.onSubmit === 'function'){
                        // Trường hợp submit với javascript
                            
                        // Lấy ra tất cả thẻ 'input' ở trạng thái 'enable' trong form này
                        // Logic: lấy ra tất cả thẻ có 'name' ([name]), và k có attribute disabled(not([disabled])) 
                        var enableInput = formElement.querySelectorAll('[name]:not([disabled])');

                        // // có thể lấy mỗi 'name' / nhưng trong thực tế cần not disabled
                        // var enableInput = formElement.querySelectorAll('[name]'); //ex - lay moi name
                        //console.log(enableInput); //NodeList(4) [input#fullname.form-control, input#email.form-control, input#password.form-control, input#password_confirmation.form-control]

                        // Vì NodeList k có các hàm 'reduce, map...' => Convert
                        // Convert: NodeList -> Array
                        // Array.from() convert qua array
                        // su dung reduce lấy dl qua 1 mảng mới


                        // Array.prototype.reduce()
                        // The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, 
                        // passing in the return value from the calculation on the preceding element. 
                        // The final result of running the reducer across all elements of the array is a single value.

                        // The first time that the callback is run there is no "return value of the previous calculation". 
                        // If supplied, an initial value may be used in its place. 
                        // Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element 
                        // (index 1 instead of index 0).
                        
                        // Reduce
                        // initialValue: đưa vào 1 obj rỗng / {}
                        var formValues = Array.from(enableInput).reduce((values, input) => {
                            // console.log(value); //value của các element input
                            // console.log(input); //các element input
                            // console.log(input.name); //lấy ra value của thẻ input / return fullname, email, password, password_confirmation
                            // console.log(input.value); //lấy ra value của thẻ input /return MizGDuc, haducvcvb@gmail.com, (x2) abcd1234
                            
                            // Logic: lấy 'name' đưa vào key -> vào obj rỗng / gán key = input.value / lấy dl của thẻ input 
                            // dùng toán tử '&&' thì sẽ return biến cuối cùng (trong ex này là 'value')

                            // Step: 
                            // 1. gán 'input.value' cho obj 'values'
                            // 2. return ra values (obj) / values được gán = { }
                            // 3. => reduce trả về dl ở biến 'formValues'
                            
                            // // Khi có đầy đủ thông tin => gọi đến 'onSubmit' & trả về data / => lỗi khi có trường k cần nhập tt / k có isRequired / 
                            // return (values[input.name] = input.value) && values; 

                            // // Fix 
                            // // đk gán => luôn đc gán
                            // values[input.name] = input.value;
                            // return values; //{fullname: '', email: 'haducvcvb@gmail.com', password: 'abcd1234', password_confirmation: 'abcd1234'}

                            // Vì 'radio button' có 'name' trùng nhau => cần sửa lại đoạn này
                            // console.log(input.type); //return: text, password, radio

                            switch(input.type){
                                case 'checkbox':

                                    // Nếu checkbox => k được check => return value 
                                    //if(!input.matches(':checked')) return values; //khi return thì đoạn code sau k còn chạy | nếu được checked => push value vao array values
                                    
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

                                    //đến đây => luôn luôn là 1 array
                                    // push value vào trong array
                                    values[input.name].push(input.value);

                                    break;

                                case 'radio':
                                    // console.log(input.name); //return gender
                                    const valueOfRadioButton = 'input[name = "' + input.name + '"]:checked';
                                    // console.log('value is: ' + valueOfRadioButton);
                                    // console.log(formElement); //form-1

                                    // gán giá trị vào obj
                                    values[input.name] = formElement.querySelector('input[name = "' + input.name + '"]:checked').value;    
                                    // values[input.name] = formElement.querySelector(valueOfRadioButton).value;   
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

                    
                        //// check value cua tat ca the input
                        //console.log(formValues); //{fullname: 'MizGDuc', email: 'haducvcvb@gmail.com', password: 'abcd1234', password_confirmation: 'abcd1234'}


                        // truyền vào data / test
                        // options.onSubmit({
                        //     name: 'Ha Duc',
                        //     age: 22
                        // });

                        // trả ra value

                        options.onSubmit(formValues);
                    }
                    else{
                        // Trường hợp k có onSubmit / hàm k tồn tại... k là hàm
                        // Trường hợp submit với hanhf vi mặc định

                        // dùng formElement
                        // submit(): submit với hành vi mặc định của trình duyệt
                        formElement.submit();
                    }

                }
                // else{
                //     console.log('có lỗi');
                // }

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
                var inputElements = formElement.querySelectorAll(rule.selector); //vì radio có nhiều pt trùng 'name' nên phải dùng 'querySelectorAll'
                    // querySelectorAll trả về NodeList => phải lặp để lấy pt trong Node List 
                    // Step
                    // 1. Covert NodeList to Array
                    // 2. Use ForEach lặp lấy các pt trong NodeList

                    Array.from(inputElements).forEach((inputElement) => {
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
                            //var errorElement = inputElement.parentElement.querySelector(options.errorSelector); // Thay thế để fix lỗi nhiều thẻ cha của 'inputElement'
                            var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);

                            var parentOfInput = inputElement.parentElement;


                            // khi người dùng nhập dl => remove error & class
                            // remove error
                            errorElement.innerText = '';
                            // remove class 
                            parentOfInput.classList.remove('invalid');

                        }

                    }
                    });
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
                // return value.trim() ? undefined : message || 'Vui lòng nhập trường này';  //trim() gây ra lỗi vs radio => tạm thời bỏ;
                // new / khi bỏ trim() 
                // console.log(typeof value, value);
                return value ? undefined : message || 'Vui lòng nhập trường này'; 

                // // remake - my idea
                // if(typeof value === 'object'){
                //     return value ? undefined : message || 'Vui lòng nhập trường này';
                // }
                // return value.trim() ? undefined : message || 'Vui lòng nhập trường này'; 
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
        formGroupSelector: '.form-group',
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
            
            // kt radio button / gender
            Validator.isRequired('input[name="gender"]', 'Vui lòng chọn giới tính của bạn'), //Truyền vào css selector nếu k có id
            
            //// kt checkbox / color
            // Validator.isRequired('input[name="fav-color"]', 'Vui lòng chọn màu sắc yêu thích'), //Truyền vào css selector nếu k có id

            //kt selector province
            Validator.isRequired('#province', 'Vui lòng chọn Tỉnh/TP của bạn'),

            //kt file / avatar
            Validator.isRequired('#avatar', 'Vui lòng chọn một bức ảnh của bạn'),


            // List need code
            // Xong phan add nhieu rules cho 1 input => isDone
            // Bấm vào 'submit' => valid hết tất cả các trường
        ],
        //onSubmit sẽ được gọi khi form 'submit'
        onSubmit: function(data){
            // Logic: khi ấn vào submit => output: xuất ra dl từ form qua biến 'data'
            // console.log(data);  //return {name: 'Ha Duc', age: 22}

            // Tương lai
            // Call API
            console.log(data);


        }
        
    });









    // Youtube: 24/07/2022
    // https://youtu.be/O2PpHVKGsIg
    // https://youtu.be/Zu3XREOy6_M

    // Youtube: 25/07/2022
    // https://youtu.be/sYtC6kzzHBE
    // https://youtu.be/oWGYoj5rUa4



    // 200. Review, sửa một số lỗi
    // Youtube: 29/07/2022
    // https://youtu.be/Y0Cn4L5V_Qo
    // https://youtu.be/knLOUpw2iyQ


    // 200, 201. Xử lý lấy dữ liệu radio, checkbox
    // Youtube: 30/07/2022
    // https://youtu.be/E-PBA76DJUw


    // 1. Nếu có trường k cần nhập / k có isRequired => lỗi / Fixed
    // 2. Sửa lại cơ chế hiển thị message lỗi / 
    // Ex 
    //     <div class="form-group">
    //     <label for="fullname" class="form-label">Tên đầy đủ</label>
    //     <div>
    //     <div>
    //         <div>
    //         <input id="fullname" name="fullname" type="text" placeholder="VD: Sơn Đặng" class="form-control" value="MizGDuc">
    //         </div>
    //     </div>
    //     </div>
    //     <span class="form-message"></span>
    // </div>
    // 3. 
    // 4. 

