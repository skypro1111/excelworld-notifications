var options;


$(document).ready(function () {
    //при первом запуске расширения создает в локальном хранилище обьект настроек в виде JSON строки
    if(!window.localStorage.getItem('forumoptions')){
        var opt = 
            {
                0 : {name: 'Вопросы по Excel' ,                 sub: false, active: false, url : 'http://www.excelworld.ru/forum/2'},
                1 : {name: 'Вопросы по Excel для Mac' ,         sub: false, active: false, url : 'http://www.excelworld.ru/forum/14'},
                2 : {name: 'Вопросы по VBA' ,                   sub: false, active: false, url : 'http://www.excelworld.ru/forum/10'},
                3 : {name: 'Вопросы по VB, VB.net' ,            sub: false, active: false, url : 'http://www.excelworld.ru/forum/15'},
                4 : {name: 'Excel и другие приложения' ,        sub: false, active: false, url : 'http://www.excelworld.ru/forum/4'},
                5 : {name: 'Вопросы по Word' ,                  sub: false, active: false, url : 'http://www.excelworld.ru/forum/16'},
                6 : {name: 'Вопросы по Access' ,                sub: false, active: false, url : 'http://www.excelworld.ru/forum/17'},
                7 : {name: 'Вопросы по Power Point' ,           sub: false, active: false, url : 'http://www.excelworld.ru/forum/18'},
                8 : {name: 'Вопросы по Outlook' ,               sub: false, active: false, url : 'http://www.excelworld.ru/forum/19'},
                9 : {name: 'Вопросы по Visio' ,                 sub: false, active: false, url : 'http://www.excelworld.ru/forum/20'},
                10 : {name: 'Вопросы по Share Point' ,          sub: false, active: false, url : 'http://www.excelworld.ru/forum/21'},
                11 : {name: 'Вопросы по Open Office' ,          sub: false, active: false, url : 'http://www.excelworld.ru/forum/22'},
                12 : {name: 'Вопросы по Google Docs' ,          sub: false, active: false, url : 'http://www.excelworld.ru/forum/23'},
                13 : {name: 'Вопросы по 1С' ,                   sub: false, active: false, url : 'http://www.excelworld.ru/forum/24'},
                14 : {name: 'Готовые решения' ,                 sub: false, active: false, url : 'http://www.excelworld.ru/forum/3'},
                15 : {name: 'Работа / Фриланс' ,                sub: false, active: false, url : 'http://www.excelworld.ru/forum/6'},
                16 : {name: 'Неформальное общение' ,            sub: false, active: false, url : 'http://www.excelworld.ru/forum/5'},
                17 : {name: 'Мозговой штурм' ,                  sub: false, active: false, url : 'http://www.excelworld.ru/forum/7'},
                18 : {name: 'Вопросы по работе форума и сайта' ,sub: false, active: false, url : 'http://www.excelworld.ru/forum/12'},
                19 : {name: 'Объявления администрации' ,        sub: false, active: false, url : 'http://www.excelworld.ru/forum/13'},
            };
        window.localStorage.setItem('forumoptions', JSON.stringify(opt));
    };

//Читаем настройки из хранилища
options = JSON.parse(window.localStorage.getItem('forumoptions'));

// и выводим в попап
    var res = '';
    for(i = 0; i<9; i++){
        var ch;
        if(options[i]['active'] === true){ch = 'checked="checked"';}else{ch = ''};
        res += '<label><input type="checkbox" '+ch+' id="'+i+'"/><b>'+options[i]['name']+'</b></label></br>';
    }   
$('#version').html('Обсуждение v '+chrome.app.getDetails().version);
$('#main1').html(res);
});

    
    //.


    //отлавливаем нажатие кнопки и сохраняем чекбоксы
        function clickHandler(e) {
                    first = true;
        for(var i = 0; i < 9; i++){
            options[i]['active'] = document.getElementById(i).checked;
        };
            window.localStorage.setItem('forumoptions', JSON.stringify(options));
            window.close()
        }
         
        document.addEventListener( "DOMContentLoaded" , function () {
          document.getElementById("btnsave").addEventListener( "click" , clickHandler);
        });


// Удалить пару сообщений для проверки
        function clickHandler2(e) {
            // alert('asd');
            
            window.localStorage.removeItem('http://www.excelworld.ru/forum/2-12836-1');
            // console.log(window.localStorage.getItem('http://www.excelworld.ru/forum/10-12711-1'));
            window.localStorage.removeItem('http://www.excelworld.ru/forum/2-12831-1');
            // console.log(window.localStorage.getItem('http://www.excelworld.ru/forum/4-12478-1'));
            window.localStorage.clear();
            //window.close()
        }
         
        document.addEventListener( "DOMContentLoaded" , function () {
          document.getElementById("btnclear").addEventListener( "click" , clickHandler2);
        });
