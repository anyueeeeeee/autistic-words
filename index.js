let express = require('express');
let app = express();

let words = {
    "data": [
        {
            word: "couple",
            pronunciation: "/ˈkʌpl/",
            definition: "a couple is two of something. just two. not one. not three (three is a few). two."
        },
        {
            word: "creativity",
            pronunciation: "/ˌkriːeɪˈtɪvɪti/",
            definition: "creativity happens when you imagine something somewhere it doesn't seem to belong."
        },
        {
            word: "now",
            pronunciation: "/naʊ/",
            definition: "now is the present moment, with a 5 minute grace period. please don't say you're going to do something now if you're not going to start it within 5 minutes."
        },
        {
            word: "autistic",
            pronunciation: "/ɔːˈtɪstɪk/",
            definition: "being autistic means living with your own set of rules that do not need to conform to society's- life with a different set of glasses."
        },
        {
            word: "success",
            pronunciation: "/səkˈsɛs/",
            definition: "success is having completed a task to a point where there is less than 5% room for improvement based on expected outcomes."
        },
        {
            word: "genius",
            pronunciation: "/ˈdʒiːnɪəs/",
            definition: "a genius is an artist who is ahead of their time, so much so that they will probably not be appreciated until they're gone."
        },
        {
            word: "love",
            pronunciation: "/lʌv/",
            definition: "love is what it must feel like when someone can complete your sentences after you say the first word. it's something i believe exists, but i don't think i'll find."
        },
        {
            word: "life",
            pronunciation: "/lʌɪf/",
            definition: "life is something that makes you nostalgic for a time you can't quite remember, something that requires breathing."
        },
        {
            word: "work",
            pronunciation: "/wəːk/",
            definition: "work is something that requires you to put energy into."
        },
        {
            word: "artist",
            pronunciation: "/ˈɑːtɪst/",
            definition: "an artist creates."
        }
    ]
}

app.use('/', express.static('public'));

app.get('/words', (req, res) => {
    res.json(words);
})

app.get('/words/:word', (req, res) => {
    console.log(req.params);
    let user_word = req.params.word;
    let user_obj;
    for(let i=0; i<words.data.length; i++) {
        if(user_word == words.data[i].word){
            user_obj = words.data[i];
        }
    }
    console.log(user_obj);

    if (user_obj){
        res.json(user_obj);
    } else {
        res.json({status:"info not present"});
    }
})

app.listen(3000, () => {
    console.log("app is listening at local host 3000");
})