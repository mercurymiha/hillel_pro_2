function result () {
 tempScale = 'C';
 temp = 0;
 tempcalc = 'C', 'F', 'K';
 F = 1;
 C = 1;
 K = 1;

if (temp === F) {
    F = temp;
    C = (F - 32) * 5 / 9;
    K = C + 273.15; {
       function calc_kelv(K, C) {
           return  K = C + 273.15;
       };
    };
} else if (temp === C) {
    C = temp;
    F = (C * 9 / 5) + 32;
    K = C + 273.15; {
        function calc_farin(F, C) {
            return  F = (C * 9 / 5) + 32;
        };
    };
} else {
    K = temp;
    C = K - 273.15;
    F = (C * 9 / 5) + 32; {
        function calc_cels(C, K) {
            return  C = K - 273.15;
        };
    };
};
};
result();

function calculate(temp, unit) {
    switch (unit) {
        case 'F':
            break;
        case 'C':
            break;
        case 'K':
            break;
    };
};

calculate(15, 'F');
alert();