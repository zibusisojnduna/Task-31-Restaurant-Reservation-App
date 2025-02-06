const { useState, useEffect } = require("react");

function AdminDashboard() {
    const [reservations, setReservations] = useState([])
    const [analytics, setAnalytics] = useState(null)

    useEffect(() => {
        fetchReservations()
        fetchAnalytics()
    }, [])

    const fetchReservations = async () => {
       const response = await fetch("")
       const data = await response.json()
       setReservations(data)
    }

    const fetchAnalytics = async () => {
        const response = await fetch("")
        const data = await response.json(
            setAnalytics(data)
        )
    }
}