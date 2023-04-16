<template>
    <a-card title="Card Title">
        <a-card-grid style="width:25%;padding: 0" v-for="i in 8" :key="i">
            <a-card hoverable>
                <img
                    slot="cover"
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/iXjVmWVHbCJAyqvDxdtx.png"
                />
                <a-card-meta title="Ant Design Vue" style="padding: 5px">
                    <template slot="description">
                        <h6>那时候我只会想自己想要什么，从不想自己拥有什么。</h6>
                    </template>
                </a-card-meta>
            </a-card>
        </a-card-grid>
    </a-card>
</template>


<script>
export default {
    name: "CardGrid"
}
</script>

<style scoped>

</style>
