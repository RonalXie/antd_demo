<template>
    <a-layout id="components-layout-demo-custom-trigger">
        <DefaultSider/>
        <a-layout>
            <DefaultHeader/>
            <a-layout-content
                :style="{minHeight: '280px' }"
            >
                <router-view/>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>
<script>
import DefaultSider from "@/components/siderbars/DefaultSider.vue";
import DefaultHeader from "@/components/headers/DefaultHeader.vue";

export default {
    components: {DefaultHeader, DefaultSider},
    data() {
        return {
            collapsed: false,
        };
    },
};
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
}
</style>
