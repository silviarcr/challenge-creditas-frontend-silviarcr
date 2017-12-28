var counter = 0;

var messageResponses = [
    'Estamos revolucionando o empréstimo no Brasil. Use seu carro ou casa e consiga as melhores taxas.',
    'O que é empréstimo com garantia? Também conhecido como refinanciamento, esse é um tipo de crédito em que você utiliza um bem, como um veículo ou um imóvel, como garantia do pagamento do seu empréstimo.',
    'Por que o empréstimo com garantia Creditas é o melhor? Na Creditas você consegue juros menores, maior prazo de pagamento e maior valor emprestado.',
    'Como é o processo na Creditas? Você faz uma solicitação de empréstimo com a gente e te mostramos sua proposta personalizada.',
    'Se você não tem casa ou carro, conheça outros empréstimos.',
    'Dúvidas?',
    'Por que devo escolher a Creditas? Mais transparente, mais barato e mais cômodo.'
]

function response_message() {
    if (messageResponses.length > 0) {
        if (counter == messageResponses.length) {
            counter = 0;
        }
        send_message(messageResponses[counter]);
        counter++;
    }
}

function send_message(message) {
    $message = $('<div></div>');
    $name = "Atendente: ";
    $message.text($name + message);
    $message.addClass("message bot");
    $("#chat-message").append($message);
    $("#chat-message").scrollTop($("#chat-message").prop('scrollHeight'));
    $(".bot:last").hide();
    $(".bot:last").delay(500).fadeIn();
}
function welcome() {
    $text = "Olá, seja bem-vindo(a) a Creditas. Como podemos ajudar?";
    send_message($text);
}

$(document).ready(function () {
    welcome();
    $("#message").on('keypress', function (event) {
        if (event.which == 13) {
            $("#btn").click();
            event.preventDefault();
        }
    });

    $("#btn").click(function () {
        $text = $("#message").val();
        if ($text != "") {
            $message = $('<div></div>');
            $name = "Cliente: ";
            $message.text($name + $text);
            $message.addClass("message marginLeft");
            $("#chat-message").append($message);
            $("#message").val("");
            $("#chat-message").scrollTop($("#chat-message").prop('scrollHeight'));
            response_message();
        }
    });
});