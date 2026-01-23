let myScore = 80
let myFriendScore = 80
if(myScore >= 80){
    if(myFriendScore >= 80){
        console.log("then go for a lunch. ");
    }
    else{
        if(myFriendScore <= 80 && myFriendScore >= 60){
            console.log("good luck next time. ");
        }
        else{
            if(myFriendScore < 60 && myFriendScore >= 40){
                console.log("keep your friend's message unseen.");
            }
            else{
                console.log("block your friend");
            }
        }
    }
}
else{
    console.log("go to home and sleep and act sad");
    
}