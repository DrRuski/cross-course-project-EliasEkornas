

const url = "https://imdev.no/wp-json/wc/store/products";


async function getWooProducts(){
    try{
        const response = await fetch(url);
        const result = await response.json();

        console.log(result);

    } catch (error){
        console.log(error);
    }

}

// getWooProducts();