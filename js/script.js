const btn = document.getElementById('btn');
const item = document.getElementById('item');
btn.addEventListener('click', () => {
  item.emit('btnPush');
});