<template>
    <div class="cart">
        <div class="left">
            <div class="img"></div>
            <div class="details">
                Abandoned Cart 7 days
            </div>
        </div>
        <div class="right">
            $5321
        </div>
    </div>
</template>

<script>
export default {
    'name':'Cart'
}
</script>

<style scoped>
.cart{
    height: 40px;
    width: 500px;
    padding:5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    margin-left: 10px;
    border-radius: 10px;
}

.cart:hover{
    background-color: rgba(165, 227, 247, 0.63);
    cursor: pointer;
}

.left{
    display: flex;
    justify-content: center;
    align-items: center;
}

.right{
    padding-left: 10px;
    font-weight: 600;
}

.img{
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background-color: #d7d7d7;
    margin-right: 10px;
    border-radius: 1px gray solid;
}

.details{
    font-size: 15px;
    font-weight: 500;
}


</style>