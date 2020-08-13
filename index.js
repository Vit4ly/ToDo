const myNodeList = document.getElementsByTagName('LI');

for (let i = 0; i < myNodeList.length; i += 1) {
    const span =  document.createElement('SPAN');
    const text = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(text);
    myNodeList[i].appendChild(span);
}

const close = document.getElementsByClassName('close');
for (let i = 0; i < close.length; i += 1) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = 'none';
    }
}

const list = document.querySelector('ul');
list.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked')
    }
}, false);

const newElement = () => {
    const li = document.createElement('li');
    const inputValue = document.getElementById('myInput').value;
    const text =  document.createTextNode(inputValue);
    li.appendChild(text);
    if (inputValue === '') {
        alert('Очень удобно планировать ничего!');
    } else {
        document.getElementById('myUl').appendChild(li);
    }
    document.getElementById('myInput').value = '';

    const span = document.createElement('span');
    const txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    li.appendChild(span);

    for (let i = 0; i < close.length; i += 1) {
        close[i].onclick = function () {
            const div = this.parentElement;
            div.style.display = 'none';
        }
    }
}
