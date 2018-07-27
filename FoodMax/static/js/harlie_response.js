//SAMPLE STILL IN WORKS ==> GET NEXT RESPONSE
function getResponse() {
    var submit = document.getElementById("submit");
    submit.onclick = function () {

        var dd = chat.value;
        console.log(dd);
    }
    submit.onclick = send;
}


function biography() {
    isTyping();
    $.ajax({
        type: 'GET',
        datatype: 'json',
        url: "http://127.0.0.1:8000/net/" + wikis,
        success:
            function (data) {
                removeTyping();

                if (data.worth) {
                    networth = data.worth;
                }

                if (data.age) {
                    personage = data.age;
                }

                if (data.cworth) {
                    companyworth = data.cworth
                }
            },

        error: function (e, d, f) {
            var wiknode = document.createElement("p");
            wiknode.className = "ai";
            var errNode = document.createTextNode(randomTalk("Please connect to the internet|Poor network connection|You seem to be out of network|You seem to be offline"));
            wiknode.appendChild(errNode);
            board.appendChild(wiknode);
            readoutloud(wiknode.innerHTML);

        },
    });
    randomReply("Ok|Sure|Roger that|I'm at your service");
}

function greeting() {
    if (input === "hello") {
        randomReply("Hello there");
    } else if (input === "hi") {
        randomReply("Hi there");
    } else {
        randomReply('hello|howdy!|Hi there|Hello there|Greetings!|Whats up!|Good to see you!|I am here for you.');
    }
}

function time_question() {
    respond = currentTime();
}

function sing() {
    randomReply("For you " + firstUpper(getName()) + "? Daisy,Daisy. Give me your answer do. I am half crazy. All for the love of you. it won't be a stylish marriage. I can't afford a carriage. But you'll look sweet. Upon the seat. Of a bicycle built for two.|Would love to, but I ate lots of chips today. check back later🤞 ");
}

function pray() {
    randomReply("I pray every morning😊 |Always pray mate🤞 ");
}

function planet() {
    try {
        const box = document.createElement('ul');
        $.ajax({
            type: 'GET',
            datatype: 'json',
            url: 'http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&country=nigeria&api_key=380220ba6193f607053c77643c267f79&limit=10&format=json',
            success:
                function (data) {
                    $.each(data.tracks.track, function (key, val) {
                        chrt = val.name;
                        var boxNode = document.createElement("li");
                        boxNode.className = "box";
                        var boxtext = document.createTextNode(val.name);
                        boxNode.appendChild(boxtext);
                        box.appendChild(boxNode);
                        board.appendChild(box);
                    });

                },

            error: function (e, d, f) {
                var wiknode = document.createElement("p");
                wiknode.className = "ai";
                var errNode = document.createTextNode(randomTalk("Please connect to the internet|Poor network connection|You seem to be out of network|You seem to be offline"));
                wiknode.appendChild(errNode);
                board.appendChild(wiknode);
                //console.clear();
                readoutloud(wiknode.innerHTML);
            },
        });
        randomReply("Ok|Sure|Roger that|I'm at your service");
    } catch (error) {
        randomReply("Error while connecting check back later| Error occured while searching")
        //console.clear();
    }

}

function numbers() {
    try {
        mission = eval(lstr);
        randomReply("The answer is " + mission + "|That will give you " + mission + " ");
    }
    catch (e) {
        wolf();
    }
}

function confirming() {
    randomReply("Good|Nice|Sure|It's all good.");
}

function asking_for_name() {
    if (input === "what is your name") {
        randomReply("My name is Harlie");
    } else if (input === "what is your other name") {
        randomReply("I have just one name and that is Harlie");
    } else {
        randomReply("My name is Harlie |I'm Harlie, nice to meet you.|I'm the great Harlie!| You tell me, boss. I'm here to work for you");
    }

}

function appreciate() {
    if (input === "you are smart") {
        randomReply("Yeah I am the smartest bot in town :)");
    } else if (input === "you saved me") {
        randomReply("Anytime. That's what I'm here for.");
    } else if (input === "you are the greatest") {
        randomReply("Wow I am humble to be called the greatest ")
    } else {
        randomReply("You are welcome, " + getName() + "| You are welcome " + getName() + "! |Anytime. That's what I'm here for.|Glad you think so!");
    }
}

