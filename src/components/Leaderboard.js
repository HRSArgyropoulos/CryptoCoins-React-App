//import ScoreItems from './ScoreItems'

const Leaderboard = () => {

    const scores = [
        {
            "username": "sjdkiller73",
            "balance": 5436,
            "country": "GR"
        },
        {
            "username": "sfdsh31",
            "balance": 4675,
            "country": "UK"
        },
        {
            "username": "sracdaler13",
            "balance": 3501,
            "country": "GR"
        }
    ]

    const lis = scores.map((score) => {
        const {username,balance,country} = score;
        return (
        <li key={username}> {/* usernames must be unique */}
            <span>{username}</span>
            <span>{balance}</span>
            <span>{country}</span>
        </li>)
    })

    return (
        <div className="leaderboard">
            <h2 style={{color:"white"}}>Balance Leaderboard</h2>
            <ul>
                {lis}
            </ul>
        </div>
    )
}

export default Leaderboard
