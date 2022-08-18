import dataProducts from "../Data/Data";

export default function getProduct(id){
    return new Promise ((resolve) => {
        try{
            if(id){
                let dataSelected = dataProducts.find( res => res.id === id)
                setTimeout(() => {
                    resolve(dataSelected)
                }, 1500);
            }
            else{
                setTimeout(() => {
                    resolve(dataProducts)
                }, 1500)
            }
        }catch(err){
            console.log('error: ', err)
        }
    })
}