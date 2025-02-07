import axios from "axios";

function RestaurantDetails() {
 const handleReservse = () => {
    axios.post("http://localhost:3000/reservations", {
        userId: userId,
        restaurantId: restaurantId,
        reservationTime: selectedTime
    }).then(response => {
        alert("Reservation Successful")
    }).catch(error => {
        alert("There was an error making a reservation")
    })
 }
}

export default RestaurantDetails;
