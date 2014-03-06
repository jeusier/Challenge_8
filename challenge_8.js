// do work here

exports.LargestProduct = LargestProduct;

function LargestProduct(n) {
    //put number into an array
    this.n = n.split('');
    
    //returns the largest product of 5 consecutive digits
    this.getLargestProduct = function() {
        //initialize storage variables
        var largest = 0;
        var position = 0;
        var product = 0;

        //loops through all digits to multiply 5 consecutive digits
        for (var i = 0; i < 1000; i++) {
            product = this.n[i] * this.n[i+1] * this.n[i+2] * this.n[i+3] * this.n[i+4];
            
            //if product greater than largest value, store product
            if (product > largest) {
                largest = product;
                console.log("largest: "+largest);
            }
        }
        return largest;
    }

    //returns the position of the first consecutive digit of the greatest product
    this.getLargestProductPosition = function() {
        //initialize storage variables
        var largest = 0;
        var position = 0;
        var product = 0;

        //loops through all digits to multiply 5 consecutive digits
        for (var i = 0; i < 1000; i++) {
            product = this.n[i] * this.n[i+1] * this.n[i+2] * this.n[i+3] * this.n[i+4];
            
            //if product greater than largest value, store product and store current index
            if (product > largest) {
                largest = product;
                position = i;
                console.log("position: "+position);
            }
        }
        return position;
    }
}



// comment your code