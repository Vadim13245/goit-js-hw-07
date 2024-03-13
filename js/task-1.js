
const positionalLis = document.querySelectorAll('.item');
console.log('Number of categories:', positionalLis.length)
positionalLis.forEach(elem => { 
  const titl = elem.firstElementChild;
  console.log('Category;',titl.innerHTML)
  const list = elem.lastElementChild.children;
  console.log('Elements:',list.length)
})