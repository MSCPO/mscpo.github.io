<script lang="ts" setup>
import VPDoc from 'vitepress/dist/client/theme-default/components/VPDoc.vue';
import { useData } from 'vitepress';

const { frontmatter, description } = useData();
const images = [
    'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
    'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
    'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
];

const data = [{
      label: 'Name',
      value: 'Socrates',
    }, {
      label: 'Mobile',
      value: '123-1234-1234',
    }, {
      label: 'Residence',
      value: 'Beijing'
    }, {
      label: 'Hometown',
      value: 'Beijing',
    }, {
      label: 'Address',
      value: 'Yingdu Building, Zhichun Road, Beijing'
    }];
</script>

<template>
    <a-carousel :style="{
        width: '100%',
        height: '240px',
    }" :default-current="2" indicator-type="line" animation-name="fade" @change="handleChange">
        <a-carousel-item v-for="image in images">
            <a-carousel-item>
                <a-image width="100%" height="240px" :src="image" :preview="false" fit="cover" :title="frontmatter.name"
                    :description="image" />
            </a-carousel-item>
        </a-carousel-item>
    </a-carousel>
    <VPDoc class="doc">
    </VPDoc>
</template>

<style scoped>
.title-background {
    --background-height: 500px;
    height: var(--background-height);
    width: 100%;
}

.background {
    height: var(--background-height);
    width: 100%;
    position: absolute;
    filter: brightness(0.8);
    z-index: -1;
    background: var(--background-image-url) no-repeat center center/cover;
}

.desciption {
    width: 90%;
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
    padding-top: calc(var(--background-height) * 0.8);
    color: white;
}

.desciption hr {
    border: 1px solid white;
}
</style>