<template>
    <div id="app">
        <div class="container-fluid">
            <nav class="navbar fixed-top navbar-expand-lg row  mb-10">
                <a class="navbar-brand text-center col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12"
                   href="#">Identity</a>
                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <ul class="nav justify-content-center">
                        <li class="nav-item active">
                            <router-link to="/" class="nav-link">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/about" class="nav-link">About</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/service" class="nav-link">Service</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/blog" class="nav-link">Blog</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/contact" class="nav-link">Contact</router-link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <router-view/>
    </div>
</template>

<style lang="scss">
    @import 'styles/Global';
</style>
