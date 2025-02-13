import axios from "axios";
import React, { useState, useEffect } from "react";
import { View, Text, Flatlist, Button } from "react-native"

function RestaurantScreen() {
 const [restuarants, setRestuarants] = useState([]);

 useEffect(() => {
    axios.get("http://zibusisonduna2001:8AsJgYl9K9R5N0rQ@cluster0/restaurants")
     .then(response => setRestuarants(response.data))
     .catch(error => console.log(error))
 }, [])

 return(
    <View>
        <Flatlist
            data={restuarants}
            renderItem={({item}) => (
                <View>
                    <Text>{item.name}</Text>
                    <Button title="View Details" onPress={() => navigateToRestaurantDetails(item._id)} />
                </View>
            )}
            keyExtractor={(item) => item._id}
            />
    </View>
 )
}

export default RestaurantScreen;