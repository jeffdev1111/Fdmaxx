//Welcome to Harlie Ai codebase --- This codeBase is written by Jeffrey Chidi for Hali ai ---- //
//Do not edit the code without the permmision of the Author ----Beware !! 🛎🛎 ---//

//Initialize variables
var body = document.body;
var chat = document.getElementById("chatBox");
var board = document.getElementById("chatBoard");
var type = document.getElementById("typing");
var think = document.getElementById("think");
var submit = document.getElementById("submit");
//creating unknown iframe for futher bing reference
var ifrm = document.createElement("iframe");
var intent, respond, transcript, mission, userx, uname, artist, chrt, connection, _micro, lstr, networth,loadba,input,
    personage = 21, companyworth = 10, author = "Jeffrey";
var notifyAudio = document.createElement("audio");
//Initialize event handlers
submit.onclick = send;
document.getElementById('timeb').innerText = timeStamp();

function detectmob() {
   if(window.innerWidth <= 800 && window.innerHeight <= 600) {
     return true;
   } else {
     return false;
   }
}


//country code to iso for news and other implementation
var isoCountries = {
    'Afghanistan': 'AF',
    'Aland Islands': 'AX',
    'Albania': 'AL',
    'Algeria': 'DZ',
    'American Samoa': 'AS',
    'Andorra': 'AD',
    'Angola': 'AO',
    'Anguilla': 'AI',
    'Antarctica': 'AQ',
    'Antigua And Barbuda': 'AG',
    'Argentina': 'AR',
    'Armenia': 'AM',
    'Aruba': 'AW',
    'Australia': 'AU',
    'Austria': 'AT',
    'Azerbaijan': 'AZ',
    'Bahamas': 'BS',
    'Bahrain': 'BH',
    'Bangladesh': 'BD',
    'Barbados': 'BB',
    'Belarus': 'BY',
    'Belgium': 'BE',
    'Belize': 'BZ',
    'Benin': 'BJ',
    'Bermuda': 'BM',
    'Bhutan': 'BT',
    'Bolivia': 'BO',
    'Bosnia And Herzegovina': 'BA',
    'Botswana': 'BW',
    'Bouvet Island': 'BV',
    'Brazil': 'BR',
    'British Indian Ocean Territory': 'IO',
    'Brunei Darussalam': 'BN',
    'Bulgaria': 'BG',
    'Burkina Faso': 'BF',
    'Burundi': 'BI',
    'Cambodia': 'KH',
    'Cameroon': 'CM',
    'Canada': 'CA',
    'Cape Verde': 'CV',
    'Cayman Islands': 'KY',
    'Central African Republic': 'CF',
    'Chad': 'TD',
    'Chile': 'CL',
    'China': 'CN',
    'Christmas Island': 'CX',
    'Cocos (Keeling) Islands': 'CC',
    'Colombia': 'CO',
    'Comoros': 'KM',
    'Congo': 'CG',
    'Congo, Democratic Republic': 'CD',
    'Cook Islands': 'CK',
    'Costa Rica': 'CR',
    'Cote D\'Ivoire': 'CI',
    'Croatia': 'HR',
    'Cuba': 'CU',
    'Cyprus': 'CY',
    'Czech Republic': 'CZ',
    'Denmark': 'DK',
    'Djibouti': 'DJ',
    'Dominica': 'DM',
    'Dominican Republic': 'DO',
    'Ecuador': 'EC',
    'Egypt': 'EG',
    'El Salvador': 'SV',
    'Equatorial Guinea': 'GQ',
    'Eritrea': 'ER',
    'Estonia': 'EE',
    'Ethiopia': 'ET',
    'Falkland Islands': 'FK',
    'Faroe Islands': 'FO',
    'Fiji': 'FJ',
    'Finland': 'FI',
    'France': 'FR',
    'French Guiana': 'GF',
    'French Polynesia': 'PF',
    'French Southern Territories': 'TF',
    'Gabon': 'GA',
    'Gambia': 'GM',
    'Georgia': 'GE',
    'Germany': 'DE',
    'Ghana': 'GH',
    'Gibraltar': 'GI',
    'Greece': 'GR',
    'Greenland': 'GL',
    'Grenada': 'GD',
    'Guadeloupe': 'GP',
    'Guam': 'GU',
    'Guatemala': 'GT',
    'Guernsey': 'GG',
    'Guinea': 'GN',
    'Guinea-Bissau': 'GW',
    'Guyana': 'GY',
    'Haiti': 'HT',
    'Heard Island & Mcdonald Islands': 'HM',
    'Holy See (Vatican City State)': 'VA',
    'Honduras': 'HN',
    'Hong Kong': 'HK',
    'Hungary': 'HU',
    'Iceland': 'IS',
    'India': 'IN',
    'Indonesia': 'ID',
    'Iran, Islamic Republic Of': 'IR',
    'Iraq': 'IQ',
    'Ireland': 'IE',
    'Isle Of Man': 'IM',
    'Israel': 'IL',
    'Italy': 'IT',
    'Jamaica': 'JM',
    'Japan': 'JP',
    'Jersey': 'JE',
    'Jordan': 'JO',
    'Kazakhstan': 'KZ',
    'Kenya': 'KE',
    'Kiribati': 'KI',
    'Korea': 'KR',
    'Kuwait': 'KW',
    'Kyrgyzstan': 'KG',
    'Lao People\'s Democratic Republic': 'LA',
    'Latvia': 'LV',
    'Lebanon': 'LB',
    'Lesotho': 'LS',
    'Liberia': 'LR',
    'Libyan Arab Jamahiriya': 'LY',
    'Liechtenstein': 'LI',
    'Lithuania': 'LT',
    'Luxembourg': 'LU',
    'Macao': 'MO',
    'Macedonia': 'MK',
    'Madagascar': 'MG',
    'Malawi': 'MW',
    'Malaysia': 'MY',
    'Maldives': 'MV',
    'Mali': 'ML',
    'Malta': 'MT',
    'Marshall Islands': 'MH',
    'Martinique': 'MQ',
    'Mauritania': 'MR',
    'Mauritius': 'MU',
    'Mayotte': 'YT',
    'Mexico': 'MX',
    'Micronesia, Federated States Of': 'FM',
    'Moldova': 'MD',
    'Monaco': 'MC',
    'Mongolia': 'MN',
    'Montenegro': 'ME',
    'Montserrat': 'MS',
    'Morocco': 'MA',
    'Mozambique': 'MZ',
    'Myanmar': 'MM',
    'Namibia': 'NA',
    'Nauru': 'NR',
    'Nepal': 'NP',
    'Netherlands': 'NL',
    'Netherlands Antilles': 'AN',
    'New Caledonia': 'NC',
    'New Zealand': 'NZ',
    'Nicaragua': 'NI',
    'Niger': 'NE',
    'Nigeria': 'NG',
    'Niue': 'NU',
    'Norfolk Island': 'NF',
    'Northern Mariana Islands': 'MP',
    'Norway': 'NO',
    'Oman': 'OM',
    'Pakistan': 'PK',
    'Palau': 'PW',
    'Palestinian Territory, Occupied': 'PS',
    'Panama': 'PA',
    'Papua New Guinea': 'PG',
    'Paraguay': 'PY',
    'Peru': 'PE',
    'Philippines': 'PH',
    'Pitcairn': 'PN',
    'Poland': 'PL',
    'Portugal': 'PT',
    'Puerto Rico': 'PR',
    'Qatar': 'QA',
    'Reunion': 'RE',
    'Romania': 'RO',
    'Russian Federation': 'RU',
    'Rwanda': 'RW',
    'Saint Barthelemy': 'BL',
    'Saint Helena': 'SH',
    'Saint Kitts And Nevis': 'KN',
    'Saint Lucia': 'LC',
    'Saint Martin': 'MF',
    'Saint Pierre And Miquelon': 'PM',
    'Saint Vincent And Grenadines': 'VC',
    'Samoa': 'WS',
    'San Marino': 'SM',
    'Sao Tome And Principe': 'ST',
    'Saudi Arabia': 'SA',
    'Senegal': 'SN',
    'Serbia': 'RS',
    'Seychelles': 'SC',
    'Sierra Leone': 'SL',
    'Singapore': 'SG',
    'Slovakia': 'SK',
    'Slovenia': 'SI',
    'Solomon Islands': 'SB',
    'Somalia': 'SO',
    'South Africa': 'ZA',
    'South Georgia And Sandwich Isl.': 'GS',
    'Spain': 'ES',
    'Sri Lanka': 'LK',
    'Sudan': 'SD',
    'Suriname': 'SR',
    'Svalbard And Jan Mayen': 'SJ',
    'Swaziland': 'SZ',
    'Sweden': 'SE',
    'Switzerland': 'CH',
    'Syrian Arab Republic': 'SY',
    'Taiwan': 'TW',
    'Tajikistan': 'TJ',
    'Tanzania': 'TZ',
    'Thailand': 'TH',
    'Timor-Leste': 'TL',
    'Togo': 'TG',
    'Tokelau': 'TK',
    'Tonga': 'TO',
    'Trinidad And Tobago': 'TT',
    'Tunisia': 'TN',
    'Turkey': 'TR',
    'Turkmenistan': 'TM',
    'Turks And Caicos Islands': 'TC',
    'Tuvalu': 'TV',
    'Uganda': 'UG',
    'Ukraine': 'UA',
    'United Arab Emirates': 'AE',
    'United Kingdom': 'GB',
    'United States': 'US',
    'United States Outlying Islands': 'UM',
    'Uruguay': 'UY',
    'Uzbekistan': 'UZ',
    'Vanuatu': 'VU',
    'Venezuela': 'VE',
    'Vietnam': 'VN',
    'Virgin Islands, British': 'VG',
    'Virgin Islands, U.S.': 'VI',
    'Wallis And Futuna': 'WF',
    'Western Sahara': 'EH',
    'Yemen': 'YE',
    'Zambia': 'ZM',
    'Zimbabwe': 'ZW'
};



