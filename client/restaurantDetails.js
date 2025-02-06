const { useState, useEffect } = require("react")
const { View } = require("react-native")

function RestaurantDetails({ route, navigation}) {
    const { restaurantId } = route.params
    const [restaurant, setRestaurant] = useState({})
    const [selectedDate, setSelectedDate] = useState("")
    const [availableSlots, setAvailableSlots] = useState([])

    useEffect(() => {
        fetchRestaurantDetails()
    }, [])

    const fetchRestaurantDetails = async () => {
        try {
            const response = await fetch("")
            const data = await response.json()
            setRestaurant(data)
            setAvailableSlots(data.slots)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View>
            <Text>{restaurant.name}</Text>
            <Text>{restaurant.location}</Text>
            <Text>{restaurant.cuisine}</Text>
            <Calendar
                onDayPress={(day) => setSelectedDate(day.dateString)}
                markedDates={{ [selectedDate]: { selected: true, selectedColor: "blue"}}}
            />
            <Button title="Book Reservation" onPress={() => makeReservation()} />
        </View>
    )
}

export default RestaurantDetails