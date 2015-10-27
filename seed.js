var db = require('./models/db');


// QUESTIONS
// QUESTÃO 1
var qOneRefZeroObj = {
  "level": "1",
    "ref": "0",
    "question": "Esse teclado eh uma bosta",
    "alternatives": [
        "\u201cQuando você cuida de alguém que realmente está precisando, você vira um herói. Porque o arquétipo de herói é a pessoa que, se precisar, enfrenta a escuridão e segue com amor e coragem porque acredita que algo pode ser mudado para melhor.\u201d (Patch Adams)",
        "\u201cUm aluno, um professor, um livro e uma caneta podem mudar o mundo.\u201d (Malala Yousafzai)",
        "\u201cA Terra fornece o suficiente para satisfazer as necessidades de qualquer homem, mas não a ganância de qualquer homem.\u201d (Mahatma Gandhi)",
        "\u201cTanto a grandeza de uma nação quanto seu projeto moral podem ser julgados pela maneira como seus animais são tratados.\u201d (Mahatma Gandhi)",
        "\u201cA foto não é feita pelo fotógrafo, a foto é mais ou menos boa em função do relacionamento que você tem com as pessoas que fotografa.\u201d (Sebastião Salgado)",
        "\u201cO esporte não leva em conta etnia, religião, ideologia. O importante é a capacidade de o homem superar seus próprios limites, dando à vida um precioso significado.\u201d",
        "\u201cVocê não deve nunca deixar seus medos impedirem que você faça aquilo que sabe ser o correto.\u201d (Aung San Suu Kyi)"
    ]
}

var qOneRefZero = new db.Questions(
    qOneRefZeroObj
);

db.Questions.find({"level": "1", "ref": "0"}, function (err, qone) {
    if (err) return console.error(err);

    if (qone.length == 0) {
        qOneRefZero.save(function (_err, _qone) {
        if (_err) return console.error(_err);
        })
    } else {
        db.Questions.update({"level": "1", "ref": "0"}, qOneRefZeroObj, function(__err, doc){
            if (__err) return console.error(__err);
        });
    }
})

// QUESTÃO 2
var qTwoRefZeroObj = {
    "level": "2",
    "cc": "h"
    "ref": "0",
    "question": "Com qual das imagens abaixo você mais se identifica?",
    "alternatives": [
        "/images/questions/2/0/000.jpg",
        "/images/questions/2/0/001.jpg",
        "/images/questions/2/0/002.jpg",
        "/images/questions/2/0/003.jpg"
    ]
}

var qTwoRefZero = new db.Questions(
    qTwoRefZeroObj
);

db.Questions.find({"level": "2", "ref": "0"}, function (err, qone) {
    if (err) return console.error(err);

    if (qone.length == 0) {
        qTwoRefZero.save(function (_err, _qone) {
        if (_err) return console.error(_err);
        })
    } else {
        db.Questions.update({"level": "2", "ref": "0"}, qTwoRefZeroObj, function(__err, doc){
            if (__err) return console.error(__err);
        });
    }
})

// QUESTÃO 3
var qThreeRefZeroObj = {
    "level": "3",
    "ref": "0",
    "question": "Você se considera uma pessoa:",
    "alternatives": [
        "expansiva, comunicativa e que se interessa por conhecer novas pessoas.",
        "muito paciente, afetuosa, sensível e que tem apreço por cuidar do outro.",
        "que gosta de explorar programas culturais como: teatro, exposições de arte, fotografia, literatura, etc."
    ]
}

var qThreeRefZero = new db.Questions(
    qThreeRefZeroObj
);

db.Questions.find({"level": "3", "ref": "0"}, function (err, qone) {
    if (err) return console.error(err);

    if (qone.length == 0) {
        qThreeRefZero.save(function (_err, _qone) {
        if (_err) return console.error(_err);
        })
    } else {
        db.Questions.update({"level": "3", "ref": "0"}, qThreeRefZeroObj, function(__err, doc){
            if (__err) return console.error(__err);
        });
    }
})

// RESULTS
// Result 1
var resultOneObj = {
    "result": "1",
    "mission": "EDUCAÇÃO",
    "personality": {
        "name": "Bill Gates",
        "image": "/images/personalities/000.jpg",
        "bio": "William Henry \u201cBill\u201c Gates III, mais conhecido apenas por Bill Gates, ficou famoso por fundar a \u201cMicrosoft\u201c, a maior e mais conhecida empresa de software do mundo. Em 2008, ele passou a se dedicar exclusivamente à \u201cFundação Bill & Melinda Gates\u201c, construída junto à sua esposa, tendo investido US$373 milhões de dólares em projetos educacionais de impacto no ano de 2009"
    }
}

var resultOne = new db.Results(
    resultOneObj
);

db.Questions.find({"result": "1"}, function (err, qone) {
    if (err) return console.error(err);

    if (qone.length == 0) {
        resultOne.save(function (_err, _qone) {
        if (_err) return console.error(_err);
        })
    } else {
        db.Results.update({"result": "1"}, resultOneObj, function(__err, doc){
            if (__err) return console.error(__err);
        });
    }
})