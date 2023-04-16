import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NoteView from "@/views/NoteView.vue";
import PictureView from "@/views/PictureView.vue";
import MyPictureView from "@/views/MyPictureView.vue";
import FileTransView from "@/views/FileTransView.vue";
import UserCenterView from "@/views/UserCenterView.vue";
import MessageCenterView from "@/views/MessageCenterView.vue";
import SettingCenterView from "@/views/SettingCenterView.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/note',
    name: "note",
    component: NoteView

  },
  {
    path: '/pictures',
    name: "picture",
    component: PictureView
  },
  {
    path: '/mypic',
    name: 'mypicture',
    component: MyPictureView
  },
  {
    path: '/file',
    name: 'file',
    component: FileTransView
  },
  {
    path: '/user/center',
    name: 'UserCenter',
    component: UserCenterView
  },
  {
    path: '/message/center',
    name: 'MessageCenter',
    component: MessageCenterView
  },
  {
    path: '/setting/center',
    name: 'SettingCenter',
    component: SettingCenterView
  }

]

const router = new VueRouter({
  routes
})

export default router