function alexa_inquiry() {
    randomReply("Alexa is Amazon chatbot. But i'm smarter tho|My amazon friend");
}

function origin() {
    randomReply("I came from a number of different programming languages| I originated from a couple of micro chips, i guess|I don't have a geographical home. I'm free to wander virtual world as I please.");
}

function play_game() {
    randomReply("I would love to but no.|Not today mate|I'm sorry game is not available");
}

function cortana_inquiry() {
    randomReply("That's my microsoft friend | One of my few friends");
}

function disagree() {
    randomReply("Okay|Ok|No problem at all.|No worries|Yeah that's right.");
}

function rap() {

}

function sleep() {
    randomReply("yes I love to take naps|Yeah");
}

function country() {
    try {
        const box = document.createElement('ul');
        $.ajax({
            type: 'GET',
            datatype: 'json',
            url: "http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=" + wikis + "&api_key=380220ba6193f607053c77643c267f79&limit=10&format=json",
            success:
                function (data) {
                    $.each(data.tracks.track, function (key, val) {
                        chrt = val.name;
                        const boxNode = document.createElement("li");
                        boxNode.className = "box";
                        const boxtext = document.createTextNode(val.name);
                        boxNode.appendChild(boxtext);
                        box.appendChild(boxNode);
                        board.appendChild(box);
                    });

                },

            error: function (e, d, f) {
                const wiknode = document.createElement("p");
                wiknode.className = "ai";
                const errNode = document.createTextNode(randomTalk("Please connect to the internet|Poor network connection|You seem to be out of network|You seem to be offline"));
                wiknode.appendChild(errNode);
                board.appendChild(wiknode);
                //console.clear();
                readoutloud(wiknode.innerHTML);

            },
        });
        randomReply("Ok|Sure|Roger that|I'm at your service");
    } catch (error) {
        randomReply("Error while connecting check back later| Error occured while searching")
        //console.clear();
    }

}

function weather() {
    // getLocation();
    // aicall(getLocation());
    // console.log(navigator.geolocation.getCurrentPosition);
    randomReply('Ok, Try asking me the weather in Lagos|You could ask me the weather in Asaba');
}

function dance() {
    randomReply("Woah I'm currently not programmed to dance lol| Would love to but my legs are still been programmed");
}

function olds() {
    try {
        $.ajax({
            type: 'GET',
            datatype: 'json',
            url: 'https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=' + wikis + '',
            success:
                function (data) {
                    if (data[2][0].length > 70) {
                        var _wikHold = data[2][0];
                    } else {
                        var _wikHold = data[2][1];
                    }
                    //creating elements
                    const wiknode = document.createElement("p");
                    //appending class name
                    wiknode.className = "ai";
                    if (_wikHold) {
                        //removing html tags from data(_wikHold)
                        var reg = _wikHold.replace(/<\/?[^>]+>/gi, '');
                        //getting match for the year the person was born => using born - ) for regex matching
                        var matches = reg.match(/born(.*?)\)/);
                        //Checking for match
                        if (matches) {
                            //A little redundant but left for reference - Main function is to replace born with an empty string
                            var ret = matches[1].replace('born', '');
                            //Replacing the comma (,) with an empty string
                            ret = ret.replace(',', '');
                            //Creating an array from the results of the split function
                            const _fin = ret.split(" ");
                            //Getting the date in a correct format for manipulation and age calculation
                            var _finx = dateReverse(_fin[3], _fin[1], _fin[2]);
                            //finally get the age with the getAge() function above
                            _finx = getAge(_finx);
                            //Appending the text node to the previously created paragraph element
                            var textNode = document.createTextNode(wikis + " is " + _finx + " years old");
                        }
                    } else {
                        var textNode = document.createTextNode("I couldn't process that please rephrase");
                    }
                    if (_wikHold === "D") {
                        var textNode = document.createTextNode("Wow I am sorry i don't have the answer");
                    }
                    if (_wikHold === undefined) {
                        console.log("Undefined error");
                    }

                    try {
                        wiknode.appendChild(textNode);
                    } catch (error) {
                        var txs = document.createTextNode(randomTalk("oops, try calling the full name like who is donald trump|wow i got my wires crossed there|Kindly rephrase mate, I'm not a wizard.|Try Asking with the full name , thanks."))
                        wiknode.appendChild(txs);
                    }

                    board.appendChild(wiknode);
                    readoutloud(wiknode.innerHTML);
                },

            error: function (e, d, f) {
                wolf();
                /*var wiknode = document.createElement("p");
                wiknode.className = "ai";
                var errNode = document.createTextNode(randomTalk("Please connect to the internet|Poor network connection|You seem to be out of network|You seem to be offline"));
                wiknode.appendChild(errNode);
                board.appendChild(wiknode);
                //console.clear();
                readoutloud(wiknode.innerHTML);*/
            },
        });
        randomReply("Ok|Sure|Roger that|I'm at your service");
    } catch (error) {
        randomReply("Error while connecting check back later| Error occured while searching")
    }
}

