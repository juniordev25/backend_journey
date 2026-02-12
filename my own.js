////// fake data source
function fetchId(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
         const userId = "Delanie123";

            if(userId){
                resolve("Welcome: " + userId);
            }
            else{
                reject("Denied");
            }
        
        }, 1000)
    });
}
/// add another search query
function fetchStatus(userId){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            

            if (userId.includes("M")){
                resolve("possibility");
            }
            else{
                reject("Not One");
            }
        }, 1000)
    });
}
//// make asyncfunction
async function idReturned(){
    try{
        const returnedId = await fetchId();
        console.log(returnedId);

        const statusFetched = await fetchStatus(returnedId);
        console.log(statusFetched);
    }
    catch(error){
        console.log(error);
    }
}
idReturned();

