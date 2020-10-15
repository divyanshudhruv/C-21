function isTouching(object1, object2) {

    if (object1.x - object2.x < object2.width / 2 + object1.width / 2
        && object2.x - object1.x < object2.width / 2 + object1.width / 2
        && object1.y - object2.y < object2.height / 2 + object1.height / 2
        && object2.y - object1.y < object2.height / 2 + object1.height / 2) {
        // movingRect.shapeColor = "red";
        // fixedRect.shapeColor = "red";
        return true;
    }
    else {
        //movingRect.shapeColor = "green";
        //fixedRect.shapeColor = "green";
        return false;

    }


}
function bounceOff(object1,object2){
    if (object1.y - object2.y < (object1.height / 2 + object2.height / 2) && object2.y - object1.y < (object1.height / 2 + object2.height / 2)) {

        object1.velocityY = object1.velocityY*-1 ;
        object2.velocityY = object2.velocityY*-1;

        object1.shapeColor = "red";




}

    if (object1.x - object2.x < (object1.width / 2 + object2.width / 2) && object2.x - object1.x < (object1.width / 2 + object2.width / 2)) {

        object1.velocityX = object1.velocityX* -1;
        object2.velocityX = object2.velocityX*-1;

        object1.shapeColor = "red";



}
}