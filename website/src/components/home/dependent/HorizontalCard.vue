<template>
    <div class="card bg-dark text-white overflow-hidden horizontalcardcomponent">
        <slot name="image"></slot>
        <div class="card-img-overlay p-0">
            <div class="row m-0">
                <div class="col-7 p-0">
                    <div class="card-body horizontal-card-black-background-color">
                        <h5 class="card-title">
                            <slot name="title"></slot>
                        </h5>
                        <p>
                            <slot name="body"></slot>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component()
    export default class HorizontalCard extends Vue {
    }
</script>