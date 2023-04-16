<template>
    <div>
        <div style="padding: 24px">
            <a-row :gutter="16">
                <a-col :span="16">
                    <a-card>
                        <NoteList/>
                    </a-card>
                </a-col>
                <a-col :span="8">


                </a-col>
            </a-row>
        </div>
    </div>
</template>

<script>
import NoteList from "@/components/note/NoteList.vue";

export default {
    name: "NoteView",
    components: {NoteList}
}
</script>

<style scoped>

</style>
