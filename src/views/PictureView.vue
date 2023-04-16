<template>
  <div>
      <div style="padding: 24px">
                    <a-card>
                        <template slot="title">
                            <a-space>
                                <a-input-search placeholder="按名称搜索" style="width: 200px"></a-input-search>
                                <a-button>排序</a-button>
                            </a-space>
                        </template>
                        <a-row :gutter="8">
                            <a-col :span="6" v-for="i in 10" :key="i">
                                <a-card hoverable style="margin-bottom: 10px">
                                    <img
                                            slot="cover"
                                            alt="example"
                                            src="https://gw.alipayobjects.com/zos/rmsportal/iXjVmWVHbCJAyqvDxdtx.png"
                                    />
                                </a-card>
                            </a-col>


                        </a-row>

                    </a-card>

      </div>
  </div>
</template>

<script>
export default {
    name: "PictureView",
    components:{
    }
}
</script>

<style scoped>

</style>
