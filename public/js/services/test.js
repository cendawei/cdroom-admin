/**
 * Created by cendawei on 2018/1/26.
 */
import api from 'api'

export default {
    getList() {
        return api({
            url: '/index/list',
            type: 'get'
        })
    }
}