window.onload = function() {
    document.getElementById ("butt_click").onclick = send;
};
function send() {
    let text_mess = document.getElementById ("inp_mess").value;
    let message_delete = document.getElementById ("check_delete");

    if (message_delete.checked) {
        console.log("checked");

        setTimeout(deleting_message, 5000);
    } else {
        console.log("unchecked");
    }

    console.log(text_mess);
    let div_element = create_buttons();
 
    div_element.text_content = text_mess;
    console.log(div_element);
    return text_mess;
    

};
function deleting_message () {
    alert('Удаление тест');
    let test = document.getElementsByClassName("back_ground");
    while ((elem = test[0])) { 
        elem.parentNode.removeChild(elem);
      }
};

function create_buttons() {
    let body = document.body;
    let div_element = document.createElement('div');
    div_element.classList.add('back_ground');
    body.appendChild(div_element);

    return div_element;
};