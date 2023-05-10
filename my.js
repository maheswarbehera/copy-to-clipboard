function copyText(element) {
    var $copyText = document.getElementById(element).innerText;
    var button = document.getElementById(element + "-button");
    navigator.clipboard.writeText($copyText).then(
        function () {
            var originalText = button.innerText;
            button.innerText = "Copied!";
            setTimeout(function () {
                button.innerText = originalText;
            }, 750);
        },
        function () {
            button.style.cssText = "background-color: var(--red);";
            button.innerText = "Error";
        }
    );
}