 
 var result = "{NUMBERS}";
 var result = "11";
     sNumb = {
        0: "{Chr(8308)}",
        1: "¹",
        2: "²",
        3: "³",
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
    }

 for (let key in sNumb) {
     (key == "colon") ? result = result.replace(":","˙") : result = result.replace(key,sNumb[key]); 
     (key == "dot")   ? result = result.replace(".","`") : result = result.replace(key,sNumb[key]);
     (key == "plus")  ? result = result.replace("+","⁺") : result = result.replace(key,sNumb[key]);
     (key == "minus") ? result = result.replace("-","⁻") : result = result.replace(key,sNumb[key]);
}
console.log(result);
//  RoboTaskApp().AddUserVariable("NUMBERS",result);
// LogMessage(result);
 

 