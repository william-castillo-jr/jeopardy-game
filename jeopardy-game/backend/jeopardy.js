const db = require('./db');

function getCardsWithCategory() {
    return new Promise((resolve, reject) => {
        db.all(`
            SELECT cards.*, categories.name AS category_name
            FROM cards
            JOIN categories ON cards.category_id = categories.id
        `, (err, rows) => {
            if (err)
                reject(err);
            else
                resolve(rows);
        });
    });
}

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

function handleMarkAnswered(id) {
  return new Promise((resolve, reject) => {
    db.run('UPDATE cards SET isAnswered = 1 WHERE id = ?', id, function(err) {
      if (err) reject(err);
      else resolve();
    });
  });
}

module.exports = {
    handleMarkAnswered,
    getCardsWithCategory,
    getCards,
    getTeams,
    getTeamById,
    addTeam,
    updateTeamScore,
    deleteTeam
};