const app = new Vue({
    el : "#app",
    data : {
        books : [
            {
                id : 1,
                name : "《天下第一》",
                date : "2020-01-01",
                price : 45.00 ,
                count : 0
            },
            {
                id : 2,
                name : "《斗破苍穹》",
                date : "2019-06-01",
                price : 56.00 ,
                count : 0
            },
            {
                id : 3,
                name : "《武动乾坤》",
                date : "2016-05-22",
                price : 48.00 ,
                count : 0
            },
            {
                id : 4,
                name : "《凡人修仙传》",
                date : "2020-04-05",
                price : 52.00 ,
                count : 0
            }
        ],
        isShow : -1
    },
    methods : {
        del(index){
            this.books.splice(index,1)
        },
        add(index){
            this.books[index].count++
        },
        sub(index){
            this.books[index].count--
        },
    },
    //过滤器
    filters : {
        showPrice(price){
            return "$"+ price.toFixed(2)
        }
    },
    computed : {
        getTotalPrice(){
            //方法一 ，for循环
            // let totalPrice = 0;
            // for (let i of this.books){
            //     totalPrice += i.price * i.count;
            // }
            // return totalPrice;

            //方法二 ，js的高阶函数
            return this.books.reduce(function (pre,book){
                return pre + book.price * book.count
            },0)
        }
    }
})