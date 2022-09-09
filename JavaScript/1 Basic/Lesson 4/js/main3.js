/** Chuong 18. Form validation II
    203. Phân tích cách triển khai logic


    
*/

// ==========================> My Library 2 <========================== //

// nhận vào 'name-form' => 'formSelector'
function Validator(formSelector){

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

            // lặp qua để lấy giá trị khi đã cắt
            for (let rule of rules) {
                // Dùng 'includes()' kt có dấu ':' hay k?
                if(rule.includes(':')){
                    // Nêu có => cắt :>
                    const ruleInfo = rule.split(':');

                    // console.log(ruleInfo); //return (2) ['min', '6']

                    // Nếu có dấu ':' => gán đè rule
                    // Logic: gán = pt 0 (chi tiết phần tử trong 'ruleInfo' => ruleInfo[0]= 'min', ruleInfo[1]= '6') //test gán = 6 // rule = ruleInfo[1]; 
                    rule = ruleInfo[0]; 
                   
                }


                console.log(rule); //return required, email, required, min:6
                //return của 'rule' sau khi gán = 'ruleInfo[0]' required, email, required, min

            }

            


            //console.log(input); //return input#fullname.form-control, input#email.form-control, input#password.form-control
            //// lấy ra attribute 'name' 
            // console.log(input.name); //return fullname, email, password
            //// lấy ra attribute 'rules'
            // console.log(input.getAttribute('rules')); //return required, required|email, required|min:6
            
            // Sét key & value cho obj 'formRules'
            formRules[input.name] = input.getAttribute('rules');


            
        }

        console.log(formRules);
        // return từ 'formRules'
        // {fullname: 'required', email: 'required|email', password: 'required|min:6'}
        // email: "required|email"
        // fullname: "required"
        // password: "required|min:6"
    }

}











// ==========================> Mong muốn / Kỳ vọng / Thành quả đạt được ==> Output là gì? <========================== //

// Chuẩn bị trong form
// cần thêm 'rules' vào các trường 'input' cần 'validate' (tạo ra trường tự quy ước)

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
