import express from 'express'; // Module js

const app= express();

// app.get('/', (req,res)=>{
//     res.send('Server is ready');
// });

app.get('/jokes', (req,res)=>{
    const jokes=[
    {
        id:1,
        title: 'A joke',
        content: 'this is a joke'
    },

    {
        id:2,
        title: 'Another joke',
        content: 'this is another joke' 
    },


    {
        id:3,
        title: 'third joke',
        content: 'this is third  joke' 
    },
    ]
    res.send(jokes);
})
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);  //Hello Harsh
  });
  