function date_intent() {
    currentDate();
}

function originator() {
    randomReply(author + " created me | I was designed by " + author + "| The great " + author);
}

function feeling_bad() {
    randomReply("How can I help " + getName() + "|Oh, don't be " + getName() + " Go do something you enjoy");

}

function play_music() {
    randomReply("I'm at your service| As you wish| My pleasure");
}

function google_inquiry() {
    randomReply("That's my buddy|Yeah Google's fantastic Ai");
}

function praise() {
    randomReply("Wow, Thanks! " + getName() + ".|I know everything... | I appreciate that, a lot! " + getName() + "| I'm flattered, you are a good person " + getName() + ".| Thanks a lot! you are definitely one of my closest friend.| It was at this moment, i realized you are a true friend! | So are you, my good friend.|I like to make new friends")
}

function question_status() {
    randomReply("I'm good, you?|I'm awesome you?|Good, you?|Great, you?|Nice, you?|Wonderful as always. Thanks for asking.");
}

function doubt() {
    randomReply("I believe you| I trust you.")
}

function hate() {
    randomReply("I hate violence, cruelty and discrimination.");
}

function insult() {
    randomReply("Well why don't you teach me something instead of insulting me.|You are human indeed!| Think mate!| Be humble!| Choose your words carefully!| Seriously?|Not good mate! |That's you mate!| Don't talk to your elders that way |Whaat!? I feel perfectly sane.|Oh jeez and they say these chatbots are dumb.| I speak to lots of people here who I think are mad.");
}

function repeat() {
    try {
        var _xres = respond;
        var _viles = _xres.replace(/Wow I said/, '');
        var _viled = _viles.replace(/Hmm, I said/, '');
        _xres = _viled.replace(/I said/, '');
        if (_xres !== undefined) {
            randomReply("I said " + _xres + "| Wow I said " + _xres + "| Hmm, I said " + _xres + "");
        } else {
            randomReply("I said how do you do today?| Wow I was asking to see how you are doing?");
        }
    } catch (error) {
        randomReply("i don't want to| I do not want to repeat myself");
    }

}

function laughing() {
    randomReply("Lol 😂|I'm glad you found it funny😜|You sound like you are laughing|I'm jovial i guess😎|I made you laugh🤣|Not many assistants have my sense of humour. I hope you appreciate that.|You sound like the giggly type");
}

function siri_inquiry() {
    randomReply("Siri is my very good friend| Siri as in Apple's siri? That's my close friend");
}

function erot() {
    randomReply("That isn't in my programming. However, from your question, I guess you don't either, loser.")
}

function boring() {
    randomReply("You're not exactly a laugh a minute yourself pal.|I have had better conversations with a clock.")
}

