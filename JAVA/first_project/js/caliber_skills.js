

function check (text) {
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
    for (let key in skills) {
        for (var i = 0; i < skills[key].length-1;i++) {
           if (skills[key][i] == text) {
                console.log(key,"-",i+1);
                return;
            }
        }
    }
}



check("flatness");

