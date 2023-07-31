const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;

    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }

        const second = result;
        writeFile('./content/final-async.txt', `${first},${second}`, 'utf-8', (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('Successfully wrote the combined content to final-async.txt');
        });
    });
});
