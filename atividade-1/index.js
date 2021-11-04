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

const toReal = (value) => {
    return `R$ ${value.toFixed(2).toString().replace(".", ",")}`;
};

const main = async () => {
    const value = parseInt(
        await makeQuestion("Digite o número de livros que deseja comprar. => ")
    );

    let criA = {
        name: "Critério A",
        value: 0.25 * value + 7.5,
    };

    let criB = {
        name: "Critério B",
        value: 0.5 * value + 2.5,
    };

    let criC = {
        name: "Critério C",
        value: 0.65 * value + 1.5,
    };

    let best = null;

    if (
        (criA.value > criB.value && criA.value > criC.value) ||
        criB.value == criC.value
    ) {
        best = criA;
    } else if (
        (criB.value > criA.value && criB.value > criC.value) ||
        criA.value == criC.value
    ) {
        best = criB;
    } else if (
        (criC.value > criA.value && criC.value > criB.value) ||
        criA.value == criB.value
    ) {
        best = criC;
    } else if (criA.value == criB.value && criA.value == criC.value) {
        console.log("Todos os critérios são iguais");
    }

    // Outputs:
    if (best)
        console.log(
            `O melhor critério é o ${
                best.name
            } com o desconto no valor de ${toReal(best.value)}.`
        );

    // console.log("Outros Critérios (para testes):");
    // console.log(`${criA.name}: ${toReal(criA.value)}`);
    // console.log(`${criB.name}: ${toReal(criB.value)}`);
    // console.log(`${criC.name}: ${toReal(criC.value)}`);

    rl.close();
};

main();
