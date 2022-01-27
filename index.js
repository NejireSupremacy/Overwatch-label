const fetch = require('node-fetch');
const { writeFileSync, mkdirSync, existsSync } = require('fs');
const config = require('./config.json')

const stats = async () => {
    const fetched = await fetch(`https://owapi.io/profile/${config.plataform}/${config.region}/${config.username}-${config.tag}`);
    const data = await fetched.json();
    
    if(data.private) console.log('The profile is private, some data may be missing');
    if('message' in data) throw new Error(`An unexpected message appeared: ${data.message}`);

    for(const key of Object.keys(data)) {
        if(!data[key]) data[key] = 'Not found';
        if(!existsSync('./labels')) mkdirSync('./labels');

        if(typeof(data[key]) === 'object') {
            if(!existsSync(`./labels/${key}`)) mkdirSync(`./labels/${key}`);

            const data2 = data[key];
            for(const key2 of Object.keys(data2)) {
                if(!data2[key2]) data2[key2] = 'Not found';

                if(typeof(data2[key2]) === 'object') {
                    if(!existsSync(`./labels/${key}/${key2}`)) mkdirSync(`./labels/${key}/${key2}`);

                    const data3 = data2[key2];
                    for(const key3 of Object.keys(data3)) {
                        if(!data3[key3]) data[3] = 'Not found';

                        writeFileSync(`./labels/${key}/${key2}/${key3}.txt`, `${data3[key3]}`);
                    };
                } else writeFileSync(`./labels/${key}/${key2}.txt`, `${data2[key2]}`);
            };
        } else writeFileSync(`./labels/${key}.txt`, `${data[key]}`);
    };
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

