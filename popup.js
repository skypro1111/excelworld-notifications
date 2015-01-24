var options;


$(document).ready(function () {
    //при первом запуске расширения создает в локальном хранилище обьект настроек в виде JSON строки
    if(!window.localStorage.getItem('forumoptions')){
        var opt = 
            {
                0 : {name: 'Вопросы по Excel', active: false, url : 'http://www.excelworld.ru/forum/2'},
                1 : {name: 'Вопросы по VBA', active: false, url : 'http://www.excelworld.ru/forum/10'},
                2 : {name: 'Excel и другие приложения', active: false, url : 'http://www.excelworld.ru/forum/4'},
                3 : {name: 'Готовые решения', active: false, url : 'http://www.excelworld.ru/forum/3'},
                4 : {name: 'Работа / Фриланс', active: false, url : 'http://www.excelworld.ru/forum/6'},
                5 : {name: 'Неформальное общение', active: false, url : 'http://www.excelworld.ru/forum/5'},
                6 : {name: 'Мозговой штурм', active: false, url : 'http://www.excelworld.ru/forum/7'},
                7 : {name: 'Вопросы по работе форума и сайта', active: false, url : 'http://www.excelworld.ru/forum/12'},
                8 : {name: 'Объявления администрации', active: false, url : 'http://www.excelworld.ru/forum/13'}
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
