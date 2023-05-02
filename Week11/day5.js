/* 
Amazon is developing a new song selection algorithm that will sync with the
duration of your bus ride.
Given a positive integer representing a duration of a bus ride and
an array of positive integers representing song times, find a pair of two songs
where the song pair ends 30 seconds before the bus ride ends.
return an array of the song indexes or [-1, -1] if no pair is found.
If there are multiple song pairs that match, return the pair that contains the
longest song. The order of the returned indexes doesn't matter.
*/

const busDuration1 = 300;
const songDurations1 = [70, 120, 200, 45, 210, 40, 60, 50];
const expected1 = [4, 6]; // 210, 60
/* Explanation:
There are multiple pairs that add up to 30 seconds before the bus duration.
The pair at indexes 4 and 6 is the pair with the longest song that is chosen.
*/

const busDuration2 = 300;
const songDurations2 = [70, 120, 200, 230, 45, 210, 40, 60, 50];
const expected2 = [3, 6]; // 230, 40
/* Explanation:
This is the pair with the longest song.
*/

const busDuration3 = 300;
const songDurations3 = [70, 120, 20, 23, 45, 21, 40, 60, 50];
const expected3 = [-1, -1]; // not found.


/* 
PSEUDOCODE
declare a function that accepts a num and array of nums
    assume all nums are positive
    subtract 30 from num and store as targetDuration
    keep track of the idx where the 2 nums are found that = targetDuration
    loop through the array to find 2 nums that equal targetDuration
        if no 2 songs = targetDuration, return [-1, -1]
        if more than 2 pairs of songs are found that = targetDuration, return whichever pair has the largest num
    

*/

/**
 * Finds the pair of song durations that adds up to 30 seconds before the bus
 * ride ends.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} busDuration Seconds.
 * @param {Array<number>} songDurations Seconds.
 * @returns {Array<number, number>} The song pair indexes, or [-1, -1] if no pair is found.
 *    If there were multiple solutions, the one with the longest song should be used.
 */
function musicRuntime(busDuration, songDurations) {
    const targetDuration = busDuration - 30;
    let twoSongs = [-1, -1];
    
    //initialized twoSongs as the fail case [-1, -1], if no match found, we never update it and can return the fail case
    return twoSongs
}

const testCase1 = musicRuntime(busDuration1, songDurations1);
const testCase2 = musicRuntime(busDuration2, songDurations2);
const testCase3 = musicRuntime(busDuration3, songDurations3);

console.log(testCase1);
console.log(testCase2);
console.log(testCase3);