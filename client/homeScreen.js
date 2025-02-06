const { useState, useEffect } = require("react");
const { ScrollView, Button } = require("react-native");

function HomeScreen({ navigation }) {
    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        fetchRestaurants()
    }, [])

    const fetchRestaurants = async () => {
        try {
            const response =await fetch("")
            const data = await response.json()
            setRestaurants(data)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <ScrollView>
            {restaurants.map((restaurant) => (
                <View key={restaurant._id} style={styles.restaurantCard}>
                    <Text>{restaurant.name}</Text>
                    <Text>{restaurant.location}</Text>
                    <Text>{restaurant.cuisine}</Text>
                    <Button title="View Details" onPress={() => navigation.navigate("RestaurantDetail", { restaurant})} />
                </View>
            ))}
        </ScrollView>
    )
}