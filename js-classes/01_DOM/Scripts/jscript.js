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

/* Alterar Linha e Borda */

/* 1º Criar os objetos/arrays para os elementos que serão manipulados: */
const obj_cb_linha_meio = document.querySelector('#cb_linha_meio')
const obj_cb_borda = document.querySelector('#cb_borda')

/* 2º Adicionar os eventos para chamar a função: */
obj_cb_linha_meio.addEventListener('click', FunLinhaMeio)
obj_cb_borda.addEventListener('click', FunBorda)

/* 3º Declarar a função para executar as ações: */
function FunLinhaMeio() {
    if ( obj_cb_linha_meio.checked ) {
        obj_div_area_teste.classList.add(obj_cb_linha_meio.value)
    }
    else {
        obj_div_area_teste.classList.remove(obj_cb_linha_meio.value)
    }
}

function FunBorda() {
    if ( obj_cb_borda.checked ) {
        obj_div_area_teste.classList.add(obj_cb_borda.value)
    }
    else {
        obj_div_area_teste.classList.remove(obj_cb_borda.value)
    }
}

/* Trocar o Texto */

/* 1º Criar os objetos/arrays para os elementos que serão manipulados: */
const obj_txt_texto_novo = document.querySelector('#txt_texto_novo')
const obj_bt_troca_texto = document.querySelector('#bt_troca_texto')

/* 2º Adicionar os eventos para chamar a função: */
obj_bt_troca_texto.addEventListener('click', FunTrocaTexto)

/* 3º Declarar a função para executar as ações: */
function FunTrocaTexto() {
    if ( obj_txt_texto_novo.value != '' ) {
        obj_div_area_teste.innerHTML = 'Novo Texto: '
        + obj_txt_texto_novo.value
    }
    else {
        alert('Digite algo no campo!')
    }
}

})()