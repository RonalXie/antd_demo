<template>
  <div>
      <a-list item-layout="horizontal" :data-source="data">
          <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
              <a-list-item-meta
                      :description="item.content"
              >
                  <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
                  <a-avatar
                          slot="avatar"
                          :src="item.avater"
                  />
              </a-list-item-meta>
          </a-list-item>
      </a-list>
  </div>

</template>

<script>
const data = [
    {
        title: 'Ant Design Title 1',
        content:'Ant Design, a design language for background applications, is refined by Ant UED Team',
        avater:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
    },
    {
        title: 'Ant Design Title 1',
        content:'Ant Design, a design language for background applications, is refined by Ant UED Team',
        avater:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
    },
    {
        title: 'Ant Design Title 1',
        content:'Ant Design, a design language for background applications, is refined by Ant UED Team',
        avater:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
    },
    {
        title: 'Ant Design Title 1',
        content:'Ant Design, a design language for background applications, is refined by Ant UED Team',
        avater:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
    },
    {
        title: 'Ant Design Title 1',
        content:'Ant Design, a design language for background applications, is refined by Ant UED Team',
        avater:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
    },
    {
        title: 'Ant Design Title 1',
        content:'Ant Design, a design language for background applications, is refined by Ant UED Team',
        avater:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
    },

];
export default {
    data() {
        return {
            data,
        };
    },
};
</script>

<style scoped>

</style>
