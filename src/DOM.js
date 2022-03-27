/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    const body = document.body;
    let str = '<';
    str += tag;
    str += '>';
    str += content;
    str += '</';
    str += tag;
    str += '>';
    for (let i = 0; i < count; i++) {
        body.insertAdjacentHTML('afterbegin', str);
    }
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/
export function generateTree(childrenCount, level) {
    const body = document.body;
    const div = document.createElement('div');
    div.setAttribute('class', 'item_1');
    body.append(div);
    let n = 1;
    function Tree(Elem, count, level, childrenCount) {
        count++;
        let div_s;
        for (let i = 0; i < childrenCount; i++) {
            div_s = document.createElement('div');
            div_s.setAttribute('class', 'item_' + count);
            Elem.append(div_s);
            if (count < level) Tree(div_s, count, level, childrenCount);
        }
    }
    Tree(div, n, level, childrenCount);
    return div;
}

/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    const body = document.body;
    generateTree(2, 3);
    let size = body.querySelectorAll('.item_2');
    let section;
    size.forEach((element) => {
        section = document.createElement('section');
        section.setAttribute('class', 'item_2');
        section.innerHTML = element.innerHTML;
        element.replaceWith(section);
    });
    return body.firstChild;
}
