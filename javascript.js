function story() {

    let kolobok = {
        name: 'kolobok',
        say: function(phrase) {
            console.log(phrase);
        }
    };

    let grandFa = {
        name: 'Ded',
        age: 32,
        say: function(phrase) {
            console.log(phrase);
        }
    };

    let grandMa = {
        name: 'babyshka',
        say: function(phrase) {
            console.log(phrase);
        }
    };

    let rabbit = {
        name: 'rabbit',
        say: function(phrase) {
            console.log(phrase);
        }
    };

    let wolf = {
        name: 'volk',
        say: function(phrase) {
            console.log(phrase);
        }
    };

    let fox = {
        name: 'lisa',
        say: function(phrase) {
            console.log(phrase);
        }
    };



    chapter1(kolobok, grandFa, grandMa);
    chapter2(kolobok, rabbit);
    chapter3(kolobok, wolf);
    chapter4(kolobok, fox);

    console.log('name' in kolobok, 'name' in grandFa, 'name' in grandMa, 'name' in rabbit, 'name' in wolf, 'name' in fox, 'age' in fox);
};


story();


function chapter1(kolobok, grandFa, grandMa) {
    kolobok.say('Privet');
    grandFa.say(`Privet ${kolobok.name}`);
    grandMa.say(`Privet ${kolobok.name}`);
    grandFa.say(`A ti kyda? ${kolobok.name}`);
    kolobok.say(`ja V les, ${grandFa.name}`);
    grandFa.say(`Zachem ? ${kolobok.name}`);
    kolobok.say(`Na ohoty, ${grandFa.name}`);
};


function chapter2(kolobok, rabbit) {
    rabbit.say(`${kolobok.name}, ${kolobok.name} ja tebia siem!`);
    kolobok.say(`ne nado ${rabbit.name} ja ot babushki yshel ja ot dedushki yshel i ot tebja yjdu`);
};


function chapter3(kolobok, wolf) {
    wolf.say(`${kolobok.name}, ${kolobok.name} ja tebia siem!`);
    kolobok.say(`ne nado ${wolf.name} ja ot babushki yshel ja ot dedushki yshel ja ot zaica yshel i ot tebja yjdu`);
};


function chapter4(kolobok, fox) {
    fox.say(`${kolobok.name}, ${kolobok.name} ja tebia siem!`);
    kolobok.say(`ne nado ${fox.name} ja ot babushki yshel ja ot dedushki yshel ja ot zaica yshel ja ot volka yshel i ot tebja yjdu`);
    fox.say(`da ? a nu posmotri kto tam za spinoj y tebia ${kolobok.name}`);
    kolobok.say('aaa noga(((');
};