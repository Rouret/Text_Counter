class Counter {
    data;
    text;
    max;
    only_letter;
    constructor(text, only_letter = false) {
        //PARAM
        this.only_letter = only_letter;

        this.text = text; //Text 
        this.max = this.text.length; //length
        this.data = {}; //result

        //START
        if (this.only_letter) {
            this.startLetter();
        } else {
            this.start(); //Start
        }

        this.calcFreq(); //freq
    }
    sorting() {

    }
    start() {
        for (let i = 0; i < this.max; i++) {
            if (this.text[i] in this.data) {
                this.data[this.text[i]].count += 1;
            } else {
                this.data[this.text[i]] = {};
                this.data[this.text[i]].count = 1;
            }

        }
    }
    startLetter() {
        for (let i = 0; i < this.max; i++) {
            if (this.text[i].match(/^[A-Za-z]+$/)) {
                if (this.text[i] in this.data) {
                    this.data[this.text[i]].count += 1;
                } else {
                    this.data[this.text[i]] = {};
                    this.data[this.text[i]].count = 1;
                }
            }
        }
    }
    calcFreq() {
        for (const [key, value] of Object.entries(this.data)) {
            this.data[key].freq = parseFloat((((value.count) / this.max) * 100).toFixed(1));
        }
    }
    getData() {
        return this.data
    }
    toString() {
        return this.getData();
    }
}

module.exports = Counter;