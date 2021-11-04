const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const makeQuestion = (ask) => {
    return new Promise((resolve) => {
        rl.question(ask, (answer) => {
            resolve(answer);
        });
    });
};

const main = async () => {
    let obrigatorio = 0;
    let facultativo = 0;
    let naoEleitor = 0;

    while (true) {
        const loop = parseInt(
            await makeQuestion(
                'Deseja cadastrar um novo usuário? Digite 1 para "Sim" ou 2 para "Não" => '
            )
        );

        if (loop != 1) break;

        const idade = parseInt(
            await makeQuestion("Informe a idade do morador atual. => ")
        );

        if (idade < 16) naoEleitor++;
        else if (idade == 16 || idade == 17 || idade >= 70) facultativo++;
        else obrigatorio++;
    }
    rl.close();

    const moradores = obrigatorio + facultativo + naoEleitor;

    console.log(`Foram cadastrados ${moradores} moradores do município.`);
    console.log("Desses moradores, o voto é:");
    console.log(`Obigatório para ${obrigatorio} pessoas.`);
    console.log(`Facultativo para ${facultativo} pessoas.`);
    console.log(`E ${naoEleitor} não são eleitores.`);
};

main();
