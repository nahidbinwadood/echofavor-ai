document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('banner-filter');

    // Constants
    const lineHeight = parseFloat(getComputedStyle(textarea).lineHeight);
    const maxLines = 5;
    const paddingTop = 8;
    const paddingBottom = 8;
    const maxHeight = (lineHeight * maxLines) + paddingTop + paddingBottom;

    function adjustHeight() {
        // Reset height to calculate proper scrollHeight
        textarea.style.height = 'auto';

        // Get current content height
        const scrollHeight = textarea.scrollHeight;

        if (scrollHeight <= maxHeight) {
            // Content is within 5 lines - let it grow
            textarea.style.height = scrollHeight + 'px';
            textarea.style.overflowY = 'hidden';
            textarea.classList.remove('scrollable');
        } else {
            // Content exceeds 5 lines - fix height and show scrollbar
            textarea.style.height = maxHeight + 'px';
            textarea.style.overflowY = 'auto';
            textarea.classList.add('scrollable');
        }
    }

    // Initial setup
    adjustHeight();

    // Handle input changes
    textarea.addEventListener('input', adjustHeight);

    // Handle Enter key
    textarea.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            const cursorPosition = this.selectionStart;
            const currentValue = this.value;
            this.value =
                currentValue.substring(0, cursorPosition) + '\n' +
                currentValue.substring(this.selectionEnd);

            // Move cursor after the inserted newline
            this.selectionStart = this.selectionEnd = cursorPosition + 1;
            adjustHeight();
        }
    });

    // Handle form submission
    const form = document.querySelector('.hero-search-filter');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Submitted:', textarea.value);
        textarea.value = '';
        adjustHeight();
    });
});