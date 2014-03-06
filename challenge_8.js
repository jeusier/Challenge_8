// do work here

exports.LargestProduct = LargestProduct;

function LargestProduct(n) {
    this.n = n.split('');
    this.largest = 0;
    console.log(this.n[364] * this.n[365] * this.n[366] * this.n[367] * this.n[368]);
    this.getLargestProduct = function() {
        var largest = 0;
        var position = 0;
        var product = 0;

        for (var i = 0; i < 1000; i++) {
            product = this.n[i] * this.n[i+1] * this.n[i+2] * this.n[i+3] * this.n[i+4];
            if (product > largest) {
                largest = product;
                //console.log("largest: "+largest);
            }
        }
        return largest;
    }

    this.getLargestProductPosition = function() {
        var largest = 0;
        var position = 0;
        var product = 0;

        for (var i = 0; i < 1000; i++) {
            product = this.n[i] * this.n[i+1] * this.n[i+2] * this.n[i+3] * this.n[i+4];
            if (product > largest) {
                largest = product;
                position = i;
                //console.log("position: "+position);
            }
        }
        return position;
    }
}



// comment your code