// script4.js

document.addEventListener('DOMContentLoaded', function() {
    // Array de URLs para os bônus
    const bonusURLs = [
        "https://drive.google.com/drive/folders/1TigXNQvY7OWfJvQKWQXQI-5BOO5KqcuG?usp=sharing",
        "https://drive.google.com/drive/folders/1kh16qRZ2iMNXIesxlkqJcIGRvHprekGY?usp=sharing",
        "https://drive.google.com/drive/folders/1hlO1wnsOnqHMDmi9Z3rDHJyd87mjStpD?usp=sharing",
        "https://drive.google.com/drive/folders/1BXUdtH2vAUOhS2-Aszh05UtKjN-OPVZc?usp=sharing",
        "https://drive.google.com/drive/folders/1eBzp2h6XazrdLx4c9PJXtGXduc_ZwC74?usp=sharing",
        "https://drive.google.com/drive/folders/1EWrnUmTW3dy82LGPkFPw8VlIsAm-qbcj?usp=sharing",
        "https://drive.google.com/drive/folders/1TbBpAZdVP4VIVh0DHX8GHSx1htkhnTXI?usp=sharing",
        "https://drive.google.com/drive/folders/1XGx0xcx1VgQ9dJN04Chq_1pslGNqDBdI?usp=sharing",
        "https://drive.google.com/drive/folders/1OIqNprzfXv2xfHJNtG26PTBJXeVyjbP7?usp=sharing",
        "https://drive.google.com/drive/folders/1R2Vves8cdEYq0ozF-6-cKXdiasX73cww?usp=sharing",
        "https://drive.google.com/drive/folders/1R6AVSES1awBMy7w_2iRVxsx6oApIlfS-?usp=sharing",
        "https://drive.google.com/drive/folders/1tvxR29fEQtiZELeKRwZb-4VruYCVqfad?usp=sharing"
    ];

    // Adicionar evento de clique para cada botão
    for (let i = 0; i < bonusURLs.length; i++) {
        const button = document.getElementById(`bonus-button-${i + 1}`);
        button.addEventListener('click', function() {
            window.open(bonusURLs[i], '_blank'); // Abre a URL em uma nova aba
        });
    }
});
