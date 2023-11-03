
async function getItemStore(){
    
    const queryItem = await fetch('https://fakestoreapi.com/products/')
    return  (await queryItem.json())

}

function subString(maxLength, text){
    if(text.length > maxLength){
        text = text.substring(0, maxLength) + '...'
    }
    return text
}

async function main(){
    const items = await getItemStore()
    const wrapper = document.querySelector('.wrapper')
    try{
        for (const item of items) {
            console.log(item);
            // create HTML
            const divProduct = document.createElement('div')
            const titleProduct = document.createElement('h4')
            const imgProduct = document.createElement('img')
            const priceProduct = document.createElement('span')
            const descriptionProduct = document.createElement('p')
            const divPrice = document.createElement('div')
            const buttonProduct = document.createElement('button')
            
            //setting values for element
            divProduct.classList.add('divProduct')
            titleProduct.innerHTML = item.title
            imgProduct.src = item.image
            descriptionProduct.innerHTML = subString(150, item.description)
            divPrice.classList.add('priceContainer')
            buttonProduct.innerHTML = 'Купити'
            const numberFormat = new Intl.NumberFormat('uk-UA',{
                style: 'currency', 
                currency: 'USD'
            })
            priceProduct.innerHTML =  numberFormat.format(item.price)

            //appending elements inside the card
            divPrice.append(
                priceProduct,
                buttonProduct
            )
            
            divProduct.append(
                imgProduct,
                titleProduct,
                descriptionProduct,
                divPrice
               )
            wrapper.append(divProduct)
           
            
        }
    }catch(e){
        console.log(e);
    }
}
main()

