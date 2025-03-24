let currentLevel = 1;
let currentQuestion = 0;
let totalCorrect = 0;
const totalLevels = 8;
const questionsPerLevel = 3; // Alkuperäisessä koodissa oli 3 kysymystä per taso

const levels = [
    // Taso 1
    [
        {
            question: "Suurin osa Euroopan kristittyjä on?",
            options: ["Katolisia", "Luterilaisia", "Ortodoksisia", "Helluntailaisia"],
            correctAnswer: 1
        },
        {
            question: "Mikä näistä ei ole vaikuttanut kirkkoon Euroopan historiassa?",
            options: ["Reformaatio", "Valistus", "Sosialismi", "Renessanssitaide"],
            correctAnswer: 4
        },
        {
            question: "Mitä sekularisaatio tarkoittaa?",
            options: ["uuden uskonnon syntymistä", "kirkon vallan kasvua yhteiskunnassa", "maallistumisen kasvua ja uskonnon näkyvän merkityksen vähenemistä", "uskonnolisten juhlapyhien lisääntymistä"],
            correctAnswer: 3
        }
    ],
    // Taso 2
    [
        {
            question: "Miten Neuvostoliiton aika vaikutti ortodoksisen kirkon asemaan Venäjällä?",
            options: ["Kirkon valta kasvoi merkittävästi", "Kirkko kärsi vainoista, mutta vahvistui toisen maailmansodan jälkeen ja Neuvostoliiton romahdettua", "Neuvostoliitto suosi ortodoksista kirkkoa valtionuskontona", "Uusia kirkkoja rakennettiin vapaasti"],
            correctAnswer: 2
        },
        {
            question: "Miten Ukrainan ortodoksinen kirkko on erkaantunut Moskovan patriarkaatista?",
            options: ["Ukraina liittyi tiiviimmin Moskovan patriarkaattiin", "Kirkko lakkautettiin kokonaan Ukrainassa", "Moskovan patriarkaatti antoi Ukrainalle itsenäisyyden vapaaehtoisesti", "Ukrainan ortodoksinen kirkko on erkaantunut Moskovan patriarkaatista Konstantinopolin tuella"],
            correctAnswer: 4
        },
        {
            question: "Miten kristinusko levisi Venäjälle?",
            options: ["Viikingit toivat kristinuskon suoraan Roomasta Venäjälle.", "Kiovan ruhtinas otti ortodoksisen kasteen ja teki kristinuskosta valtionuskonnon.", "Kristinusko levisi Venäjälle islamin kautta.", "Venäjä omaksui kristinuskon suoraan keskiaikaisesta Kiinasta."],
            correctAnswer: 2
        }
    ],
    // Taso 3
    [
        {
            question: "Miten kristinusko levisi Latinalaiseen Amerikkaan?",
            options: ["Espanjalaiset ja portugalilaiset siirtomaaisännät toivat kristinuskon", "Kristinusko levisi vain lähetyssaarnaajien kautta", "Kristinusko levisi Afrikasta saapuneiden orjien mukana", "Kristinusko tuli Latinalaiseen Amerikkaan suoraan Aasiasta"],
            correctAnswer: 1
        },
        {
            question: "Kuinka paljon kristittyjä on Latinalaisessa Amerikassa?",
            options: ["Noin 50 miljoonaa", "Noin 300 miljoonaa", "Noin 600 miljoonaa", "Noin 1 miljardi"],
            correctAnswer: 3
        },
        {
            question: "Mikä raamatuntulkintatapa syntyi Latinalaisessa Amerikassa 1960-luvulla?",
            options: ["Teologinen liberalismi", "Vapautuksen teologia", "Fundamentalismi", "Evankelinen herätys"],
            correctAnswer: 2
        }
    ],
    // Taso 4
    [
        {
            question: "Kuinka paljon kristittyjä on Pohjois-Amerikassa?",
            options: ["Noin 270 miljoonaa", "Noin 500 miljoonaa", "Noin 350 miljoonaa", "Noin 800 miljoonaa"],
            correctAnswer: 1
        },
        {
            question: "Mikä on Yhdysvalloissa suurin kristillinen ryhmä?",
            options: ["Katoliset", "Protestantit", "Luterilaiset", "Metodistit"],
            correctAnswer: 2
        },
        {
            question: "Mikä seuraavista uususkonnoista ei ole syntynyt Pohjois-Amerikassa?",
            options: ["Jehovan todistajat", "Mormonit", "Krishna-liike", "Scientologia"],
            correctAnswer: 3
        }
    ],
    // Taso 5
    [
        {
            question: "Keitä ovat messiaaniset juutalaiset, ja millainen heidän asemansa on Israelissa?",
            options: ["Messiaaniset juutalaiset ovat juutalaisia, jotka uskovat Jeesukseen Messiaana", "Messiaaniset juutalaiset ovat valtavirran juutalaisia Israelissa", "Messiaaniset juutalaiset ovat vain kristittyjä, jotka elävät Israelissa", "Messiaaniset juutalaiset eivät usko Jeesukseen ja heitä ei hyväksytä Israelissa"],
            correctAnswer: 1
        },
        {
            question: "Miksi islam on perinteisesti tunnustanut kristinuskon?",
            options: ["Jeesus uskoksi", "Kirjan uskontona", "Vääränä uskontona", "Tabuna"],
            correctAnswer: 2
        },
        {
            question: "Kenelle Israel ei ole pyhämaa?",
            options: ["Kristityt", "Juutalaiset", "Hindut", "Muslimit"],
            correctAnswer: 3
        }
    ],
    // Taso 6
    [
        {
            question: "Miksi Afrikasta on tullut kristillisin maanosa?",
            options: ["Lähetyssaarnaajat toivat kristinuskon", "Kristinusko alkoi levitä alueelle nopeasti 1900-luvulla", "Afrikka on saanut itsenäisyyden ja seurannut kristinuskon arvoja", "Kolonialismin myötä kristinusko levisi Afrikkaan"],
            correctAnswer: 1
        },
        {
            question: "Miksi kristittyjä vainotaan joissakin Pohjois-Afrikan maissa?",
            options: ["Vainot liittyvät alueen poliittisiin jännitteisiin", "Islamin ja kristinuskon eroavaisuudet aiheuttavat konflikteja", "Taloudellisen ja yhteiskunnallisen eriarvoisuuden vuoksi", "Kristityt edustavat lännen vaikutusvaltaa ja sen vuoksi heitä vainotaan"],
            correctAnswer: 3
        },
        {
            question: "Miten kristinusko ja islam ovat jakautuneet Afrikassa maantieteellisesti?",
            options: ["Kristinusko on keskittynyt etelään, islam pohjoiseen", "Islam on levinnyt kaikille alueille, kristinusko vain etelään", "Kristinusko on yleisempää lännessä, islam idässä", "Islam on keskittynyt länteen, kristinusko pohjoiseen"],
            correctAnswer: 1
        }
    ],
    // Taso 7
    [
        {
            question: "Miksi kristinusko on vähemmistönä useimmissa Aasian maissa?",
            options: ["Kristinusko on tuotu alueelle Euroopan siirtomaavallan myötä", "Aasiassa on vahvat paikalliset uskonnot", "Kristinusko tuli Aasiaan myöhemmin kuin muualle maailmaan", "Aasian kulttuuri on täysin erilainen kristinuskolle"],
            correctAnswer: 2
        },
        {
            question: "Missä seuraavista Aasian maista kristinusko on saavuttanut enemmistöaseman?",
            options: ["Itä-Timor", "Kiina", "Vietnam", "Taiwan"],
            correctAnswer: 1
        },
        {
            question: "Miksi Äiti Teresa on merkittävä henkilö Intian kristinuskon historiassa?",
            options: ["Hän perusti monia kirkkoja Intiaan", "Hän toimi lasten ja köyhien auttamiseksi ja sai Nobelin rauhanpalkinnon", "Hän oli katolisen kirkon johtaja Intiassa", "Hän oli ensimmäinen naispuolinen intialainen kirkon johtaja"],
            correctAnswer: 2
        }
    ],
    // Taso 8
    [
        {
            question: "Miten kristinusko levisi Australiaan?",
            options: ["Siirtolaisten mukana", "Eurooppalaiset sotilaat toivat sen mukanaan", "Kristinusko saapui Australiassa jo alkuperäiskansoilta", "Kristinusko levisi itsenäisesti australialaisten keskuudessa"],
            correctAnswer: 1
        },
        {
            question: "Mitkä ovat Australian suurimmat kristilliset kirkkokunnat nykyään?",
            options: ["Roomalaiskatolisuus ja Anglikaanisuus", "Baptistikirkkokunta ja metodistinen kirkko", "Ortodoksinen kirkko ja luterilainen kirkko", "Evankelinen kirkko ja helluntailaiset seurakunnat"],
            correctAnswer: 1
        },
        {
            question: "Miksi kristinusko levisi Oseaniaan?",
            options: ["Löytöretkien jälkeen lähetyssaarnaajat toivat kristinuskon", "Oseanian alkuperäiskansat kääntyivät kristinuskoon itsenäisesti", "Kristinusko levisi alueelle kauppareittien kautta", "Kristinusko syntyi Oseaniassa erillisenä uskonto-virrassa"],
            correctAnswer: 1
        }
    ]
];

function loadQuestion() {
    const currentLevelQuestions = levels[currentLevel - 1];
    if (currentQuestion < currentLevelQuestions.length) {
        const questionData = currentLevelQuestions[currentQuestion];
        document.getElementById("question").innerText = questionData.question;
        const buttons = document.getElementById("choices").getElementsByTagName("button");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].innerText = questionData.options[i];
        }
        document.getElementById("result").innerText = "";
        document.getElementById("next").style.display = "none";
    } else {
        if (currentLevel < totalLevels) {
            document.getElementById("level").innerText = `Taso ${currentLevel + 1}`;
            currentLevel++;
            currentQuestion = 0;
            loadQuestion();
        } else {
            document.getElementById("level").innerText = "Peli on päättynyt!";
            document.getElementById("next").style.display = "none";
        }
    }
}