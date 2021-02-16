const text = `Download ${model} Flash File (Stock Official Ram) free. We are bringing you ${model} flash file without any password. You can download flash file for free. With direct link and fast download server. Thank you for visiting our website. If you need any other flash file check our website bdtechpoint.com 
Before downloading the ${model} flash file, carefully check your phone model. Thanks for downloading the file from us. I Hope to see you again. 
`


function generateContent() {
    const text = (document.getElementById('phoneModel').value);
    const model = text.toUpperCase()

    const postModel = `Download ${model} Flash File (Stock Official Ram) free. We are bringing you ${model} flash file without any password. You can download flash file for free. With direct link and fast download server. Thank you for visiting our website. If you need any other flash file check our website bdtechpoint.com 
Before downloading the ${model} flash file, carefully check your phone model. Thanks for downloading the file from us. I Hope to see you again. 
`
    document.getElementById('result').innerHTML = postModel;
}


const copyToClipboard = () => {
    const postContent = document.getElementById('result').innerText;
    const el = document.createElement('textarea');
    el.value = postContent;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};

window.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        generateContent()
    }
})
