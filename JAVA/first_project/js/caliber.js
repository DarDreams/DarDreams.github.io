var caliber = {
    replaceNumbers:function(numbers) {
    var res = ""; 
    var sNumb = {
            0: "{Chr(186)}",
            1: "{Chr(178)}",
            2: "{Chr(179)}",
            3: "{Chr(8307)}",
            4: "{Chr(8308)}",
            5: "{Chr(8309)}",
            6: "{Chr(8310)}",
            7: "{Chr(8311)}",
            8: "{Chr(8312)}",
            9: "{Chr(8313)}",
            colon: "˙",
            dot: "`",
            plus: "⁺",
            minus: "⁻"
        };
        
    for (var value in sNumb) {
        var n = 0;
        for (var key = 0; key < numbers.length; key++) {
            //console.log(`KEY = ${key} \nsNUMB.key = ${sNumb[key]}\nVALUE = ${value}\nNUMBER_LEN=${numbers.length}`);
            // return
            if (key == value) {
                if (n >= numbers.length) {break;}
                n++;
                numbers = numbers.replace(key,sNumb[key]);
                console.log(key,"  PIZDAAAAAAAAAAAAAAA   ", numbers);
                
                //console.log(numbers.replace(1,"{Chr(8304)}"));
                //console.log(res);
                //return res;
            } else {
               // console.log("NERAVNO");
                    
                
            }

        }
        // (key == "colon") ? numbers = numbers.replace(":","˙") : numbers = numbers.replace(key,sNumb[key]);
        // (key == "dot")   ? numbers = numbers.replace(".","`") : numbers = numbers.replace(key,sNumb[key]);
        // (key == "plus")  ? numbers = numbers.replace("+","⁺") : numbers = numbers.replace(key,sNumb[key]);
        // (key == "minus") ? numbers = numbers.replace("-","⁻") : numbers = numbers.replace(key,sNumb[key]);
    }
    //console.log(res);
    //return res;

},
convertNumbers: function(numbers) {
    // RoboTaskApp().AddUserVariable("NUMBERS","{NUMBERS}");
 //var numbers = numbers;
 //console.log(typeof(numbers));
 var res="";
 //var numbers = "1234567890-+";
     numbers = numbers.replace("0", '{Chr(186)}');
     //res = numbers.replace("0","⁰");//"{Chr(186)}");
     numbers = numbers.replace("1","{Chr(178)}");
    //  numbers = numbers.replace("1","{Chr(178)}");
    //  numbers = numbers.replace("2","{Chr(179)}");
    //  numbers = numbers.replace("3","³");//"{Chr(8307)}");
    //  numbers = numbers.replace("4","{Chr(8308)}");
    //  numbers = numbers.replace("5","{Chr(8309)}");
    //  numbers = numbers.replace("6","{Chr(8310)}");
    //  numbers = numbers.replace("7","{Chr(8311)}");
    //  numbers = numbers.replace("8","{Chr(8312)}");
    //  numbers = numbers.replace("9","{Chr(8313)}");
    //  numbers = numbers.replace(":","˙");
    //  numbers = numbers.replace(".","`");
    //  numbers = numbers.replace("+","⁺");
    //  numbers = numbers.replace("-","⁻");
     console.log(numbers.trim());
    return numbers;
    }
};
caliber.convertNumbers("01");

//replaceNumbers("123");