//get country code
function getCountryCode(countryName) {
    var _country = firstUpper(countryName);
    if (isoCountries.hasOwnProperty(_country)) {
        return isoCountries[_country];
    } else {
        return _country;
    }
}

function isTyping() {
    var loading = document.createElement('div');
    loading.className = "loading";
    var loadingbar = document.createElement('div');
    loadingbar.className = "loading-bar";
    var loadingbar1 = document.createElement('div');
    loadingbar1.className = "loading-bar";
    var loadingbar2 = document.createElement('div');
    loadingbar2.className = "loading-bar";
    var loadingbar3 = document.createElement('div');
    loadingbar3.className = "loading-bar";

    loading.appendChild(loadingbar);
    loading.appendChild(loadingbar1);
    loading.appendChild(loadingbar2);
    loading.appendChild(loadingbar3);

    board.appendChild(loading);
}

function isLoading() {
    loadbar = document.createElement('div');
    loadbar.className = "load-bar";
    var lbar = document.createElement('div');
    lbar.className = "bar";
    var lbar1 = document.createElement('div');
    lbar.className = "bar";
    var lbar2 = document.createElement('div');
    lbar.className = "bar";

    loadbar.appendChild(lbar);
    loadbar.appendChild(lbar1);
    loadbar.appendChild(lbar2);

}

