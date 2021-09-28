<template>
    <div>
        <div class="user">
            <div class="userImg">
                <div class="imgBg"></div>
            </div>
            <div class="heading">
                <h3 class="heading-h1">Good Morning User</h3>
                <p class="heading-p">Here are your stats for Today, 24 Aug, 2021</p>
            </div>
        </div>

        <div class="details">
            <div class="details-item">
                <div class="details-title">
                    Total Revenue
                </div>
                <div class="details-amount">
                    $32,621.7
                </div>
                <div class="details-order">
                    433 orders
                </div>
            </div>

            <div class="details-item">
                <div class="details-title">
                    Subscribers
                </div>
                <div class="details-amount">
                    484,205
                </div>
                <div class="details-order">
                    $58 average Order
                </div>
            </div>

            <div class="details-item">
                <div class="details-title">
                    Conversations
                </div>
                <div class="details-amount">
                    552,553
                </div>
                <div class="details-order">
                    5 min average response time
                </div>
            </div>

            <div class="details-item">
                <div class="details-title">
                    Popup Conversation Rate
                </div>
                <div class="details-amount">
                    25%
                </div>
                <div class="details-order">
                    5% sales rate
                </div>
            </div>
        </div>

        <div class="chart">
           <PlanetChart />
        </div>

        <div class="footer">
            <ul class="footer-list">
                <li class="footer-list-item li1">Automations</li>
                <li class="footer-list-item">Campaigns</li>
                <li class="footer-list-item li3">Segments</li>
            </ul>
        </div>


        <div class="carts">
            <Cart />
            <Cart />
            <Cart />
        </div>
    </div>
</template>

<script>
import PlanetChart from './PlanetChart'
import Cart from './Cart'
export default {
    name:'User',
    components: {
        PlanetChart,
        Cart
    }
}
</script>

<style scoped>
.user{
    display: flex;
    width: 500px;
    height:90px;
    /* background-color: aqua; */
    justify-content: center;
    align-items: center;
    margin-top: -10px;
}

.userImg{
    flex: 1;
    margin-left: 10px;
}

.imgBg{
    height: 55px;
    width: 55px;
    border-radius: 50%;
    background-color: #ecbcb4;
}

.heading{
    flex: 4;
    /* margin-left: -270px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: -30px;
}

.heading-h1{
    font-size: 19px;
    font-weight: 800;
    margin: 0;
}

.heading-p{
    font-size: 12px;
    color: gray;
    margin: 0;
    margin-top: 7px;
}


.details{
    display: flex;
    flex-direction: row;
}

.details-item{
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    width:220px;
    height: 90px;
    /* background-color: yellow; */
    align-items: flex-start;
    justify-content: center;
    border-right: 1px #d3d3d3 solid;
}

.details-title{
    color: gray;
    font-size: 13px;
    margin-bottom: 3px;
    margin-left: 10px;
}

.details-amount{
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 3px;
    margin-left: 10px;
}

.details-order{
    font-size: 13px;
    color: gray;
    margin-left: 10px;
}

.chart{
    margin-top: 20px;
    margin-left: 10px;
}

.footer{
    display: flex;
    flex-direction: column;
    width: 900px;
    margin-top: 20px;
    margin-left: 15px;
}

.footer-list{
    display: flex;
    flex-direction: row;
    width: 400px;
    justify-content: space-between;
    border-bottom: 2px solid rgb(228, 240, 241);
    padding-right: 30px;
}

.footer-list-item{
    list-style: none;
    padding-bottom: 5px;
    font-weight: 700;
}

.footer-list-item:hover{
    cursor: pointer;
}

.li3{
    padding-right: 5px;
}

.carts{
    margin-top: -5px;
    padding-left: 30px;
}

</style>