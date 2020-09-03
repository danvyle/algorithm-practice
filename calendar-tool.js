// ----problem-----

// To do this, you’ll need to know when any team is having a meeting. 
// In HiCal, a meeting is stored as objects ↴ with integer properties startTime and endTime.
//  These integers represent the number of 30-minute blocks past 9:00am.

// For example:

//   { startTime: 2, endTime: 3 }  // meeting from 10:00 – 10:30 am
// { startTime: 6, endTime: 9 }  // meeting from 12:00 – 1:30 pm

// example: input [
//     { startTime: 0,  endTime: 1 },
//     { startTime: 3,  endTime: 5 },
//     { startTime: 4,  endTime: 8 },
//     { startTime: 10, endTime: 12 },
//     { startTime: 9,  endTime: 10 },
//   ]

//   expected output: 
//   [
//     { startTime: 0, endTime: 1 },
//     { startTime: 3, endTime: 8 },
//     { startTime: 9, endTime: 12 },
//   ]
//-------------solution-------------
//i want to check if any number is in any lower bound or upper bound.

let meetings =   [
    { startTime: 0,  endTime: 1 },
    { startTime: 3,  endTime: 5 },
    { startTime: 4,  endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9,  endTime: 10 },
  ]
  
  function mergeRanges(meetings) {
  
    // Merge meetings ranges
    const meetingsCopy = JSON.parse(JSON.stringify(meetings));
    
    const sortedMeetings = meetingsCopy.sort((a, b) => {
      return a.startTime - b.startTime;
    });
    
    const mergedMeetings = [sortedMeetings[0]];
    
    for(let i = 1; i < sortedMeetings.length; i++){
      const currentMeeting = sortedMeetings[i];
      const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];
      
      if(currentMeeting.startTime <= lastMergedMeeting.endTime) {
        lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
        
      } else {
        mergedMeetings.push(currentMeeting);
      }
    }
    console.log(mergedMeetings);
    return mergedMeetings;
  }

mergeRanges(meetings);