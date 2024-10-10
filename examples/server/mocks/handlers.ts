import { http, HttpResponse } from 'msw'

export const handlers = [
  // rest.get('/error/upload.gif', { request, params, cookies } => {
  // return HttpResponse.json({ message: '上传成功'})
  // }),
  http.post('/error/upload', () => {
    return HttpResponse.json({
        message: '上传成功'
      }
    )
  }),
  
  http.get('/normal', () => {
    return HttpResponse.json({
        code: 200,
        message: '这是正常接口'
      }
    )
  })
]
