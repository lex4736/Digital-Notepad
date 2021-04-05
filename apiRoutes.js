// Here i am requiring fs to manage files
const fs = require("fs");

module.exports = (app) => {
    // Here i am converting the data from the database as json
    let noteList = JSON.parse(fs.readFileSync('./db/db.json'));

    //  Here i am adding the get function to existing data  
    app.get("/api/notes", (req, res) => {
        return res.json(noteList);
    });
    //  Here i am adding the post function to allow entry of new function and save new entries 
    app.post('/api/notes', (req, res) => {
    //  Here I have it grabbing the ID of the last entry if it's there otherwise it defaults to zero and then pushes the entry into the body
        let latestId;
        if (noteList.length) {
            latestId = Math.max(...(noteList.map(note => note.id)));
        } else {
            latestId = 0;
        }
        const id = latestId + 1;

        noteList.push({ id, ...req.body });
        res.json(noteList.slice(-1));
    });
    // Here i am adding  the delete function to give user option to delete existing entries 
    app.delete('/api/notes/:id', (req, res) => {
        //finds note by id, then converts the string into a JSON object with the id parameters of the request made
        let findNote = noteList.find(({ id }) => id === JSON.parse(req.params.id));

        //Delete object matching the index of the note ID
        noteList.splice(noteList.indexOf(findNote), 1);
        res.end("Entry was removed");
    });
};

