document.onreadystatechange = () => {
  if (document.readyState === 'interactive') {
    initApplication();
  }
}

function initApplication() {
  const form = document.getElementsByTagName('form')[0];
  const list = document.getElementsByTagName('ul')[0];
  form.onsubmit = (e) => {
    const item = form.getElementsByTagName('input')[0];
    const todo = { item: item.value };
    const callback = (data, container) => {
      let newLi = document.createElement('li');
      newLi.dataset.id = data._id;
      newLi.appendChild(document.createTextNode(data.item));
      container.appendChild(newLi);
    }
    const postXhr = createXHR({ method: 'POST', url: '/todo', contentType: 'application/json', data: todo, callback: callback, callbackParams: [list] });
    item.value = '';
    e.preventDefault();
  }

  document.addEventListener('click', (e) => {
    const elem = e.target;
    if (elem.tagName == 'LI' && elem.dataset.id) {
      const data = { id: elem.dataset.id };
      const callback = () => { elem.remove(); }
      const deleteXhr = createXHR({ method: 'DELETE', url: '/todo', contentType: 'application/json', data: data, callback: callback });
    }
  }, false);
}

function createXHR(config) {
  let xhr = new XMLHttpRequest();
  let data = "";
  if (config.data) {
    data = config.contentType === 'application/json' ? JSON.stringify(config.data) : config.data;
  }
  xhr.open(config.method, config.url, true);
  xhr.setRequestHeader('Content-type', config.contentType);
  xhr.onload = (e) => {
    if (xhr.status >= 200 && xhr.status < 400) {
      if (config.callback && typeof config.callback === 'function') {
        let params = [];
        if (config.callbackParams) params = [JSON.parse(xhr.responseText)].concat(config.callbackParams);
        config.callback(...params);
      }
    }
  }
  xhr.onerror = (e) => { alert('Connection Error: ' + JSON.parse(xhr.responseText).error); }
  xhr.send(data);
  return xhr;
}