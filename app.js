const text = `Download ${model} Flash File (Stock Official Ram) free. We are bringing you ${model} flash file without any password. You can download flash file for free. With direct link and fast download server. Thank you for visiting our website. If you need any other flash file check our website bdtechpoint.com 
Before downloading the ${model} flash file, carefully check your phone model. Thanks for downloading the file from us. I Hope to see you again. 
`

const newPost = () => {
    const text = (document.getElementById('phoneModel').value);
    const model = text.toUpperCase()
    const genPost =
        `Hello visitors, Are you searching for download ${model} flash file without password, Stock firmware, flash tools or stock official rom? Bd Tech Point is right place for you. ${model} flash file and stock official rom are available here.Also check your mobile number before download. So why do you late? Let's download flash file and flash tools. Bd Tech Point is a mobile flash file store room. Many many thanks and best wishes to you for visiting our website.

${model} Flash File Details

=====================================

Brand Name: Symphony
Model Name: ${model}
CPU Type: MT6260
Password: Free
File Type: Zip
File Size: 
Link: Google Drive
Download This Flash File:  

Note: We tested almost all file before posting here. If you face any problem with file, kindly inform us. We will try to solve that as soon as we can. Thanks.

How To Flash ${model}

=================================

Download and extract the ${model} flash file on your computer.
Install the Mediatek USB Driver on your computer.
Open Cm2 tool or another Mediatek tool.
Choose CPU type.
Add flash file on the tool.
Click the start button.
Connected your phone USB cable to computer.
Insert battery on your mobile.
Now started your flash the installation process.

Save backup: If you are flashing or installing this firmware on your Symphony device, save a backup of everything. Because this firmware will delete all data from your device.

See More: Symphony D54 Plus Flash File Without Password


Conclusion

Thank you for reading the whole part. I hope you will be able to flash your feature phone through successfully. Don’t forget to share us your experience in the comment section. Take care and spread the goodness.Symphony D54i Flash File Free Download Link. This websites collected Latest Stock Firmware (Flash File) by www.bdtechpoint.com`
    document.getElementById('result').innerHTML = genPost;

}
function generateContent() {
    const text = (document.getElementById('phoneModel').value);
    const model = text.toUpperCase()

    const postModel = `Download <strong>${model}</strong> Flash File (Stock Official Ram) free. We are bringing you <strong>${model}</strong> flash file without any password. You can download flash file for free. With direct link and fast download server. Thank you for visiting our website. If you need any other flash file check our website bdtechpoint.com 
    <br>
    <br>
You are going to download <strong>${model}</strong> flash file, carefully check your phone model. Thanks for downloading the file from us. I Hope to see you again. 
`
    // const genPost = newPost(model);
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
        // generateContent()
        // newPost()
        console.log('generating post..')
    }
})

const generatePost = () => {
    console.log('hello world')
}