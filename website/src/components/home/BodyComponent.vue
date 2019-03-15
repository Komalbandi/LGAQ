<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-12 text-center">
                <h1>Welcome to the homepage!</h1>
            </div>
        </div>

        <div class="row mt-3 mb-3">
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-3">
                <VerticalCard>
                    <template v-slot:image>
                        <img src="../../assets/image1.png" class="card-img-top">
                    </template>

                    <template v-slot:title>
                        The heading one
                    </template>

                    <template v-slot:body>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </template>
                </VerticalCard>
            </div>

            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-3">
                <VerticalCard>
                    <template v-slot:image>
                        <img src="../../assets/image2.png" class="card-img-top">
                    </template>

                    <template v-slot:title>
                        Welcome to the homepage!
                    </template>

                    <template v-slot:body>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </template>
                </VerticalCard>
            </div>

            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-3">
                <VerticalCard>
                    <template v-slot:image>
                        <img src="../../assets/image3.png" class="card-img-top w-100">
                    </template>

                    <template v-slot:title>
                        Welcome to the homepage!
                    </template>

                    <template v-slot:body>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </template>
                </VerticalCard>
            </div>

            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-3">
                <HorizontalCard>
                    <template v-slot:image>
                        <img src="../../assets/image1.png" class="card-img-top height-303">
                    </template>

                    <template v-slot:title>
                        The heading one
                    </template>

                    <template v-slot:body>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </template>
                </HorizontalCard>
            </div>

            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-3">
                <HorizontalCard>
                    <template v-slot:image>
                        <img src="../../assets/image2.png" class="card-img-top height-303">
                    </template>

                    <template v-slot:title>
                        The heading one
                    </template>

                    <template v-slot:body>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </template>
                </HorizontalCard>
            </div>

            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-3">
                <HorizontalCard>
                    <template v-slot:image>
                        <img src="../../assets/image3.png" class="card-img-top height-303">
                    </template>

                    <template v-slot:title>
                        The heading one
                    </template>

                    <template v-slot:body>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </template>
                </HorizontalCard>
            </div>
        </div>

        <QuickLinks/>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import VerticalCard from './dependent/VerticalCard.vue';
    import HorizontalCard from './dependent/HorizontalCard.vue';
    import QuickLinks from './dependent/QuickLinks.vue';

    @Component({
                components: {
                    VerticalCard,
                    HorizontalCard,
                    QuickLinks,
                }
            }
    )
    export default class BodyComponent extends Vue {
    }
</script>