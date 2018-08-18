let fs = require('fs')
const readline = require('readline')

let dirPath = './data',
    path = './data/kea.txt',
    array = [],
    commentPath = './comments.txt'

welcomeTo = () => {
    console.log("Welcome to the ASCII file repository\n");
    console.log("Please choose an artwork below:\n");
    showOptions();
}

showOptions = () => {
    fs.readdir(dirPath, (err, data) => {
        if(err) {
            console.log('there was an error finding artworks in \n' + dirPath);
        } else {
            filesArr = data;
            setTimeout(() => {
                for (let i = 0; i < filesArr.length; i ++){
                    console.log(i + ': ' + filesArr[i])
                    array.push(filesArr[i])
                }
            }, 500)
            pressEnter();
        }
    })
}

pressEnter = () => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
    rl.question('\n Which file should I load? (q: Exit c: Comment v: View comments d: Delete comments) \n', (input) => {
    rl.close()
        switch(input) {
            case 'q':
                process.exit()
                break;
            case 'c':
                writeComment((comment) => {
                    reVisit()
                })
                break;
            case 'v':
                viewComment((comment) => {
                    console.log(comment)
                    reVisit()
                })
                break;
            case 'd':
                deleteComment(reVisit)
                break;
            default:
                path = './data/' + array[input]
                console.log(path);
                afterViewed(path);
        }
    })
}

reVisit = () => {
    showOptions();
}

writeComment = (callback) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
        rl.question('What comments did you have? \n', (comment) => {
        rl.close()

        fs.appendFile(commentPath, comment + ',', (err, comment) => {
            err ? console.log("error writing comments\n") :  callback(comment)
        });  
    })
}

viewComment = (callback) => {
    console.log("you are now viewing comments\n");
    fs.readFile(commentPath, 'utf-8', (err, data) => {
        err ? console.log("error loading comments\n") :  callback(data)
    }) 
}

deleteComment = (callback) => {
    console.log("you are about to delete a comment\n");
    fs.truncate('./comments.txt', 0, () => {
        console.log('done')
        callback();
    })
}

afterViewed = (path) => {
    fs.readFile(path, 'utf-8', (err, data) => {
        err ? console.log("error loading Nikau\n") : console.log(data) 
        console.log("Thanks for viewing a photo\n");
        console.log("Please pick another:\n");
        reVisit();
    })
}

welcomeTo();

module.exports = {
    welcomeTo,
    afterViewed,
    deleteComment,
    viewComment,
    writeComment,
    reVisit,
    showOptions,
    pressEnter
}











