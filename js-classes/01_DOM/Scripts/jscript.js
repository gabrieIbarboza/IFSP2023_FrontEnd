(()=>{
/* ALTERAR COR DE FUNDO */

/* 1º Criar os objetos para os elementos que serão manipulados */

const obj_sel_fundo = document.querySelector('#sel_fundo')
const obj_div_cor_fundo = document.querySelector('#div_cor_fundo')

/* 2º Adicionar o evento e chamar função */

obj_sel_fundo.addEventListener('change', () => {
    obj_div_cor_fundo.setAttribute('class', obj_sel_fundo.value)
})

/* ALTERAR COR DA FONTE */

/* 1º Criar os objetos/arrays para os elementos que serão manipulados */

const array_rb_fonte = document.querySelectorAll('[name="rb_fonte"]')
const obj_div_area_teste = document.querySelector('#div_area_teste')

/* 2º Adicionar o evento e chamar função */
for (obj_rb_fonte of array_rb_fonte) {
    obj_rb_fonte.addEventListener('click', () => {
        for (obj_rb_fonte of array_rb_fonte) {

            if (obj_rb_fonte.checked) {
                obj_div_area_teste.classList.add(obj_rb_fonte.value)
            }
    
            else {
                obj_div_area_teste.classList.remove(obj_rb_fonte.value)
            }
        }
    })
}
})()