import request from '@/plugin/axios'
export function GetList (query) {
  return request({
    url: '/column/page',
    method: 'get',
    data: query
  })
}

export function AddObj (obj) {
  return request({
    url: '/column/add',
    method: 'post',
    data: obj
  })
}

export function UpdateObj (obj) {
  return request({
    url: '/column/update',
    method: 'post',
    data: obj
  })
}
export function DelObj (id) {
  return request({
    url: '/column/delete',
    method: 'post',
    params: { id }
  })
}
