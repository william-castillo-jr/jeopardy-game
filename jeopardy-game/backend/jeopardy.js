const db = require('./db');

function getCards() {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM cards', (err, rows) => {
            if (err)
                reject(err);
            else
                resolve(rows);
        });
    });
}


function getTeams() {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM teams', (err, rows) => {
            if (err)
                reject(err);
            else
                resolve(rows);
        });
    });
}

function getTeamById(id) {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM teams WHERE id = ?', id, (err, rows) => {
            if (err)
                reject(err);
            else
                resolve(rows);
        });
    });
}

function addTeam(name, notes) {
    return new Promise((resolve, reject) => {
        db.run('INSERT INTO teams (name, notes) VALUES (?, ?)', name, notes, (err) => {
            if (err)
                reject(err);
            else
                resolve();
        });
    });
}

function updateTeamScore(id, points) {
    return new Promise((resolve, reject) => {
        db.run('UPDATE teams SET points = points + ? WHERE id = ?', [points, id], (err) => {
            if (err)
                reject(err);
            else
                resolve();
        });
    });
}

function deleteTeam(id) {
    return new Promise((resolve, reject) => {
        db.run('DELETE FROM teams WHERE id = ?', id, (err) => {
            if (err)
                reject(err);
            else
                resolve();
        });
    });
}

module.exports = {
    getCards,
    getTeams,
    getTeamById,
    addTeam,
    updateTeamScore,
    deleteTeam
};