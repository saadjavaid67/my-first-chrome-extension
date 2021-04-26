(function() {

    setTimeout(() => {
        document.getElementById('app').addEventListener('DOMNodeInserted', () => {
            if (document.getElementsByClassName('_11liR')[0]) {
                document.getElementsByClassName('_11liR')[0].addEventListener('DOMNodeInserted', () => {
                    arr = document.getElementsByClassName('_11liR')[0].childNodes;
                    window.open(arr[arr.length - 1].getElementsByClassName('_3-8er selectable-text copyable-text')[0].getElementsByTagName('a')[0].href, '_top');
                });
            }
        });
    }, 5000);
    if (document.getElementsByClassName('join-btn ts-btn inset-border ts-btn-primary')[0]) document.getElementsByClassName('join-btn ts-btn inset-border ts-btn-primary')[0].click();
    if (document.querySelectorAll('[data-tid="joinOnWeb"]')[0]) document.querySelectorAll('[data-tid="joinOnWeb"]')[0].click();



})();