// Tailwind CSS configuration
tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                mono: {
                    50: '#f9f9f9',
                    100: '#ececec',
                    200: '#e0e0e0',
                    300: '#cccccc',
                    400: '#888888',
                    500: '#666666',
                    600: '#444444',
                    700: '#222222',
                    800: '#141414',
                    900: '#0a0a0a',
                    950: '#000000',
                }
            },
            fontFamily: {
                mono: ['"JetBrains Mono"', 'Consolas', 'Fira Code', 'monospace'],
                sans: ['Inter', 'system-ui', 'sans-serif']
            }
        }
    }
}

// Copy to clipboard helper
function copyCloneCmd() {
    const input = document.getElementById('clone-cmd');
    input.select();
    document.execCommand('copy');
    
    const btnText = document.getElementById('copy-text');
    btnText.innerText = 'Copied!';
    setTimeout(() => {
        btnText.innerText = 'Copy';
    }, 2000);
}

function escapeHtml(text) {
    return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