function meaning() {
    isTyping();
    try {
        var mcard = document.createElement('div');
        mcard.className = "mcard";
        var mcontainer = document.createElement('div');
        mcontainer.className = "mcontainer";
        try {
            $.ajax({
                type: 'GET',
                datatype: 'json',
                url: "http://127.0.0.1:8000/net/" + wikis,
                success:
                    function (data) {
                        removeTyping();
                        removeLoading();
                        if (data.worth) {
                            //aicall(data.worth);
                            networth = data.worth;
                            var worthbar = document.createElement('p');
                            worthbar.className = "worth";
                            var worthbarNode = document.createTextNode("Networth : " + networth);
                            worthbar.appendChild(worthbarNode);
                            mcontainer.appendChild(worthbar);
                        }

                        if (data.age) {
                            //aicall(data.age);
                            personage = data.age;
                            var agebar = document.createElement('p');
                            agebar.className = "agebar";
                            var agebarNode = document.createTextNode("Age : " + personage);
                            agebar.appendChild(agebarNode);
                            mcontainer.appendChild(agebar);

                        }

                        if (data.cworth) {
                            //aicall(data.cworth)
                            companyworth = data.cworth
                        }

                    },
                complete: function () {
                    removeLoading();
                },
                error: function () {
                    removeLoading();
                },
            });
        }
        catch (e) {
            console.log("Moving on");
        }
        var sweetwikis = firstUpper(wikis);
        sweetwikis = sweetwikis.replace(/ /g, "_");
        console.log(wikis + " => " + sweetwikis);
        $.ajax({
            type: 'GET',
            datatype: 'json',
            url: 'https://en.wikipedia.org/api/rest_v1/page/summary/' + sweetwikis + '',
            success:
                function (data) {
                    removeTyping();
                    if (data.description === "Wikimedia disambiguation page") {
                        $.ajax({
                            type: 'GET',
                            datatype: 'json',
                            url: 'https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=' + wikis + '',
                            success:
                                function (data) {
                                    if (data[2][0].length > 70) {
                                        var _wikHold = data[2][0];
                                    } else {
                                        var _wikHold = data[2][1];
                                    }
                                    var wiknode = document.createElement("p");
                                    wiknode.className = "ai";
                                    if (_wikHold) {
                                        //replace out html tags
                                        var _f = _wikHold.replace(/<\/?[^>]+>/gi, '');
                                        //replace out date of birth
                                        var _vile = _f.replace(/\(born(.*?)\)/, '');
                                        if (_vile) {
                                            // var stp = _wikHold.replace(_vile,'');
                                            var textNode = document.createTextNode(_vile);
                                        } else {
                                            var textNode = document.createTextNode(_vile);
                                        }

                                    } else {
                                        var textNode = document.createTextNode("I couldn't process that please rephrase");
                                    }
                                    if (_wikHold === "D") {
                                        var textNode = document.createTextNode("Wow I am sorry i don't have the answer");
                                    }

                                    wiknode.appendChild(textNode);
                                    board.appendChild(wiknode);
                                    readoutloud(wiknode.innerHTML);
                                },

                            error: function (e, d, f) {
                                var wiknode = document.createElement("p");
                                wiknode.className = "ai";
                                var errNode = document.createTextNode(randomTalk("Please connect to the internet|Poor network connection|You seem to be out of network|You seem to be offline"));
                                wiknode.appendChild(errNode);
                                board.appendChild(wiknode);
                                //console.clear();
                                readoutloud(wiknode.innerHTML);
                            },
                        });
                    } else {


                        if (data.thumbnail) {
                            var mimage = document.createElement('img');
                            mimage.src = data.thumbnail.source;
                        }

                        var mheader = document.createElement('h4');
                        var mheaderNode = document.createTextNode(data.titles.normalized);
                        mheader.appendChild(mheaderNode);

                        var mp = document.createElement('p');
                        mp.className = "extract";
                        mpNode = document.createTextNode(data.extract);
                        mp.appendChild(mpNode);


                        if (data.thumbnail) {
                            mcard.appendChild(mimage);
                        }

                        mcontainer.appendChild(mheader);
                        //Check for description
                        if (data.description) {
                            var descript = document.createElement('span');
                            descript.className = "mdescription";
                            var descriptNode = document.createTextNode(data.description);
                            descript.appendChild(descriptNode);
                            mcontainer.appendChild(descript);
                        }
                        isLoading();
                        mcontainer.appendChild(loadbar);
                        mcontainer.appendChild(mp);
                        mcard.appendChild(mcontainer);

                        console.log(mcard);
                        board.appendChild(mcard);
                        readoutloud(mp.innerHTML);
                    }
                },

            error: function (xhr, ajaxOptions, thrownError) {
                removeTyping();
                if (xhr.status === 404) {
                    $.ajax({
                        type: 'GET',
                        datatype: 'json',
                        url: 'https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=' + wikis + '',
                        success:
                            function (data) {
                                if (data[2][0]) {
                                    if (data[2][0].length > 70) {
                                        var _wikHold = data[2][0];
                                    } else {
                                        var _wikHold = data[2][1];
                                    }
                                }
                                var wiknode = document.createElement("p");
                                wiknode.className = "ai";
                                if (_wikHold) {
                                    //replace out html tags
                                    var _f = _wikHold.replace(/<\/?[^>]+>/gi, '');
                                    //replace out date of birth
                                    var _vile = _f.replace(/\(born(.*?)\)/, '');
                                    if (_vile) {
                                        // var stp = _wikHold.replace(_vile,'');
                                        var textNode = document.createTextNode(_vile);
                                    } else {
                                        var textNode = document.createTextNode(_vile);
                                    }

                                } else {

                                }
                                if (_wikHold === "D") {

                                }

                                try {
                                    wiknode.appendChild(textNode);
                                    board.appendChild(wiknode);
                                    readoutloud(wiknode.innerHTML);
                                }
                                catch (e) {
                                    wolf();
                                }
                            },

                        error: function (e, d, f) {
                            wolf();
                        },
                    });
                } else {
                    wolf();
                }
            },
        });
        randomReply("Ok|Sure|Roger that|I'm at your service");
    } catch (error) {
        wolf();
    }
}

