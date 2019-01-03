const navMenu = $('#nav-main');

$('#navtoggle').on('click', () => {
  navMenu.toggleClass('show');
});

AOS.init({
  duration: 300,
  offset: 50
});

fetch('http://192.168.0.143/new/enform/cc.php', {
  method: 'POST',
  mode: 'cors',
  credentials: 'include',

  headers: {
    'Content-Type': 'application/text',
    'Access-Control-Allow-Origin': '*'
  },
  body: '{"name": "Adit"}'
})
  .then(res => res.text())
  .then(data => console.log(data));
