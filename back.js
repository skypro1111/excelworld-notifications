document.write('<script src="jquery.js"></script>');
document.write('<script src="popup.js"></script>');

var first = false;
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
                                // console.log(options[i]['url']);
                                $(xmlhttp.responseText).find('td.threadNametd a.threadLink').each(function()
                                    {
                                        var urls = $(this).attr('href');
                                        var text = $(this).text();
                                        
                                        // console.log(urls); 
                                        if(!window.localStorage.getItem(urls))
                                            {
                                                if(!first)
                                                    {
                                                        chrome.notifications.create((id++).toString(), 
                                                                                    {type: "basic", title: text, message: urls, iconUrl: "2.png", isClickable: true}, 
                                                                                    function(){});
                                                        window.localStorage.setItem(urls, text);
                                                        urlsarr[urlsarr.length] = urls;
                                                    }else{ window.localStorage.setItem(urls, text); }   
                                            }  // 
                                    });
                            };
                    };
                    i++;
                    if(i<9){request(i);};
                };
                xmlhttp.send(null);
            };
            first = false;
    }, 60000);