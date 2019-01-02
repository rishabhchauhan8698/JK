const navMenu = $('#nav-main');

$('#navtoggle').on('click', () => {
  navMenu.toggleClass('show');
});

fetch('http://192.168.0.143/new/enform/cc.php', {
  method: 'POST',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/text'
  },
  body: '{"name": "Adit"}'
})
  .then(res => res.text())
  .then(data => console.log(data));
