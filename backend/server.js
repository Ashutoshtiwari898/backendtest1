import express from 'express'; // ✅ use import

const app = express();

//app.get('/', (req, res) => {
   // res.send('Server is ready');
//});

app.get('/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:'A joke',
            content:'This is a joke'
        },
        {
            id:1,
            title:'A joke',
            content:'This is aleardy joke'
        },
        {
            id:1,
            title:'A joke',
            content:'This is not joke'
        },
        {
            id:1,
            title:'A joke',
            content:'This is an joke'
        },
        {
            id:1,
            title:'A joke',
            content:'This is the joke'
        },

    ];
    res.send(jokes);
}); 

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`); // ✅ fixed template literal
});
