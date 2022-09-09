/** Chuong 18. Form validation II
    203. Phân tích cách triển khai logic


    
*/

// ==========================> My Library 2 <========================== //

// nhận vào 'name-form' => 'formSelector'
function Validator(formSelector){
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


    // khai báo 1 obj formRules rỗng để chứa các attribute & value từ DOM
    const formRules = {
        // // *Mong muốn
        // fullname: 'required',
        // email: 'required|email',
        // password: 'required|min:6'
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


    ////// Test obj rules
    // var ruleName = 'required';
    // console.log(validatorRules[ruleName]); //return function 'required'



    // Node: Lấy ra form element trong DOM theo `formElement`
    const formElement =  document.querySelector(formSelector);
    // console.log(formElement);

    // Node: Chỉ xử lý khi có element trong DOM 
    if(formElement){
        // lấy ra tất cả thẻ input có attribute 'name' & 'rules'
        const inputs = formElement.querySelectorAll('[name][rules]');

        // console.log(inputs); //return NodeList(3) [input#fullname.form-control, input#email.form-control, input#password.form-control]

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

                    // console.log(ruleInfo); //return (2) ['min', '6']

                    // Nếu có dấu ':' => gán đè rule
                    // Logic: gán = pt 0 (chi tiết phần tử trong 'ruleInfo' => ruleInfo[0]= 'min', ruleInfo[1]= '6') //test gán = 6 // rule = ruleInfo[1]; 
                    rule = ruleInfo[0]; 
                   
                    // console.log(rule); //return min | => hiểu là truyền vào 2 đối số 1 = min, 2 = 6
                    // console.log(validatorRules[rule]); //return function min | ƒ (min)
                    // console.log(validatorRules[rule](ruleInfo[1])); //return function min | ƒ (value) (bên trong function min) | ruleInfo[1] = 6
                }


                // console.log(rule); //return required, email, required, min:6
                //return của 'rule' sau khi gán = 'ruleInfo[0]' required, email, required, min

                
                // tạo biến ruleFunc để gán giá trị = function
                let ruleFunc = validatorRules[rule];

                if(isRuleHasValue){
                    // console.log(typeof ruleFunc); //return function 
                    // console.log(ruleInfo[1]); //return 6
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
                    // console.log(rule); //return (3)required | (rule)
                    // console.log(validatorRules[rule]); //return function required | (function rule)
                    // k phải array => gán thành array & đưa function rule vào trong array
                    // Lần chạy thứ 1 gán
                    formRules[input.name] = [ruleFunc];

                    
                }

            }

            


            //console.log(input); //return input#fullname.form-control, input#email.form-control, input#password.form-control
            //// lấy ra attribute 'name' 
            // console.log(input.name); //return fullname, email, password
            //// lấy ra attribute 'rules'
            // console.log(input.getAttribute('rules')); //return required, required|email, required|min:6
            
            // // Sét key & value cho obj 'formRules' (bỏ việc gán string)
            // formRules[input.name] = input.getAttribute('rules');







            // ==========================> Node: Lắng nghe sự kiện để validate (blur, change) <========================== //

            // console.log(input); //return element in DOM
            // Gán = function 'handleValidate'
            input.onblur = handleValidate;
            input.oninput = handleClearError;

        }

        // Xử lý event / Function
        // Node: Hàm thực hiện validate
        function handleValidate(e){
            // console.log(e); //return FocusEvent {isTrusted: true, relatedTarget: null, view: Window, detail: 0, sourceCapabilities: InputDeviceCapabilities, …}
            // console.log(e.target); //return element
            // console.log(e.target.value); //return value
            // console.log(e.target.name); //return name of attribute

            // Test: lấy ra rule của element
            // console.log(formRules[e.target.name]); //return function / rules


            // Tạo biến 'rules' lưu function rules khi được target
            let rules = formRules[e.target.name];

            // Logic: lặp qua rules để tìm xem có lỗi hay k
            // Idea: Có thể dùng find(), some(), for + break

            //// Some()
            // let errorMessage = rules.some((rule) => {
            //     // rule hiện tại = function | (required, email, min, max...) => cần nhận vào value
            //     return rule(event.target.value);
            // });

            // console.log(errorMessage); //return true => no value | false => has value

            //// find()
            var errorMessage;
            rules.find((rule) => {
                errorMessage = rule(e.target.value);
                return errorMessage;
            });

            // console.log(errorMessage); //return => no value => Vui lòng nhập trường này | has value => undefined

            // * Quy Ước 2: Muốn dùng lib này phải có class 'form-group' & 'form-message'
            // Node: Nếu có lỗi thì hiển thị messagge lỗi ra UI
            if(errorMessage){
                // console.log(event.target); //return element

                // truyền vào 1 = element hiện tại, 2 = 'form cần tìm' => ở đây là '.form-group'
                let formGroup = getParent(e.target, '.form-group');

                // console.log(formGroup);

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

            // convert qua boolean & return => true: k co loi | false: co loi
            // console.log(!errorMessage + ' => '+ Math.random());
            // console.log(!errorMessage);
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



        // Node: Xử lý hành vi submit form
        formElement.onsubmit = function(e){
            // bỏ submit mặc định
            e.preventDefault();

            // lấy ra input từ DOM
            const inputs = formElement.querySelectorAll('[name][rules]');
            // tạo biến check form hợp lệ
            var isValid = true;
            
            // duyệt qua tất cả inputs
            for (const input of inputs) {
                // console.log(input); //return element
                // console.log(input.value); //return value in DOM
                // console.log(input.name); //return name in DOM


                // gọi hàm 'handleValidate()' truyền vào obj / gán 'target' = 'input'
                // handleValidate({target: input}); 

                // Logic: Nếu 'handleValidate({target: input});' return false => có lỗi => gán isValid = false
                if(!handleValidate({target: input})){
                    isValid = false;
                }

                
            }
            // console.log(isValid);

            // Node: Khi không có lỗi thì submit form
            if(isValid){
                // formElement.submit();
                alert('Submited :>');
            }
        }







        console.log(formRules);
        // return từ 'formRules' (Khi còn gán string)
        // {fullname: 'required', email: 'required|email', password: 'required|min:6'}
        // email: "required|email"
        // fullname: "required"
        // password: "required|min:6"

        // return từ 'formRules' (Khi đưa function rule vào trong array | lần chạy thứ 1 => gán)
        // {fullname: Array(1), email: Array(1), password: Array(1)}
        // email: [ƒ]
        // fullname: [ƒ]
        // password: [ƒ]

        // return từ 'formRules' (Khi đưa function rule vào trong array | lần chạy thứ 2 => push())
        // {fullname: Array(1), email: Array(2), password: Array(2)}
        // email: (2) [ƒ, Array(1)]
        // fullname: [ƒ]
        // password: (2) [ƒ, Array(1)]
    }

}











// ==========================> Mong muốn / Kỳ vọng / Thành quả đạt được ==> Output là gì? <========================== //

// Chuẩn bị trong form
// cần thêm 'rules' vào các trường 'input' cần 'validate' (tạo ra trường tự quy ước)

// * Quy Ước: 
// + Muốn dùng lib này phải có class 'form-group' & 'form-message' / để hiện / ẩn message 

// KQ khi validater
// Validator('name-form')
Validator('#register-form');


















// 203. Phân tích cách triển khai logic
// Youtube: 06/09/2022
// https://youtu.be/hthBLeiLogo

// Youtube: 07/09/2022 (Watched Videos)
// https://youtu.be/iPWKkOmcatM

// Youtube: 09/09/2022 (Coding)
// https://youtu.be/LBVzmoFj46o
// https://youtu.be/sMBBDzp78WA
