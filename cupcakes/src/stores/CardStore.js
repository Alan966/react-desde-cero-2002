import { observable, action } from "mobx"

class  CardStore {
    @observable cart = []


    @action
    addToCart = id => {
        this.cart = this.cart.concat(id)
        console.log(this.cart.length)
    }

    @action
    removeFromCart = id => {
        this.cart = this.cart.filter(c => c !== id)
    }
}

export default new CardStore()