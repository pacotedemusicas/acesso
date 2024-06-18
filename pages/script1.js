document.addEventListener('DOMContentLoaded', () => {
    const genres = [
        "ATUALIZAÇÕES MENSAIS", "ACADEMIA E CORRIDA", "AXÉ", "ARROCHA", "BANDINHAS", "BLACK MUSIC", "BLUES",
        "BREGA", "COLEÇÕES", "CARNAVAL", "CLASSICAS", "CUMBIA", "CHARME INTERNACIONAL", "COUNTRY HITS",
        "DISCOGRAFIAS", "DANCE", "ELETROFUNK", "ELETRÔNICAS", "FESTA JUNINA", "FLASH BACK", "FORRÓ", "FUNK",
        "GAÚCHAS", "GOSPEL", "HIP HOP", "INTERNACIONAL", "INDIE", "INFANTIL", "INSTRUMENTAL", "JAZZ", "LATINAS",
        "JOVEM GUARDA", "MPB", "MODÃO", "MELODY", "NACIONAIS", "NATAL", "PISEIRO", "PAGODE", "POP", "PANCADÃO AUTOMOTIVO",
        "ROCK", "REGGAE", "RAP", "REGGAETON", "ROMÂNTICAS", "REVEILLON", "SERTANEJO", "SET MIXADO", "SAMBA", "SOFRÊNCIA",
        "SERESTA", "TOP LISTA", "TOP NEW", "TRAP", "TRIBAL", "TECNOBREGA", "TEMAS DE FILMES", "VARIADAS", "ZUMBA"
    ];

    const urls = [
        // Adicione aqui os URLs correspondentes a cada gênero musical
        "https://drive.google.com/drive/folders/1zGL52ICAQs3AcTVXOrWXu-8hX_4xKPPv", "https://drive.google.com/drive/folders/1FD85q5o2K0Z6-1VagVWX39rH0bnzUtij", "https://drive.google.com/drive/folders/1Ye9Jr_s4H3oSf-eMwn9hRfmCjjg_s84F", 
        "https://drive.google.com/drive/folders/1LUQXsP72CUDp7KjpTHHAh8KQJ146SPRs", "https://drive.google.com/drive/folders/18GOJAsdSTIw-yFbq9c64wHLNrhR-WI8I", "https://drive.google.com/drive/folders/1UaPn-gClfMRbVZggNAdfJUllQXdzW_mE", 
        "https://drive.google.com/drive/folders/1YyD9UCp9npddXsvKJ5cXgmU14ducokjz", "https://drive.google.com/drive/folders/1mI_Q26iwK75gafSxEI2p1VFQmsupxAKT", "https://drive.google.com/drive/folders/1ZdNOOWB-pOsdjihmdgtrgqPlraDg3VVm", 
        "https://drive.google.com/drive/folders/1s4fGKh1LXbkyDh9szj31kYEEm_ba3rZr", "https://drive.google.com/drive/folders/1sDXaRftfYQ8IsyteEcd_Oc5CNVfP2OfS", "https://drive.google.com/drive/folders/1RyAic406q4oAvCBhCmmG_RIoj_jlunD9", 
        "https://drive.google.com/drive/folders/1Qig7kP2RPALd_pkJPDi3_mM9YcJNW71y", "https://drive.google.com/drive/folders/1kHtaU6r7LKO_39rD98KmMpDc3Jl8hRXa", "https://drive.google.com/drive/folders/1jT6gWnMeGgxCOyC44WnehjI-Rh_6a1tW", 
        "https://drive.google.com/drive/folders/180h9lkpL9_OZJ14XE8kyLfNdCv2GJyYq", "https://drive.google.com/drive/folders/17WmePK9PEvKvLt8eqMjMw-HvTx-KjBCt", "https://drive.google.com/drive/folders/1VvjfBp3uEtdSso8ZjlmPKwz0y7mohqxS", 
        "https://drive.google.com/drive/folders/1NsjBBGBxmHCEC3oAPcvkavlMZtUIPovE", "https://drive.google.com/drive/folders/1twumq6qvFSwRzp6kkonDgYgUWRu-0vAB", "https://drive.google.com/drive/folders/1grMOZNlLYLkTTHJnR_87DeGkEPromhUG", 
        "https://drive.google.com/drive/folders/1PIk6fQjxPrXTymXaKbbXg4S85fPnFtnI", "https://drive.google.com/drive/folders/1IkGVfR8dODGqUyE25r4gs7zdDID9da2n", "https://drive.google.com/drive/folders/1pa6AryyeOD-IhP4xwAp6XPNGq-_h4AwM", 
        "https://drive.google.com/drive/folders/1E9knc9EGdcQxkJpz1Gjk_9W9gF2jDAUR", "https://drive.google.com/drive/folders/1zUYP5Yx0hkePMefwpUwHpcKnRF2FgKD_", "https://drive.google.com/drive/folders/1VqRXim7AP6gpFUeC5DGMUSqoQCFyliOA", 
        "https://drive.google.com/drive/folders/1rTbwe6T5I0QRMRaMQa3rZoGKolk4tpK7", "https://drive.google.com/drive/folders/1nYlyzgoHHIXv5her4sVjOdNP0gxOCUwB", "https://drive.google.com/drive/folders/1a0uxi_p5-_rBMa3MOUCmK27LEIoOatUB", 
        "https://drive.google.com/drive/folders/14yqHjr18tqqq8B6PiB9cf_QpqWjt4_AX", "https://drive.google.com/drive/folders/18mpw3Q7Y4VH9-jSym1bDlrab3qxLKs9A", "https://drive.google.com/drive/folders/1SueEfw96wWEYFIe1hG86aoHez8yz7Y8R", 
        "https://drive.google.com/drive/folders/14VaKR-_MzFS6BOHOIL2TVlUBPytGVrWq", "https://drive.google.com/drive/folders/1Nq2q5aECpJpkFvptT0QxZMSb3_Lze8ld", "https://drive.google.com/drive/folders/1Joq4Q6xpY7Vd95pGXB33K3xQDtPdfPYo", 
        "https://drive.google.com/drive/folders/1X9CRCGrje_XRn9_4RUPFJDZjv8DTKhOc", "https://drive.google.com/drive/folders/1Q0_xFngi_dIgDTBYoxCS0DEXdRWAESQI", "https://drive.google.com/drive/folders/1kIzqAB0Fi7q_2Ci8LpaZGueOIVexpJei", 
        "https://drive.google.com/drive/folders/1wcY9k7bZ_UwY9-Tisf_xwFCIWfg2fKRm", "https://drive.google.com/drive/folders/1wJC8Ol9FyunnTbzepZbTX6OBTzBK0J-e", "https://drive.google.com/drive/folders/1TEhfE5JU97yWqzAl--a5lI1igCjNtGOl", 
        "https://drive.google.com/drive/folders/1p6Q_9Xy1lkfyH9zgNhHbcVzWcOIzl4ej", "https://drive.google.com/drive/folders/1qUg4x2WiV4e8Y94peGu_QbuyQdbq6ydu", "https://drive.google.com/drive/folders/1XhcZeRkwk9CHHILm2q-AXskUd9-HLNFd", 
        "https://drive.google.com/drive/folders/1CF7rUmpqH1Az8umm70z_znpyQxxwoQZX", "https://drive.google.com/drive/folders/13nFFdfxo4juufUfwEDeZ9mkcvr7b0AJG?usp=sharing", "https://drive.google.com/drive/folders/1WiEEoplu_7P5VKx4dfp3gQNMgCc5V1DH?usp=sharing", 
        "https://drive.google.com/drive/folders/1512eiMbMXPBzBAb2nUrvzi2R8KXlPGQ1?usp=sharing", "https://drive.google.com/drive/folders/131fZFOTHV-W4n1J8dh5f_lKdu2jTRw6h?usp=sharing", "https://drive.google.com/drive/folders/1M3vXfsl8uHugyeIBF9hbNxndzK5QZH9S?usp=sharing", 
        "https://drive.google.com/drive/folders/1vNR9LN1tFAIiPm3yQRWAaqMIRyQJrdWD?usp=sharing", "https://drive.google.com/drive/folders/1qPWzxWU5s5QIg6DpkQbrkZJauEtsY593?usp=sharing", "https://drive.google.com/drive/folders/1CbWZk8h9f8Zq29pBbhRTXpyVRD7iSTEW?usp=sharing", 
        "https://drive.google.com/drive/folders/1ZstQ4EE_OQ1uJfAE5QBRgUEHLA_AxuAT?usp=sharing", "https://drive.google.com/drive/folders/1z3BtACRbaR8CyS5kZ8-EYc3HHu6iiitR?usp=sharing", "https://drive.google.com/drive/folders/1LRWf8EHlozQArkZDu6ph1irZ6Aw5gro1?usp=sharing", 
        "https://drive.google.com/drive/folders/11PAZHAkUT1YVIOePv4UYFDKTWUqB9kDX?usp=sharing", "https://drive.google.com/drive/folders/1mXwayBVFKxZYixr-6qEwXH4TShv82fiH?usp=sharing", "https://drive.google.com/drive/folders/1rw5I2e6UFNbP7n7BIm486g2lqTYayXcR?usp=sharing"
    ];

    const buttonContainer = document.getElementById('button-genero');
    genres.forEach((genre, index) => {
        const a = document.createElement('a');
        a.href = urls[index];
        a.target = "_blank"; // Abre o link em uma nova aba

        const button = document.createElement('button');
        button.innerText = genre;

        a.appendChild(button);
        buttonContainer.appendChild(a);
    });
});