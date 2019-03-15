<template>
    <div class="card">
        <slot name="image"></slot>
        <div class="card-body">
            <h5 class="card-title">
                <slot name="title"></slot>
            </h5>
            <p class="card-text">
                <slot name="body"></slot>
            </p>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component()
    export default class VerticalCard extends Vue {
    }
</script>