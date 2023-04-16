<template>
  <div>
      <a-card>
          <div>
              <!--                  文件上传区域-->
              <a-upload-dragger
                      name="file"
                      :multiple="true"
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      @change="handleChange"
              >
                  <p class="ant-upload-drag-icon">
                      <a-icon type="inbox" />
                  </p>
                  <p class="ant-upload-text">
                      点击此处或者拖拽文件上传
                  </p>
                  <p class="ant-upload-hint">
                      支持单个或者多个文件上传
                  </p>
              </a-upload-dragger>
          </div>
      </a-card>
  </div>
</template>

<script>
export default {
    name: "FileUploadCard",
    data(){
        return{

        }
    },
    methods: {
        handleChange(info) {
            const status = info.file.status;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                this.$message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                this.$message.error(`${info.file.name} file upload failed.`);
            }
        },
    },
}
</script>

<style scoped>

</style>
