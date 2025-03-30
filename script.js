document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll('menu div');
    const cards = document.querySelectorAll('.card');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => {
                btn.className = 'btn';
            });

            button.className = 'btn-cur';

            const text = button.textContent.trim();

            if (text === 'Shads') {
                cards.forEach(card => {
                    if (card.classList.contains('shad')) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none'; 
                    }
                });
            } else if (text === 'Grads') {
                cards.forEach(card => {
                    if (!card.classList.contains('shad')) {
                        card.style.display = 'flex'; 
                    } else {
                        card.style.display = 'none'; 
                    }
                });
            } else if (text === 'All') {
                cards.forEach(card => {
                    card.style.display = 'flex'; 
                });
            }
        });
    });
});