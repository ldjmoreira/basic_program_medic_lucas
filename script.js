    const button = document.querySelector("button");
    const playText = document.querySelector("textarea");
    let respbox = document.querySelector(".foto");
    const bd= [["pH:","pH:"],["pO2:","pO2:"],["PCO2:","PCO2:"],
    ["BICARBONATO:","HCO3:"],["EXCESSO DE BASE (BASES EXCESS) SANGUÍNEO:","BE:"],
    ["SATURAÇÃO DE OXIGENIO:","Sat:"],["CALCIO IONICO:","Cai:"],["LACTATO:","Lac:"],
    ["Hemoglobina:","Hb:"],["Hematócrito:","Ht:"],["Leucócitos Totais:","Leuco:"],
    ["Leucócitos Totais:","Leuco:"],["Contagem de Plaquetas:","Plaq:"],
    ["CALCIO SERICO:","Ca:"],["ATIVIDADE DE PROTOMBINA :","TP:"],["RNI :","RNI:"],
    ["TEMPO DO PACIENTE:","TTPa:"],["PROTEÍNA C REATIVA:","PCR:"],["Magnésio:","Mg:"],
    ["CLORO SERICO:","Cl:"],["Albumina:","Alb:"],["Bilirrubina Total:","BT:"],
    ["Bilirrubina Direta:","BD:"],["Bilirrubina Indireta:","BI:"],["Gama GT:","GGT:"],
    ["ASPARTATO AMINOTRANSFERASE (AST/TGO)..:","TGO:"],["URÉIA:","Ur:"],
    ["ALANINA AMINOTRANSFERASE (ALT/TGP (TGP):","Mg:"],["CREATININA SÉRICA (CRE):","Cr:"],
    ["eTFG (CKD-EPI) - NEGRO :","ClCr:"],["Magnésio:","Mg:"],["Magnésio:","Mg:"],
    ["SODIO:","Na:"],["POTASSIO SERICO:","K:"]
];
    var finalMessage="";
button.addEventListener("click", myFunction)

function myFunction() {
    let str = playText.value;

     compareWords(bd, str);
     showResults()
}

function compareWords(str1, str2) {
   // alert("worked")
    let bd1 = str1
    let strtv = str2.split("\n");
 

    for (let i = 0; i < bd1.length; i++) {
        for (let index = 0; index < strtv.length; index++) {
           
           if (strtv[index].includes(bd1[i][0])) {
                let msn = strtv[index].split(": ");
                let msnx = msn[1].split(" ");

                finalMessage += bd1[i][1]+" "+msnx[0]+";"+" "
           }
        }
        console.log(strtv);
        
     }

}
function showResults(){
    respbox.innerHTML = finalMessage;
}