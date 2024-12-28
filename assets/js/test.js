document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.querySelector('.dashboard-textarea');
    const wrapper = document.querySelector('.dashboard-form-input-wrapper');

    // Calculate line height and maximum lines
    const lineHeight = 24; // 1.5 line height * 16px font size
    const maxLines = 6;
    const baseHeight = 60; // Base height
    const padding = 20; // Total vertical padding

    function adjustHeight() {
        // Check if textarea is empty or has no newlines
        if (textarea.value.length === 0 || !textarea.value.includes('\n')) {
            // Reset to initial styles
            textarea.style.height = 'auto';
            wrapper.style.height = 'auto';
            textarea.style.overflowY = 'hidden';
            return;
        }

        // Reset height to get proper scrollHeight
        textarea.style.height = 'auto';

        // Calculate content height
        const contentHeight = textarea.scrollHeight;
        const numberOfLines = Math.ceil(contentHeight / lineHeight);

        if (numberOfLines <= maxLines) {
            // If content is within max lines, adjust height of both textarea and wrapper
            textarea.style.height = contentHeight + 'px';
            const newWrapperHeight = Math.max(baseHeight, contentHeight + padding);
            wrapper.style.height = newWrapperHeight + 'px';
            textarea.style.overflowY = 'hidden';
        } else {
            // If content exceeds max lines, fix height and enable scrolling
            const maxHeight = lineHeight * maxLines;
            textarea.style.height = maxHeight + 'px';
            wrapper.style.height = (maxHeight + padding) + 'px';
            textarea.style.overflowY = 'auto';
        }
    }

    // Handle input events
    textarea.addEventListener('input', adjustHeight);

    // Handle Enter key
    textarea.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();

            // Insert a newline at cursor position
            const cursorPosition = this.selectionStart;
            const currentValue = this.value;
            this.value =
                currentValue.substring(0, cursorPosition) + '\n' +
                currentValue.substring(this.selectionEnd);

            // Move cursor after the inserted newline
            this.selectionStart = this.selectionEnd = cursorPosition + 1;

            // Adjust height after adding newline
            adjustHeight();
        }
    });

    // Handle form submission
    const form = document.querySelector('.dashboard-form-input-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
    });
});