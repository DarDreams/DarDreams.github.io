var caliber = {
    resizerNumbers: function(number,loop) {
        if (loop == 4) {
            number = number.replace(/^(\d)$/g, '000$1');
            number = number.replace(/^(\d)(\d)$/g, '00$1$2');
            number = number.replace(/^(\d)(\d)(\d)$/g, '0$1$2$3');
        }
        if (loop == 3) {
            number = number.replace(/^(\d)(\d)$/g, '0$1$2');
            number = number.replace(/^(\d)$/g, '00$1');
            
        }
        if (loop == 2) {
            number = number.replace(/^(\d)$/g, '0$1');
        }
            return number;
    },
    checkSkills: function(text) {
        var skills = {
            PERK_1: [
                "booster_pouch",
                "field_medicine",
                "advanced_training",
                "heavyweight_marathon",
                "battle_hardening",
                "strong_nerves",
                "hemoglobin_serum",
                "second_wind",
                "take_aim",
                "well_rested",
                "self_healing",
                "will_to_live",
                "healing_factor",
                "sixth_sense",
                "cold_blood",
                "adrenaline_rush",
                "dead_silence",
                "in_the_crosshairs"
            ],
            PERK_2: [
                "fireres_materials",
                "subdermal_meldonium",
                "shrapnel_layer",
                "subdermal_morphine",
                "regenerative_materials",
                "adaptive_armor",
                "tight_fit",
                "combined_armor",
                "head_protection",
                "lightweight_armor",
                "stay_frosty",
                "stim_medpacks",
                "inner_strength"
            ],
            PERK_3: [
                "forend_processing",
                "barrel_cutting",
                "quick_release_magazines",
                "direct_acting_shutter",
                "super_sensitive_trigger",
                "armor_piercing_rounds",
                "heavy_ammunition",
                "thermal_imager",
                "expansive_bullets",
                "flatness",
                "tungsten_coating",
                "consumables_pouch",
                "prudence",
                "strong_stim",
                "robotic_calibrations",
                "heavy_barrel",
                "lightweight_equipment"
        
            ],
            PERK_4: [
                "spare_syringe",
                "improved_formula",
                "cold_math",
                "altitude_training",
                "stealth_warrior",
                "ambush",
                "blood_rage",
                "counter_attack",
                "head_hunter",
                "retaliation",
                "lone_wolf",
                "fast_revive",
                "merciless",
                "die_hard",
                "shoulder_to_shoulder",
                "own_priorities"
            ]
        };
        for (var key in skills) {
            var res = "";
            for (var i = 0; i < skills[key].length-1;i++) {
               if (skills[key][i] == text) {
                   // console.log(key,"-",i+1);
                     res = key+" "+(i+1);
                    return res;
               }
               if (text == "null") {
                    res = key+" "+0;
                    return res;
               }
            }
        }
    },
    convertNumbers: function(numbers) {
    var sNumb = {
        0: "{Chr(186)}",
        1: "{Chr(185)}",
        2: "{Chr(178)}",
        3: "{Chr(179)}",
        4: "{Chr(8308)}",
        5: "{Chr(8309)}",
        6: "{Chr(8310)}",
        7: "{Chr(8311)}",
        8: "{Chr(8312)}",
        9: "{Chr(8313)}",
        10: "{Chr(729)}",
        11: "{Chr(96)}",
        12: "{Chr(8314)}",
        13: "{Chr(8315)}"
    };
    numbers = numbers.split('');
    for (var i = 0; i < numbers.length; i++) {
        for (var value in sNumb) {
               if (numbers[i].indexOf(":") >= 0) {numbers[i] = numbers[i].replace(/\:/g, sNumb[10]); break; 
        } else if (numbers[i].indexOf(".") >= 0) {numbers[i] = numbers[i].replace(/\./g, sNumb[11]); break;
        } else if (numbers[i].indexOf("+") >= 0) {numbers[i] = numbers[i].replace(/\+/g, sNumb[12]); break;
        } else if (numbers[i].indexOf("-") >= 0) {numbers[i] = numbers[i].replace(/\-/g, sNumb[13]); break;
        } else if (numbers[i] == sNumb[i]){
        numbers[i] = numbers[i].replace(numbers[i], sNumb[i]);break;  
        }{
        }{
        }{
        }  
    }}

    numbers = numbers.join(",").replace(/\,/g, '');
    return numbers;
}};

console.log(caliber.convertNumbers("2"));