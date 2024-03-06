import CartItem from "./CartItem"

export default interface Checkout {
    id?: number
    fullName: string
    address: string
    cart: CartItem[]
    total: number,
    dateCreated?: number
}

export const blankCheckout: Checkout = {
    fullName: '',
    address: '',
    cart: [],
    total: 0
}