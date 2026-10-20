// Copy the build commands to the clipboard
document.addEventListener('DOMContentLoaded', () => {
    const code = document.getElementById('build-cmd');
    const button = document.getElementById('copy-btn');

    button.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(code.textContent);
            button.textContent = 'Copied';
        } catch (e) {
            // Clipboard API unavailable (e.g. plain HTTP): let the user copy by hand
            window.getSelection().selectAllChildren(code);
            button.textContent = 'Press Ctrl+C';
        }
        setTimeout(() => {
            button.textContent = 'Copy';
        }, 2000);
    });
});
