document.addEventListener('DOMContentLoaded', () => {
    const urls = [
        "https://drive.google.com/drive/folders/1ifkBh4Dnwzz3_338Iknk_jgxyXUaYHMr?usp=sharing",
        "https://drive.google.com/drive/folders/14XiJS04a9xnPh26i3bLP_YhisJNmP0hJ?usp=sharing",
        "https://drive.google.com/drive/folders/1yaC9NmdFeKsW6XY6A_YaQBKOyCNP5flE?usp=sharing",
        "https://drive.google.com/drive/folders/11z_RbKa5WcBIsGLCGx2Ls42NTRztf_mc?usp=sharing",
        "https://drive.google.com/drive/folders/1e8R82gUX8EOuskqtioTfO2X4u_69gCJ-?usp=sharing",
        "https://drive.google.com/drive/folders/16GYobuADsqctHAoT1CBMziNW-dwYPRCG?usp=sharing",
        "https://drive.google.com/drive/folders/14kEoqolYuCfaDwm8tnxfZIB__6P7KPLo?usp=sharing",
        "https://drive.google.com/drive/folders/1-rBah-qeXDMIARMyO4ULKZ_Xwxqe-8Y1?usp=sharing",
        "https://drive.google.com/drive/folders/1RdiIgGugVRZPq-vbjhRDCZpyQoRS7C4g?usp=sharing"
    ];

    const buttons = document.querySelectorAll('.bonus-button2');

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            window.open(urls[index], '_blank');
        });
    });
});
