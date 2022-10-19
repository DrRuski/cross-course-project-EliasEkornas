

const url = "url";


async function getWooProducts(){
    try{
        const response = await fetch(url);
        const result = await response.json();

        console.log(result);

    } catch (error){
        console.log(error);
    }

}