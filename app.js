function generateContent() {
    const model = document.getElementById('phoneModel').value;
    const postModel = `Download <strong>${model}</strong> Flash File SC6531E Tested (Stock Official Rom). I'm sure you were looking for a <strong>${model}</strong> Flash File software. At any one time you have come to our bdtechpoint.com site to search for your <strong>${model}</strong> Flash File software. Many thanks and best wishes to you for visiting our site. If you have come to our site for this <strong>${model}</strong> Flash File software. Then, we'll assume you've chosen the right software site. Because we always upload original and official flash file software on our site. We never upload any bad Flash file software to our site. We never worry about anyone being harassed for downloading files from our site. You can download the mobile flash file from our site without any worries.

    <br>
    <br>
    When downloading the <strong>${model}</strong> Flash File software from our site, you must verify which modem and which brand of your mobile. Because it turned out that you were looking for "Samsung Flash File or Oppo Flash File" software but the page you came across is "Huawei Flash File" software so you may be a victim of harassment. 
    So, I would request you to make sure that the mobile flash file software that you have come to search for matches. If there is no match, you can search and download your mobile Flash file software in the "Search" option from the navigation bar at the top of our site.`

    document.getElementById('result').innerHTML = postModel;
}



function copyPost() {
    console.log('copying text')
    let copyText = document.getElementById("result");
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    // alert("Copied the text: " + copyText.value);
    console.log(copyText.value)
} 
