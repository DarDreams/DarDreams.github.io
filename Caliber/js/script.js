import {
    caliber as caliberImport01,
    caliber2 as caliberImport02
} from "./game.js";

//import {tv} from "./tv.js";


window.addEventListener('DOMContentLoaded', () => {
    let id, alldata, setUrl, getDataMap, userID, date, time, score, winTeam, clickDay, nickName, tumbler = true;
    let rankTeam = [];

    /* #region CREATE OBJECT CALIBER */
    //caliber: [caliber[0],caliber[2],[caliber[7][0], caliber[7][1], caliber[7][2], caliber[7][3]],[caliber[7][4], caliber[7][5], caliber[7][6], caliber[7][7]]],

    let caliberFunc = function (caliberImport, caliberImport2) {
        //console.log(caliberImport);
        // let utc = new date().getTimezoneOffset();
        const caliberNew = {
            data: [caliberImport[0],
            caliberImport[2],
            [caliberImport[7][0], caliberImport[7][1], caliberImport[7][2], caliberImport[7][3]],
            [caliberImport[7][4], caliberImport[7][5], caliberImport[7][6], caliberImport[7][7]]
            ],
            log: {
                Users: [
                    [caliberImport2.Log.Users[0], caliberImport2.Log.Users[1], caliberImport2.Log.Users[2], caliberImport2.Log.Users[3]],
                    [caliberImport2.Log.Users[4], caliberImport2.Log.Users[5], caliberImport2.Log.Users[6], caliberImport2.Log.Users[7]]
                ],
                MatchTimeSeconds: caliberImport2.Log.MatchTimeSeconds,
                MaxRoundsWon: caliberImport2.Log.MaxRoundsWon,
                PlayerReport: caliberImport2.Log.PlayerReports,
                Rounds: caliberImport2.Log.Rounds,
                // UTC: new Date().getTimezoneOffset(),
                userID: userID,
                date: date,
                time: time,
            }
        };


        for (let i = 2; i <= 3; i++) {
            for (let j = 0; j <= 3; j++) {
                if (Array.isArray(caliberNew.data[i][j][11])) {
                    caliberNew.data[i][j][11].splice(0);
                }
                if (Array.isArray(caliberNew.data[i][j][9])) {
                    caliberNew.data[i][j][9].splice(0);
                }
            }
        }
        caliberNew.log.Users.forEach(element => {
            delete element.QuestCounters;
        });
        return caliberNew;

    }



    let caliber = caliberFunc(caliberImport01, caliberImport02);

    /* #region  CONVERT_SECONDS */
    function convertSecondsToTime(seconds) {
        //const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const sec = Math.floor(seconds % 60);
        return `${minutes.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
    }
    /* #endregion */

    /* #region  PERK RUS */
    const perksRus = {
        "enhanced_armor": ["Усиленная защита", `Оперативник получает улучшенную
        бронезащиту, но снижает скорость
        передвижения во всех состояниях
        на 30/25/20%
        
        Увеличение бронезащиты: +20 ОБ.`],
        "fresh_forces": ["Свежие силы", `Оперативник сокращает время
        восстановления основной
        способности, но снижает
        максимальный запас здоровья.
        
        Время восстановления: - 33%
        Снижение здоровья -30/25/20%)`],
        "adrenaline_rush": ["Андреналин Раш", "Хз что это пока что :-)"],
        "expansive_bullets": ["Экспансивные пули",
            `Попадание по противнику из
            основного оружия повышает
            последующий урон от горения,
            газов и кровотечения.

            Увеличение урона: +25/30/35%
            длительность: 8 сек.`
        ],

        "tungsten_coating": ["Вольфрамовое покрытие пуль",
            `Вольфрамовое покрытие пуль
            уменьшает загрязнение ствола, но
            повышает массу пули.
            
            Урон в голову основного оружия:
            +15/20/25%
            Эффективная дистанция основного оружия: -15%`
        ],

        "stay_frosty": ["Готовность",
            `Когда враг находится ближе 4/5/6
            метров оп оперативника, оперативник
            наносит ему больше урона основным и дополнительным оружием.

            Увеличение урона: +10/12/15%
        `],

        "null": ["Нет", "Оперативник не прокачал этот тип навыка"],

        "lone_wolf": ["Одинокий волк",
            `За каждого выведенного из строя
            союзника оперативник получает дополнительное сопротивление
            урону от пуль и взрывов
        
            Сопротивление: +3/4/5%`
        ],

        "fast_revive": ["Скорая помощь",
            `Благодаря специальной
            тренеровке, оперативник быстрее
            реанимирует союзников.
            
            Скорость реанимации: +15/22/30%`
        ],

        "inner_strength": ["Внутренний резерв",
            `Когда у оперативника остаётся
            менее 50 ОВ, один раз за раунд он
            получает:

            Восстановление выносливости:
            150/200/250 ОВ в течении 3 сек.`
        ],

        "sixth_sense": ["Шестое чувство",
            `Когда на оперативника наложен
            эффект "Метка", он получает
            увеличение скорости
            передвижения
            
            Скорость передвижения: +8/12/15%`
        ],

        "healing_factor": ["Фактор лечения",
            `Оперативник восстанавливает
            больше здоровья при лечении из любого источника.
            
            Увеличение получаемого лечения:
            +20/25/30%`
        ],

        "will_to_live": ["Тяга к жизни",
            `Оперативник может быстрее
            ползать будучи критически
            раненым.
            
            Увеличение скорости
            передвижения: +50/75/100%`
        ],

        "shoulder_to_shoulder": ["Плечем к плечу",
            `При нахождении союзника в
            радиусе 6/7/8 метров от себя
            оперативник получает ускорение
            перезарядки на 20% и снижение
            входящего стрелкового урона
            на 10%`
        ],

        "heavy_barrel": ["Тяжелый ствол",
            `Ствол с утолщенными стенками
            для основного оружия увеличивает
            его урон, но повышает отдачу.
            
            Увеличение урона: +5/7/10%
            Увеличение отдачи: +50/45/40%`
        ],

        "die_hard": ["Крепки орешек",
            `Один раз за раунд. когда у
            оперативника остаётся менее
            15/20/25 03, он получает 50%
            сопротивления всему урону, но и
            сам наносит на 50% меньше урона
            стрелковым оружием.
            Длительность: 5 сек.`
        ],
        "merciless": ["Беспощадность",
            `Во время добивания противника
            оперативник получает меньше
            урона от пуль и взрывов.
            
            Снижение урона: —50/60/70%`
        ],
        "strong_stim": ["Усиленные стимуляторы",
            `Применение резерва «Стимулятор»
            восстанавливает больше
            выносливости. Во время действия
            резерва оперативник получает 
            меньше урона.
            
            Восстановление выносливости:
            +60/80/120 ОВ
            
            Сопротивление урону: +6/8/ 10%`
        ],
        "lightweight_equipment": ["Облегченная разгрузка",
            `Боезапас основного и
            дополнительного оружия
            уменьшается на 1 магазин, у 
            оперативника увеличиваются запас ›
            выносливости и скорость
            передвижения во всех состояниях.

            Увеличение выносливости:
            +100/125/150 ОВ
            
            Скорость передвижения: +15%`
        ],
        "robotic_calibrations": ["Калибровка техники",
            `Спецсредства-дроны имеют
            повышенную прочность. 

            Увеличение прочности: +10/12/15%`
        ],
        "prudence": ["Расчетливость",
            `В конце каждого раунда
            невзорвавшиеся мины
            возвращаются оперативнику.

            Максимум возвращающихся мин:
            1/2/3 шт.`
        ],
        "dead_silence": ["Скрытое перемещение",
            `Оперативник быстрее
            перемещается сидя. Все
            издаваемые им звуки, кроме
            стрельбы, приглушаются.

            Увеличение скорости
            передвижения: +10/15/ 20%
            Снижение уровня звука: —75%`
        ],
        "in_the_crosshairs": ["Под прицелом",
            `Увеличение скорости перемещения
            В режиме прицеливания с
            основным оружием на 10/15/20%.`
        ],
        "cold_blood": ["Хладнокровие",
            `Когда оперативник находится под
            действием любого отрицательного
            эффекта, он получает меньше
            урона от пуль:
            
            Снижение урона: —10/12/15%`
        ],

        "self_healing": ["Самолечение",
            `Здоровье оперативника начинает
            восстанавливаться до 20/30/40 03,
            если он не получал урон В течение
            некоторого времени.
            Задержка перед восстановлением:
            5 сек.
            
            Скорость восстановления: 2 ОЗ/сек.`
        ],

        "own_priorities": ["Свои приоритеты",
            `Увеличение бронепробиваемости,
            эффективной дистанции и урона в
            голову у второстепенного оружия.

            Увеличение времени перезарядки
            основного оружия на 20%/15%/10%
            Бронепробиваемость: +15%
            Эффективная дистанция: +10м
            Урон в голову: +5%
            
            навык не влияет на оперативников
            с одинаковым основным и
            второстепенным оружием.`
        ],
        "adaptive_armor": ["Адаптивная броня",
            `После уничтожения собственной
            брони на оперативника
            накладывается эффект «Щит».

            Прочность щита: 20/25/30 03
            Длительность: 5 сек.
            
            Срабатывает Один раз за раунд.
            Требует предварительного наличия
            брони.`
        ],
        "advanced_training": ["Углубленная подготовка",
            `После прохождения
            дополнительной физической
            псдготовки оперативник,
            возвращается в бой с увеличенным
            запасом выносливости.

            Минимальная выносливость:
            1ОО/150/200 ОВ`
        ],
        "altitude_training": ["Высотная подготовка",
            `Спрыгивание с высоких объектов
            наносит меньше урона.
            Приземление не замедляет
            оперативника.
            
            Снижение урона от падения:
            -50/75/100%`
        ],
        "ambush": ["Засада",
            `После занятия устойчивой позиции
            с использованием сошек у
            оперативника не отображается
            силуэт и иконка роли. Оперативника
            можно обнаружить эффектом
            "Метка".
            
            Время на активацию: 1.5/1/0.5 сек.`
        ],
        "armor_piercing_rounds": ["Бронебойные патроны",
            `Замена стандартных патронов для
            основного оружия на бронебойные.

            Бронепробиваемость: +5/10/15%`
        ],
        "armor_pouch": ["",
            ``
        ],
        "barrel_cutting": ["Прецизионная нарезка ствола",
            `Нарезка ствола уменьшает
            максимальный разброс оружия.
            Уменьшение разброса: -10/15/20%`
        ],
        "battle_hardening": ["Боевая закалка",
            `Тренировки активного
            перемещения под обстрелом
            позволяют оперативнику получать
            меньше повреждений от пуль во
            время рывка.

            Уменьшение урона: -9/12/15%`
        ],
        "blood_rage": ["Прилив адреналина",
            `Когда у оперативника остаётся
            менее 30/40/50 03, скорость его
            перемещения увеличивается на
            20%.`
        ],
        "booster_pouch": ["Усиленные стимуляторы",
            `Применение резерва «Стимулятор»
            восстанавливает больше
            выносливости. Во время действия
            резерва оперативник получает
            меньше урона.
            
            Восстановление выносливости:
            +60/80/120 ОВ
            
            Сопротивление урону: +6/8/10%`
        ],
        "cold_math": ["Холодный расчет",
            `Оперативник рассчитывает каждый
            свой шаг, за счёт чего тратит
            меньше выносливости на рывок.

            Стоимость применения рывка: 
            -15/20/25%.`
        ],
        "lightweight_armor": ["", ""],
        "combined_armor": ["Комбинированые пластины",
            `Бронепластины с антисептическим
            слоем. При использовании резерва
            «Бронепластины» оперативник
            восстанавливает не только броню,
            но и здоровье.

            Восстановление здоровья: 10/15/20
            03 в течение 3 сек.

            Интервал перед повторным
            применением: 40 сек.

            длительность применения
            увеличивается до 4 сек.`
        ],
        "counter_attack": ["Контратака",
            `После получения определённого
            количества попаданий из
            стрелкового оружия урон оружия
            оперативника увеличивается на 
            8 сек.
            
            Требуемое число попаданий: 5/4/3
            Увеличение урона: +8/10/15%`
        ],

        "direct_acting_shutter": ["Модернизация затворного механизма",
            `Увеличивает скорострельность
            основного оружия, позволяет вести
            стрельбу из винтовок с продольно-
            скользящим затвором, не отрываясь
            от прицела.
            
            Скорострельность: +0.1/О.15/0.2 в/сек.`
        ],

        "field_medicine": ["Полевая медицина",
            `Не нашел этот навык`
        ],
        "fireres_materials": ["Герметичные материалы",
            ``
        ],
        "flatness": ["Настильность",
            `Модификация ствола позволяет
            добиться большей настильности
            траектории полёта пули.
            
            Урон основного оружия в голову
            при этом уменьшен на 20%.
            
            Эффективная дистанция основного
            оружия: +15/20/25%`
        ],
        "forend_processing": ["Обработка цевья",
            `Специальная обработка цевья
        позволяет более эффективно гасить
        отдачу. 

        Уменьшение отдачи: -10/15/20%`
        ],
        "head_hunter": ["Охота за головами",
            `Ликвидация противника выстрелом
            в голову моментально
            восстанавливает оперативнику
            выносливость.

            Восстановление выносливости:
            50/70/90 ОВ`
        ],
        "head_protection": ["Защита головы",
            `Усиленная защита, добавляющая
            пассивное сопротивление урону в
            голову.
            
            Сопротивление урону в голову:
            +15/20/25%.`
        ],
        "heavy_ammunition": ["Тяжелые боеприпасы",
            `Резерв «Боеприпасы» более не
            восстанавливает боезапас
            основного и дополнительного
            оружия. Вместо этого он
            восстанавливает спецсредство.
            Интервал перед повторным
            применением: 720/480/360 сек.
            Длительность применения
            увеличивается до 5 сек.`
        ],

        "stim_medpacks": ["Стимулирующие медикаменты",
            `Применение резерва "Медпакет"
            восстанавливает не только
            здоровье, но и выносливость.

            Восстановление выносливости:
            50/60/80 ОВ в течении 3 сек.
            `],

        "heavyweight_marathon": ["Вооруженные забег",
            `Длительные тренировки
            значительно улучшили физические
            параметры оперативника, увеличив
            скорость передвижения с
            основным оружием в рывке.

            Скорость рывка: +5/10/15%`
        ],

        "hemoglobin_serum": ["Сывортока гемоглобина",
            `Экспериментальная сыворотка.
            Увеличивает максимальный запас
            здоровья оперативника.

            Увеличение здоровья: +5/10/15 ОЗ`
        ],
        "improved_formula": ["Улучшенная формула",
            `Реанимация союзника
            восстанавливает выносливость
            оперативнику и увеличивает
            скорость передвижения союзника.
            Длительность: 5 сек.

            Восстановление выносливости:
            100/125/160 ОВ
            Скорость передвижения:
            +10/15/20%`
        ],
        "last_frontier": ["Одинокий волк",
            `За каждого выведенного из строя
            союзника оперативник получает
            ДОПОЛНИТЕЛЬНОЭ сопрОТИВЛЕНие
            урону от пуль и взрывов.
            Сопротивление: +3/ 4/ 5%`
        ],
        "quick_release_magazines": ["Быстросъемные магазины",
            `Улучшенная система хранения
            магазинов увеличивает скорость
            перезарядки основного и 
            дополнительного оружия

            Скорость перезарядки: +20/30/40%`
        ],
        "regenerative_materials": ["Регенерирующие материалы",
            `Экспериментальная система
            регенерации брони. Автоматически
            восстанавливает броню, если
            оперативник некоторое время не
            получал урона.

            Задержка перед восстановлением:
            5/4/3 сек.
            Скорость восстановления: 0.5/1/1.5
            ОБ/сек.`
        ],
        "retaliation": ["Возмездие",
            `Ликвидация противника в течение 3
            секунд после получения от него
            стрелкового урона моментально
            восстанавливает здоровье
            оперативника.
            
            Восстановление здоровья: 8/12/15
            03`
        ],
        "second_wind": ["Второе дыхание",
            `После реанимации оперативник
            восстанавливает здоровье в
            течение 2.5 сек.
            
            Восстановление здоровья:
            30/40/50 03`
        ],
        "shrapnel_layer": ["Противоосколочный слой",
            `Дополнительное покрытие брони
            противоосколочным слоем снижает
            урон от взрывов.
            
            Снижение урона: 30/40/50%`
        ],
        "spare_syringe": ["Запасной шприц",
            `Увеличение запаса шприцов
            реанимации.
            Запас шприцов: +1/2/3 шт.`
        ],
        "stealth_warrior": ["Скрытый воин",
            `Когда оперативник находится в
            дыму, он быстрее передвигается и
            наносит больше урона основным и
            дополнительным оружием.

            Повышение скорости
            передвижения в дыму: +9/ 12/ 15%
            Увеличение урона основного и
            дополнительного оружия в дыму:
            +6/8/10%`
        ],
        "strong_nerves": ["Крепкие нервы",
            `Особый психологический тренинг
            позволяет сократить длительность
            эффектов «Подавление» и
            «Оглушение».
            
            Длительность эффектов: 
            -20/30/40%`
        ],
        "subdermal_meldonium": ["Субдермальный мельдоний",
            `Система поддержания
            боеспособности оперативника.
            После уничтожения собственной
            брони восстанавливает
            выносливость.
            
            Восстановление выносливости:
            120/150/210 за 4/3,5/3 сек.
            Срабатывает один раз за раунд.
            Требует предварительного наличия
            брони.`
        ],
        "subdermal_morphine": ["Субдермальный морфин",
            `Система экстренного лечения.
            После уничтожения собственной
            брони восстанавливает здоровье.

            Длительность: 5 сек.
            Лечение: 30/35/40 ОЗ
            
            Срабатывает один раз за раунд.
            Требует предварительного наличия
            брони.`
        ],
        "super_sensitive_trigger": ["Чувтсвительный спусковой крючок",
            `Регулировка спускового механизма
            позволяет увеличить
            скорострельность дополнительного
            оружия.

            Скорострельность: +0.5/1/1.5 в/сек.`
        ],
        "take_aim": ["Стрелковая позиция",
            `Прицелившись, оперативник
            группируется и максимально
            скрывает свой силуэт. Через 2/1/0.5
            сек. после начала прицеливания .
            оперативник получает на 10/12/15%
            меньше урона от пуль и взрывов.`
        ],
        "thermal_imager": ["Тепловизор",
            `Оперативник активирует
            тепловизор: при прицеливании
            враги, скрытые дымом,
            подсвечиваются.
            
            Время активации: 1/0.5/0.25 сек.`
        ],
        "tight_fit": ["Плотное прилегание",
            `Правильно подобранная
            экипировка значительно повышает
            комфорт бойца. При полном запасе
            брони оперативник быстрее
            восстанавливает выносливость.

            Дополнительное восстановление
            выносливости: 4/6/8 ОВ/сек.`
        ],
        "well_rested": ["Хороший отдых",
            `Хорошо отдохнувший боец лучше
            сопротивляется негативным
            эффектам. При запасе
            выносливости более 400/350/300
            ОВ. оперативник иммунен к
            эффектам «Оглушение»,
            «Замедление», «Капкан» и
            «Скованность».`
        ],
        "AmmoPack": "",
        "ArmorPack": "",
        "TeamArmorPack": "",
        "TeamAmmoPack": "",
        "HealthPackOld": "",
        "HealthPack": "",
        "SpecialRevive": "",
        "StaminaRegenBooster": ""
    }

    function br(text) {
        return text.replace(/\n/g, "<br>");
    }
    /* #endregion */

    /* #region  ALL DATAS */
    function upload(data1, data2) {
        document.querySelector(`.team1Table`).innerHTML = '';
        document.querySelector(`.team2Table`).innerHTML = '';
        let operLoop = [];
        for (let k = 2; k < 4; k++) {
            document.querySelector(`.team${k - 1}Table`).insertAdjacentHTML('afterbegin', `
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th>ГРУППА</th>
        <th>ЛИКВИДИРОВАЛ</th>
        <th>ПОГИБ</th>
        <th>СОДЕЙСТВИЯ</th>
        <th>УРОН</th>
        <th>ПОЛУЧЕНИЕ</th>`);
            for (let i = 0; i <= 3; i++) {

                // console.dir(`${data1[2][0][8][1].slice(-1)}niper`);
                if (k == 2) {
                    operLoop = ['assault', 'gunner', 'medic', 'sniper'];

                }
                //operLoop = [];


                //  for (let i = 0 ; i < 4; i++) {


                // operLoop = ['assault', 'gunner', 'medic', 'sniper'];


                if (k == 3) {

                    // operLoop = [];
                    // for (let i = 0 ; i < 4; i++) {

                    //}
                    operLoop = ['assaultR', 'gunnerR', 'medicR', 'sniperR'];
                    //   operLoop = [`${data1[2][0][8][1].slice(-1)}niper`,`${data1[2][1][8][1].slice(-1)}niper`,`${data1[2][2][8][1].slice(-1)}niper`,`${data1[2][3][8][1].slice(-1)}niper`];
                }
                //console.dir(operLoop);
                /* #region  OPER */

                let roleName;

                /* #region  OPER_NAME */
                function oper(collection) {
                    collection = collection.toUpperCase();
                    let res;
                    //console.log(collection);
                    let col = collection.replace(/.$/, "");
                    let role = collection.slice(-1);

                    //console.log("division",division);
                   // console.log("col", col);
                  //  console.log("role", role);
                    const mappings = {
                        "RECRUIT": {
                            'A': 'РЕКРУТ',
                            'G': 'РЕКРУТ',
                            'M': 'РЕКРУТ',
                            'S': 'РЕКРУТ'
                        },
                        'SSO2013': {
                            'A': 'ВОРОН',
                            'G': 'СПУТНИК',
                            'M': 'БАРД',
                            'S': 'КОМАР'
                        },
                        'FSB2016': {
                            'A': 'ПЕРУН',
                            'G': 'СВАРОГ',
                            'M': 'ТРАВНИК',
                            'S': 'СОКОЛ'
                        },
                        'FSB2004': {
                            'A': 'ВОЛК',
                            'G': 'АЛМАЗ',
                            'M': 'ДЕД',
                            'S': 'СТРЕЛОК'
                        },
                        '22SPN2016': {
                            'A': 'ПЛУТ',
                            'G': 'КИТ',
                            'M': 'КАРАВАЙ',
                            'S': 'ТЕНЬ'
                        },
                        'BELSSO': {
                            'A': 'ЛАЗУТЧИК',
                            'G': 'ЗУБР',
                            'M': 'КАВАЛЬ',
                            'S': 'БУСЕЛ'
                        },
                        'GROM2014': {
                            'A': 'КОШМАР',
                            'G': 'ПРОРОК',
                            'M': 'МИКОЛА',
                            'S': 'СТИЛЕТ'
                        },
                        'KSK2011': {
                            'A': 'РЕЙН',
                            'G': 'ШТЕРН',
                            'M': 'ШАТЦ',
                            'S': 'КУРТ'
                        },
                        'SEAL2014': {
                            'A': 'КОРСАР',
                            'G': 'БУРБОН',
                            'M': 'МОНК',
                            'S': 'СКАУТ'
                        },
                        'TFB2008': {
                            'A': 'СТЕРЛИНГ',
                            'G': 'БИШОП',
                            'M': 'ВАТСОН',
                            'S': 'АРЧЕР'
                        },
                        'RAID2017': {
                            'A': 'АВАНГАРД',
                            'G': 'БАСТИОН',
                            'M': 'ВЕЛЮР',
                            'S': 'ВАГАБОНД'
                        },
                        'NESHER2015': {
                            'A': 'АФЕЛА',
                            'G': 'ХАГАНА',
                            'M': 'ШАРШЕРЕТ',
                            'S': 'ЭЙМА'
                        },
                        'EZAPAC': {
                            'A': 'ФАРО',
                            'G': 'МАТАДОР',
                            'M': 'МИГЕЛЬ',
                            'S': 'ДИАБЛО'
                        },
                        'ARYSTAN': {
                            'A': 'МУСТАНГ',
                            'G': 'ТИБЕТ',
                            'M': 'БАГГИ',
                            'S': 'СУЛТАН'
                        },
                        'AMF': {
                            'A': 'СТАРКАД',
                            'G': 'ОДИН',
                            'M': 'ФРЕЙР',
                            'S': 'ВИДАР'
                        },
                        'JIAOLONG': {
                            'A': 'ШАОВЭЙ',
                            'G': 'ИНЧЖОУ',
                            'M': 'ЯОВАН',
                            'S': 'ЦАНЛУН'
                        },
                        'CST': {
                            'A': 'СЛАЙ',
                            'G': 'ФОРТРЕСС',
                            'M': 'БОУНС',
                            'S': 'АВАЛАНШ'
                        },
                        'BOPE': {
                            'A': 'МАРТЕЛУ',
                            'G': 'БАРРЕЙРА',
                            'M': 'АСАИ',
                            'S': 'КАСАДОР'
                        }
                    };

                    res = `${col}_${role}`;
                  //  console.log("res", res);
                    roleName = mappings[col][role];
                    return res;
                }
                /* #endregion */

                /* #endregion */;
                // console.log(data1[k][i][16]);
                if (!data1[k][i][16]) {
                    data1[k][i][16] = [0, 0, 0];
                };
                // console.log(data1[k][i][16][2]);
                const operator = {
                    role: operLoop[i],
                    emblem: data1[k][i][5],
                    avatar: oper(data1[k][i][8][1]),
                    lvlText: data1[k][i][3],
                    nameOp: roleName,
                    lvlOp: data1[k][i][8][18],
                    lvlprest: data1[k][i][8][19],
                    rank: data1[k][i][16][1],
                    name: data1[k][i][2],
                    group: String(data1[k][i][1]).slice(0, 4),
                    perks: [data1[k][i + 0][8][15][0], data1[k][i + 0][8][15][1], data1[k][i + 0][8][15][2], data1[k][i + 0][8][15][3]],
                    kills: data2.Users[k - 2][i].PlayerKills,
                    specKills: listKills,
                    deaths: data2.Users[k - 2][i].Deaths,
                    assists: data2.Users[k - 2][i].Assists,
                    damage: Math.floor(data2.Users[k - 2][i].DamageDealt),
                    recive: Math.floor(data2.Users[k - 2][i].DamageReceived)
                };

                function listKills() {
                    //console.log(typeOf(data2.Users[k-2][i].SpecificPlayerKills));
                    // let arr = data2.Users[k-2][i].SpecificPlayerKills
                    // const result2 = {};
                    // for (let i = 0; i < arr.length; i++) {
                    //     result[i.toString()] = arr[i];
                    // }
                    // console.log(result2);
                    let specKills = JSON.stringify(data2.Users[k-2][i].SpecificPlayerKills);
                    if (specKills.includes("[")&&!specKills.includes("[]")) {
                        // console.log(data2.Users[k-2][i].SpecificPlayerKills[0]);
                        // console.log(data2.Users[k-2][i].SpecificPlayerKills[1]);
                        // console.log(data2.Users[k-2][i]?.SpecificPlayerKills[2]);
                        // console.log(data2.Users[k-2][i]?.SpecificPlayerKills[3]);
                     specKills = {
                           "0":data2.Users[k-2][i].SpecificPlayerKills[0],
                           "1":data2.Users[k-2][i].SpecificPlayerKills[1],
                           "2":data2.Users[k-2][i].SpecificPlayerKills[2],
                           "3":data2.Users[k-2][i].SpecificPlayerKills[3],
                        }
                        specKills = JSON.stringify(specKills);
                     }

                        specKills = specKills.replace(`"0"`, `"${data1[2][0][2]}"`);
                        specKills = specKills.replace(`"1"`, `"${data1[2][1][2]}"`);
                        specKills = specKills.replace(`"2"`, `"${data1[2][2][2]}"`);
                        specKills = specKills.replace(`"3"`, `"${data1[2][3][2]}"`);
                        specKills = specKills.replace(`"4"`, `"${data1[3][0][2]}"`);
                        specKills = specKills.replace(`"5"`, `"${data1[3][1][2]}"`);
                        specKills = specKills.replace(`"6"`, `"${data1[3][2][2]}"`);
                        specKills = specKills.replace(`"7"`, `"${data1[3][3][2]}"`);
                        

                    var obj = JSON.parse(specKills);
                    var result = '';

                    for (var key in obj) {
                        result += obj[key]+ ' : ' + key + '\n';
                    }
                    return result;

                }
                //listKills();
                

                /* #region  RATING RANGE */
                function getRange(number) {
                    const ranges = [
                        { min: 0, max: 10,     rank: "bronze TBD"},
                        { min: 1, max: 100,   rank: "bronze III" },
                        { min: 100, max: 200, rank: "bronze II" },
                        { min: 200, max: 300, rank: "bronze I" },
                        { min: 300, max: 400, rank: "silver III" },
                        { min: 400, max: 500, rank: "silver II" },
                        { min: 500, max: 600, rank: "silver I" },
                        { min: 600, max: 700, rank: "gold III" },
                        { min: 700, max: 800, rank: "gold II" },
                        { min: 800, max: 900, rank: "gold I" },
                        { min: 900, max: 1000, rank: "platinum III" },
                        { min: 1000, max: 1100, rank: "platinum II" },
                        { min: 1100, max: 1200, rank: "platinum I" },
                        { min: 1200, max: 9999, rank: `diamond ${operator.rank}` }
                    ];

                    for (let i = 0; i < ranges.length; i++) {
                        if (number >= ranges[i].min && number < ranges[i].max) {
                            switch (ranges[i].rank) {
                                case "bronze TBD":
                                    return `${ranges[i].rank}`;
                                case "bronze III":
                                    return `${ranges[i].rank}`;
                                case "bronze II":
                                    return `${ranges[i].rank}`;
                                case "bronze I":
                                    return `${ranges[i].rank}`;
                                case "silver III":
                                    return `${ranges[i].rank}`;
                                case "silver II":
                                    return `${ranges[i].rank}`;
                                case "silver I":
                                    return `${ranges[i].rank}`;
                                case "gold III":
                                    return `${ranges[i].rank}`;
                                case "gold II":
                                    return `${ranges[i].rank}`;
                                case "gold I":
                                    return `${ranges[i].rank}`;
                                case "platinum III":
                                    return `${ranges[i].rank}`;
                                case "platinum II":
                                    return `${ranges[i].rank}`;
                                case "platinum I":
                                    return `${ranges[i].rank}`;
                                case `diamond ${operator.rank}`:
                                    return `${ranges[i].rank}`;
                            }
                        }
                    }
                    return "Число не входит в диапазон";
                }
                /* #endregion */
               
                //console.log(operator.emblem);
                //console.log("caliberfan.ru/wp-content/themes/caliberfan/img/emblems/UI_Emblems__large.pn\g");
                let img = new Image();
               // if (localStorage.getItem("tumbler") == "true") {
                    //  img.src = "https://caliberfan.ru//wp-content/themes/caliberfan/img/emblems/UI_Emblems_" + operator.emblem + "_large.png";
               // } else {
                
                    img.src = "../img/emblems/" + operator.emblem + ".png";
                    
                    // img.closest('td').addEventListener('click',(e) => {
                    //     window.open("https://caliberfan.ru//wp-content/themes/caliberfan/img/emblems/UI_Emblems_" + operator.emblem + "_large.png")
                    // })
                    
               // }


                //console.log(img.src);

                img.onload = function () {
                    // console.log(img.width)
                    if (img.width > 336) {
                        // console.dir(img);
                        img.style.zoom = "50%";
                    }
                    try {
                        document.querySelector(`.team${k - 1}Table > tbody > tr.${operator.role} >.imgBaner`).insertAdjacentHTML('afterbegin', `<img class = "baner" src="${img.src}" onerror='../img/defaultN.png'">`);
                    } catch {
                        console.error('Ошибка при загрузке картинки');
                    }
                };

                img.onerror = function () {
                    document.querySelector(`.team${k - 1}Table > * > tr.${operator.role} >.imgBaner`).insertAdjacentHTML('afterbegin', `
                    <img class = "baner" src="../img/emblems/defaultN.png" alt="${operator.emblem}">
                    `);
                    //console.dir(img);
                    //console.log(img)
                    document.querySelectorAll('.imgBaner').forEach((el) => {
                        el.addEventListener('click',(e) => {
                            //console.dir(e.target)
                            //console.log("https://caliberfan.ru//wp-content/themes/caliberfan/img/emblems/UI_Emblems_" + operator.emblem + "_large.png");
                            if (e.target.firstElementChild.src == "https://exlusive.pro/img/emblems/defaultN.png") {
                                window.open("https://caliberfan.ru//wp-content/themes/caliberfan/img/emblems/UI_Emblems_" + operator.emblem + "_large.png")
                            };
                        })
                    })
                    
                };

              

                /* #region  FUNCTION CHECK IMAGES */

                // function checkImage(imageSrc) {
                //     return new Promise((resolve, reject) => {
                //         var img = new Image();
                //         img.onload = function () {
                //             img.src = imageSrc;
                //             resolve("Image is loaded and exists.");
                //         };
                //         img.onerror = function () {
                //             img.src = `https://caliberfan.ru//wp-content/themes/caliberfan/img/emblems/UI_Emblems_default_large.png`;
                //             reject("Error loading image.");
                //         };

                //     });
                // }

                // async function setImage(imageUrl, selector) {
                //     try {
                //         await checkImage(imageUrl);
                //         let image = document.querySelector(selector);
                //         image.setAttribute('src', imageUrl);
                //     } catch (error) {
                //         console.log('Ошибка в загрузке картинке - ', error);
                //     }
                // }
                //setImage(`https://caliberfan.ru/wp-content/themes/caliberfan/img/avatars/UI_PL_${operator.avatar}_Small.png`, '.oper');
                //setImage(`https://caliberfan.ru/wp-content/themes/caliberfan/img/avatars/UI_PL_${operator.avatar}_Small.png`, '.baner');

                /* #endregion */

                /* #region  INPUT TABLE OPERATORS */

               // console.log(`https://caliberfan.ru/wp-content/themes/caliberfan/img/avatars/UI_PL_${operator.avatar}_Small.png`);
                document.querySelector(`.team${k - 1}Table`).insertAdjacentHTML('beforeend', `
            
                <tr class = 'line ${operator.role}'>
                <td>
                    <svg class = "${operator.role}Logo"><title></title><use xlink:href="#${operator.role}"></use></svg>
                </td>
                <td>
                <img class = "oper" src="../img/avatars/${operator.avatar}.png" alt=""> 
                </td>
                <td>
                    <div class = "wrapper"><svg><use xlink:href="#whiteWrapper"></use></svg>
                        <span class="lvlText">${operator.lvlText}</span>    
                        <div class="bevel">
                            <span class = "nameOp">${operator.nameOp}</span>
                            <span class = "lvlOp">${operator.lvlOp}</span>
                            <span class = "lvlPrest">${(operator.lvlprest > 0) ? "&#160;"+operator.lvlprest+"&#160;" : ""}</span>
                        </div>
                    </div>
                </td>
                <td class = "imgBaner">
                
                    <span class = "rank">${operator.rank}</span>
                    <img class="rankEmbed" src="img/ranks/${getRange(operator.rank).replaceAll(/\w+$/g,"").trim()}.png">
                    <span class="rankNumber">${getRange(operator.rank).replace(/\w+ /, "")}</span>
                    <span class = "name" style = "position: absolute">${operator.name}</span>
                </td>
                <td data-gr = "${operator.group}" class = "groups">
                ${operator.group}
                    <div class = "perks">
                        <svg class="perk _1"><title>${operator.perks[0] in perksRus ? perksRus[operator.perks[0]][0] : operator.perks[0]}</title><use xlink:href="#${operator.perks[0]}"></use></svg>
                        <svg class="perk _2"><title>${operator.perks[1] in perksRus ? perksRus[operator.perks[1]][0] : operator.perks[1]}</title><use xlink:href="#${operator.perks[1]}"></use></svg>
                        <svg class="perk _3"><title>${operator.perks[2] in perksRus ? perksRus[operator.perks[2]][0] : operator.perks[2]}</title><use xlink:href="#${operator.perks[2]}"></use></svg>
                        <svg class="perk _4"><title>${operator.perks[3] in perksRus ? perksRus[operator.perks[3]][0] : operator.perks[3]}</title><use xlink:href="#${operator.perks[3]}"></use></svg>
                    </div>
                </td>
                <td title="${operator.specKills()}"class = "kills"  >${operator.kills}</td>
                <td class = "deaths" >${operator.deaths}</td>
                <td class = "assists">${operator.assists}</td>
                <td class = "damages">${operator.damage}</td>
                <td class = "recive" >${operator.recive}</td>
                <tr><th></th></tr>
                <tr><th></th></tr>
                <tr><th></th></tr>
                <tr><th></th></tr>
                <tr><th></th></tr>
                <tr><th></th></tr>
            </tr>
        `)

                /* #endregion */
                const perks = document.querySelectorAll(`.team${k - 1}Table>tbody>tr.${operator.role}>td>.perks>svg`);

                perks.forEach(function (s) {
                    s.addEventListener('mousedown', function (event) {
                        showHint(s, data1[k][i], event.pageX, event.pageY);
                    });
                });

                function showHint(selector, ...spread) {
                    const element = selector;
                    const hint = document.createElement('div');
                    hint.classList.add('hint');
                    try {
                        hint.innerHTML = (Object.values(perksRus).find(key => key.includes(element.textContent))[1]).replaceAll(/\n/g, "<br>");
                    } catch (e) { console.error(e.message) }
                    //console.log(element);
                    document.body.insertAdjacentElement('afterbegin', hint);
                    const x = event.clientX + window.pageXOffset;
                    hint.style.top = `${spread[2] + 5}px`;
                    //hint.style.left = `${spread[3] + 5}px`;
                    hint.style.left = `${x + 5}px`;
                    hint.style.display = 'block';

                    document.body.addEventListener('mouseup', function () {
                        hint.remove();
                    });

                    document.addEventListener('mouseup', function () {
                        hint.remove();
                    });

                    // element.addEventListener('mousedown', function(event) {
                    //     console.log(event.target.parentElement);
                    //     const x = event.pageX;// - element.offsetLeft;
                    //     const y = event.pageY; //- element.offsetTop;
                    //     //console.log(element.offsetLeft,element.offsetTop);
                    //     hint.style.display = 'block';
                    //     hint.style.top = `${y + 5}px`;
                    //     hint.style.left = `${x + 5}px`;
                    // });

                    // document.addEventListener('mousedown', e => {
                    //     // Получить текущие координаты курсора
                    //     const x = e.clientX;
                    //     const y = e.clientY;

                    //     // Установить позицию .hint относительно координат курсора
                    //     hint.style.left = `${x + 10}px`;
                    //     hint.style.top = `${y + 10}px`;

                    //     // Показать .hint
                    //     console.log(e.target);
                    //     hint.style.display = 'block';
                    //   });

                }
            };

        }

        /* #region  HINT */

        // document.querySelectorAll('.perk').forEach(function(s) {
        //     showHint(s)
        // })

        // function showHint(selector) {
        //     const element = selector;
        //     const hint = document.createElement('div');
        //     hint.classList.add('hint');
        // try {
        //     //lvlPerk = (Object.keys(perksRus).find(key => key.includes(caliber[7][user][][20])))   
        //     hint.innerHTML = (Object.values(perksRus).find(key => key.includes(element.textContent))[1]).replaceAll(/\n/g,"<br>");

        // } catch (e){console.error(e.message)}
        //     document.body.insertAdjacentElement('afterbegin', hint);

        //         element.addEventListener('mousedown', function(event) {
        //             const x = event.pageX;// - element.offsetLeft;
        //             const y = event.pageY; //- element.offsetTop;
        //             //console.log(element.offsetLeft,element.offsetTop);
        //             hint.style.display = 'block';
        //             hint.style.top = `${y + 5}px`;
        //             hint.style.left = `${x + 5}px`;
        //         });

        //     document.body.addEventListener('mouseup', function() {
        //         hint.style.display = 'none';
        //     });
        // }
        /* #endregion */

        /* #region  TOP-STATS */
        function topStat(selector, type) {
            if (!selector || typeof selector !== "string") {
                console.error("Invalid selector argument, expected a string but got " + selector);
                return;
            }
            if (!type || (type !== "max" && type !== "min")) {
                console.error("Invalid type argument, expected 'max' or 'min' but got " + type);
                return;
            }
            let max = Number.MIN_SAFE_INTEGER;
            let min = Number.MAX_SAFE_INTEGER;
            let maxIndex = [];
            let minIndex = [];
            for (let i = 0; i < 8; i++) {
                let currentValue = parseInt(document.querySelectorAll(selector)[i].innerText);
                if (Number(currentValue) > max) {
                    max = Number(currentValue);
                    maxIndex = [i];
                } else if (Number(currentValue) === max) {
                    maxIndex.push(i);
                }
                if (Number(currentValue) < min) {
                    min = Number(currentValue);
                    minIndex = [i];
                } else if (Number(currentValue) === min) {
                    minIndex.push(i);
                }
                //console.log(selector,typeof(maxIndex[0]),typeof(minIndex[0]),maxIndex[0],minIndex[0]);
            }
            if (type === "max") {
                for (let i = 0; i < maxIndex.length; i++) {
                    document.querySelectorAll(selector)[maxIndex[i]].style.cssText = `
                      color: #C49A30;
                      font-weight: 800;
                      `;
                }
            } else if (type === "min") {
                for (let i = 0; i < minIndex.length; i++) {
                    document.querySelectorAll(selector)[minIndex[i]].style.cssText = `
                      color: #C49A30;
                      font-weight: 800;
                      `;
                }
            }
        }
        topStat('.damages', 'max');
        topStat('.kills', 'max');
        topStat('.assists', 'max');
        topStat('.recive', 'min');
        topStat('.deaths', 'min');
        /* #endregion */

        /* #region  GROUPS COLORS */
        (function () {
            let groups = {};
            let elements = document.querySelectorAll('[data-gr]');
            elements.forEach((element) => {
                let grValue = element.getAttribute('data-gr');
                let groupElements = groups[grValue] || (groups[grValue] = []);
                groupElements.push(element);
            });
            let colors = ['lime', '#6aa5ee', 'yellow', 'orange'];
            let colorIndex = 0;
            for (let key in groups) {
                let groupElements = groups[key];
                if (groupElements.length > 1) {
                    let color = colors[colorIndex];
                    groupElements.forEach((groupElement) => {
                        groupElement.style.borderLeft = `4px solid ${color}`;
                    });
                    colorIndex++;
                    if (colorIndex >= colors.length) {
                        break;
                    }
                }
            }
        })();

        /* #endregion */
        // #endregion MAPS

        /* #region  getDataMap */
        getDataMap = function (mapName) {
            const maps = {
                originalMap: [
                    'lv_zalessye_radarbase_overcast',
                    'lv_karhad_emirresidence_evening',
                    'lv_karhad_caravanserai_night',
                    'lv_zalessye_dam_default',
                    'lv_zalessye_passage_overcast',
                    'lv_karhad_hospital_default',
                    'lv_zalessye_oilrig_sunrise',
                    'lv_karhad_village_default',
                    'lv_karhad_hangar_storm',
                    'lv_karhad_hotel_default',
                    'lv_zalessye_forest_default',
                    'lv_zalessye_depot_twilight',
                    'lv_karhad_palmroad_default',
                    'lv_karhad_mall_storm',
                    'lv_zalessye_submarine_default'
                ].map(str => str.split("_").slice(0, -1).join("_")),
                rusMap: [
                    'Радар',
                    'Резиденция Эмира',
                    'Караван-Сарай',
                    'Дамба',
                    'Переправа',
                    'Больница',
                    'Нефтяная вышка',
                    'Деревня',
                    'Гавань Амаль',
                    'Отель',
                    'Лес',
                    'Депо',
                    'Пальмовая дорога',
                    'Торговый центр',
                    'Объект 903'
                ]
            };
            const map = mapName.split("_").slice(0, -1).join("_");
            const index = maps.originalMap.indexOf(map);
            const rusMapName = index > -1 ? maps.rusMap[index] : '';
            const mode = mapName.split("_")[3] == 'pvp' ? 'Столкновение' :
                mapName.split("_")[3] == 'hacking' ? 'Взлом' : '';
            const time = convertSecondsToTime(data2.MatchTimeSeconds);

            return {
                map: rusMapName,
                mode: mode,
                time: time,
                engMap: function (rusMapName) {
                    const index = maps.rusMap.indexOf(rusMapName);
                    return index > -1 ? maps.originalMap[index] : "unknown_map";
                }
            }
        }

        /* #endregion */

        document.querySelector('.map').textContent = `\u00A0${getDataMap(data1[1]).map}`;
        document.querySelector('.time').textContent = getDataMap(data1[1]).time;
        document.querySelector('.mode').innerText = `${getDataMap(data1[1]).mode}:`;

        //  #region WIN / LOSE
        function winLose() {

            function color(color, text) {
                document.querySelector("div.winLose > div").innerText = text;
                document.querySelector("div.winLose > svg > path").style.fill = color;
                document.querySelector("div.winLoseText").style.color = color;
            }
            let winText, colorWin;

            for (let k = 2; k < 4; k++) {
                for (let i = 0; i < 4; i++) {
                    if (data1[k][i][0] == data2.userID) {
                        if (k == 2) {
                            colorWin = "#6aa5ee";
                            //  winTeam = 0;
                        } else {
                            colorWin = "#ff323b";
                            //   winTeam = 1;
                        }
                    }
                }
            }
            color(colorWin, winner({ data: data1, log: data2 }));

        };

        //  #region SCORE
        score = function (teamNumber) {
            let data = data2.Rounds;
            const teamKey = `winner_team_${teamNumber}`;
            const counts = data.reduce((acc, cur) => {
                if (cur.winner_team === teamNumber) {
                    acc[teamKey] += 1;
                }
                return acc;
            }, {
                [teamKey]: 0
            });
            return counts[teamKey];
        }
        // #endregion
        // #endregion 

        //  #region COLOR POINTS

        function setScore() {
           // const winBlue = data2.Rounds.filter(item => item.winner_team === 0);
           // const winRed = data2.Rounds.filter(item => item.winner_team === 1);
          //  console.log(winBlue);
           // const winBlue = data2.Users[0][0].WinRoundCount;

            const color = ['blue', 'red', '#6aa5ee', '#ff323b', 'afterbegin', 'beforeend'];
            //const colorH = ['#6aa5ee', '#ff323b'];
            for (let i = 0; i < 2; i++) {
                for (let k = 0; k < data2.MaxRoundsWon; k++) {
                    document.querySelector(`.${color[i]}Points`).insertAdjacentHTML(color[i + 4], `
                    <svg class="${color[i]}Point${k + 1} points ${color[i]}" viewBox="0 0 70 206" xmlns="http://www.w3.org/2000/svg" width="30px">
                        <path d="m2.859 3.044 62.853.02-.01 116.752-62.63 72.134L2.858 3.044z" fill="${color[i + 2]}" fill-opacity="0" stroke="${color[i + 2]}" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" stroke-width="6" class="layer"/>
                    </svg>
                `);
                }
            }
            //winBlue.forEach(function (e, j) {
              for (let j = 0; j < data2.Users[0][0].WinRoundCount; j++) {
                document.querySelector(`.bluePoint${j + 1} > path`).style.fillOpacity = 1;
              }
            //});

            //winRed.forEach((e, q) => {
            for (let q = 0; q < data2.Users[1][0].WinRoundCount; q++) {
                document.querySelector(`.redPoint${q + 1} > path`).style.fillOpacity = 1;
            }
            //});

        }
        setScore();

        // #endregion
        id = data1[0];
        alldata = [data1, data2]
        //document.querySelector('.foneBg').src = "../img/maps/" + caliber.data[1].replace('_pvp','_default.jpg').replace("_hacking","");
        sounds();
        sortTable(".team1Table");
        sortTable(".team2Table");
        setClassOper();
        
        winLose();
        summRank();
        //console.log("setSelectMe()");
        setSelectMe();
        // console.log("data1: ",data1);
        setBg(data1);
        //setOper();
        

        //history.pushState(null, null, `/?filename=data/${saveData(createdDate)}/${caliber_file.data[0]}`);
    }

    function fixImg() {
        console.log("q");
        document.querySelectorAll('img.baner').forEach((el) => {
            if (el.width > 336) {
                el.style.width = "100%";
            }
        })
    }
    // summRank('team1Table');
    // summRank('team2Table');
    // different();
    //try {

    if (window.location.search.length > 0) {
        loadData(new URLSearchParams(window.location.search).get('filename'));
    } else {
        upload(caliber.data, caliber.log);
        //history.pushState(null, null, `/?filename=data/${saveData(createdDate)}/${caliber_file.data[0]}`);

    }


    //} catch (e) {
    //    console.error("Ошибка в функции upload - ", e.message);
    //}
    /* #endregion END ALL DATAS*/

    /* #region  CALENDAR */
    document.querySelector('.allPoints').insertAdjacentHTML("afterend", `
    
    <div class="slide-out-panel">
        <div class="calendar">
        <div class="custom-file-input">
            <input type="file" multiple id="file-input" accept=".bytes">
            <img class = 'rec icons' src='img/REC.png'>
                <label for="file-input">
                <img class ='folder icons' src='img/FOLDER.png'>
                </label>
	        </div>
            <div class="container">
            <select id="month-selector">
                <option value="1">Январь</option>
                <option value="2">Февраль</option>
                <option value="3">Март</option>
                <option value="4">Апрель</option>
                <option value="5">Май</option>
                <option value="6">Июнь</option>
                <option value="7">Июль</option>
                <option value="8">Август</option>
                <option value="9">Сентябрь</option>
                <option value="10">Октябр</option>
                <option value="11">Ноябрь</option>
                <option value="12">Декабрь</option>
            </select>
                <table>
                    <thead>
                        <tr>
                        <th>Пн</th>
                        <th>Вт</th>
                        <th>Ср</th>
                        <th>Чт</th>
                        <th>Пт</th>
                        <th>Сб</th>
                        <th>Вс</th>
                        </tr>
                    </thead>
                <tbody id="calendar-body">
                </tbody>
                </table>
            </div>
        </div>
    </div>
    <button id="show-panel">></button>
    `);


    document.querySelector('.slide-out-panel').insertAdjacentHTML("afterbegin", `
    <div class="containerInput">
        <input id="searchInput" list="suggestionsList" placeholder="Фильтр..." style="text-transform: capitalize" autocomplete="on" class="search" type="text">
        <datalist id="suggestionsList">
        </datalist>
        <span class="clearInput">❌</span>
    </div>    
        <div id="list-container"></div>
    `);
    const button = document.getElementById('show-panel');
    const panel = document.querySelector('.slide-out-panel');
    const tables = document.querySelector('.container_tables');
    const recElem = document.querySelector('.rec');

    button.addEventListener('mousemove', () => {
        nowDay();
        document.querySelector('.container_tables').classList.remove('animate__animated');
    });

    button.addEventListener('click', () => {
       // console.log("panel");
       if (button.textContent == ">") { 
       let mes = window.location.search.match(/data\/(\d{4})\/(\d{2})\/(\d{2})\/(\w+-\w+-\w+-\w+-\w+)/)[2]
            document.querySelector("#month-selector").value = +mes.replace('/^0/g',"");
            document.querySelector("#month-selector").dispatchEvent(new Event("change"));
            let day = window.location.search.match(/data\/(\d{4})\/(\d{2})\/(\d{2})\/(\w+-\w+-\w+-\w+-\w+)/)[3];
            document.querySelectorAll('#calendar-body > tr > td').forEach((el) => {
            if (+el.textContent == +day) {
                el.click();
            }
        });

            let id = window.location.search.match(/data\/(\d{4})\/(\d{2})\/(\d{2})\/(\w+-\w+-\w+-\w+-\w+)/)[4];
            setTimeout(() => {
                $("#list-container > ul > li > span:contains('" + id + ".json" + "')").closest('li').focus();
             }, 1000);
       }
         
         

        panel.classList.toggle('show');
        //tables.classList.add('animate__animated');
        tables.classList.toggle('show');
        if (localStorage.getItem("rec") === "true") {
            recElem.style.filter = "grayscale(0%)";
        } else {
            recElem.style.filter = "grayscale(100%)";
        }
        if (button.innerText == '>') {
            button.innerText = '<'
        } else {
            button.innerText = ">"
        }
    });


    recElem.addEventListener('click', function () {

        if (localStorage.getItem("rec") === "false" || !localStorage.getItem("rec")) {
            localStorage.setItem("rec", true);
            recElem.style.filter = "grayscale(0%)";
        } else {
            localStorage.setItem("rec", false);
            recElem.style.filter = "grayscale(100%)";
        }
        //save();
    });

    const calendarBody = document.getElementById("calendar-body");
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    function getDaysInMonth(month, year) {
        return new Date(year, month + 1, 0).getDate();
    }
    var selectedDate, strPath;
    function generateCalendar(month, year) {
        calendarBody.innerHTML = "";
        const daysInMonth = getDaysInMonth(month, year);
        //console.log(daysInMonth);
        let firstDayOfMonth = new Date(year, month, 1).getDay() - 1;
        if (firstDayOfMonth === -1) {
            firstDayOfMonth = 6;
        }
        //console.log("первый день месяца - ",firstDayOfMonth);
        let date = 1;
        let numRows = Math.ceil((daysInMonth + firstDayOfMonth) / 7);
        for (let i = 0; i < numRows; i++) {
            const row = document.createElement("tr");
            for (let j = 0; j < 7; j++) {
                const cell = document.createElement("td");
                if (i === 0 && j < firstDayOfMonth) {
                    // Пустые ячейки до первого дня месяца
                    cell.textContent = "";
                } else if (date > daysInMonth) {
                    // Пустые ячейки после последнего дня месяца
                    cell.textContent = "";
                } else {
                    // Добавляем дату
                    cell.textContent = date;
                    date++;
                    // Назначаем обработчик клика на ячейку

                    function formatDate(date) {
                        var day = date.getDate();
                        var month = date.getMonth() + 1;
                        var year = date.getFullYear();
                        return day + '.' + month + '.' + year;
                    }

                    cell.addEventListener("click", function (e) {
                        console.log("click day");
                        clickDay = setZero(cell.textContent);
                        document.querySelector('input.search').value = localStorage.getItem("filter");
                        document.querySelector('input.search').dispatchEvent(new Event('input', { bubbles: true }));
                        document.querySelectorAll('#calendar-body>tr>td').forEach((element) => {
                            element.style.outline = "unset";
                        })
                        e.target.style.outline = "2px ridge red";
                        selectedDate = new Date(2023, month_selector.value - 1, 1);
                        //var formattedDate = formatDate(selectedDate);
                        strPath = `2023/${setZero(selectedDate.getMonth() + 1)}/${setZero(cell.textContent)}`;
                        //console.log(`2023/${setZero(selectedDate.getMonth() + 1)}/${setZero(cell.textContent)}`);

                        getFileList(`data/2023/${setZero(selectedDate.getMonth() + 1)}/${setZero(cell.textContent)}`);
                        //processFile({name:"https://exlusive.pro/data/2023/05/19/3888ed9f-dce6-4f59-b7d0-30f6266b6c23_12431_2023-05-19_21-13-39_10468_000.bytes"},true);
                        //console.log(`data/2023/${setZero(selectedDate.getMonth() + 1)}/${setZero(cell.textContent)}`);
                        repairFile(`data/2023/${setZero(selectedDate.getMonth() + 1)}/${setZero(cell.textContent)}`);

                        //history.pushState(null, null, `/?filename=data/${saveData(createdDate)}/${caliber_file.data[0]}`);
                        //setUrl();
                        //getFileList();

                        
                        //     const imgBasket = document.querySelectorAll('.basket')
                        //     imgBasket.forEach(function (item) {
                        //         item.addEventListener('click', (e) => {
                        //             console.log(e.target.parentElement.parentElement);
                        //             e.target.parentElement.parentElement.remove();
                        //             //console.log(e.target.parentElement.parentElement.children[0].innerText.match(/(\w{1,8}.*$)/g)[0]);
                        //             localStorage.removeItem(Object.keys(localStorage).
                        //                 find(key => key.includes(e.target.parentElement.parentElement.children[0].innerText.match(/(\w{1,8}.*$)/g)[0])));
                        //         });
                        //     });

                        // });

                        // function myFunction(key) {
                        //     let data = JSON.parse(localStorage.getItem(key));
                        //     upload(data[0], data[1]);
                        // }

                    });

                }
                row.appendChild(cell);

            }
            calendarBody.appendChild(row);
        }
        setButtonFavorite();
    }
    /* #endregion */

    // Создаем календарь на текущий месяц и год
    const month_selector = document.querySelector("#month-selector");
    month_selector.value = new Date().getMonth() + 1;
    //console.log(`${month_selector.value}, ${new Date().getFullYear()}`);
    generateCalendar(month_selector.value - 1, new Date().getFullYear());
    
    // nowDay();

    /* #region  обновить список игр */
    let span;
    function getFileList(folder) {
        //console.clear();
        $.get("https://exlusive.pro/php/loadList.php", { folder: folder }, function (data) {
            document.querySelector("#list-container").innerHTML = "";

            document.querySelector('#list-container').insertAdjacentHTML("afterbegin", `
            <ul>
            `);
            //console.log(data);
            data.forEach(element => {
                //console.log("check",element);
                if (!nickName){nickName = "NO"}
                fetch(`data/${strPath}/${element}`)
                    .then(response => response.json())
                    .then(data => {
                        // Здесь можно выполнить дополнительную обработку данных
                        if (data.caliber.data[1]) {




                        document.querySelector('#list-container > ul').insertAdjacentHTML("afterbegin", `
                  <li map="${getDataMap(data.caliber.data[1]).map}" status="${winner(data.caliber)}" mode="${getDataMap(data.caliber.data[1]).mode}">
                    <span title="${element.replace(".json","").toUpperCase()}"><svg class="star" viewBox="0 0 309.879 204.344" xmlns="http://www.w3.org/2000/svg" xmlns:bx="https://boxy-svg.com"><path class="bg_star" style="fill:#9f9f9f" d="M25.689 0h284.19l-40.954 100.344 40.954 104H25.689C11.501 204.344 0 192.843 0 178.655V25.689C0 11.501 11.501 0 25.689 0Z"/><path class="star_black" d="M126.834 38.473 141.352 87.1l50.733-1.219-41.761 28.833 16.837 47.874-40.327-30.807-40.327 30.807 16.837-47.874-41.761-28.833 50.733 1.219Z" style="fill:#000" bx:shape="star 126.834 107.082 68.609 68.609 0.36 5 1@8f4316da"/></svg>${element}</span>
                    <span>${nickName.toUpperCase()}</span>
                    <span>${getDataMap(data.caliber.data[1]).map}</span>
                    <span>${winner(data.caliber)}</span>
                    <span>${getDataMap(data.caliber.data[1]).mode}</span>
                    <span>${convertToLocalTime(data.caliber.log.time)}</span>
                  </li>
                `)
                // console.log(getDataMap(data.caliber.data[1]).map);
                // console.log("data.caliber.log.time",data.caliber.log.time);
                // console.log("convert",convertToLocalTime(data.caliber.log.time));




            }

                        ///////////////////////////////////////////////////////////////////
                        setFav();
                        applyFavFromLocalStorage();
                        sortList();
                        document.querySelector('input.search').dispatchEvent(new Event('input', { bubbles: true }));
                        setCounts();
                    })
                    .catch(error => console.error(error));
            });


            // Создаем обработчики событий после создания списка
            createEventList(strPath, "xyu");
            setSearch();

        });
    }

    function setClassOper() {
        const lines = document.querySelectorAll('.line');
        const hrefValues = ['assault', 'gunner', 'medic', 'sniper', 'assaultR', 'gunnerR', 'medicR', 'sniperR'];
        lines.forEach((line, index) => {
            const useElement = line.querySelector('svg use');
            if (useElement) {
                useElement.setAttribute('xlink:href', `#${hrefValues[index]}`);
            }
        });
    }

    function setCounts() {
        document.querySelector(".totalStatUl")?.remove();
        let total = document.querySelectorAll("ul li:not([style*='display: none'])").length;
        let win = document.querySelectorAll("ul li[status*='ПОБЕДА']:not([style*='display: none'])").length;
        let lose = document.querySelectorAll("ul li[status*='ПОРАЖЕНИЕ']:not([style*='display: none'])").length;;
        document.querySelector("ul").insertAdjacentHTML("afterend", `
            <div title="Победы/Поражения/Общее количество игр" class="totalStatUl">
                <span class="winLiCountArrow">&#9650;</>
                <span class="winLiCount">${win}</>
                <span class="loseLiCountArrow">&#9660;</>
                <span class="loseLiCount">${lose}</>
                <span class="totalLiCount">= ${total}</>
            </div>
        `);
    }

    function convertToUTC(timeString) {
        const [hours, minutes, seconds] = timeString.split(":");
        const currentDate = new Date();
        const utcDate = new Date(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate(), hours, minutes, seconds);

        const leadingZero = (value) => (value < 10 ? "0" : "") + value; // Функция для добавления ведущего нуля

        const utcTimeString = `${leadingZero(utcDate.getUTCHours())}:${leadingZero(utcDate.getUTCMinutes())}:${leadingZero(utcDate.getUTCSeconds())}`;
        if (hours > 0 && utcDate.getUTCHours() <= 23) {
            date.replace(/\/\d+\/(\d+)/g, function(match, captureGroup) {
                return "/" + (parseInt(captureGroup) - 1) + "/";
              });
        }
        return utcTimeString;
    }

    function convertToLocalTime(utcTime) {
        const [hours, minutes, seconds] = utcTime.split(':').map(Number);
        const date = new Date();
        date.setUTCHours(hours);
        date.setUTCMinutes(minutes);
        date.setUTCSeconds(seconds);
      
        const timezoneOffset = date.getTimezoneOffset();
        const totalMinutes = hours * 60 + minutes - timezoneOffset;
        const localHours = Math.floor(totalMinutes / 60) % 24;
        const localMinutes = totalMinutes % 60;
        const localSeconds = seconds;
      
      
        return `${padZero(localHours)}:${padZero(localMinutes)}:${padZero(localSeconds)}`;
      }
      

    function padZero(number) {
        return number.toString().padStart(2, '0');
    }
      
 

    function createEventList(fecha, key) {
        const ul = document.querySelector('#list-container > ul');
        ul.addEventListener('click', (e) => {
            if (e.target.localName == "ul") return;
            if (key == e.target.closest('li').querySelector('span:nth-child(1)').textContent) {
                const li = e.target.closest('li');
                if (li) {
                    let span = li.querySelector('span:nth-child(1)').textContent.replace('.json', '');
                    document.querySelector('.team1Table').innerHTML = '';
                    document.querySelector('.team2Table').innerHTML = '';
                    document.querySelector('.bluePoints').innerHTML = '';
                    document.querySelector('.redPoints').innerHTML = '';
                    loadData(`data/${fecha}/${span}`);
                    history.pushState(null, null, `/?filename=data/${fecha}/${span}`);

                }
            } if (key == "xyu") {
                const li = e.target.closest('li');
                if (li) {
                    let span = li.querySelector('span:nth-child(1)').textContent.replace('.json', '');
                    document.querySelector('.team1Table').innerHTML = '';
                    document.querySelector('.team2Table').innerHTML = '';
                    document.querySelector('.bluePoints').innerHTML = '';
                    document.querySelector('.redPoints').innerHTML = '';
                    loadData(`data/${fecha}/${span}`);
                    history.pushState(null, null, `/?filename=data/${fecha}/${span}`);
                }
            }
        });
    }

    function winner(mainObj) {
        if (!mainObj.log.userID) return;
        function findValueInObject(obj) {
            //console.log("userID", userID );
            userID = mainObj.log.userID;

            const result = {
                team: null,
                pos: null
            };
            for (let i = 0; i < 4; i++) {
                //  console.log("obj.data[2][i][0]", obj.data[2][i][0]);
                if (obj.data[2][i][0] == userID) {
                    //  console.log(obj.data[2][i][2]);
                    nickName = obj.data[2][i][2];
                    //  console.log(obj.data[2][i][0],userID);
                    result.team = 0;
                    result.pos = i;
                    return result;
                }
            }

            for (let i = 0; i < 4; i++) {
                //   console.log("obj.data[3][i][0]", obj.data[3][i][0]);
                if (obj.data[3][i][0] == userID) {
                    //console.log(obj.data[3][i][2]);
                    nickName = obj.data[3][i][2];
                    //  console.log(obj.data[3][i][0],userID);
                    result.team = 1;
                    result.pos = i;
                    return result;
                }
            }
            return result;
        }
        const result = findValueInObject(mainObj);

        if (mainObj.log.Users[result.team][result.pos].WinRoundCount == mainObj.log.MaxRoundsWon) {
            return "ПОБЕДА";
        } else {
            return "ПОРАЖЕНИЕ";
        }
    }

    function setFav() {
        document.querySelectorAll('svg.star').forEach(item => {
            item.onclick = function (event) {
                event.stopPropagation();
                event.target.parentElement.classList.toggle('fav');

                let id = event.target.closest('li').querySelector('span:first-child').textContent;
                let path = `2023/${setZero(document.querySelector('#month-selector').value)}/${clickDay}`;

                if (event.target.parentElement.classList.contains('fav')) {
                    if (localStorage.getItem(id)) {
                        localStorage.removeItem(id);
                    } else {
                        localStorage.setItem(id, path);
                    }
                } else {
                    localStorage.removeItem(id);
                }
            }
        })
    }

    function applyFavFromLocalStorage() {
        let elements = document.querySelectorAll('li');
        elements.forEach(element => {
            let id = element.querySelector('span:first-child').textContent;
            if (localStorage.getItem(id)) {
                element.querySelector('svg').classList.add('fav');
            }
        });
    }

    function setButtonFavorite() {
        const buttonFavorite = document.querySelector('#calendar-body>tr:last-child>td:last-child');
        buttonFavorite.style.color = '#FFC83D';
        buttonFavorite.innerHTML = "&#9733;";
        buttonFavorite.addEventListener('click', () => {
            document.querySelector("#list-container").innerHTML = "";
            document.querySelector('#list-container').insertAdjacentHTML("afterbegin", "<ul>");
            const keys = Object.keys(localStorage);
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                // console.log("check",key);
                //  console.log(keys[i]);
                // console.log(key);
                // console.log(localStorage.getItem(key));
                fetch(`data/${localStorage.getItem(key)}/${key}`)
                    .then(response => response.json())
                    .then(data => {
                        document.querySelector('#list-container > ul').insertAdjacentHTML("afterbegin", `
                            <li>
                                <span><svg class="star" viewBox="0 0 309.879 204.344" xmlns="http://www.w3.org/2000/svg" xmlns:bx="https://boxy-svg.com"><path class="bg_star" style="fill:#9f9f9f" d="M25.689 0h284.19l-40.954 100.344 40.954 104H25.689C11.501 204.344 0 192.843 0 178.655V25.689C0 11.501 11.501 0 25.689 0Z"/><path class="star_black" d="M126.834 38.473 141.352 87.1l50.733-1.219-41.761 28.833 16.837 47.874-40.327-30.807-40.327 30.807 16.837-47.874-41.761-28.833 50.733 1.219Z" style="fill:#000" bx:shape="star 126.834 107.082 68.609 68.609 0.36 5 1@8f4316da"/></svg>${key}</span>
                                <span>${getDataMap(data.caliber.data[1]).map}</span>
                                <span>${winner(data.caliber)}</span>
                                <span>${getDataMap(data.caliber.data[1]).mode}</span>
                                <span>${data.caliber.log.time}</span>
                            </li>
                            `)
                        createEventList(localStorage.getItem(key), key);
                        setFav();
                        applyFavFromLocalStorage();
                    })
                    .catch(error => console.error(error));
            };
            //  createEventList(localStorage.getItem(key));
        })
    }
    setButtonFavorite();



    // setFav()


    function repairFile(folder) {
        $.get("https://exlusive.pro/php/repair.php", { folder: folder })
            .done(function (data) {
                //$('td[style*="outline"][style*="red"]').click();
                //return
                //console.log("tse");
                // Ваши действия после получения данных
            })
            .fail(function (error) {
                console.log("Ошибка:", error);
                // Обработка ошибки
            });
    }


    /* #endregion */

    month_selector.addEventListener('change', () => {
        generateCalendar(month_selector.value - 1, new Date().getFullYear());
    });
    //generateCalendar(currentMonth, currentYear);

    // #region BUTTON OPEN DIFFERENT DATA BASE

    const label = document.querySelector('.custom-file-input');

    label.addEventListener('click', () => {
        const path = '%USERPROFILE%\\AppData\\LocalLow\\1CGS\\Caliber\\Replays';
        const textarea = document.createElement('textarea');
        textarea.textContent = path;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        //console.log('Путь скопирован в буфер обмена');
    });
    // #endregion

    let createdDate;

    function processFile(file, internet = false) {
        if (internet === false) {
            const file = event.target.files[0];
            const parts = file.name.split("_");
            userID = parts[1];
            date = parts[2].replaceAll("-", "/");
            time = parts[3].replaceAll("-", ":");
            time = convertToUTC(time);
            createdDate = new Date(file.lastModified);
            const reader = new FileReader();
            reader.readAsText(file);
            reader.onload = (event) => {
                let caliber_b = [];
                let caliber_b2 = [];
                let data = event.target.result.match(/^(.*\n){0,2}.*/g);
                console.log(data);
                data = data[0].replaceAll(/[^\x20-\x7E]+/g);
                
                data = data.replaceAll(/[^ -~]+/g);
                data = data.replace(/.*?({.*)/, "$1");
                
                caliber_b = data.match(/^(.*14":\[\]\})\w/s)[1];
                  try {
                    
                caliber_b2 = data.match(/({"Log":.*:true})/s)[1];

                function fix(obj) {
                    let brokenObject = obj;
                    let fixedObject = brokenObject.replace(/'/g, '"').replace(/([a-zA-Z]+):/g, '"$1":');
                    fixedObject = JSON.parse(fixedObject);
                    return fixedObject;
                }

                caliber_b = fix(caliber_b);
                caliber_b2 = fix(caliber_b2);

                let caliber_file = caliberFunc(caliber_b, caliber_b2)
                document.querySelectorAll('.points').forEach(item => {
                    item.remove();
                })
                upload(caliber_file.data, caliber_file.log);
                updateDB(caliber_file);


                setUrl = function () {
                    history.pushState(null, null, `/?filename=data/${saveData(createdDate)}/${caliber_file.data[0]}`);
                }
                setUrl();
                  } catch (e) {
                  alert("Файл поврежден")
                  location.reload();
                console.error(e.message)
                }
            }
            //saveData(createdDate);
        } else {
            console.log("auto-file open");
            //const file = event.target.files[0];
            const parts = file.name.split("_");
            console.log("userID", userID);
            userID = parts[1];
            date = parts[2].replaceAll("-", "/");
            time = parts[3].replaceAll("-", ":");
            time = convertToUTC(time);
            createdDate = new Date(file.lastModified);
            //const reader = new FileReader();
            //reader.readAsText(file);
            //reader.onload = (event) => {
            $.ajax({
                url: file.name,
                dataType: "text",
                success: function (result) {
                    console.log("url:", file.name);
                    //console.log("result: ",result);
                    let caliber_b = [];
                    let caliber_b2 = [];
                    let data = result.match(/^(.*\n){0,2}.*/g);
                    data = data[0].replaceAll(/[^\x20-\x7E]+/g);
                    data = data.replaceAll(/[^ -~]+/g);
                    data = data.replace(/.*?({.*)/, "$1");
                    caliber_b = data.match(/^(.*14":\[\]\})\w/s)[1];
                    try {
                        caliber_b2 = data.match(/({"Log":.*:true})/s)[1];
                        //console.log("caliber_b", caliber_b);
                        function fix(obj) {
                            let brokenObject = obj;
                            let fixedObject = brokenObject.replace(/'/g, '"').replace(/([a-zA-Z]+):/g, '"$1":');
                            fixedObject = JSON.parse(fixedObject);
                            return fixedObject;
                        }

                        caliber_b = fix(caliber_b);
                        caliber_b2 = fix(caliber_b2);

                        let caliber_file = caliberFunc(caliber_b, caliber_b2)
                        document.querySelectorAll('.points').forEach(item => {
                            item.remove();
                        })
                        // console.log("caliber_file:",caliber_file);
                        upload(caliber_file.data, caliber_file.log);
                        updateDB(caliber_file);


                        // setUrl = function () {
                        //     history.pushState(null, null, `/?filename=data/${saveData(createdDate)}/${caliber_file.data[0]}`);
                        // }
                        // setUrl();
                    } catch (e) {
                        //  alert("Файл из интернета поврежден:", e.message)
                        console.error(e.message)
                    }
                }
            });

            //}
        }
    }



    const fileInput = document.getElementById('file-input');
    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        console.log("file:", file);
        processFile(file);
    });

    //#endregion CALENDAR
    /* #endregion */

    /* #region  REFRESH PAGE */


    // const filePath = 'js/game.js';

    // let lastModifiedTime = null;

    // function checkFile() {
    //     const xhr = new XMLHttpRequest();
    //     xhr.open('HEAD', filePath);
    //     xhr.onreadystatechange = function () {
    //         if (xhr.readyState === 4) {
    //             if (xhr.status === 200) {
    //                 const currentModifiedTime = xhr.getResponseHeader('Last-Modified');
    //                 if (lastModifiedTime !== null && lastModifiedTime !== currentModifiedTime) {
    //                     // location.reload(true);
    //                     location.href = location.href + '?rand=' + Math.random();
    //                 } else {
    //                     console.log('Файл не изменился. Последнее изменение: ' + currentModifiedTime);
    //                 }
    //                 lastModifiedTime = currentModifiedTime;
    //             } else {
    //                 console.log('Ошибка проверки файла: ' + xhr.status);
    //             }
    //         }
    //     };
    //     xhr.send();
    // }

    // запускаем проверку каждые 10 секунд
    //setInterval(checkFile, 10000);
    /* #endregion */

    /* #region  FUNCTION SET_ZERO */
    function setZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }
    /* #endregion */

    /* #region  FUNCTION SAVE DATA */
    function saveData(createdDate) {
        // const map = document.querySelector('.map').textContent.trim();
        // const win = document.querySelector("div.winLoseText").textContent.slice(0, document.querySelector("div.winLoseText").textContent.length - 1);
        try {
            const day = `${createdDate.getFullYear()}/${setZero(createdDate.getMonth() + 1)}/${setZero(createdDate.getDate())}`;
            return day;
        } catch { }
        // if (localStorage.getItem('rec') == 'true') {
        // localStorage.setItem(`${day} ${id} ${win} ${map}`, JSON.stringify([alldata[0], alldata[1]]));
        //  localStorage.setItem(`${id}`, `${day}  ${win} ${map}`);
        // }
    }

    /* #endregion */
    //try {
    //let map;
    // document.querySelector('.geo').addEventListener('click', () => {
    //     //let humap = caliber.data[1].split('_').slice(1, -1).join('_');
    //     let humap = getDataMap().engMap(document.querySelector('.map').textContent.replace(' ',''));
    //     //console.log("map: ", map);
    //     if (!document.querySelector('.imgMap')) {
    //         document.body.insertAdjacentHTML('afterbegin', `
    //     <img class="imgMap" src="https://caliberfan.ru/wp-content/themes/caliberfan/img/maps/tablet/UI_Map_${humap}_hacking.png">
    //     `);
    //     } else document.querySelector('.imgMap').remove();
    //     //$('.imgMap').fadeToggle(1000);
    // })
    //}
    // catch (e) {
    //     console.log('Ошибка в загрузке карты, ее нет на сайте - ', e.message);
    // }

    function summRank() {
        document.querySelector(`.different`).innerHTML = '';
        const divRank = document.querySelectorAll('.rank');
        let team1Diff = 0;
        let team2Diff = 0;

        divRank.forEach((element, index) => {
            const number = parseInt(element.textContent);

            if (index < 4) {
                team1Diff += number;
            } else if (index < 8) {
                team2Diff += number;
            }
        });

        document.querySelector(`.different`).insertAdjacentHTML('afterbegin', `
        <span class='team2TableDiff'>${team2Diff}</span>
        `);
        document.querySelector(`.different`).insertAdjacentHTML('afterbegin', `
        <span class='team1TableDiff'>${team1Diff}</span>
        `);
        document.querySelector(`.team1TableDiff`).insertAdjacentHTML('afterend', `
                 <span class='diffTeams'>${Math.abs(team1Diff - team2Diff)}</span>
             `);
        let max = Math.max(+team1Diff, +team2Diff);
        document.querySelectorAll(`.different>span`).forEach((el) => {
            if (el.textContent == max) {
                el.style.color = "#c49a30";
            }
        });
        //$(`span:contains('${max}')`).css('color', '#c49a30');
    }

    function sortList() {
        const divLi = document.querySelectorAll('li');
        let timesInSeconds = [];
        divLi.forEach((element) => {
            let divSpan = element.querySelector('span:last-Child');
            let timeInSeconds = getSec(divSpan.textContent);
            timesInSeconds.push(timeInSeconds);
        });

        let sortedTimes = [...timesInSeconds].sort((a, b) => b - a);

        divLi.forEach((element, index) => {
            let divSpan = element.querySelector('span:last-Child');
            let timeInSeconds = getSec(divSpan.textContent);
            let order = sortedTimes.indexOf(timeInSeconds);
            element.style.order = order;
            element.id = `focus${order}`;
            element.tabIndex = order;
        });

        function getSec(time) {
            let timeString = time.trim();
            let timeParts = timeString.split(':');
            let timeInSeconds = (+timeParts[0]) * 3600 + (+timeParts[1]) * 60 + (+timeParts[2]);
            return timeInSeconds;
        }

    }

    /* #region  ANIMATION */
    window.onload = function () {
        document.querySelector('.container_tables').classList.add('animate__zoomIn')

        document.querySelector('.container_tables').style.opacity = "1";
        document.querySelector('.vLoading').style.display = 'none';
        document.querySelector('.winLose').style.display = '';
        document.querySelector('.winLoseCont').classList.add('animate__fadeInTopLeft')
        document.querySelector('.stats').style.display = '';
        document.querySelector('.stats > .wrapper').classList.add('animate__fadeInTopRight')
        document.querySelector(`.allPoints`).style.display = "";
        document.querySelector(`.bluePoints`).classList.add('animate__fadeInDown');
        document.querySelector(`.redPoints`).classList.add('animate__fadeInDown');
        document.querySelector('.timeScore > h1').style.display = '';
        document.querySelector('.timeScore').classList.add('animate__fadeInDown')
        document.querySelector('.timeScore').style.setProperty('--animate-duration', '1.2s');
    }
    /* #endregion */


    /* #region  SOUNDS */

    function sounds() {
        function addClickSound(selector, event, path, vol) {
            const elements = document.querySelectorAll(selector);
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                element[event] = handleClickSound;
            }

            function handleClickSound(e) {
                if (event === 'click' && e.button !== 0) return;
                const audio = new Audio(path);
                audio.volume = vol;
                audio.play().catch(function (error) {
                    console.log('Error playing sound: ' + error);
                });
            }
        }

        addClickSound('.points', "onmouseenter", '../mp3/move.mp3', 0.035);
        addClickSound('img', "onmouseenter", '../mp3/move.mp3', 0.035);
        addClickSound('.line', "onmouseenter", '../mp3/menu.mp3', 0.1);
        if (button.textContent == "<") { 
            addClickSound('button', "onclick", '../mp3/click.mp3', 0.01);
        }
        addClickSound('tbody', "onclick", "../mp3/click.mp3", 0.01);
        addClickSound('img', "onclick", "../mp3/click.mp3", 0.01);
        addClickSound('li', "onclick", "../mp3/click.mp3", 0.01);
        addClickSound('li', "onmouseenter", "../mp3/move.mp3", 0.035);

        document.addEventListener('contextmenu', event => event.preventDefault());  // RMB
    }

    /* #endregion */


    /* #region  AJAX UPDATE DATABASE */

    function updateDB(dataFile) {
        //var folderPath2 = "/data/" + saveData(createdDate) + "/";
        let folderPath = "/data/" + dataFile.log.date + "/"
        //console.log("fp: ",folderPath);
        //console.log("fp2: ",folderPath2);
        //  console.log(dataFile.data[0]);
        var data = {
            caliber: dataFile,
            metadata: {
                // userId: dataFile.data[0][1],
                //date: dataFile[0][2],
                createdAt: folderPath,
                // time: dataFile[0][3]
            },
            folderPath: folderPath
        };

        $.ajax({
            url: '/php/query.php',
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            success: function (response) {
                console.log('Данные успешно обновлены');
                console.log(response);
            },
            error: function (error) {
                console.error('Ошибка при обновлении данных');
                console.error(error);
            }
        });
    }


    /* #endregion */

    function loadData(fileName) {
        //console.log(fileName);
        //console.log("tset:",`data/2023/${setZero(selectedDate.getMonth()+1)}/${setZero(cell.textContent)}`);
        //const urlParams = new URLSearchParams(window.location.search);
        // const fileName = urlParams.get('filename');
        //console.log(`../${fileName}.json`);
        $.ajax({
            url: `../${fileName}.json`,
            dataType: "json",
            success: function ({ caliber }) {
                console.log(`${caliber.data[1].split('_').slice(1, -1).join('_')}:`, caliber);
                upload(caliber.data, caliber.log);
                setBg(caliber.data);
                // console.log("caliber.data:", caliber.data);
            }
        });
        //updateDB(caliber);
    }

    /* #region  SORT_TABLE */
    function sortTable(table) {
        try {
            const team1Table = document.querySelector(table);

            const rowAssault = team1Table.querySelector("img.oper[src*='_A.png']");
            const rowGunner = team1Table.querySelector("img.oper[src*='_G.png']");
            const rowMedic = team1Table.querySelector("img.oper[src*='_M.png']");
            const rowSniper = team1Table.querySelector("img.oper[src*='_S.png']");

            const firstRow = team1Table.querySelectorAll('tbody')[1];
            team1Table.insertBefore(rowAssault.closest('tbody'), firstRow);

            const secondRow = team1Table.querySelectorAll('tbody')[2];
            team1Table.insertBefore(rowGunner.closest('tbody'), secondRow);

            const thirdRow = team1Table.querySelectorAll('tbody')[3];
            team1Table.insertBefore(rowMedic.closest('tbody'), thirdRow);

            const fourthRow = team1Table.querySelectorAll('tbody')[4];
            team1Table.insertBefore(rowSniper.closest('tbody'), fourthRow);

            document.querySelectorAll('.team1Table>tbody>tr>td>svg')[0].innerHTML = `<svg class="assaultLogo"><title></title><use xlink:href="#assault"></use></svg>`
            document.querySelectorAll('.team1Table>tbody>tr>td>svg')[2].innerHTML = `<svg class="gunnerLogo"><title></title><use xlink:href="#gunner"></use></svg>`
            document.querySelectorAll('.team1Table>tbody>tr>td>svg')[4].innerHTML = `<svg class="medicLogo"><title></title><use xlink:href="#medic"></use></svg>`
            document.querySelectorAll('.team1Table>tbody>tr>td>svg')[6].innerHTML = `<svg class="sniperLogo"><title></title><use xlink:href="#sniper"></use></svg>`
            /////////////
            document.querySelectorAll('.team2Table>tbody>tr>td>svg')[0].innerHTML = `<svg class="assaultRLogo"><title></title><use xlink:href="#assaultR"></use></svg>`
            document.querySelectorAll('.team2Table>tbody>tr>td>svg')[2].innerHTML = `<svg class="gunnerRLogo"><title></title><use xlink:href="#gunnerR"></use></svg>`
            document.querySelectorAll('.team2Table>tbody>tr>td>svg')[4].innerHTML = `<svg class="medicRLogo"><title></title><use xlink:href="#medicR"></use></svg>`
            document.querySelectorAll('.team2Table>tbody>tr>td>svg')[6].innerHTML = `<svg class="sniperRLogo"><title></title><use xlink:href="#sniperR"></use></svg>`
        } catch { }
    }
    /* #endregion */

    function nowDay() {
        document.querySelectorAll('#calendar-body > tr > td').forEach((el) => {
            if (el.textContent == new Date().getDate()) {
                el.style.cssText = `
                color: #6aa5ee;
                margin-left: 0;
                padding-left: 0;
                font-weight: 600;
                `;
            }
        });
    }
    function setSelectMe() {
        let divMe = $(`td:contains('${nickName}')`).closest('.line');
        let howTeam = divMe[0].getAttribute('class').slice(-1)
        selectMe(howTeam);
        function selectMe(team) {
            if (team == "R") {
                divMe.css({
                    "border-left": "4px solid #FFC83D",
                    "background-color": "rgba(255,50,59,30%)"
                })
            } else {
                divMe.css({
                    "border-left": "4px solid #FFC83D",
                    "background-color": "rgba(106,165,238,30%)"
                })
            }
        }
        setOper();
        divMe[0].click();
    }

    function setBg(obj) {

        document.querySelector('.foneBg').style.opacity = "0";
        setTimeout(() => {
            document.querySelector('.foneBg').src = "../img/maps/" + obj[1].replace('_pvp','_default.jpg').replace('_hacking',"_default.jpg");
            document.querySelector('.foneBg').style.opacity = "1";
        }, 1000); // Задержка 300 миллисекунд (0.3 секунды)

        
    }

    function setSearch() {
        var ul = document.querySelector('ul');
        var input = document.querySelector('input.search');
        input.style.display = 'unset';
        input.addEventListener('input', function () {
          localStorage.setItem("filter", input.value);
          var searchValue = input.value.toLowerCase();
          var searchWords = searchValue.split(' '); // Разделяем вводимое значение на отдельные слова
          for (var i = 0; i < ul.children.length; i++) {
            var li = ul.children[i];
            var text = li.textContent.toLowerCase();
            var containsAllWords = searchWords.every(function (word) {
              return text.includes(word);
            });
            if (containsAllWords) {
              li.style.display = '';
            } else {
              li.style.display = 'none';
            }
          }

            const dataList = document.getElementById('suggestionsList');
            const listItems = document.querySelectorAll("li>span:nth-child(2)");
            const addedOptions = new Set();

            // Очистка списка
            while (dataList.firstChild) {
                dataList.removeChild(dataList.firstChild);
            }

            listItems.forEach((el) => {
                const optionValue = el.textContent.trim();
                if (!addedOptions.has(optionValue)) {
                    const newOption = document.createElement('option');
                    newOption.value = optionValue;
                    dataList.appendChild(newOption);
                    addedOptions.add(optionValue);
                }
            });

            // Добавление обязательных опций
            const mandatoryOptions = ["ПОБЕДА", "ПОРАЖЕНИЕ", "СТОЛКНОВЕНИЕ", "ВЗЛОМ"];
            mandatoryOptions.forEach((option) => {
                const newOption = document.createElement('option');
                newOption.value = option;
                dataList.appendChild(newOption);
            });
                document.querySelector(".clearInput").onclick = function (){
                document.querySelector("input").value = "";
                // document.querySelector("input").focus();
                document.querySelector('input.search').dispatchEvent(new Event('input', { bubbles: true }));
                
                }
          setCounts();
        });
      }
      
    // function setOper() {
    //     document.querySelectorAll("tr.line").forEach((el) => {
    //         el.addEventListener("click", (ev) => {
    //             let avatar = el.querySelector('img.oper').src;
    //             let operBg = document.querySelector(".operBg");
    //             let match = avatar.match(/\/([^/]+)\.[^.]+$/);
    //             operBg.style.opacity="0";
    //             operBg.src = "img/opers/" + match[1] + "_Alpha.webp";
    //             operBg.style.opacity="1";
    //         });
    //     });
    // }
    function setOper() {
        document.querySelectorAll("tr.line").forEach((el) => {
            el.addEventListener("click", (ev) => {
                let avatar = el.querySelector('img.oper').src;
                let operBg = document.querySelector(".operBg");
                let match = avatar.match(/\/([^/]+)\.[^.]+$/);
                operBg.style.opacity = "0";
                setTimeout(() => {
                    operBg.src = "img/opers/" + match[1] + "_Alpha.webp";
                    operBg.style.opacity = "1";
                }, 1000); // Задержка 300 миллисекунд (0.3 секунды)
            });
        });
    }


    document.querySelector('img.geo').addEventListener('click', () => {
        // tv();
        if (localStorage.getItem("tumbler") == "false") {
            localStorage.setItem("tumbler", "true");
        } else {
            localStorage.setItem("tumbler", "false");
        }
        console.log("tumbler", tumbler);
    });

}); /////////////////END