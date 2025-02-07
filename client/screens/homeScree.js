import { useEffect } from "react";



function HomeScreen() {
    useEffect(() => {
        axios.get("http://localhost:3000/restaurants")
            .then(response => {
                setRestaurants(response.data)
            })
            .catch(error => {
                console.error("There was an error fetching the restuarants", error)
            })
    }, [])

}

export default HomeScreen;