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
    const callback = () => { location.reload(); }
    const postXhr = createXHR({method: 'POST', url: '/todo', contentType: 'application/json', data: todo, callback: callback});
    e.preventDefault();
  }

  document.addEventListener('click', (e) => {
    const elem = e.target;
    if (elem.tagName == 'LI' && elem.dataset.id) {
      const data = { id: elem.dataset.id };
      const callback = () => { location.reload(); }
      const deleteXhr = createXHR({method: 'DELETE', url: '/todo', contentType: 'application/json', data: data, callback: callback});
    }
  }, false);
}

function createXHR(config) {
  let xhr = new XMLHttpRequest();
  let data = "";
  if(config.data){
    data = config.contentType === 'application/json' ? JSON.stringify(config.data) : config.data;
  }
  xhr.open(config.method, config.url, true);
  xhr.setRequestHeader('Content-type', config.contentType);
  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 400) { if(config.callback && typeof config.callback === 'function') config.callback(); }
  }
  xhr.onerror = (e) => { alert('Connection Error: ' + JSON.parse(req.responseText).error); }
  xhr.send(data);
  return xhr;
}