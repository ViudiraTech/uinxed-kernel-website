// Copy the clone command to the clipboard
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('clone-cmd');
    const button = document.getElementById('copy-btn');

    button.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(input.value);
        } catch (e) {
            // Clipboard API unavailable (e.g. plain HTTP): fall back to the legacy way
            input.select();
            document.execCommand('copy');
        }
        button.textContent = 'Copied!';
        setTimeout(() => {
            button.textContent = 'Copy';
        }, 2000);
    });
});
