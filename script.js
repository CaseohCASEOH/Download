var link = document.createElement('a');
link.href = 'APK.7z';
link.download = 'One UI Home.apk';
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
