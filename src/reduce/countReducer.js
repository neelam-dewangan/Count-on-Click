const number= 1 

 const countReducer = (cntData = number, action) => {
    switch(action.type){
        case "Increament_Number" : let tempCnt = cntData;
        tempCnt = tempCnt+1;
        return tempCnt;
        default: return cntData;
        
    }

}

export default countReducer;
