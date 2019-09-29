import axios from 'axios'

export const addorder = newOrder => {
    return axios
        .post('orders/addorders', {
            order_id:newOrder.order_id,
            order_name: newOrder.order_name,
            order_qty: newOrder.order_qty,
            type: newOrder.type,
            discription: newOrder.discription,

        })

        .then(res => {
            console.log('order added!')
        })
}



