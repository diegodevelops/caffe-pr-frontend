export default interface Product {
    id: number
    name: string
    price: number
    url: string
    description: string
}

export const blankProduct: Product = { 
    id: 0,
    price: 0,
    name: '',
    url: '',
    description: ''
  }

