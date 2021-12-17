
class Chat {
    constructor() {
        let sendButton = document.getElementById('sendButton');
        sendButton.addEventListener('click', () => {
            this.sandMessage();
        });
    }


    
    sandMessage() {
        let text = this.getInputMessage();

        if(text){
            let params = {
                text: text,
                backgroundColor: 'red',
            };

            let messageBlock = this.createMessageBlock(params);
            this.addMessageToDialog(messageBlock);  
        }
    }

    addMessageToDialog(messageBlock) {
        let messageHistoryBlock = document.getElementById('messageHistory');
        messageHistoryBlock.appendChild(messageBlock);
    }

    getInputMessage() {
        let inputElement = document.getElementById('msg');
        let inputeValue = inputElement.value;
        inputElement.value = '';

        return inputeValue;
    }


    createMessageBlock(params) {
        let messageBlock = document.createElement('div');
        messageBlock.classList.add('message');

        let messageDateBlock = this.createMessageDateBlock();
        messageBlock.appendChild(messageDateBlock);

        let messageAvatarBlock = this.createMessageAvatarBlock();
        messageBlock.appendChild(messageAvatarBlock);

        let messageTextBlock = this.createMessageTextBlock(params.text);
        messageBlock.appendChild(messageTextBlock);


        return messageBlock;
    }


    createMessageDateBlock() {
        let messageDateBlock = document.createElement('span');
        messageDateBlock.classList.add('date');
        messageDateBlock.textContent = '13.04.89';


        return messageDateBlock;
    }


    createMessageAvatarBlock() {
        let messageAvatarBlock = document.createElement('div');
        messageAvatarBlock.classList.add('avatar');


        return messageAvatarBlock;

    }


    createMessageTextBlock(text) {
        let messageTextBlock = document.createElement('p');
        messageTextBlock.textContent = text;


        return messageTextBlock;

    }
}

class bot {
    constructor() {
        this.backgroundColor = 'red';
    }

    say (phrase) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(`${this.name}: ${phrase}`);
            }, 1000);
        });
    }
}


class KolobokBot extends bot {
    constructor() {
        super();
        this.name = 'kolobok';
    }
}


class GrandFaBot extends bot {
    constructor() {
        super();
        this.name = 'GrandFa';
        this.backgroundColor = 'green';
    }
}


class Story {
    constructor() {

    }

    startDialog(chat, bot1, bot2) {
        this.addBotDialogMessage(chat, bot1, 'privet').then(() => {
            return this.addBotDialogMessage(chat, bot2, 'hello');
        })
        .then(() => {
            return this.addBotDialogMessage(chat, bot1, 'Ny privet');
        });
    }


    addBotDialogMessage(chat, bot, messageText) {
        return bot.say(messageText).then((messageText) => {
            let messageBlock1 = chat.createMessageBlock({
                text: messageText,
                backgroundColor: bot.backgroundColor,
            });
    
            chat.addMessageToDialog(messageBlock1);
        });
    }
}


let story = new Story();

let chat = new Chat();


let kolobok = new KolobokBot();
let grandFa = new GrandFaBot();

story.startDialog(chat, kolobok, grandFa);


function dialog() {
    chat.createMessageBlock({
        text: kolobok.say(),
    });

    grandFa.say();
}

