<script setup lang="ts">
import { ref } from 'vue';
import bg from '@/static/iPhone13.png';
const examplePage = import.meta.env.VITE_EXAMPLE_PAGE;
const style = {
    backgroundImage: `url(${bg})`,
};

const urlBase = 'http://localhost:5166/#/pages/demo/';
const defaultPageUrl = `${urlBase}button/button`;
const pageUrl = ref();
if (examplePage) {
    pageUrl.value = `${urlBase}${examplePage}/${examplePage}`;
}
</script>

<template>
    <view class="root-container">
        <view class="h5-view" :style="style">
            <iframe :src="pageUrl ? pageUrl : defaultPageUrl" frameborder="0" width="100%" height="100%" />
        </view>
    </view>
</template>

<style scoped lang="scss">
.root-container {
    padding: 5rem 2.5rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    .h5-view {
        width: calc(375px + 28px);
        min-width: calc(375px + 28px);
        height: calc(812px);
        padding: 50px 14px 30px;
        overflow: hidden;
        border-radius: 16px;
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
}
</style>
