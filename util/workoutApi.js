const fetch = require('node-fetch')

// fetches and returns from wger api
const findAllWorkouts = async() => {
    const response = await fetch('https://wger.de/api/v2/workout/', {
        method: 'GET',
        headers: {
            Authorization: `Token ${process.env.WORKOUT_API_KEY}`,
            'Content-Type': 'application/json',
        },
    })
    const data = await response.json()
    return data
}

const findWorkoutById = async() => {}

module.exports = { findAllWorkouts, findWorkoutById }