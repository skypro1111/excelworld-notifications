﻿document.write('<script src="jquery.js"></script>');
document.write('<script src="popup.js"></script>');

var id = 0;
var urlsarr = new Array();

chrome.notifications.onClicked.addListener(function(notID)
    {
        chrome.tabs.create({url: urlsarr[notID]});
        chrome.notifications.clear(notID, function(){});
    });

setInterval(function()
    {  
    var options = JSON.parse(window.localStorage.getItem('forumoptions'));
        request(0);
            function request(i){
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.open("GET", options[i]['url'], false);
                xmlhttp.onreadystatechange = function () {
                    if (xmlhttp.status == 200) {
                        if(options[i]['active'])
                            {
                                console.log(options[i]['url']);
                                $(xmlhttp.responseText).find('table.gTable tr[id]').each(function() //td.threadNametd a.threadLink
                                    {
                                        var urls = $(this).find('a.threadLink').attr('href');
                                        var text = $(this).find('a.threadLink').text();
                                        var date = new Date();
                                        var trtime = date.toLocaleDateString()+' '+date.toLocaleTimeString();
                                        var title = options[i]['name'];
                                        if(urls){
                                            if(!window.localStorage.getItem(urls))
                                                {
                                                    chrome.notifications.create((id++).toString(), 
                                                                                {type: "basic", title: title, message: text, contextMessage: trtime, iconUrl: "2.png", isClickable: true}, 
                                                                                function(){});
                                                    window.localStorage.setItem(urls, text);
                                                    urlsarr[urlsarr.length] = urls;
                                                };
                                            };
                                    });
                            };
                    };
                    i++;
                    if(i<1){request(i);};
                };
                xmlhttp.send(null);
            };
            first = false;
    }, 60000);