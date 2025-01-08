const mailchimp = require("@mailchimp/mailchimp_marketing");

require('dotenv').config();



const listId = "ba00844840";
const subscribingUser = {
    firstName: "Star",
    lastName: "Balloon",
    email: "starloonthefallenstarninja@gmail.com"
};


// App is an Express instance
// db is a MongoDB database instance
module.exports = function(app, db) {
    mailchimp.setConfig({
        apiKey: process.env.MAILCHIMP,
        server: "us9",
    });

    
    
    app.post('/notes', async (req, res) => {    // You'll create your note here.    
        console.log(req.body);
        
        const response = await mailchimp.lists.addListMember(listId, {
            email_address: subscribingUser.email,
            status: "subscribed",
            merge_fields: {
                FNAME: subscribingUser.firstName,
                LNAME: subscribingUser.lastName
            }
        });
        
        console.log(
            `Successfully added contact as an audience member. The contact's id is ${
                response.id
            }.`
        );
        
        res.send(`${response}`);
        
        res.send('Hello, Express!');
        
    });
};
