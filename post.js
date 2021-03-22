const postGenerator = () => {
    const text = (document.getElementById('phoneModel').value);
    const model = text.toUpperCase()
    console.log(model)
    const genPost =
        `Hello visitors, Are you searching for <strong>${model}</strong> flash file without password, Stock firmware, flash tools or stock official rom? Then Bd Tech Point is the right place for you. <strong>${model}</strong> flash file and stock official rom are available here. Also check your mobile number before download. So why do you late? Let's download flash file and flash tools. Bd Tech Point is a mobile flash file store room. Many many thanks and best wishes to you for visiting our website.
        <br> <br>

<strong>${model}</strong> Flash File Details <br>

===================================== <br>

Brand Name: Symphony <br>
Model Name: <strong>${model}</strong> <br>
CPU Type: MT6260 <br>
Password: Free <br>
File Type: Zip <br>
File Size:  <br>
Link: Google Drive <br>
Download This Flash File:   <br>

Note: We tested almost all file before posting here. If you face any problem with file, kindly inform us. We will try to solve that as soon as we can. Thanks. <br> <br>

How To Flash <strong>${model}</strong> <br>

================================= <br>

Download and extract the <strong>${model}</strong> flash file on your computer. <br>
Install the Mediatek USB Driver on your computer. <br>
Open Cm2 tool or another Mediatek tool. <br>
Choose CPU type. <br>
Add flash file on the tool. <br>
Click the start button. <br>
Connected your phone USB cable to computer. <br>
Insert battery on your mobile. <br>
Now started your flash the installation process. <br>

Save backup: If you are flashing or installing this firmware on your Symphony device, save a backup of everything. Because this firmware will delete all data from your device. <br>

See More: Symphony D54 Plus Flash File Without Password <br>


Conclusion <br>

Thank you for reading the whole part. I hope you will be able to flash your feature phone through successfully. Don’t forget to share us your experience in the comment section. Take care and spread the goodness.Symphony D54i Flash File Free Download Link. This websites collected Latest Stock Firmware (Flash File) by www.bdtechpoint.com`
    document.getElementById('result').innerHTML = genPost;
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