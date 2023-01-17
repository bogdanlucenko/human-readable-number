module.exports = function toReadable (number) {
        let x = number;
        let y = '';
        let r = {
          0: 'zero',
          1: 'one',
          2: 'two',
          3: 'three',
          4: 'four',
          5: 'five',
          6: 'six',
          7: 'seven',
          8: 'eight',
          9: 'nine',
          10: 'ten',
          11: 'eleven',
          12: 'twelve',
          13: 'thirteen',
          14: 'fourteen',
          15: 'fifteen',
          16: 'sixteen',
          17: 'seventeen',
          18: 'eighteen',
          19: 'nineteen',
          20: 'twenty',
          30: 'thirty',
          40: 'forty',
          50: 'fifty',
          60: 'sixty',
          70: 'seventy',
          80: 'eighty',
          90: 'ninety',
        };
      
        if (x >= 0 && x < 20) {
          y = r[x];
        } else if (x === 20 || x === 30 || x === 40 || x === 50 || x === 60 || x === 70 || x === 80 || x === 90) {
          y = r[x];
        } else if (x > 20 && x < 30) {
          y = r[20] + ' ' + r[x - 20];
        } else if (x >= 30 && x < 40) {
          y = r[30] + ' ' + r[x - 30];
        } else if (x >= 40 && x < 50) {
          y = r[40] + ' ' + r[x - 40];
        } else if (x >= 50 && x < 60) {
          y = r[50] + ' ' + r[x - 50];
        } else if (x >= 60 && x < 70) {
          y = r[60] + ' ' + r[x - 60];
        } else if (x >= 70 && x < 80) {
          y = r[70] + ' ' + r[x - 70];
        } else if (x >= 80 && x < 90) {
          y = r[80] + ' ' + r[x - 80];
        } else if (x >= 90 && x < 100) {
          y = r[90] + ' ' + r[x - 90];
        } else if (x === 100 || x === 200 || x === 300 || x === 400 || x === 500 || x === 600 || x === 700 || x === 800 || x === 900) {
          y = r[x / 100] + ' hundred';
        } else if (x > 100 && x <= 120) {
          y = r[x / x] + ' hundred ' + r[x - 100];
        } else if (x > 120 && x < 200) {
          y = r[x / x] + ' hundred ' + r[((Math.floor((x - 100) / 10)) * 10)] + ' ' + r[(x) - ((Math.floor(x / 10)) * 10)].replace(/zero/g, '');
        } else if (x > 200 && x <= 220) {
          y = r[x / x + 1] + ' hundred ' + r[x - 200];
       } else if (x > 220 && x < 300) {
          y = r[x / x + 1] + ' hundred ' + r[((Math.floor((x - 200) / 10)) * 10)] + ' ' + r[(x) - ((Math.floor(x / 10)) * 10)].replace(/zero/g, '');
       } else if (x > 300 && x <= 320) {
          y = r[x / x + 2] + ' hundred ' + r[x - 300];
       } else if (x > 320 && x < 400) {
          y = r[x / x + 2] + ' hundred ' + r[((Math.floor((x - 300) / 10)) * 10)] + ' ' + r[(x) - ((Math.floor(x / 10)) * 10)].replace(/zero/g, '');
       } else if (x > 400 && x <= 420) {
          y = r[x / x + 3] + ' hundred ' + r[x - 400];
       } else if (x > 420 && x < 500) {
          y = r[x / x + 3] + ' hundred ' + r[((Math.floor((x - 400) / 10)) * 10)] + ' ' + r[(x) - ((Math.floor(x / 10)) * 10)].replace(/zero/g, '');
       } else if (x > 500 && x <= 520) {
          y = r[x / x + 4] + ' hundred ' + r[x - 500];
       } else if (x > 520 && x < 600) {
          y = r[x / x + 4] + ' hundred ' + r[((Math.floor((x - 500) / 10)) * 10)] + ' ' + r[(x) - ((Math.floor(x / 10)) * 10)].replace(/zero/g, '');
       } else if (x > 600 && x <= 620) {
          y = r[x / x + 5] + ' hundred ' + r[x - 600];
       } else if (x > 620 && x < 700) {
          y = r[x / x + 5] + ' hundred ' + r[((Math.floor((x - 600) / 10)) * 10)] + ' ' + r[(x) - ((Math.floor(x / 10)) * 10)].replace(/zero/g, '');
       } else if (x > 700 && x <= 720) {
          y = r[x / x + 6] + ' hundred ' + r[x - 700];
       } else if (x > 720 && x < 800) {
          y = r[x / x + 6] + ' hundred ' + r[((Math.floor((x - 700) / 10)) * 10)] + ' ' + r[(x) - ((Math.floor(x / 10)) * 10)].replace(/zero/g, '');
       } else if (x > 800 && x <= 820) {
          y = r[x / x + 7] + ' hundred ' + r[x - 800];
       } else if (x > 820 && x < 900) {
          y = r[x / x + 7] + ' hundred ' + r[((Math.floor((x - 800) / 10)) * 10)] + ' ' + r[(x) - ((Math.floor(x / 10)) * 10)].replace(/zero/g, '');
       } else if (x > 900 && x <= 920) {
          y = r[x / x + 8] + ' hundred ' + r[x - 900];
       } else if (x > 920 && x < 1000) {
          y = r[x / x + 8] + ' hundred ' + r[((Math.floor((x - 900) / 10)) * 10)] + ' ' + r[(x) - ((Math.floor(x / 10)) * 10)].replace(/zero/g, '');
       } else if (x === 1000) {
          y = r[1] + ' thousand'
       }
      
        return y.trim();
      }
