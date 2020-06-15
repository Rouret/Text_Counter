class Counter {
    data;
    text;
    max;
    constructor(text) {
        this.text = text;
        this.max = this.text.length;
        this.data = {};

        this.start();
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
        this.calcFreq();
    }
    calcFreq() {
        for (const [key, value] of Object.entries(this.data)) {
            this.data[key].freq = parseFloat((((value.count) / this.max) * 100).toFixed(1));
        }
    }
    getData() {
        return this.data
    }
}

module.exports = Counter;