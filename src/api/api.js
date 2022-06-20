const FIREBASEKEY = 'https://react-http-91fc5-default-rtdb.europe-west1.firebasedatabase.app'

export const addNewDishRequest = async (dishData) => {
    const response = await fetch(`${FIREBASEKEY}/dishes.json`, {
        method: 'POST',
        body: JSON.stringify(dishData),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const data = await response.json()

    if (!response.ok) {
        throw new Error(data.message || 'something went wrong')
    }

    return null
}

export const renderAllDishes = async () => {
    const response = await fetch(`${FIREBASEKEY}/dishes.json`)
    const data = await response.json()

    if (!response.ok) {
        throw new Error(data.error || 'Something went wrong!')
    }

    const transformatedDishes = []

    for (const key in data) {
        const dishObj = {
            id: key,
            ...data[key]
        }

        transformatedDishes.push(dishObj)
    }


    return transformatedDishes
}