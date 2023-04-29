import {
    caliber as caliberImport01,
    caliber2 as caliberImport02
} from "./game.js";


window.addEventListener('DOMContentLoaded', () => {
    let id, alldata;

    /* #region CREATE OBJECT CALIBER */
    //caliber: [caliber[0],caliber[2],[caliber[7][0], caliber[7][1], caliber[7][2], caliber[7][3]],[caliber[7][4], caliber[7][5], caliber[7][6], caliber[7][7]]],

    let caliberFunc = function (caliberImport, caliberImport2) {
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
                    Rounds: caliberImport2.Log.Rounds
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



    /* #region  SORT OPERATORS */
    // caliber.data[2].sort((a, b) => {
    //     const lastLetterA = a[8][1].slice(-1);
    //     const lastLetterB = b[8][1].slice(-1);
    //     return lastLetterA.localeCompare(lastLetterB);
    // });

    // caliber.data[3].sort((a, b) => {
    //     const lastLetterA = a[8][1].slice(-1);
    //     const lastLetterB = b[8][1].slice(-1);
    //     return lastLetterA.localeCompare(lastLetterB);
    // });

    /* #endregion */





    console.log('CALIBER_DATAS - ', caliber);

    /* #region  OLD VERSION */
    // caliberNew.data[2][0][11].splice(0);
    // caliberNew.data[2][0][9].splice(0);
    // caliberNew.data[2][1][11].splice(0);
    // caliberNew.data[2][1][9].splice(0);
    // caliberNew.data[2][2][11].splice(0);
    // caliberNew.data[2][2][9].splice(0);
    // caliberNew.data[2][2][9].splice(0);
    // caliberNew.data[2][3][11].splice(0);
    // caliberNew.data[3][0][11].splice(0);
    // caliberNew.data[3][0][9].splice(0);
    // caliberNew.data[3][1][11].splice(0);
    // caliberNew.data[3][1][9].splice(0);
    // caliberNew.data[3][2][11].splice(0);
    // caliberNew.data[3][2][9].splice(0);
    // caliberNew.data[3][3][11].splice(0);
    // caliberNew.data[3][3][9].splice(0);
    /* #endregion */

    // try {

    // } catch (e) {
    //     console.error("ошибка в пересборке объекта - ", e.message);
    // }

    /* #endregion */

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
        "quick_release_magazines": ["Быстрсъемные магазины",
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

                function oper(collection) {
                    collection = collection.toUpperCase();
                    let res;
                    let division = collection.replace(/(\d+)?.$/g, '');
                    let year = collection.match(/\d\d\d\d/g);
                    if (year === null) {
                        year = ''
                    }
                    let role = collection.slice(-1);
                    if (division == 'SSO' || division == 'FSB' || division == '22SPN' || division == 'RECRUIT') {
                        res = `RUS_${division}${year}_${role}`;
                        if (role == 'A' && division == 'SSO') {
                            roleName = 'ВОРОН'
                        };
                        if (role == 'G' && division == 'SSO') {
                            roleName = 'СПУТНИК'
                        };
                        if (role == 'M' && division == 'SSO') {
                            roleName = 'БАРД'
                        };
                        if (role == 'S' && division == 'SSO') {
                            roleName = 'КОМАР'
                        };

                        if (role == 'A' && division == 'FSB') {
                            roleName = 'ПЕРУН'
                        };
                        if (role == 'G' && division == 'FSB') {
                            roleName = 'СВАРОГ'
                        };
                        if (role == 'M' && division == 'FSB') {
                            roleName = 'ТРАВНИК'
                        };
                        if (role == 'S' && division == 'FSB') {
                            roleName = 'СОКОЛ'
                        };

                        if (role == 'A' && division == 'FSB' && year == 2004) {
                            roleName = 'ВОЛК'
                        };
                        if (role == 'G' && division == 'FSB' && year == 2004) {
                            roleName = 'АЛМАЗ'
                        };
                        if (role == 'M' && division == 'FSB' && year == 2004) {
                            roleName = 'ДЕД'
                        };
                        if (role == 'S' && division == 'FSB' && year == 2004) {
                            roleName = 'СТРЕЛОК'
                        };

                        if (role == 'A' && division == '22SPN') {
                            roleName = 'ПЛУТ'
                        };
                        if (role == 'G' && division == '22SPN') {
                            roleName = 'КИТ'
                        };
                        if (role == 'M' && division == '22SPN') {
                            roleName = 'КАРАВАЙ'
                        };
                        if (role == 'S' && division == '22SPN') {
                            roleName = 'ТЕНЬ'
                        };
                    };

                    if (year == '' && division == 'BELSSO') {
                        res = `BLR_${division.slice(3, 6)}${year}_${role}`;
                        if (role == 'A') {
                            roleName = 'ЛАЗУТЧИК'
                        };
                        if (role == 'G') {
                            roleName = 'ЗУБР'
                        };
                        if (role == 'M') {
                            roleName = 'КАВАЛЬ'
                        };
                        if (role == 'S') {
                            roleName = 'БУСЕЛ'
                        };
                    };

                    if (division == 'GROM') {
                        res = `POL_${division}${year}_${role}`;
                        if (role == 'A' && division == 'GROM') {
                            roleName = 'КОШМАР'
                        };
                        if (role == 'G' && division == 'GROM') {
                            roleName = 'ПРОРОК'
                        };
                        if (role == 'M' && division == 'GROM') {
                            roleName = 'МИКОЛА'
                        };
                        if (role == 'S' && division == 'GROM') {
                            roleName = 'СТИЛЕТ'
                        };
                    };
                    if (division == 'KSK') {
                        res = `DEU_${division}${year}_${role}`;
                        if (role == 'A' && division == 'KSK') {
                            roleName = 'РЕЙ'
                        };
                        if (role == 'G' && division == 'KSK') {
                            roleName = 'ШТЕРН'
                        };
                        if (role == 'M' && division == 'KSK') {
                            roleName = 'ШАТЦ'
                        };
                        if (role == 'S' && division == 'KSK') {
                            roleName = 'КУРТ'
                        };
                    };
                    if (division == 'SEAL') {
                        res = `USA_${division}${year}_${role}`;
                        if (role == 'A' && division == 'SEAL') {
                            roleName = 'КОРСАР'
                        };
                        if (role == 'G' && division == 'SEAL') {
                            roleName = 'БУРБОН'
                        };
                        if (role == 'M' && division == 'SEAL') {
                            roleName = 'МОНК'
                        };
                        if (role == 'S' && division == 'SEAL') {
                            roleName = 'СКАУТ'
                        };

                    };
                    if (division == 'TFB') {
                        res = `GBR_${division}${year}_${role}`;
                        if (role == 'A' && division == 'TFB') {
                            roleName = 'СТЕРЛИНГ'
                        };
                        if (role == 'G' && division == 'TFB') {
                            roleName = 'БИШОП'
                        };
                        if (role == 'M' && division == 'TFB') {
                            roleName = 'ВАТСОН'
                        };
                        if (role == 'S' && division == 'TFB') {
                            roleName = 'АРЧЕР'
                        };
                    };
                    if (division == 'RAID') {
                        res = `FRA_${division}${year}_${role}`;
                        if (role == 'A' && division == 'RAID') {
                            roleName = 'АВАНГАРД'
                        };
                        if (role == 'G' && division == 'RAID') {
                            roleName = 'БАСТИОН'
                        };
                        if (role == 'M' && division == 'RAID') {
                            roleName = 'ВЕЛЮР'
                        };
                        if (role == 'S' && division == 'RAID') {
                            roleName = 'ВАГАБОНД'
                        };
                    };
                    if (division == 'NESHER') {
                        res = `ISR_${division}${year}_${role}`;
                        if (role == 'A' && division == 'NESHER') {
                            roleName = 'АФЕЛА'
                        };
                        if (role == 'G' && division == 'NESHER') {
                            roleName = 'ХАГАНА'
                        };
                        if (role == 'M' && division == 'NESHER') {
                            roleName = 'ШАРШЕРЕТ'
                        };
                        if (role == 'S' && division == 'NESHER') {
                            roleName = 'ЭЙМА'
                        };

                    };
                    if (division == 'EZAPAC') {
                        res = `ESP_${division}${year}_${role}`;
                        if (role == 'A' && division == 'EZAPAC') {
                            roleName = 'ФАРО'
                        };
                        if (role == 'G' && division == 'EZAPAC') {
                            roleName = 'МАТАДОР'
                        };
                        if (role == 'M' && division == 'EZAPAC') {
                            roleName = 'МИГЕЛЬ'
                        };
                        if (role == 'S' && division == 'EZAPAC') {
                            roleName = 'ДИАБЛО'
                        };
                    };
                    if (division == 'ARYSTAN') {
                        res = `KAZ_${division}${year}_${role}`;
                        if (role == 'A' && division == 'ARYSTAN') {
                            roleName = 'МУСТАНГ'
                        };
                        if (role == 'G' && division == 'ARYSTAN') {
                            roleName = 'ТИБЕТ'
                        };
                        if (role == 'M' && division == 'ARYSTAN') {
                            roleName = 'БАГГИ'
                        };
                        if (role == 'S' && division == 'ARYSTAN') {
                            roleName = 'СУЛТАН'
                        };
                    };
                    if (division == 'AMF') {
                        res = `SWE_${division}${year}_${role}`
                        if (role == 'A' && division == 'AMF') {
                            roleName = 'СТАРКАД'
                        };
                        if (role == 'G' && division == 'AMF') {
                            roleName = 'ОДИН'
                        };
                        if (role == 'M' && division == 'AMF') {
                            roleName = 'ФРЕЙР'
                        };
                        if (role == 'S' && division == 'AMF') {
                            roleName = 'ВИДАР'
                        };
                    };
                    if (division == 'JIAOLONG') {
                        res = `CHN_${division}${year}_${role}`;
                        if (role == 'A' && division == 'JIAOLONG') {
                            roleName = 'ШАОВЭЙ'
                        };
                        if (role == 'G' && division == 'JIAOLONG') {
                            roleName = 'ИНЧЖОУ'
                        };
                        if (role == 'M' && division == 'JIAOLONG') {
                            roleName = 'ЯОВАН'
                        };
                        if (role == 'S' && division == 'JIAOLONG') {
                            roleName = 'ЦАНЛУН'
                        };
                    };
                    if (division == 'CST') {
                        if (role == 'A' && division == 'CST') {
                            roleName = 'СЛАЙ';

                        };
                        if (role == 'G' && division == 'CST') {
                            roleName = 'ФОРТРЕСС';
                        };
                        if (role == 'M' && division == 'CST') {
                            roleName = 'БОУНС';
                        };
                        if (role == 'S' && division == 'CST') {
                            roleName = 'АВАЛАНШ'
                        };

                    };
                    //console.log(res);
                    return res

                }
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
                    rank: data1[k][i][16][2],
                    name: data1[k][i][2],
                    group: String(data1[k][i][1]).slice(0, 4),
                    perks: [data1[k][i + 0][8][15][0], data1[k][i + 0][8][15][1], data1[k][i + 0][8][15][2], data1[k][i + 0][8][15][3]],
                    kills: data2.Users[k - 2][i].PlayerKills,
                    deaths: data2.Users[k - 2][i].Deaths,
                    assists: data2.Users[k - 2][i].Assists,
                    damage: Math.floor(data2.Users[k - 2][i].DamageDealt),
                    recive: Math.floor(data2.Users[k - 2][i].DamageReceived)
                };



                /* #region  RATING RANGE */
                function getRange(number) {
                    const ranges = [
                        { min: 0, max: 100, rank: "#804E26 III" },
                        { min: 100, max: 200, rank: "#804E26 II" },
                        { min: 200, max: 300, rank: "#804E26 I" },
                        { min: 300, max: 400, rank: "#5D5D5D III" },
                        { min: 400, max: 500, rank: "#5D5D5D II" },
                        { min: 500, max: 600, rank: "#5D5D5D I" },
                        { min: 600, max: 700, rank: "#D08B14 III" },
                        { min: 700, max: 800, rank: "#D08B14 II" },
                        { min: 800, max: 900, rank: "#D08B14 I" },
                        { min: 900, max: 1000, rank: "#692B71 III" },
                        { min: 1000, max: 1100, rank: "#692B71 II" },
                        { min: 1100, max: 1200, rank: "#692B71 I" },
                        { min: 1200, max: 9999, rank: "#017dfe I" }
                    ];

                    for (let i = 0; i < ranges.length; i++) {
                        if (number >= ranges[i].min && number < ranges[i].max) {
                            switch (ranges[i].rank) {
                                case "#804E26 III":
                                    return `${ranges[i].rank}`;
                                case "#804E26 II":
                                    return `${ranges[i].rank}`;
                                case "#804E26 I":
                                    return `${ranges[i].rank}`;
                                case "#5D5D5D III":
                                    return `${ranges[i].rank}`;
                                case "#5D5D5D II":
                                    return `${ranges[i].rank}`;
                                case "#5D5D5D I":
                                    return `${ranges[i].rank}`;
                                case "#D08B14 III":
                                    return `${ranges[i].rank}`;
                                case "#D08B14 II":
                                    return `${ranges[i].rank}`;
                                case "#D08B14 I":
                                    return `${ranges[i].rank}`;
                                case "#692B71 III":
                                    return `${ranges[i].rank}`;
                                case "#692B71 II":
                                    return `${ranges[i].rank}`;
                                case "#692B71 I":
                                    return `${ranges[i].rank}`;
                                case "#017dfe I":
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
                img.src = "https://caliberfan.ru//wp-content/themes/caliberfan/img/emblems/UI_Emblems_" + operator.emblem + "_large.png";

                img.onload = function () {
                    try {
                        document.querySelector(`.team${k - 1}Table > tbody > tr.${operator.role} >.imgBaner`).insertAdjacentHTML('afterbegin', `<img class = "baner" src="${img.src}" onerror="this.src='img/default.png'">`);
                    } catch {
                        console.error('Ошибка при загрузке картинки');
                    }
                };

                img.onerror = function () {
                    document.querySelector(`.team${k - 1}Table > * > tr.${operator.role} >.imgBaner`).insertAdjacentHTML('afterbegin', `
                    <img class = "baner" src="https://caliberfan.ru//wp-content/themes/caliberfan/img/emblems/UI_Emblems_default_large.png" alt="${operator.emblem}">
                    `);
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


                document.querySelector(`.team${k - 1}Table`).insertAdjacentHTML('beforeend', `
            
                <tr class = 'line ${operator.role}'>
                <td>
                    <svg class = "${operator.role}Logo"><title>${operator.role}</title><use xlink:href="#${operator.role}"></use></svg>
                </td>
                <td>
                <img class = "oper" src="https://caliberfan.ru/wp-content/themes/caliberfan/img/avatars/UI_PL_${operator.avatar}_Small.png" alt=""> 
                </td>
                <td>
                    <div class = "wrapper"><svg><use xlink:href="#whiteWrapper"></use></svg>
                        <span class="lvlText">${operator.lvlText}</span>    
                        <div class="bevel">
                            <span class = "nameOp">${operator.nameOp}</span>
                            <span class = "lvlOp">${operator.lvlOp}</span>
                        </div>
                    </div>
                </td>
                <td class = "imgBaner">
                
                    <span class = "rank">${operator.rank}</span>
                    <svg class='rankEmbed' width="522" height="270" viewBox="70 0 386 270" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M333.06 5.745 5.67 5.669l-.001 258.54h503.533L333.06 5.746Z" stroke-width="20" stroke="#000" fill="${getRange(operator.rank).replaceAll("I", "")}" vector-effect="null"/><text transform="translate(8.797 94.414)" font-family="Roboto" font-size="12" font-weight="400" fill="#000" text-anchor="middle" data-use-rich-text="true"><tspan data-start-offset="0" style="white-space:pre" fill="#FFF" stroke-width="0" font-family="Roboto, sans-serif" font-size="140" font-weight="700" letter-spacing="0" word-spacing="0" x="184.122" dy="110"><![CDATA[${getRange(operator.rank).match(/\s.*/g)[0]}]]>
                    </tspan></text></svg>
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
                <td class = "kills"  >${operator.kills}</td>
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
                        // let h = spread[0][20];
                        // let q = spread[0][8][15][1].toString();
                        // console.log(q);
                        //let r = h.tight_fit; //работает
                        //let r = spread[0][20][`${spread[0][8][15][1]}`] // нет , почему? и ка ксделать чтобы работало?


                        //console.log(perk1,perk2,perk3,perk4);

                        // let lvlPerks = spread[0][20][0].find(key => key.includes(spread[0][8][15]));
                        // lvlPerk = (Object.keys(perksRus).find(key => key.includes(caliber[7][user][][20])))   

                        hint.innerHTML = (Object.values(perksRus).find(key => key.includes(element.textContent))[1]).replaceAll(/\n/g, "<br>");

                        // console.log(spread[0][8][15][0]);
                        // let perk1 = spread[0][20][`${spread[0][8][15][0]}`];
                        // let perk2 = spread[0][20][`${spread[0][8][15][1]}`];
                        // let perk3 = spread[0][20][`${spread[0][8][15][2]}`];
                        // let perk4 = spread[0][20][`${spread[0][8][15][3]}`];
                        // //console.log(perk4);

                        // if (perk1 == 1) {
                        //    // console.log((hint.innerHTML.match(/\d+([\.,]\d+)?(%|\b)/g)[0]));    
                        //     let numbers = hint.innerHTML.match(/\d+\/(\d+)\/d+/g);
                        //     let firstNumber = numbers[0].split('/')[2];
                        //     let highlightedText = hint.innerHTML.replace(firstNumber, '<b>' + firstNumber + '</b>');
                        //     console.log(highlightedText);

                        // }
                        //console.log((hint.innerHTML.match(/\d+([\.,]\d+)?(%|\b)/g)[0]));

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

        /* #region  CHANGE CST OPERS */
        document.querySelectorAll('.nameOp').forEach(element => {
            if (element.innerText == 'СЛАЙ') {
                element.parentElement.parentElement.parentElement.previousElementSibling.children[0].src = "img/sly.png";
                //operator.avatar = 'img/sly.png';
            }
            if (element.innerText == 'ФОРТРЕСС') {
                element.parentElement.parentElement.parentElement.previousElementSibling.children[0].src = "img/fortress.png";
                //operator.avatar = 'img/fortress.png';
            }
            if (element.innerText == 'БОУНС') {
                element.parentElement.parentElement.parentElement.previousElementSibling.children[0].src = "img/bounce.png";
            }
            if (element.innerText == 'АВАЛАНШ') {
                element.parentElement.parentElement.parentElement.previousElementSibling.children[0].src = "img/avalansh.png";
            }
        });
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
            let color;
            let k = 0;
            let group = document.querySelectorAll('.groups');
            group.forEach((element, i) => {
                if (i == 4) {
                    k = 0
                };
                let grValue = element.innerText.trim();
                let groupElements = document.querySelectorAll(`[data-gr="${grValue}"]`);
                if (groupElements.length > 1) {
                    (k > 2) ? color = '#ff323b' : color = 'lime';
                    k++;
                    groupElements.forEach((groupElement) => {
                        groupElement.style.borderLeft = `4px solid ${color}`;
                    });
                }
            });
        })();
        /* #endregion */

        // #region  MAPS
        (function () {
            const mode = document.querySelector('.mode');
            const time = document.querySelector('.time');
            const divMap = document.querySelector('.map');
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
                    'Переправа',
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
            const mapName = data1[1].split("_").slice(0, -1).join("_");
            if (maps.originalMap.some((value) => value === mapName)) {
                const i = maps.originalMap.indexOf(mapName);
                const rusMapName = maps.rusMap[i];
                divMap.textContent = `\u00A0${rusMapName}`;
            }
            if (data1[1].split("_")[3] == 'pvp') {
                mode.innerText = `Столкновение:`;
            };

            if (data1[1].split("_")[3] == 'hacking') {
                mode.innerText = `Взлом:`;
            };
            time.innerText = convertSecondsToTime(data2.MatchTimeSeconds);
        })();
        // #endregion MAPS

        //  #region WIN / LOSE
        (function () {
            function color(color, text) {
                document.querySelector("div.winLose > div").innerText = text;
                document.querySelector("div.winLose > svg > path").style.fill = color;
                document.querySelector("div.winLoseText").style.color = color;
            }
            if (data1[2].some(player => player[2] == 'MASTER')) {
                if (score(0) == data2.Rounds) {
                    color('#6aa5ee', 'ПОБЕДА!');
                } else {
                    color('#6aa5ee', 'ПОРАЖЕНИЕ!');
                }
            } else if (data1[3].some(player => player[2] == 'MASTER')) {
                if (score(1) == data2.Rounds) {
                    color('#ff323b', 'ПОБЕДА!');
                } else {
                    color('#ff323b', 'ПОРАЖЕНИЕ!');
                }
            }
        })();
        // #endregion WIN / LOSE

        //  #region SCORE
        function score(teamNumber) {
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

        //  #region COLOR POINTS

        function setScore() {
            const winBlue = data2.Rounds.filter(item => item.winner_team === 0);
            const winRed = data2.Rounds.filter(item => item.winner_team === 1);
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
            winBlue.forEach(function (e, j) {
                document.querySelector(`.bluePoint${j + 1} > path`).style.fillOpacity = 1;
            });

            winRed.forEach((e, q) => {
                document.querySelector(`.redPoint${q + 1} > path`).style.fillOpacity = 1;
            });

        }
        setScore();

        // #endregion

        id = data1[0];
        alldata = [data1, data2]

    }

     //try {

     if (window.location.search.length > 0) {
        loadData();
    } else  {
        upload(caliber.data, caliber.log);
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


    document.querySelector('.slide-out-panel').insertAdjacentHTML("afterbegin", `<div id="list-container"></div>`);
    const button = document.getElementById('show-panel');
    const panel = document.querySelector('.slide-out-panel');
    const tables = document.querySelector('.container_tables');
    const recElem = document.querySelector('.rec');

    button.addEventListener('mousemove', () => {
        document.querySelector('.container_tables').classList.remove('animate__animated');
    });

    button.addEventListener('click', () => {
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

                    cell.addEventListener("click", function () {
                        
                        var selectedDate = new Date(2023, month_selector.value - 1, 1);
                        var formattedDate = formatDate(selectedDate);
                        updateFileList(formattedDate);

                        /* #region  OLD CLICK CALENDAR */
                        // const listContainer = document.getElementById('list-container');
                        // const keys = Object.keys(localStorage);

                        // listContainer.innerHTML = '';
                        // keys.forEach(key => {
                        //     //console.log(key);
                        //     if (key == 'rec') {
                        //         return
                        //     };
                        //     // console.log(`(${setZero(this.textContent)} == ${key.match(/\d+/g)[0]} && ${setZero(month_selector.value)} == ${key.match(/\d+/g)[1]}`);
                        //     console.log(key.match(/\d+/g)[0]);
                        //     if (setZero(this.textContent) == key.match(/\d+/g)[0] && setZero(month_selector.value) == key.match(/\d+/g)[1]) {
                        //         const listItem = document.createElement('li');
                        //         listItem.textContent = key;
                        //         listItem.addEventListener('click', (e) => {
                        //             //e.path[1].classList.add('disabled');
                        //             document.querySelectorAll('#list-container > li').forEach((element) => {
                        //                 // element.classList.remove('disabled');
                        //             })
                        //             // e.path[1].classList.add('disabled');
                        //             myFunction(key);

                        //         });
                        //         const date = listItem.textContent.split(' ')[0];
                        //         const id = listItem.textContent.split(' ')[1];
                        //         const win = listItem.textContent.split(' ')[2];
                        //         const map = listItem.textContent.split(' ')[3];
                        //         const time = `${new Date().getHours()}:${new Date().getMinutes()}`;
                        //         listItem.innerHTML = `${id} ${map} Столкновение ${win} ${date}`;
                        //         listContainer.appendChild(listItem);
                        //         const words = listItem.textContent.split(' ');
                        //         listItem.textContent = '';

                        //         for (let i = 0; i < words.length; i++) {
                        //             const span = document.createElement('span');
                        //             span.textContent = words[i];
                        //             listItem.appendChild(span);
                        //         }
                        //         //listContainer.appendChild(item);
                        //     }
                        // });
                        // const listItems = document.querySelectorAll('#list-container > li');
                        // listItems.forEach(item => {
                        //     const lastSpan = item.querySelector('span:last-child');
                        //     const firstSpan = item.querySelector('span:first-child');
                        //     firstSpan.insertAdjacentHTML('afterbegin', `
                        //         <svg class='star' viewBox="281.634 158.464 106.675 70" width="106.675" height="70">
                        //         <defs>
                        //             <mask id="mask" x="0" y="0" width="69" height="69">
                        //             <rect x="278.691" y="158.464" width="69" height="69" fill="white"></rect>
                        //             <path d="M 294.111 189.782 L 302.188 189.782 L 304.683 182.109 L 307.179 189.782 L 315.256 189.782 L 308.722 194.524 L 311.218 202.197 L 304.683 197.455 L 298.149 202.197 L 300.645 194.524 L 294.111 189.782 Z" fill="black"></path>
                        //             </mask>
                        //         </defs>
                        //         <g class="layer" transform="matrix(1, 0, 0, 1, 319.590825, 158.343768)" height="70&quot; class=&quot;layer">
                        //             <title>Layer 1</title>
                        //             <path d="m-0.20636,0.12021l68.92459,0l-0.12566,34.50001l0.12566,34.50016l-68.92459,0l15.4421,-34.50016l-15.4421,-34.50001z" fill="#9f9f9f" id="svg_1" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" stroke-width="null" transform="rotate(-180 34.2559 34.6203)"></path>
                        //         </g>
                        //         <rect width="70" height="70" fill="#9f9f9f" mask="url(#mask)" x="281.634" y="158.464"></rect>
                        //         </svg>
                        //     `)
                        //     lastSpan.insertAdjacentHTML('beforeend', '<img class="basket" src="img/basket.png"></img>');

                        //     /* #region  AJAX UPLOAD DB */
                        //     // $.ajax({
                        //     //     url: 'games.json',
                        //     //     dataType: 'json',
                        //     //     success: function (db) {
                        //     //     },
                        //     //     error: function () {
                        //     //         console.log("База данных не найдена");
                        //     //     }
                        //     // });
                        //     /* #endregion */

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
                        /* #endregion */
                    });
                }
                row.appendChild(cell);
            }
            calendarBody.appendChild(row);
        }
    }
    // Создаем календарь на текущий месяц и год
    const month_selector = document.querySelector("#month-selector");
    month_selector.value = new Date().getMonth() + 1;
    //console.log(`${month_selector.value}, ${new Date().getFullYear()}`);
    generateCalendar(month_selector.value - 1, new Date().getFullYear());


    /* #region  обновить список игр */
    function updateFileList(date) {
        // Отправляем POST-запрос на сервер
        $.post("../php/loadList.php", { date: date }, function (data) {
            // Парсим JSON-данные
            var fileList = JSON.parse(data);

            // Очищаем список файлов
            $("#file-list").empty();

            // Добавляем новые элементы в список файлов
            for (var i = 0; i < fileList.length; i++) {
                var file = fileList[i];
                var listItem = $("<li>").text(file.name);
                $("#file-list").append(listItem);
            }
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

    const fileInput = document.getElementById('file-input');
    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        const createdDate = new Date(file.lastModified);
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = (event) => {
            let caliber_b = [];
            let caliber_b2 = [];
            let data = event.target.result.match(/^(.*\n){0,2}.*/g);
            data = data[0].replaceAll(/[^\x20-\x7E]+/g);
            data = data.replaceAll(/[^ -~]+/g);
            data = data.replace(/.*?({.*)/, "$1");
            caliber_b = data.match(/^(.*14":\[\]\})\w/s)[1];
            caliber_b2 = data.match(/({"Log":.*:true})/s)[1];

            function fix(obj) {
                let brokenObject = obj;
                let fixedObject = brokenObject.replace(/'/g, '"').replace(/([a-zA-Z]+):/g, '"$1":');
                fixedObject = JSON.parse(fixedObject);
                return fixedObject;
            }

            caliber_b = fix(caliber_b);
            caliber_b2 = fix(caliber_b2);

            // caliber_b[8] = caliber_b[7].splice(4);
            // caliber_b2.Log.Users[0] = [caliber_b2.Log.Users[0], caliber_b2.Log.Users[1], caliber_b2.Log.Users[2], caliber_b2.Log.Users[3]]
            // caliber_b2.Log.Users[1] = [caliber_b2.Log.Users[4], caliber_b2.Log.Users[5], caliber_b2.Log.Users[6], caliber_b2.Log.Users[7]]
            // caliber_b2.Log.Users.splice(2);

            let caliber_file = caliberFunc(caliber_b, caliber_b2)
            document.querySelectorAll('.points').forEach(item => {
                item.remove();
            })
            upload(caliber_file.data, caliber_file.log);
            updateDB(caliber_file);

            //saveData();
        }
        saveData(createdDate);

    }); //#endregion CALENDAR
    /* #endregion */

    /* #region  REFRESH PAGE */


    const filePath = 'js/game.js';

    let lastModifiedTime = null;

    function checkFile() {
        const xhr = new XMLHttpRequest();
        xhr.open('HEAD', filePath);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const currentModifiedTime = xhr.getResponseHeader('Last-Modified');
                    if (lastModifiedTime !== null && lastModifiedTime !== currentModifiedTime) {
                        // location.reload(true);
                        location.href = location.href + '?rand=' + Math.random();
                    } else {
                        console.log('Файл не изменился. Последнее изменение: ' + currentModifiedTime);
                    }
                    lastModifiedTime = currentModifiedTime;
                } else {
                    console.log('Ошибка проверки файла: ' + xhr.status);
                }
            }
        };
        xhr.send();
    }

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
        const map = document.querySelector('.map').textContent.trim();
        const win = document.querySelector("div.winLoseText").textContent.slice(0, document.querySelector("div.winLoseText").textContent.length - 1);
        const day = `${setZero(createdDate.getDate())}:${setZero(createdDate.getMonth() + 1)}.${createdDate.getFullYear()}`;
        if (localStorage.getItem('rec') == 'true') {
            // localStorage.setItem(`${day} ${id} ${win} ${map}`, JSON.stringify([alldata[0], alldata[1]]));
            localStorage.setItem(`${id}`, `${day}  ${win} ${map}`);
        }
    }



    //try {
    //saveData(new Date());
    // } catch (e) {
    //     console.error("Ошибка в функции SaveData - ", e.message);
    // }
    /* #endregion */
    try {
        document.querySelector('.geo').addEventListener('click', () => {
            let map = caliber.data[1].split('_').slice(1, -1).join('_');
            // window.open(`https://caliberfan.ru/wp-content/themes/caliberfan/img/maps/tablet/UI_Map_${map}_hacking.png`, "_blank");
            if (!document.querySelector('.imgMap')) {
                document.body.insertAdjacentHTML('afterbegin', `
            <img class="imgMap" src="https://caliberfan.ru/wp-content/themes/caliberfan/img/maps/tablet/UI_Map_${map}_hacking.png">
            `);
            } else document.querySelector('.imgMap').remove();
            //$('.imgMap').fadeToggle(1000);
        })
    }
    catch (e) {
        console.log('Ошибка в загрузке карты, ее нет на сайте - ', e.message);
    }

    // document.querySelector('#show-panel').insertAdjacentHTML('afterbegin',`
    // <iframe src="https://caliberfan.ru/support/rekruit/#col-12 col-md-3 col-lg-3"></iframe>
    // `);

    // document.querySelector('iframe.content').onload = function () {
    //     this.contentWindow.scrollTo(0, 479);
    // }
    // function summRank() {
    //     document.querySelectorAll('table.team1Table > tbody > tr> td > span.rank').forEach(element => {
    //         let rank = +rank + +element.textContent;
    //         //element.textContent= 
    //         return res
    //     });
    // }

    function summRank(selector) {
        let rank = 0;
        document.querySelectorAll(`.${selector} > tbody > tr > td > span.rank`).forEach(element => {
            rank += +element.textContent;
        });
        document.querySelector(`.different`).insertAdjacentHTML('beforeend', `
            <span class='${selector}Diff'>${rank}</span>
        `)
        //return rank;
    }

    function different() {
        const team1Diff = +document.querySelector('.team1TableDiff').textContent;
        const team2Diff = +document.querySelector('.team2TableDiff').textContent;
        document.querySelector(`.team1TableDiff`).insertAdjacentHTML('afterend', `
            <span class='diffTeams'>${Math.abs(team1Diff - team2Diff)}</span>
        `);
        let max = Math.max(+team1Diff, +team2Diff);
        //console.log(diff);
        //document.querySelector(`span:contains('2444')`)
        $(`span:contains('${max}')`).css('color', '#c49a30');;
    }

    summRank('team1Table');
    summRank('team2Table');
    different();


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
 
    /* #region  SOUNDS */
    function sounds() {
        const tr = document.querySelectorAll('.line');
        tr.forEach(element => {
            element.addEventListener('mouseover', () => {
                const audio = new Audio('../mp3/menu.mp3');
                audio.volume = 0.1;
                audio.play();
            })
        })

        const points = document.querySelectorAll('.points');
        points.forEach(element => {
            element.addEventListener('mouseover', () => {
                const audio = new Audio('../mp3/move.mp3');
                audio.volume = 0.1;
                audio.play();
            })
        })

        document.body.addEventListener('mousedown', () => {
            if (event.button === 0) {
                const audio = new Audio('../mp3/click.mp3');
                audio.volume = 0.01;
                audio.play();
            }
        });
        document.addEventListener('contextmenu', event => event.preventDefault());  // RMB
    }
    /* #endregion */

    sounds()
    /* #region  AJAX UPDATE DATABASE */

    //function updateDB(map, res, mode) {
    function updateDB(dataFile) {
        var data = {
            caliber: dataFile,
            // metadata: {
            //     mapName: map,
            //     result: res,
            //     createdAt: new Date().toLocaleString(),
            //     gameMode: mode
            // }
        };

        $.ajax({
            url: '/php/query.php',
            type: 'POST',
            data: JSON.stringify(data), // передаем объект data в виде JSON-строки
            contentType: 'application/json', // устанавливаем тип контента
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

    function loadData() {
        const urlParams = new URLSearchParams(window.location.search);
        const fileName = urlParams.get('filename');
        $.ajax({
          url: `https://exlusive.pro/data/${fileName}.json`,
          dataType: "json",
          success: function ({caliber}) {
            console.log("CALIBER_DATA_FILE:",caliber);
            upload(caliber.data, caliber.log);
          }
        });
      }
    
    updateDB(caliber);
});