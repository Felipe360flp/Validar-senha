var prompt = require('prompt-sync')();

let usuario=""; // armazena o usuário
let s=""; // armazena a senha
let s_colunas = []; // separa a senha por colunas
let i = 0; // contador
ch_n = 0; // para verificar se tem números
ch_c=0; // para verificar se tem caracteres especiais
let n=[0,1,2,3,4,5,6,7,8,9]; // array de inteiros até 9.
let c_esp=["!","?","@","#","$","_","-","%"]; // array de caracteres especiais.
// posteriormente criar uma validação para o usuário
usuario = prompt("Digite um nome de usuário: "); // Nesse trabalho, o nome do usuário não foi relevante.

do{
    s = prompt("Digite uma senha com 8 caracteres, ao menos um número e um caractere especial[@,#,$]:");
    let x=s.length; // x - para contabilizar os dígitos.

    if(x>=10){ 
       
        for(x=0;x<10;x++){
            s_colunas[x]=s.charAt(x);//charAt vai passar cada digito da senha para um array (s_colunas)
            console.log("Tranferindo valor!");
        }
    }else{
        continue;// vai garantir que o loop aconteça caso a senha tenha menos que 10 dígitos
    }    

for(x=0;x<10;x++){// Para verificar se tem números na lista 
    for(let y=0;y<10;y++)
    if(s_colunas[x]+n[y]>0)
    {
        console.log(s_colunas[x] +"--"+ n[y])
        console.log("encontrei um número!")
        ch_n++;
        break;
    }
}

for(x=0;x<10;x++){// para verificar se possui caracteres especiais
    for(let y=0;y<10;y++)
    if(s_colunas[x]===c_esp[y])
    {
        console.log(s_colunas[x] +"--"+ c_esp[y])
        console.log("Encontrei um caractere especial!")
        ch_c++; 
        break;
    }
}

if(ch_c+ch_n>1){ // Irá se certificar que contém pelo menos 1 número e 1 c. especial
    i++;
    break;
}else{
    x=0;
    console.log("Senha fraca,tente novamente!")
}
}while(i<=0);
console.log("A senha foi criada com sucesso!");