function removeTyping() {
    var z = document.getElementsByClassName('loading');
    for (var i = 0; i < z.length; i++) {
        z[i].style.display = "none";
    }
}

function removeLoading() {
    var z = document.getElementsByClassName('load-bar');
    for (var i = 0; i < z.length; i++) {
        z[i].style.display = "none";
    }
}

//get Name
function getName() {
    try {
        uname = localStorage.getItem("name");
        if (uname == null) {
            return "friend";
        } else {
            return uname;
        }
    } catch (e) {
        return "friend";
    }
}

//Voice input Start
try {
    var recognition = new webkitSpeechRecognition();
}
catch (e) {
    console.error(e);
    upgrade();
}
//voice input on error
recognition.onerror = function (event) {
    if (event.error == 'no-speech') {
    }
    ;
}


recognition.onresult = function (event) {

    // event is a SpeechRecognitionEvent object.
    // It holds all the lines we have captured so far.
    // We only need the current one.
    var current = event.resultIndex;

    // Get a transcript of what was said.
    transcript = event.results[current][0].transcript;
    voicesend();
}

//End Voice input


//ChatTemplate Function
function UserTemplate(word, start, end) {
    var _template = word.replace(start, '');
    var _template1 = _template.replace(end, '');
    var _end = _template1.trim();
    return _end;
}

