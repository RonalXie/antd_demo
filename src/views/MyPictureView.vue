<template>
    <div>
        <div style="padding: 24px">
            <a-card>
                <UploadPicture></UploadPicture>
            </a-card>

        </div>

    </div>

</template>

<script>
import UploadPicture from "@/components/picture/UploadPicture.vue";

export default {
    name: "MyPictureView",
    components: {UploadPicture}
}
</script>

<style scoped>

</style>
