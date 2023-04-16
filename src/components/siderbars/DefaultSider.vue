<template>
    <a-layout-sider v-model="store.collapsed" :trigger="null" collapsible width="280" style="min-height:850px">
        <div class="logo" />
        <a-menu theme="dark" mode="inline" :default-selected-keys="['1']" @click="menuClick">
            <a-menu-item key="/">
                <a-icon type="home" />
                <span>Home</span>
            </a-menu-item>
            <a-sub-menu key="sub1">
                <span slot="title"><a-icon type="edit" /><span>随记</span></span>
                <a-menu-item key="/note">
                    广场
                </a-menu-item>
                <a-menu-item key="/mynote">
                    我的随记
                </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub2">
                <span slot="title"><a-icon type="picture" /><span>照片墙</span></span>
                <a-menu-item key="pictures">
                    浏览
                </a-menu-item>
                <a-menu-item key="/mypic">
                    我的照片
                </a-menu-item>
            </a-sub-menu>

            <a-menu-item key="/file">
                <a-icon type="file" />
                <span>文件中转站</span>
            </a-menu-item>
            <a-sub-menu key="sub3">
                <span slot="title"><a-icon type="inbox"/><span>百宝箱</span></span>
                <a-menu-item key="sub3-1">
                    图像工具
                </a-menu-item>
                <a-menu-item key="sub3-2">
                    文本工具
                </a-menu-item>
            </a-sub-menu>
            <a-menu-item key="/setting/center">
                <a-icon type="setting" />
                <span>设置中心</span>
            </a-menu-item>

        </a-menu>
    </a-layout-sider>
</template>

<script>
import store from "@/store/store";
export default {
    name: "DefaultSider",
    data() {
        return {
            store
        };
    },
    methods:{
        menuClick({ item, key, keyPath }) {
            // 获取到当前的key,并且跳转
            console.log(item,keyPath)
            this.$router.push({
                path: key
            })
        },
    }
}
</script>

<style scoped>

</style>