//Date converter
function dateReverse(year, month, day) {
    var _month, fulldate;
    switch (month) {
        case 'January':
            _month = 1;
            break;
        case 'Feburary':
            _month = 2;
            break;
        case 'March':
            _month = 3;
            break;
        case 'April':
            _month = 4;
            break;
        case 'May':
            _month = 5;
            break;
        case 'June':
            _month = 6;
            break;
        case 'July':
            _month = 7;
            break;
        case 'August':
            _month = 8;
            break;
        case 'September':
            _month = 9;
            break;
        case 'October':
            _month = 10;
            break;
        case 'November':
            _month = 11;
            break;
        case 'December':
            _month = 12;
            break;
        default:
            _month = 1;
            break;
    }
    fulldate = year + "/" + _month + "/" + day
    return fulldate;
}


//calculate Age 
function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}


// Start voice Send function
// This function sends the voice transcript to voice send for processing
function voicesend() {
    if (transcript == "") {
        //action to perform if user input == null
    } else {
        var voiceinfo = transcript;
        listen(voiceinfo);
    }


    //create ai and chat nodes for \hali\ and user respectively
    // user
    var chatNode = document.createElement("p");
    chatNode.className = "user";
    var timeu = document.createElement("span");
    timeu.className = "timeu"
    var textNode = document.createTextNode(voiceinfo);
    var timeNodeu = document.createTextNode(timeStamp());
    chatNode.appendChild(textNode);
    timeu.appendChild(timeNodeu);
    chatNode.appendChild(timeu);
    board.appendChild(chatNode);

    // var aiTyping = document.createElement('p');

    isTyping();
    //clear chatBox after each message
    chat.value = "";
}

//Text to speech function
function readoutloud(message) {
    // var speech = new SpeechSynthesisUtterance();
    // // Set the text and voice attributes.
    // speech.text = message;
    // speech.volume = 1;
    // speech.rate = 1;
    // speech.pitch = 1;
    // window.speechSynthesis.speak(speech);
    responsiveVoice.speak(message);
}

