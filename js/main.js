let screen_app = document.getElementById('screen-calc');
let clearall = false;
let calc = (x) => {
    console.log()
    if(x == '='){
        screen_app.innerText = eval(screen_app.innerText);
        clearall = true;
    }else if(x == 'reset'){
        screen_app.innerHTML = '';
    }else if(x == 'del'){
        screen_app.innerText = screen_app.innerText.slice(0, screen_app.innerText.length - 1);
        }else{
            if(clearall){
                screen_app.innerHTML = '';
                clearall =false;
            }
        screen_app.innerText += x;
 
    }
}


let div_toggle = document.getElementById('div_toggle');
let div_toggle_span = document.querySelectorAll('#div_toggle > span')[0];
let app_calc = document.getElementById('app-calc');
var r = document.querySelector(':root');


function themes(main_text, background_main_app, color_toggle_span, color_toggle, button_setting, background_button, color_button, screen_calc, color_toggle_span_hover, color_toggle_span_shadow, shadow_button_setting, screen_calc_hover, shadow_button, button_setting_hover, button_hover){
    r.style.setProperty('--main-text', main_text);
    r.style.setProperty('--background-main-app', background_main_app);
    r.style.setProperty('--color-toggle-span', color_toggle_span);
    r.style.setProperty('--color-toggle', color_toggle);
    r.style.setProperty('--button-setting', button_setting);
    r.style.setProperty('--background-button', background_button);
    r.style.setProperty('--color-button', color_button);
    r.style.setProperty('--screen-calc', screen_calc);
    r.style.setProperty('--color-toggle-span-hover', color_toggle_span_hover);
    r.style.setProperty('--color-toggle-span-shadow', color_toggle_span_shadow);
    r.style.setProperty('--shadow-button-setting', shadow_button_setting);
    r.style.setProperty('--screen-calc-hover', screen_calc_hover);
    r.style.setProperty('--shadow-button', shadow_button);
    r.style.setProperty('--button-setting-hover', button_setting_hover);
    r.style.setProperty('--button-hover', button_hover);
}

div_toggle.onmousedown = function(e){
    console.log(e.offsetX)
    if(e.offsetX < 18.33){
        div_toggle_span.style.transform = 'translate(-150%, -50%)'; 
        document.body.style.backgroundColor = 'hsl(222, 26%, 31%)';
        themes('white', 'hsl(222, 26%, 31%)', 'hsl(6, 63%, 50%)', 'hsl(223, 31%, 20%)', '#647299', '#eae3db', '#252d44', 'hsl(224, 36%, 15%)', '#f26f58', '#7a2b27', '#414e71', 'hsl(224, 34%, 19%)', '#b3a695','#a1b2e0', '#ffffff')
    }else if(e.offsetX > 18.33 && e.offsetX < 36.66){
        div_toggle_span.style.transform = 'translate(-50%, -50%)';
        document.body.style.backgroundColor = '#e6e6e6';
        themes('#2d2e28', '#e6e6e6', '#c85401', '#d5cccd', '#368287', '#e5e4e0', '#31312a', '#eeeeee', '#fa8d3b', '#873800', '#1c6066', '#f1efef', '#a69c91', '#62b5bd', '#ffffff')
    }else{
        div_toggle_span.style.transform = 'translate(50%, -50%)';
        document.body.style.backgroundColor = '#17062a';
        themes('#fbe13b', '#17062a', '#00decf', '#1e0835', '#56077c', '#331a4e', '#fbe13b', '#1e0836', '#94fff9', '#83edef', '#b51be7', '#210a3a', '#82209a', '#8532ad', '#6b34ac')
    }
}

