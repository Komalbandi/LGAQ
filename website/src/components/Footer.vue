<template>
    <div class="container-fluid" id="footer">
        <div class="row">
            <div class="col-6">
                <p>Copyright &#169; LGAP 2019</p>
            </div>
            <div class="col-6">
                <p class="float-right p-pointer" onclick="window.scrollTo( {top: 100,left: 100,behavior: 'smooth'});">Back to top <font-awesome-icon icon="arrow-up"/></p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component()
    export default class Footer extends Vue {
    }
</script>