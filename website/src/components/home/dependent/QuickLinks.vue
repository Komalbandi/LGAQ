<template>
    <div class="row quickLlinkscomponent">
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <h5 class="pl-3 d-none d-sm-none d-md-block">QUICKLINKS</h5>
            <h5 class="pl-3 d-none d-sm-block d-md-none background-green">QUICKLINKS <font-awesome-icon icon="arrow-down" class="float-right mr-3 mt-1"/></h5>
            <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Link title 1
                        <font-awesome-icon icon="arrow-right" class="float-right"/>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link title 2
                        <font-awesome-icon icon="arrow-right" class="float-right"/>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="#">Link title 3
                        <font-awesome-icon icon="arrow-right" class="float-right"/>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="#">Link title 4
                        <font-awesome-icon icon="arrow-right" class="float-right"/>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="#">Link title 5
                        <font-awesome-icon icon="arrow-right" class="float-right"/>
                    </a>
                </li>
            </ul>
        </div>
        <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12 mt-2">
            <h1>Heading Summary</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component()
    export default class QuickLinks extends Vue {
    }
</script>