import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
      else div.className = 'cards-card-body';
      if (div.childNodes.length > 0) {
        let childNodes = div.childNodes;
        childNodes.forEach(function (el, i) {
          if (el.innerHTML) {
            if (el.innerHTML.indexOf('subheadline') > 0 || el.innerHTML.indexOf('headline') > 0) {
              let elClass = el.innerHTML.replace(/^.+-/, '');
              let newText = el.innerHTML.substring(0, el.innerHTML.indexOf('(-'));

              elClass = elClass.slice(0, -1);
              el.className = elClass;
              newText = newText.slice(0, -1);
              el.innerHTML = newText;
            }
          }

        });
      }

    });
    ul.append(li);
  });
  ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(ul);


  var visible = function (partial, el) {

    var viewTop = window.scrollY + 100,
      viewBottom = viewTop + window.innerHeight - 100,
      _top = el.offsetTop,
      _bottom = _top + el.offsetHeight,
      compareTop = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };

  window.addEventListener('scroll', function (event) {
    var allElem = document.querySelectorAll('.slideup li');
    allElem.forEach(function (el, i) {
      if (visible(true, el)) {
        el.className = "come-in";
        el.style.setProperty('--transition-delay', ''.concat(i + 1, '00ms'));
      }
    });
  });




}
