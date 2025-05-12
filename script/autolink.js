// (c) 2025. TheErrorExe
window.onload = function() {
    const preElements = document.querySelectorAll('pre');
    const urlPattern = /(?:https?:\/\/|www\.)[\w\-]+(?:\.[\w\-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=]+/g;

    preElements.forEach(preElement => {
        preElement.innerHTML = preElement.textContent.replace(urlPattern, url => {
            const href = url.startsWith('www.') ? 'https://' + url : url;
            return `<a href="${href}" target="_blank">${url}</a>`;
        });
    });
}
