const express = require('express');
const members = require('../../members');
const router = express.Router();
const uuid = require('uuid');

// EXAMPLE OF CRUD API - CREATE READ UPDATE DELETE

// Creating a Route
// app.get('/', (req,res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });


// Gets all Members - when using router use router, else it will be variable namme defined when calling the express() function
router.get('/', (req,res) => {
    res.json(members);
}); // since arrow function and only one statement, no need to use curly braces, however it is better if you do for understanding

// Get a single member
router.get('/:id', (req,res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if(found) {
        // res.send(req.params.id);
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({msg: `No member with the id of ${req.params.id}` });
    }
});

// Create Member
router.post('/', (req,res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    };

    if(!newMember.name || !newMember.email) {
        return res.status(400).json({ msg: `Please include a name and email` });
    }
    // if you dont put an else you will get an error that headers have already been sent. To avoid getting that error add a return in the if statement

    members.push(newMember);
    res.json(members);

    // when dealing with templates you will redirect not show json
    // res.redirect('/');
});

// Update Member - similar as get single member
router.put('/:id', (req,res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if(found) {
        const updateMember = req.body;
        members.forEach(member => {
            if(member.id === parseInt(req.params.id)) {
                member.name = updateMember.name ? updateMember.name : member.name;
                member.email = updateMember.email ? updateMember.email : member.email;

                res.json({ msg: 'Member was updated', member});
            }
        });
    } else {
        res.status(400).json({msg: `No member with the id of ${req.params.id}` });
    }
});

// Delete a Member
router.delete('/:id', (req,res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if(found) {
        res.json({msg: 'Member Deleted..', members: members.filter(member => member.id !== parseInt(req.params.id))});
    } else {
        res.status(400).json({msg: `No member with the id of ${req.params.id}` });
    }
});










module.exports = router;