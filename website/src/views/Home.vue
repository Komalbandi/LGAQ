<template>
    <div class="home">
        <ImageHeaderSharedComponent/>

        <BodyComponent/>

        <Footer></Footer>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import ImageHeaderSharedComponent from '@/components/shared/ImageHeaderSharedComponent.vue'
    import BodyComponent from '@/components/home/BodyComponent.vue';
    import Footer from '@/components/Footer.vue';

    @Component({
        components: {
            ImageHeaderSharedComponent,
            BodyComponent,
            Footer,
        },
    })
    export default class Home extends Vue {
    }
</script>
