<template>
  <div>
      <a-layout-header style="background: #fff; padding: 0">
          <a-icon
              class="trigger"
              :type="store.collapsed ? 'menu-unfold' : 'menu-fold'"
              @click="isCollapsed"
          />
          <div class="head-right">
              <a-space size="middle">
                  <a-input-search
                          placeholder="input search text"
                          :style="{verticalAlign: 'middle',width:'200px'}"
                  >
                  </a-input-search>
                  <a-badge :count="99">
                      <a-dropdown>
                          <a-avatar
                                  :style="{verticalAlign: 'middle' }"
                                  src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
                          >
                          </a-avatar>
                          <a-menu slot="overlay" @click="menuClick">
                              <a-menu-item key="/user/center">
                                  <span><a-icon type="user"/>个人中心</span>
                              </a-menu-item>
                              <a-menu-item key="/message/center">
                                  <span><a-icon type="message" />消息盒子</span>
                              </a-menu-item>
                              <a-menu-divider/>
                              <a-menu-item>
                                  <span><a-icon type="logout"></a-icon>退出登录</span>
                              </a-menu-item>
                          </a-menu>
                      </a-dropdown>
                  </a-badge>
              </a-space>
          </div>

      </a-layout-header>
  </div>
</template>

<script>
import store from "@/store/store";

export default {
    name: "DefaultHeader",
    data() {
        return {
            store
        };
    },
    methods:{
        isCollapsed(){
            store.collapsed=!store.collapsed
            console.log(store.collapsed)
        },
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
.logo {
    width: 180px;
    height: 31px;
    background: rgba(101, 51, 135, 0.2);
    margin: 16px 10px 16px 50px;
    float: left;
}
.logo1 {
    width: 300px;
    margin: 0 50px 0 10px;
    float: right;

}
.head-right{
    height: 100%;
    float: right;
    margin-right: 24px;


}
</style>
