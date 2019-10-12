import Vue from 'vue'
<%_ if (options.import === 'full') { _%>
import ViewUI from 'view-design'
<%_ if (options.lang !== 'zh-CN') { _%>
import locale from 'view-design/dist/locale/<%= options.lang %>'

Vue.use(ViewUI, { locale })
<%_ } else { _%>

Vue.use(ViewUI)
<%_ } _%>
<%_ } else { _%>
import { Button } from 'view-design'
<%_ if (options.lang !== 'zh-CN') { _%>
import lang from 'view-design/dist/locale/<%= options.lang %>'
import { locale } from 'view-design'

locale(lang)
<%_ } _%>

Vue.component('Button', Button)
<%_ } _%>

<%_ if (options.customTheme) { _%>
import '../iview-variables.less'
    <%_ } else { _%>
import 'view-design/dist/styles/iview.css'
    <%_ } _%>
