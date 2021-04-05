import React from 'react';
import 'fontsource-roboto';

let DownloadPage = (props) =>{

    const download = document.createElement('a') // element a
    const blob = new Blob([JSON.stringify(props.userdata)], {
      type: 'application/json'
    })
    const url = URL.createObjectURL(blob) // blob to url
    download.href = url
    download.download = 'userdata.json' //
    download.click()

    return (
        <div>download Page</div>
    );
}

export default DownloadPage;