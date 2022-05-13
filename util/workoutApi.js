const fetch = require('node-fetch')

// fetches and returns from wger api
const findAllWorkouts = async () => {
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

// fetches and returns workout from wger api
const findWorkoutById = async (workoutId) => {
    const response = await fetch(
        `https://wger.de/api/v2/workout/${workoutId}/canonical_representation`,
        {
            method: 'GET',
            headers: {
                Authorization: `Token ${process.env.WORKOUT_API_KEY}`,
                'Content-Type': 'application/json',
            },
        }
    )
    const data = await response.json()
    return data
}

module.exports = { findAllWorkouts, findWorkoutById }
findWorkoutById('321550')
