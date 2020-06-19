const data=require('data.js');
class Counter {

    constructor(text, only_letter = false) {
        //PARAM
        this.only_letter = only_letter;

        this.text = text; //Text 
        this.length_text = this.text.length; //length
        this.data = {}; //result

        this.min=1;
        this.max=0;

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
        for (let i = 0; i < this.length_text; i++) {
            if (this.text[i] in this.data) {
                this.data[this.text[i]].count += 1;
                if(this.data[this.text[i]].count > this.max){
                    this.max=this.data[this.text[i]].count;
                }else if(this.data[this.text[i]].count<this.min){
                    this.min=this.data[this.text[i]].count;
                }

            } else {
                this.data[this.text[i]] = {};
                this.data[this.text[i]].count = 1;
            }

        }
    }
    startLetter() {
        for (let i = 0; i < this.length_text; i++) {
            if (this.text[i].match(/^[A-Za-z]+$/)) {
                if (this.text[i] in this.data) {
                    this.data[this.text[i]].count += 1;
                    if(this.data[this.text[i]].count > this.max){
                        this.max=this.data[this.text[i]].count;
                    }else if(this.data[this.text[i]].count<this.min){
                        this.min=this.data[this.text[i]].count;
                    }
                } else {
                    this.data[this.text[i]] = {};
                    this.data[this.text[i]].count = 1;
                }
            }
        }
    }
    calcFreq() {
        for (const [key, value] of Object.entries(this.data)) {
            this.data[key].freq = parseFloat((((value.count) / this.length_text) * 100).toFixed(1));
        }
    }
    detectL(){
        
    }
    getData() {
        return this.data
    }
    getDetail(){
        return {
            "min":this.min,
            "max":this.max
        };
    }
    toString() {
        //Tostring must be a string i know ;D
        return this.getData();
    }
}

module.exports = Counter;