function listen(str) {
    input = str;
    var max;
    $.ajax({
        type: 'GET',
        datatype: 'json',
        //url: "https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/8163a9e2-0fc8-4e81-a2a6-3f47b6d9adf8?subscription-key=c462c17c9b304b779ae0cd08752f2f38&verbose=true&timezoneOffset=0&q=" + str,
        url: "https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/40962388-0dd1-43d1-8052-66550a06f951?subscription-key=de96159c9fa54c2ba900674a0bf7b872&verbose=true&timezoneOffset=0&q=" + str,
        success:
            function (data) {
                var z = document.getElementsByClassName('loading');
                for (var i = 0; i < z.length; i++) {
                    z[i].style.display = "none";
                }
                console.log(data.topScoringIntent.intent);
                wikis = "";
                if (data.topScoringIntent.score <= 0.10) {
                    console.log("Intent score is low returning to default");
                    None();
                } else {
                    switch (data.topScoringIntent.intent) {
                        case 'news':

                            //aicall appends a message
                            aicall('sure');

                            if (data.entities[0]) {
                                var _newsentity = data.entities[0].entity;
                                var _next = getCountryCode(_newsentity)
                                var _getcurrent = "https://newsapi.org/v2/top-headlines?country=" + _next + "&category=Buisness&apiKey=7295b8496d7d429087dd787ae9baaa44";
                                $.ajax({
                                    type: 'GET',
                                    datatype: 'json',
                                    url: _getcurrent,
                                    success: function (data) {
                                        if (data.articles[0]) {
                                            console.log(data.articles[0].title);

                                            function href(link) {
                                                location.href = link;
                                            }

                                            var coverx = document.createElement('div');
                                            coverx.className = "container testimonial-group";
                                            var cov = document.createElement('div');
                                            cov.className = "row text-center";
                                            $.each(data.articles, function (key, val) {
                                                var coverone = document.createElement('div');
                                                var covertwo = document.createElement('div');
                                                coverone.className = "col-xs-4 col-md-5";
                                                covertwo.className = "thumbnail";
                                                covert = document.createElement('div');
                                                covert.className = "caption";

                                                var cimage = document.createElement('img');
                                                var chead = document.createElement('p');
                                                chead.className = "newsh";
                                                chead.onclick = function () {
                                                    href(val.url);
                                                }
                                                var cp = document.createElement('p');

                                                cimage.src = val.urlToImage;
                                                cimage.className = "nimage";
                                                var cheadNode = document.createTextNode(val.title);
                                                chead.appendChild(cheadNode);

                                                var cpnode = document.createTextNode(val.source.name);
                                                cp.appendChild(c / pnode);

                                                covert.appendChild(chead);
                                                covert.appendChild(cp);
                                                covertwo.appendChild(cimage);
                                                covertwo.appendChild(covert);
                                                // covertwo.appendChild(cp);
                                                // coverone.appendChild(cimage);
                                                coverone.appendChild(covertwo);
                                                cov.appendChild(coverone);
                                                coverx.appendChild(cov);
                                            });


                                            console.log(coverx);
                                            board.appendChild(coverx);

                                        } else {
                                            console.log("No news from " + _newsentity);
                                            aicall("Sorry no news from " + firstUpper(_newsentity));
                                        }
                                    },
                                    error: function (e, d, f) {
                                    }
                                })
                            } else {
                                var _getall = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=7295b8496d7d429087dd787ae9baaa44";
                                $.ajax({
                                    type: 'GET',
                                    datatype: 'json',
                                    url: _getall,
                                    success: function (data) {
                                        function href(link) {
                                            window.open(link, '_blank')
                                        }

                                        var coverx = document.createElement('div');
                                        coverx.className = "container testimonial-group";
                                        var cov = document.createElement('div');
                                        cov.className = "row text-center";
                                        $.each(data.articles, function (key, val) {
                                            var coverone = document.createElement('div');
                                            var covertwo = document.createElement('div');
                                            coverone.className = "col-xs-4 col-md-5";
                                            covertwo.className = "thumbnail";
                                            covert = document.createElement('div');
                                            covert.className = "caption";

                                            var cimage = document.createElement('img');
                                            var chead = document.createElement('p');
                                            chead.className = "newsh";
                                            // chead.setAttribute('target','_blank');
                                            chead.onclick = function () {
                                                href(val.url);
                                            }
                                            var cp = document.createElement('p');

                                            cimage.src = val.urlToImage;
                                            cimage.className = "nimage";
                                            var cheadNode = document.createTextNode(val.title);
                                            chead.appendChild(cheadNode);

                                            var cpnode = document.createTextNode(val.source.name);
                                            cp.appendChild(cpnode);

                                            covert.appendChild(chead);
                                            covert.appendChild(cp);
                                            covertwo.appendChild(cimage);
                                            covertwo.appendChild(covert);
                                            // covertwo.appendChild(cp);
                                            // coverone.appendChild(cimage);
                                            coverone.appendChild(covertwo);
                                            cov.appendChild(coverone);
                                            coverx.appendChild(cov);
                                        });


                                        console.log(coverx);
                                        board.appendChild(coverx);
                                    },


                                    error: function (e, d, f) {
                                    }
                                })
                            }

                            break;

                        default:
                            //get entities
                            var store = new Array();
                            if (data.entities[0]) {
                                for (var i = 0; i < data.entities.length; i++) {
                                    if (data.entities[i].entity === "fb") {
                                        data.entities[i].entity = "Facebook";
                                    }
                                    store.push(data.entities[i].entity);
                                    store.push(" ");
                                }
                                for (var e = 0; e < store.length; e++) {
                                    wikis += store[e];
                                }
                            }
                            //end get entities

                            var tf = data.topScoringIntent.intent;
                            window[tf]();
                            var timeb = document.createElement("span");
                            timeb.className = "timeb";
                            var aiNode = document.createElement("p");
                            aiNode.className = "ai";
                            if (respond == undefined || intent == "none") {
                                perform(randomTalk("Sing for me|Who is Donald Trump|How old is Bill Gates|What does prototype mean|4+5|Who is Google Assistant|Who is Siri|How old is Cristiano Ronaldo"), randomTalk("Who made you|Top tracks in the world|Top tracks in nigeria |What is the alphabet|Tell me a joke|Dance with me|21+66*3|Who is Cortana|Who is Alexa|Tell me a story"));
                                chat.value = "";
                            } else {
                                var ai = document.createTextNode(respond);

                                var timeNode = document.createTextNode(timeStamp());

                                aiNode.appendChild(ai);
                                timeb.appendChild(timeNode);
                                aiNode.appendChild(timeb);
                                board.appendChild(aiNode);

                                //console logs

                                console.log("Intent: " + data.topScoringIntent.intent);
                                console.log("Response: " + respond);

                                readoutloud(respond);
                            }
                            //console.clear();
                            break;
                    }
                }
            },

        error: function (e, d, f) {
            var wiknode = document.createElement("p");
            var timeb = document.createElement("span");
            timeb.className = "timeb";
            wiknode.className = "ai";
            var errNode = document.createTextNode(randomTalk("Please connect to the internet|Poor network connection|You seem to be out of network|You seem to be offline"));
            var timeNode = document.createTextNode(timeStamp());
            timeb.appendChild(timeNode);
            wiknode.appendChild(errNode);
            wiknode.appendChild(timeb);
            board.appendChild(wiknode);
            //console.clear();
            readoutloud(errNode.textContent);

            var z = document.getElementsByClassName('loading');
            for (var i = 0; i < z.length; i++) {
                z[i].style.display = "none";
            }
        },
    });
    //console.clear();
}