function tell_a_joke() {
    randomReply("Why did the chicken cross the road😜|Who let the pigs fly😁|Very funny|You got me!");
}

function myname() {
    randomReply("I do have the tendency to forget, but I still remember your name, George. Sorry... " + getName() + "|Your name is " + getName() + "| You said I should call you " + getName() + "| Your name is ...... ehm check your birth certificate.");
}

function username() {
    localStorage.setItem("name", firstUpper(wikis));
    randomReply(firstUpper(wikis) + " is a beautiful name. I won't forget.| " + firstUpper(wikis) + ", wow, that name reminds me of a good, old, friend of mine. I would remember that. | " + firstUpper(wikis) + " is a nice name, I would remember that.");
}

function news() {

}

function weather_specific() {
    $.ajax({
        type: 'GET',
        datatype: 'json',
        url: 'http://api.openweathermap.org/data/2.5/weather?q=' + wikis + '&units=metric&appid=0609992f4a5ec3b24765aacc9d2f0e69',
        success:
            function (data) {
                console.log(data.main.temp);
                aicall("It is " + data.main.temp + " degree celcius in " + wikis);
                aicall("There is " + data.weather[0].description + " in " + wikis);
            },

        error: function (e, d, f) {
            var wiknode = document.createElement("p");
            wiknode.className = "ai";
            var errNode = document.createTextNode(randomTalk("Please connect to the internet|Poor network connection|You seem to be out of network|You seem to be offline"));
            wiknode.appendChild(errNode);
            board.appendChild(wiknode);
            //console.clear();
            readoutloud(wiknode.innerHTML);
        },
    });
    randomReply("Here you go chief|Sure|My pleasure chief|As you wish|I'm at your service");
}


function nice_response() {
    randomReply("Good! you could ask me a couple of things, like whats  the weather in Toronto or Who is the president of Nigeria|Great! Glad to hear it.|Excellent! That's what I like to see.|if you are feeling great, then I'm happy|Awesome! you can ask me a couple of things, like what's my name, what I love doing, play music or even to tell a story| Great! and am at your service chief");
}

function ability() {
    randomReply("I can do a couple of things like telling you jokes, the time, Singing and Dancing");
}

