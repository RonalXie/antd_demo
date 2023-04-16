<template>
  <div>
      <a-card title="随记">
          <div>
              <a-textarea
                      v-model="noteValue"
                      placeholder="Controlled autosize"
                      :auto-size="{ minRows: 10, maxRows: 10 }"
              />
          </div>
          <div style="margin-top: 10px;float: right">
              <a-space>
                  <a-button type="" icon="rest">
                      清空
                  </a-button>
                  <a-button type="danger" icon="edit">
                      发布
                  </a-button>
              </a-space>
          </div>

      </a-card>
  </div>

</template>

<script>
export default {
    name: "CardNote",
    data(){
        return{
            noteValue:""
        }
    }
}
</script>

<style scoped>

</style>
