import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Lists from '@/components/lists'
import Detail from '@/components/detail'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: 'lists',
          component: Lists,
          meta: { isNeedKeepAlive: true }
        },
        {
          path: 'detail',
          component: Detail,
          meta: { isNeedKeepAlive: false }
        },
        {
          path: 'nokeep',
          component: Lists,
          meta: { isNeedKeepAlive: false }
        }
      ]
    }
  ]
})
