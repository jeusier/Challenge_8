// do work here

exports.LargestProduct = LargestProduct;

function LargestProduct(n, d) {
    //put number into an array
    this.n = n.split('');
    this.d = d;
    
    //returns the largest product of 5 consecutive digits
    this.getLargestProduct = function() {
        //initialize storage variables
        var largest = 0;
        var position = 0;
        var product = 1;
        var temp = 1;


        //loops through all digits to multiply 5 consecutive digits
        for (var i = 0; i < 1000; i++) {

            //finds product of consecutive d digits
            for (var j = 0; j < this.d; j++) {
                temp *= this.n[i+j];
            }

            //stores product and resets temp variable
            product = temp;
            temp = 1;
            
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
        var temp = 1;

        //loops through all digits to multiply 5 consecutive digits
        for (var i = 0; i < 1000; i++) {

            //finds product of consecutive d digits
            for (var j = 0; j < this.d; j++) {
                temp *= this.n[i+j];
            }

            //stores product and resets temp variable
            product = temp;
            temp = 1;
            
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