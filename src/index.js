const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    a = expr.match(/.{1,2}/g)

    for (let i = 0; i < a.length; i++){
        if (a[i] == 10){
            a[i] = '.';
        } else if (a[i]==11){
            a[i] = '-';
        }
    }

    let b = '';
    let c = 0;
    let d = [];

    console.log(a);

    for (let i = 0; i < a.length; i++){

        if (a[i] != "00"){
            b= b+ a[i];
        }

        c+=1;

        if (c % 5==0 ){
            d.push(b);
            b='';
        }
    }

    b = '';

    console.log(d);

    for (let i = 0; i < d.length; i++){
        if (d[i] != '**********'){
        d[i] = MORSE_TABLE[d[i]]} else{
            d[i] = ' ';
        }
    }

    console.log(d);


    for (let i = 0; i < d.length; i++){
        b = b+ d[i];
    }

    return b;
    // write your solution here
}

module.exports = {
    decode
}