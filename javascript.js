window.onload = function() {
    document.getElementById ("butt_click").onclick = send;
};

function counter1() {
    let message_counter = 0;

    return message_counter;
};

function send() {
    let text_mess = document.getElementById ("inp_mess").value;

    console.log(text_mess);
    let div_element = create_buttons();
 
    div_element.text_content = text_mess;
    console.log(div_element);
    return text_mess;
    

};

function create_buttons() {
    let body = document.body;
    let div_element = document.createElement('div');
    div_element.classList.add('back_ground');
    body.appendChild(div_element);

    return div_element;
};