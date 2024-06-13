const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quando você entra em uma  bicicletaria. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Qual é a minha finalidade principal ao comprar uma bicicleta!",
                afirmacao: "Quando entro em uma bicicletaria, o primeiro pensamento geralmente gira em torno de qual tipo de bicicleta eu estou interessado em adquirir. Isso pode incluir pensar se quero uma bicicleta de estrada para velocidade e longas distâncias, uma mountain bike para trilhas off-road, uma bicicleta urbana para deslocamentos diários, ou talvez uma bicicleta híbrida que combine características de diferentes estilos. Este pensamento inicial orienta minha busca e me ajuda a focar nas opções que mais se adequam ao meu estilo de pedalada."
            },
            {
                texto: "Que tipo de bicicleta estou procurando?",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Tipos de Bikes",
        alternativas: [
            {
                texto: "Quais são as marcas e modelos mais recomendados pelos especialistas?.",
                afirmacao: "Perguntar aos especialistas da loja sobre as opções mais populares e recomendadas pode me ajudar a fazer uma escolha informada e garantir que estou investindo em uma bicicleta que atenda aos meus padrões de qualidade e desempenho.."
            },
            {
                texto: "Qual é a reputação da marca e a qualidade dos componentes das bicicletas disponíveis?",
                afirmacao: ""
            }
        ]
    },
    {
            enunciado: "Variedade e estetica",
        alternativas: [
            {
                texto: "Quais são as opções de personalização disponíveis para atender às minhas preferências estéticas e funcionais??",
                afirmacao: "A aparência da bicicleta pode ser tão importante quanto seu desempenho e funcionalidade. Escolher uma bicicleta que não apenas funcione bem, mas também tenha um design que me agrade visualmente, pode contribuir significativamente para a minha satisfação e prazer ao usá-la."
            },
            {
                texto: "Qual é a estética e o apelo visual das bicicletas disponíveis?.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Garantia da loja",
        alternativas: [
            {
                texto: "Qual é o nível de serviço pós-venda oferecido pela loja, como garantias e manutenção?",
                afirmacao: ""
            },
            {
                texto: "Como é o atendimento ao cliente e a expertise dos vendedores da loja?",
                afirmacao: ""
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Bikes...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
