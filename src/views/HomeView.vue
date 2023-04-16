<template>
    <div class="home">

        <div class="card-head-info">
            <a-card>
                <a-row type="flex" justify="space-around" align="middle">
                    <a-col :span="2">
                        <a-avatar :size="72" src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"></a-avatar>
                    </a-col>
                    <a-col :span="14">
                        <h2>中午好，RonalXie，要不要打一把 PUBG</h2>
                        <h6>中午好，RonalXie，要不要打一把 PUBG</h6>
                    </a-col>
                    <a-col :span="8" style="background: bisque"></a-col>
                </a-row>
            </a-card>
        </div>

        <div style="margin: 24px">
            <a-row :gutter="16">
                <a-col :span="16">
                    <CardGrid></CardGrid>
                    <br/>
                    <CardList/>
                </a-col>
                <a-col :span="8">
                    <CardNote/>
                    <a-card title="Card Title">
                        <a-row :gutter="16">
                            <a-col :span="8" v-for="i in 10" :key="i">
                                <a-card hoverable style="margin-bottom: 10px">
                                    <img
                                        slot="cover"
                                        alt="example"
                                        src="https://gw.alipayobjects.com/zos/rmsportal/iXjVmWVHbCJAyqvDxdtx.png"
                                    />
                                    <a-card-meta title="Ant Design">
                                        <template slot="description">
                                            www.instagram.com
                                        </template>
                                    </a-card-meta>
                                </a-card>
                            </a-col>


                        </a-row>

                    </a-card>
                </a-col>
            </a-row>
        </div>

    </div>
</template>

<script>
// @ is an alias to /src

import CardGrid from "@/components/home/CardGrid.vue";
import CardList from "@/components/home/CardList.vue";
import CardNote from "@/components/home/CardNote.vue";

export default {
    name: 'HomeView',
    components: {CardNote, CardList, CardGrid}
}
</script>