//Convert first word to upper string
function firstUpper(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function perform(info, infos) {
    var aisNode = document.createElement("p");
    aisNode.className = "ai";
    var ais = document.createTextNode(randomTalk("I didn't quite get that. | I didn't catch that, please rephrase, | I could not process that, please rephrase, | I didn't really get that. ") + randomTalk("You could ask me things like : | You could ask me something nice like "));
    aisNode.appendChild(ais);
    board.appendChild(aisNode);
    readoutloud(aisNode.innerHTML);
    readoutloud(info);
    readoutloud("or");
    readoutloud(infos);

    var cover = document.createElement('p');
    var boxNode = document.createElement("button");
    boxNode.className = "ai_quest";
    var boxtext = document.createTextNode(info);
    var boxNodes = document.createElement("button");
    boxNodes.className = "ai_quests";
    var boxtexts = document.createTextNode(infos);
    boxNode.appendChild(boxtext);
    boxNodes.appendChild(boxtexts);
    cover.appendChild(boxNode);
    cover.appendChild(boxNodes);
    board.appendChild(cover);
    boxNode.onclick = s_perform;
    boxNodes.onclick = s_perform;
}

function s_perform() {
    if (this.innerHTML == "") {
        //action to perform if user input == null
    } else {
        var d = this.innerHTML;
        d = d.toLowerCase();
        //meaning lower string
        //start the ai \hali\ listening capabilit
        listen(d);
        // reply(intent, "Harlie", "Jeffrey");
    }
    // var x = this.innerHTML;
    // var lstr = x.toLowerCase();
    // listen(lstr);
    // reply(intent, "Harlie", "Jeffrey");

    var chatNode = document.createElement("p");
    chatNode.className = "user";
    var timeu = document.createElement("span");
    timeu.className = "timeu"
    var textNode = document.createTextNode(this.innerHTML);
    var timeNodeu = document.createTextNode(timeStamp());
    chatNode.appendChild(textNode);
    timeu.appendChild(timeNodeu);
    chatNode.appendChild(timeu);
    board.appendChild(chatNode);


    scrollSmoothToBottom('chatBoard');

    readoutloud(respond);
}


function send() {
    if (chat.value === "") {
        //action to perform if user input == null
        return 0;
    } else {
        var x = chat.value;
        //meaning lower string
        lstr = x.toLowerCase();
        input = x.toLowerCase();
        //start the ai \hali\ listening capability
        listen(lstr);
        // reply(intent, "Harlie", "Jeffrey");
    }

    //create ai and chat nodes for \hali\ and user respectively
    // user
    var chatNode = document.createElement("p");
    chatNode.className = "user";
    var timeu = document.createElement("span");
    timeu.className = "timeu"
    var textNode = document.createTextNode(chat.value);
    var timeNodeu = document.createTextNode(timeStamp());
    chatNode.appendChild(textNode);
    timeu.appendChild(timeNodeu);
    chatNode.appendChild(timeu);
    board.appendChild(chatNode);

    isTyping();
    //clear chatbox
    chat.value = "";
}

function scrollSmoothToBottom (id) {
  var div = document.getElementById(id);
  $('#' + id).animate({
     scrollTop: div.scrollHeight - div.clientHeight+8
  }, 200);
}

$("#chatBoard").bind("DOMNodeInserted",function(){
    scrollSmoothToBottom('chatBoard');
});

//function to generate random replies for case
function randomReply(random_replies) {
    words = random_replies.split("|")
    respond = words[Math.floor(Math.random() * words.length)];
}

//function to generate random replies not for case
function randomTalk(random_replies) {
    words = random_replies.split("|")
    return words[Math.floor(Math.random() * words.length)];
}

//function to tell the time
function currentTime() {
    m_time = new Date();
    r_time = "The time is " + m_time.getHours() % 12 + " : " + m_time.getMinutes() + " : " + m_time.getSeconds() + " PM ⏰"
    return r_time;
}

setInterval(currentTime, 1000)

function timeStamp() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var r_time = hours + ':' + minutes + ' ' + ampm;
    return r_time;
}

function currentDate() {
    d_date = new Date();
    f_date = "Today is " + d_date.toDateString();
    respond = f_date;
}

function aicall(msg) {
    var timeb = document.createElement("span");
    timeb.className = "timeb";
    var aiNode = document.createElement("p");
    aiNode.className = "ai";
    var ai = document.createTextNode(msg);

    var timeNode = document.createTextNode(timeStamp());

    aiNode.appendChild(ai);
    timeb.appendChild(timeNode);
    aiNode.appendChild(timeb);
    board.appendChild(aiNode);
    readoutloud(msg);
}

//Bing out the result
function bingBoard() {
    ifrm.className = "ai";
    ifrm.setAttribute("src", "https://www.bing.com/search?q=" + intent);
    board.appendChild(ifrm);
}
