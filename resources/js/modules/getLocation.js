export default async function () {
    /*let ipData = await fetch(
        'https://api.ipdata.co/?api-key=5bdb37174c8f78a83e68e7fe4932de00d3add080cf575ae1dd1afcbf'
    );
    let parsedIpData = await ipData.json();
    console.log(parsedIpData);
    if (parsedIpData && parsedIpData.languages) {
        parsedIpData.languages.forEach((lang) => {
            if (lang.code == 'en' || lang.code == 'ru') {
                console.log('lang.code - ' + lang.code);
                return lang.code;
            } else {
                console.log('fallback locale - en');
                return 'en';
            }
        })
    } else {
        console.log('no response. fallback locale - en');
        return 'en';
    } */
    return new Promise((resolve, reject) => {
        axios.get(
            'https://api.ipdata.co/?api-key=5bdb37174c8f78a83e68e7fe4932de00d3add080cf575ae1dd1afcbf'
        ).then((response) => {
            if (response && response.languages) {
                response.languages.forEach((lang) => {
                    if (lang.code == 'en' || lang.code == 'ru') {
                        console.log('lang.code - ' + lang.code);
                        return lang.code;
                    } else {
                        console.log('fallback locale - en');
                        return 'en';
                    }
                })
            } else {
                console.log('no response. fallback locale - en');
                return 'en';
            }
        }).catch((error) => {
            reject(error);
        })
    })
}