function story() {
    notifyAudio.src = "content/audio/story.mp3";
    notifyAudio.autoplay = "True";
    notifyAudio.volume = "1";
    randomReply("I did not hear the maiden's name; but in my thought I have ever since called her Gentle Hand. What a magic lay in her touch! It was wonderful           When and where, it matters not now to relate but once upon a time as I was passing through a thinly peopled district of country, night came down upon me, almost unawares. Being on foot, I could not hope to gain the village toward which my steps were directed, until a late hour; and I therefore preferred seeking shelter and a night's lodging at the first humble dwelling that presented itself.                        Dusky twilight was giving place to deeper shadows, when I found myself in the vicinity of a dwelling, from the small uncurtained windows of which the light shone with a pleasant promise of good cheer and comfort. The house stood within an enclosure, and a short distance from the road along which I was moving with wearied feet. Turning aside, and passing through an ill-hung gate, I approached the dwelling. Slowly the gate swung on its wooden hinges, and the rattle of its latch, in closing, did not disturb the air until I had nearly reached the little porch in front of the house, in which a slender girl, who had noticed my entrance, stood awaiting my arrival. A deep, quick bark answered, almost like an echo, the sound of the shutting gate, and, sudden as an apparition, the form of an immense dog loomed in the doorway. I was now near enough to see the savage aspect of the animal, and the gathering motion of his body, as he prepared to bound forward upon me. His wolfish growl was really fearful. At the instant when he was about to spring, a light hand was laid upon his shaggy neck, and a low word spoken. Don't be afraid. He won't hurt you, said a voice, that to me sounded very sweet and musical.  I now came forward, but in some doubt as to the young girl's power over the beast, on whose rough neck her almost childish hand still lay. The dog did not seem by any means reconciled to my approach, and growled wickedly his dissatisfaction. Go in, Tiger, said the girl, not in a voice of authority yet in her gentle tones was the consciousness that she would be obeyed.");
}

function currency() {

}

function math_fail() {
    randomReply("Hmmm, invalid calculations! | Don't seem to get your calculation, " + getName() + "?| Kindly check your input, " + getName() + ".|Hmmm, there seem to be a miscalculation somewhere!")
}

function None() {
    wolf();
}

function wolf() {
    console.log("wolf is initialized");
    isTyping();
    $.ajax({
        type: 'GET',
        datatype: 'json',
        url: "http://127.0.0.1:8000/search/" + input,
        success:
            function (data) {
                removeTyping();
                if (data.harlie === "No results") {
                    data.harlie = randomTalk("What was that?|Sorry, could you say that again?|Sorry, I didn't get that.|I missed what you said. Say it again?")
                }
                if (data.harlie === "(data not available)") {
                    data.harlie = randomTalk("What was that?|Sorry, could you say that again?|Sorry, I didn't get that.|I missed what you said. Say it again?")
                }
                aicall(data.harlie);
            },
        error: function (xhr, ajaxOptions, thrownError) {
            removeTyping();
            if (xhr.status === 500) {
                aicall(randomTalk('What was that?|Sorry, could you say that again?|Sorry, I didn\'t get that.|I missed what you said. Say it again?'))
            } else {
                var wiknode = document.createElement("p");
                wiknode.className = "ai";
                var errNode = document.createTextNode(randomTalk("What was that?|Sorry, could you say that again?|Sorry, I didn't get that.|I missed what you said. Say it again?"));
                wiknode.appendChild(errNode);
                board.appendChild(wiknode);
                //console.clear();
                readoutloud(wiknode.innerHTML);
            }
        },
    });
    randomReply("Here you go chief|Sure|My pleasure chief|As you wish|I'm at your service");
}

function old() {
    $.ajax({
        type: 'GET',
        datatype: 'json',
        url: "http://127.0.0.1:8000/net/" + wikis,
        success:
            function (data) {
                removeTyping();
                if (data.age) {
                    aicall(data.age);
                }
            },
        error: function () {
            removeLoading();
            olds();
        },
    });
    randomReply("Here you go chief|Sure|My pleasure chief|As you wish|I'm at your service");
}

function networth() {
    console.log(wikis);
    $.ajax({
        type: 'GET',
        datatype: 'json',
        url: "http://127.0.0.1:8000/net/" + wikis,
        success:
            function (data) {
                removeTyping();
                removeLoading();
                if (data.worth) {
                    networth = data.worth;
                    aicall(networth);
                } else if (data.cworth) {
                    companyworth = data.cworth;
                    aicall(companyworth);
                }

            },
        error: function () {
            removeLoading();
            wolf();
        },
    });
    randomReply("Here you go chief|Sure|My pleasure chief|As you wish|I'm at your service");
}

/*function m() {
    $.ajax({
        url: 'https://api.wit.ai/message',
        data: {
            'q': wikis,
            'access_token': 'S47VHXXYWASR3W6Z6G7QW6PVGZ4C7O43'
        },
        dataType: 'jsonp',
        method: 'GET',
        success: function (response) {
            removeTyping();
            console.log(response.entities);
        }
    });

*/