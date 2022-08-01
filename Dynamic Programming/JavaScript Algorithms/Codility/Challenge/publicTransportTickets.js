// PublicTransportTicketsAlgo
// Compute the minimum amount of money that you have to spend on tickets for some upcoming days.


// Golden Solution ***100%***
const publicTransportTickets = (A) => {
    const M = Math.max(...A) + 30;
    const dp = Array(M + 1).fill(0);
    const day = Array(M).fill(0);

    for(let a of A){
        day[a] = 1;
    }

    for(let i = M - 1; i >= 0; i -= 1) {
        if (!day[i]) dp[i] = dp[i + 1];
        else {
            dp[i] = Math.min(2 + dp[i + 1], 7 + dp[i + 7], 25 + dp[i + 30])
        }
    }

    return dp[1];
}

console.log(publicTransportTickets([1, 2, 4, 5, 7, 29, 30]));