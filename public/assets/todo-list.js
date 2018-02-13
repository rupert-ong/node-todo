document.onreadystatechange = () => {
  if (document.readyState === 'interactive') {
    initApplication();
  }
}

function initApplication() {
  const form = document.getElementsByTagName('form')[0];
  form.onsubmit = (e) => {
    const item = form.getElementsByTagName('input')[0];
    const todo = { item: item.value };
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/todo', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 400) { location.reload(); }
    }
    xhr.onerror = (e) => { alert('Connection Error: ' + JSON.parse(req.responseText).error); }
    xhr.send(JSON.stringify(todo));
    e.preventDefault();
  }

  document.addEventListener('click', (e) => {
    if (e.target.tagName == 'LI') {
      const data = { id: e.target.dataset.id };
      let xhr = new XMLHttpRequest();
      xhr.open('DELETE', '/todo', true);
      xhr.setRequestHeader('Content-type', 'application/json');
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 400) { location.reload(); }
      }
      xhr.onerror = (e) => { alert('Connection Error: ' + JSON.parse(req.responseText).error); }
      xhr.send(JSON.stringify(data));
    }
  }, false);
}