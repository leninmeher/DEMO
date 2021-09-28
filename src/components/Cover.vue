<template>
    <div class="cover">
        <div class="left">
            <div class="logo">
                <div class="img"></div>
                <div class="name name-l">LOGO</div>
            </div>
            <div class="search">
                <input class="searchbox" type="text" placeholder="Search..."/>
            </div>
            <div class="dash">
                <div class="img"></div>
                <div class="name">Dashboard</div>
            </div>

            <ul class="list">
                <li class="item">Conversations</li>
                <li class="item">Automations</li>
                <li class="item">Campaigns</li>
                <li class="item">Popup</li>
                <li class="item">Live Chat</li>
                <li class="item">Segments</li>
                <li class="item">Integrations</li>
            </ul>
        </div>
        <div class="right">
            <User />
        </div>
    </div>
</template>

<script>
import User from './User'
export default {
    name:"Cover",
    components:{
        User
    }
}
</script>

<style scoped>
.cover{
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
}

.left{
    flex: 1.5;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 15px;
    border-right: 2px solid #d7d7d7;
}

.logo,.search,.dash{
    margin-left: 10px;
    margin-bottom: 10px;
    margin-top: 10px;
    display: flex;
    align-items: center;
}

.dash{
    background-color: rgb(222, 237, 241);
    color: #094b69;
    width: 170px;
    height: 13px;
    padding:15px;
    border-radius: 30px;
    margin-left: 4px;
}
.img{
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background-color: rgb(55, 174, 221);
    margin-right: 10px;
}

.name{
    font-size: 15px;
    font-weight: 600;
}

.name-l{
    font-size: 18px;
}

.searchbox{
    height: 40px;
    width: 180px;
    border: none;
    background-color: #dedede;
    border-radius: 30px;
    padding-left: 15px;
    margin-left: -5px;
}

.list{
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
}

.item{
    list-style: none;
    margin-top: 20px;
    font-weight: 700;
    font-size: 15px;
}

.right{
    flex: 6;
    margin-left: 5px;
}
</style>