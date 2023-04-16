<template>
  <div>
      <div>
          <FileUploadCard/>
      </div>
      <div style="padding: 24px">
              <FileTable></FileTable>
      </div>
  </div>
</template>

<script>
import FileTable from "@/components/file/FileTable.vue";
import FileUploadCard from "@/components/file/FileUploadCard.vue";

export default {
    name: "FileTransView",
    components: {FileUploadCard, FileTable},

}
</script>

<style scoped>

</style>
