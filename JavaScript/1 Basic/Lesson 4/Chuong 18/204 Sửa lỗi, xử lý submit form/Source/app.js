/*
  //> 204. Sửa lỗi, xử lý submit form  
    * Fix bugs:
    * - find method
    * - onSubmit method
*/


// ==========================> My Library 2 <========================== //

// * Fix 2: onSubmit: bỏ đi 'options', lưu biến this => _this / _this = Validator()
// nhận vào 'name-form' => 'formSelector'
function Validator(formSelector){
    // khai báo 1 obj formRules rỗng để chứa các attribute & value từ DOM
    const formRules = {}
    const _this = this; //save this
    
    function getParent(element, selector){
        // dùng 'while' để tìm thẻ cha
        // Logic: element có element cha => loops run
        while(element.parentElement){
            // Logic: Dùng matches() tìm xem có element cha nào trùng với selector hay k? nếu có return | k có gán element cha tiếp theo => lặp từ trong ra ngoài
            if(element.parentElement.matches(selector)){
                return element.parentElement;
            }

            // k có gán cho element cha tiếp
            element = element.parentElement;
        } 
    }


    // *Quy ước tạo rule:
    // - Nếu có lỗi thì return `error message`
    // - Nếu k có lỗi thì return `undefined`

    // tạo ra obj để lưu rules (key trùng tên với value trong DOM)
    const validatorRules = {
        required: function(value){
            // Dùng toán tử 3 ngôi
            // Logic: Có value return 'undefined' ngược lại return 'error message'
            return value ? undefined : 'Vui lòng nhập trường này';
        },
        email: function(value){
            // Dùng biểu thức chính quy
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Vui lòng nhập email';
        },
        min: function(min){
            // Dùng function lồng nhau
            // Logic 1: kết quả trả về của function 1 là function 2
            // Detail: nhận 'min' (min ở đây nhận vào là 6 => min = 6)

            return function(value){
                // kiểm tra
                // Logic: kt độ dài >= min (6)
                return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} ký tự`;
            }
        },
        max: function(max){
            return function(value){
                return value.length <= max ? undefined : `Vui lòng nhập tối đa ${max} ký tự`;
            }
        },
    };


    // Node: Lấy ra form element trong DOM theo `formElement`
    const formElement =  document.querySelector(formSelector);
    // console.log(formElement);

    // Node: Chỉ xử lý khi có element trong DOM 
    if(formElement){
        // lấy ra tất cả thẻ input có attribute 'name' & 'rules'
        const inputs = formElement.querySelectorAll('[name][rules]');

        // Lặp qua 'NodeList(3)'
        for (const input of inputs) {
            // Xử lý tách dấu '|' trong attribute
            // Sử dụng 'split()' cắt dấu '|'
            const rules = input.getAttribute('rules').split('|');
            let ruleInfo;

            // lặp qua để lấy giá trị khi đã cắt
            for (var rule of rules) {
                // Dùng 'includes()' kt có dấu ':' hay k?

                // tạo biến 'isRuleHasValue' để kt giá trị được hiểu là = true => có giá trị & ngược lại false = k có value
                let isRuleHasValue = rule.includes(':');

                if(isRuleHasValue){
                    // Nêu có => cắt :>
                    ruleInfo = rule.split(':');
                    // Nếu có dấu ':' => gán đè rule
                    // Logic: gán = pt 0 (chi tiết phần tử trong 'ruleInfo' => ruleInfo[0]= 'min', ruleInfo[1]= '6') //test gán = 6 // rule = ruleInfo[1]; 
                    rule = ruleInfo[0]; 
                }

                // tạo biến ruleFunc để gán giá trị = function
                let ruleFunc = validatorRules[rule];

                if(isRuleHasValue){
                    // Logic: gán lại 'function' = chính nó chạy + truyền vào min
                    ruleFunc = ruleFunc(ruleInfo[1]);
                }

                // Kiểm tra 
                if(Array.isArray(formRules[input.name])){
                    // Nếu là array => push thêm rule
                    // Lần chạy thứ 2 push()
                    formRules[input.name].push(ruleFunc);
                }else{
                    // Ban đầu sẽ chạy vào đây => k phải array vì ở trên khai báo là obj
                    // k phải array => gán thành array & đưa function rule vào trong array
                    // Lần chạy thứ 1 gán
                    formRules[input.name] = [ruleFunc];

                    
                }

            }

            // ==========================> Node: Lắng nghe sự kiện để validate (blur, change) <========================== //

            // console.log(input); //return element in DOM
            // Gán = function 'handleValidate'
            input.onblur = handleValidate;
            input.oninput = handleClearError;

        }

        // Xử lý event / Function
        // Node: Hàm thực hiện validate
        function handleValidate(e){
            // Tạo biến 'rules' lưu function rules khi được target
            let rules = formRules[e.target.name];

            // Logic: lặp qua rules để tìm xem có lỗi hay k
            // Idea: Có thể dùng find(), some(), for + break

            // * Fix 1: Bỏ find() thay = for of
            for (const rule of rules) {
                errorMessage = rule(e.target.value);
                if(errorMessage) break;
            }

            // * Quy Ước 2: Muốn dùng lib này phải có class 'form-group' & 'form-message'
            // Node: Nếu có lỗi thì hiển thị messagge lỗi ra UI
            if(errorMessage){
                // truyền vào 1 = element hiện tại, 2 = 'form cần tìm' => ở đây là '.form-group'
                let formGroup = getParent(e.target, '.form-group');

                if(formGroup){
                    let formMessage = formGroup.querySelector('.form-message');
                    if(formMessage){
                        // thêm class
                        formGroup.classList.add('invalid');
                        // hiện msg
                        formMessage.innerText = errorMessage;
                    }
                }
                

            }
            return !errorMessage;

        }

        // Node: Hàm clear message lỗi
        function handleClearError(e){
            // Sử dụng contains(): kt xem có class đó hay k?
            let formGroup = getParent(e.target, '.form-group');
            if(formGroup.classList.contains('invalid')){
                // xóa class
                formGroup.classList.remove('invalid');

                let formMessage = formGroup.querySelector('.form-message');
                if(formMessage){
                    // ẩn msg
                    formMessage.innerText = '';
                }
            }
        }


        // console.log(this); //return Validator {} / Validator()
        // Node: Xử lý hành vi submit form
        formElement.onsubmit = function(e){
            // bỏ submit mặc định
            e.preventDefault();

            // console.log(this); //return DOM / formElement 
            // console.log(_this); //return Validator {test: '123', onSubmit: ƒ} / Validator 

            // lấy ra input từ DOM
            const inputs = formElement.querySelectorAll('[name][rules]');
            // tạo biến check form hợp lệ
            var isValid = true;
            
            // duyệt qua tất cả inputs
            for (const input of inputs) {
                // gọi hàm 'handleValidate()' truyền vào obj / gán 'target' = 'input'
                // Logic: Nếu 'handleValidate({target: input});' return false => có lỗi => gán isValid = false
                if(!handleValidate({target: input})){
                    isValid = false;
                }

                
            }

            // Node: Khi không có lỗi thì submit form
            if(isValid){
                // * Fix 2: onSubmit: Sửa 'options' = '_this'
                if(typeof _this.onSubmit === 'function'){
                    var enableInput = formElement.querySelectorAll('[name]:not([disabled])');
                        // Reduce
                        // initialValue: đưa vào 1 obj rỗng / {}
                        var formValues = Array.from(enableInput).reduce((values, input) => {
                            // Logic: lấy 'name' đưa vào key -> vào obj rỗng / gán key = input.value / lấy dl của thẻ input 

                            // Step: 
                            // 1. gán 'input.value' cho obj 'values'
                            // 2. return ra values (obj) / values được gán = { }
                            // 3. => reduce trả về dl ở biến 'formValues'
                            
                            // // Khi có đầy đủ thông tin => gọi đến 'onSubmit' & trả về data / => lỗi khi có trường k cần nhập tt / k có isRequired / 
                            // return (values[input.name] = input.value) && values; 
                            switch(input.type){
                                case 'checkbox':
                                    if(!input.matches(':checked')){
                                        values[input.name] = ''; //fav-color: ""
                                        return values;
                                    } 
                                    // Logic: Nếu value của check box (values[input.name]) k phải là 1 array => gán thành 1 array 
                                    if(!Array.isArray(values[input.name])){
                                        // gán = array
                                        values[input.name] = [];
                                    }
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
                        }, {});
                   // Node: Gọi lại hàm 'onSubmit' và trả về kèm giá trị của form    
                   return _this.onSubmit(formValues); //dùng return thay cho 'else'
                }
                // formElement.submit();
                alert('Submited :>');
            }
        }
        console.log(formRules);
    }

}


// 204. Sửa lỗi, xử lý submit form
// Youtube: 14/09/2022 (Coding)
// https://youtu.be/nT2b94DuJwI