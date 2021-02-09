function generateContent() {
    const text = (document.getElementById('phoneModel').value);
    const model = text.toUpperCase()
    const postModel = `Download <strong>${model}</strong> Flash File SC6531E Tested (Stock Official Rom). I'm sure you were looking for a <strong>${model}</strong> Flash File software. At any one time you have come to our bdtechpoint.com site to search for your <strong>${model}</strong> Flash File software. Many thanks and best wishes to you for visiting our site. If you have come to our site for this <strong>${model}</strong> Flash File software. Then, we'll assume you've chosen the right software site. Because we always upload original and official flash file software on our site. We never upload any bad Flash file software to our site. We never worry about anyone being harassed for downloading files from our site. You can download the mobile flash file from our site without any worries.

    <br>
    <br>
    When downloading the <strong>${model}</strong> Flash File software from our site, you must verify which modem and which brand of your mobile. Because it turned out that you were looking for "Samsung Flash File or Oppo Flash File" software but the page you came across is "Huawei Flash File" software so you may be a victim of harassment. 
    So, I would request you to make sure that the mobile flash file software that you have come to search for matches. If there is no match, you can search and download your mobile Flash file software in the "Search" option from the navigation bar at the top of our site.`

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
