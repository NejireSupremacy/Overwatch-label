const fetch = require('node-fetch');
const { writeFileSync, mkdirSync, existsSync } = require('fs');
const config = require('./config.json')

function parseData(data, path){
    for(const key in data){
        const newPath = `${path}/${key}`;

        if(typeof data[key] === 'object' && data[key]){
            if(!existsSync(newPath)) mkdirSync(newPath);
            parseData(data[key], newPath);
        }else{
            writeFileSync(`${newPath}.txt`, `${data[key] ||  'Not found'}`);
        }
    }
}

const stats = async () => {
    const data = await fetch(
        `https://owapi.io/profile/${config.platform}/${config.region}/${config.username}-${config.tag}`
    ).then(stream => stream.json())

    if(data.private) console.log('The profile is private, some data may be missing');
    if('message' in data) throw new Error(`An unexpected message appeared: ${data.message}`);
    if(!data.username) throw new Error(`Profile not found`);

    if(!existsSync('./labels')) mkdirSync('./labels');
    parseData(data, './labels');
};

stats().then(() => {
    console.log(`Statistics were updated and started, statistics are updated every 10 minutes.`);

    setInterval(async () => {
        try {
            await stats()
            console.log(`Statistics have been updated`);
        } catch(e) {
            console.log(`An error occurred, stopping the application`);
            console.log(e);
            process.exit();
    
        };
    }, 600000);
}).catch((e) => {
    console.log(`An error occurred, stopping the application`);
    console.log(e);
    process.exit();
});

