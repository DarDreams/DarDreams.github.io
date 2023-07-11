var OPERATORS = ["recruita", "recruits", "recruitg", "recruitm", "ww2a", "ww2s", "ww2g", "ww2m", "fsb2004a", "fsb2004s", "fsb2004g", "fsb2004m", "grom2014a", "grom2014s", "grom2014g", "grom2014m", "fsb2016a", "fsb2016s", "fsb2016g", "fsb2016m", "ksk2011a", "ksk2011s", "ksk2011g", "ksk2011m", "sso2013a", "sso2013s", "sso2013g", "sso2013m", "seal2014a", "seal2014s", "seal2014g", "seal2014m", "22spn2016a", "22spn2016s", "22spn2016g", "22spn2016m", "tfb2008m", "tfb2008s", "tfb2008a", "tfb2008g", "raid2017g", "raid2017m", "raid2017a", "raid2017s", "nesher2015a", "nesher2015s", "nesher2015g", "nesher2015m", "ezapacs", "ezapacm", "ezapacg", "ezapaca", "arystana", "arystans", "arystanm", "arystang", "belssoa", "belssos", "belssog", "belssom", "amfa", "amfg", "amfm", "amfs", "jiaolonga", "jiaolongg", "jiaolongs", "jiaolongm", "csta", "csts", "cstg", "cstm", "bopea", "bopeg", "bopem", "bopes"];
var TECHOLOGIES = ["booster_pouch", "field_medicine", "advanced_training", "heavyweight_marathon", "battle_hardening", "strong_nerves", "hemoglobin_serum", "second_wind", "take_aim", "well_rested", "fireres_materials", "subdermal_meldonium", "shrapnel_layer", "subdermal_morphine", "regenerative_materials", "adaptive_armor", "tight_fit", "combined_armor", "head_protection", "forend_processing", "barrel_cutting", "quick_release_magazines", "direct_acting_shutter", "super_sensitive_trigger", "armor_piercing_rounds", "heavy_ammunition", "thermal_imager", "flatness", "tungsten_coating", "spare_syringe", "improved_formula", "cold_math", "altitude_training", "stealth_warrior", "ambush", "blood_rage", "counter_attack", "head_hunter", "retaliation", "lightweight_armor", "self_healing", "lone_wolf", "consumables_pouch", "prudence", "fast_revive", "will_to_live", "merciless", "die_hard", "healing_factor", "strong_stim", "sixth_sense", "robotic_calibrations", "stay_frosty", "heavy_barrel", "cold_blood", "lightweight_equipment", "stim_medpacks", "adrenaline_rush", "dead_silence", "expansive_bulvars", "in_the_crosshairs", "inner_strength", "own_priorities", "shoulder_to_shoulder", "priority_target", "enhanced_armor", "fresh_forces", "team_medpacks"];
var CONSUMABLES = ["StaminaRegenBooster", "HealthPack", "ArmorPack", "AmmoPack", "TeamArmorBag", "TeamAmmoBox", "SpecialReviveV2", "RandomBonus", "HealthPackV2", "AmmoPackV2"];

var user, oper, lvl, lvlOp, lvlPr, tech1, tech2, tech3, tech4, consm1, consm2;
var result = [
    {
        users: []
    },
    {
        users: []
    }
]

function getList(jsn) {
    var playerLog = JSON.parse(jsn);

        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < 4; j++) {
                if (playerLog.b.Teams[i].Users[j]) {
                    user = playerLog.b.Teams[i].Users[j].Nickname || null;
                    oper = playerLog.b.Teams[i].Users[j].PickedCard ? OPERATORS[playerLog.b.Teams[i].Users[j].PickedCard.Card[1]] : null;
                    lvl = playerLog.b.Teams[i].Users[j].Level || null;
                    lvlOp = playerLog.b.Teams[i].Users[j].PickedCard ? playerLog.b.Teams[i].Users[j].PickedCard.Card[18] : null;
                    lvlPr = playerLog.b.Teams[i].Users[j].PickedCard ? playerLog.b.Teams[i].Users[j].PickedCard.Card[17] : null;
                    tech1 = playerLog.b.Teams[i].Users[j].PickedCard ? TECHOLOGIES[playerLog.b.Teams[i].Users[j].PickedCard.Card[15][0]] : null;
                    tech2 = playerLog.b.Teams[i].Users[j].PickedCard ? TECHOLOGIES[playerLog.b.Teams[i].Users[j].PickedCard.Card[15][1]] : null;
                    tech3 = playerLog.b.Teams[i].Users[j].PickedCard ? TECHOLOGIES[playerLog.b.Teams[i].Users[j].PickedCard.Card[15][2]] : null;
                    tech4 = playerLog.b.Teams[i].Users[j].PickedCard ? TECHOLOGIES[playerLog.b.Teams[i].Users[j].PickedCard.Card[15][3]] : null;
                    consm1 = playerLog.b.Teams[i].Users[j].PickedCard ? CONSUMABLES[playerLog.b.Teams[i].Users[j].PickedCard.Card[14][0]] : null;
                    consm2 = playerLog.b.Teams[i].Users[j].PickedCard ? CONSUMABLES[playerLog.b.Teams[i].Users[j].PickedCard.Card[14][1]] : null;
                
                    var userObj = {
                        nick: user,
                        oper: oper,
                        lvl: lvl,
                        lvlOp: lvlOp,
                        lvlPr: lvlPr,
                        tech1: tech1,
                        tech2: tech2,
                        tech3: tech3,
                        tech4: tech4,
                        consm1: consm1,
                        consm2: consm2,
                    };
                    result[i].users.push(userObj);
                }
            }
        }
    return result
}