/* Mudar a Figura (Redes Sociais) */

/* 1º Criar os objetos para os elementos que serão manipulados: */
const obj_sel_rede_social = document.querySelector('#sel_rede_social')
const obj_img_rede_social = document.querySelector('#img_rede_social')
const obj_p_rede_social = document.querySelector('#p_rede_social')

/* 2º Adicionar o evento para chamar a função: */
obj_sel_rede_social.addEventListener('change', FunMudaFigura)

/* 3º Declarar a função para executar as ações: */
function FunMudaFigura(){
    obj_img_rede_social.setAttribute('src', 'Imagens/' + 
                                obj_sel_rede_social.value + '.png')
    obj_img_rede_social.setAttribute('alt', obj_sel_rede_social.value)
    obj_img_rede_social.setAttribute('title', obj_sel_rede_social.value)
    obj_p_rede_social.innerHTML = 'Logo ' + obj_sel_rede_social.value
}

/* Adicionar Figuras */

/* 1º Criar os objetos/arrays para os elementos que serão manipulados: */
const array_img_figuras = document.querySelectorAll('.figuras')
const obj_div_adiciona_figura = document.querySelector('#div_adiciona_figura')

/* 2º Criar os objetos que serão manipulados: */
const obj_img_nova = document.createElement('img')
const obj_input_novo = document.createElement('input')

/* 3º Adicionar o evento para chamar a função: */
for ( obj_img of array_img_figuras ) {
    obj_img.addEventListener('click', function() {
        FunAdicionaFigura(this.src, this.alt)
    })
}

/* 4º Declarar a função para executar as ações: */
function FunAdicionaFigura(par_src, par_alt) {
    obj_img_nova.setAttribute('src', par_src)
    obj_img_nova.setAttribute('alt', par_alt)
    obj_img_nova.setAttribute('title', par_alt)
    obj_div_adiciona_figura.appendChild(obj_img_nova)

    obj_input_novo.setAttribute('type', 'text')
    obj_input_novo.setAttribute('disabled', 'true')
    obj_input_novo.setAttribute('value', par_alt)
    obj_input_novo.setAttribute('class', 'novo_input')
    obj_div_adiciona_figura.appendChild(obj_input_novo)

}