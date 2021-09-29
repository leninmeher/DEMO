<template>
    <div class="footer">
        <ul class="footer-list">
            <li v-for="tab in tabs" :key="tab" class="footer-list-item">
                <a class="nav-link" :class="{ active: tab === selected }" @click="setTab(tab)"
                >{{ tab }}</a>
            </li>
        </ul>
        
        <slot></slot>
    </div>
</template>

<script>
export default {
    props:{
        tabs:{
            type:Array,
            required:true
        },
        selected:{
            type:String,
            required:true
        }
    },
    methods:{
        setTab(tab) {
            this.$emit('selected', tab);
        }
    }
}
</script>

<style scoped>
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
    padding-right: 50px;
}

.footer-list-item{
    list-style: none;
    padding: 5px;
    padding-right: 15px;
    padding-left: 15px;
    font-weight: 700;
    border-radius: 20px;
}

.footer-list-item:hover{
    cursor: pointer;
    background-color: rgba(235, 235, 235, 0.678);
}

.active{
    border-bottom: 3px solid rgb(7, 74, 150);
}

.nav-link{
    padding: 5px;
    padding-right: 15px;
    padding-left: 15px;
}
</style>