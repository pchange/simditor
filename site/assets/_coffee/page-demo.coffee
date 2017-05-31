
$ ->
  Simditor.locale = 'en-US'

  toolbar= ['title', 'bold', 'italic', 'underline', 'strikethrough', 'fontScale', 'color', '|', 'ol', 'ul', 'blockquote', 'code', 'table', '|', 'link', 'image', 'hr', '|', 'indent', 'outdent', 'alignment']
  mobileToolbar=["bold","underline","strikethrough","color","ul","ol"]
  toolbar = mobileToolbar if mobilecheck()
  editor = new Simditor
    textarea: $('#txt-content')
    placeholder: '这里输入文字...'
    toolbar: toolbar
    pasteImage: true
    defaultImage: 'assets/images/image.png'
    upload: if location.search == '?upload' then {url: '/upload'} else false
    upload: {
      url: if 'https:' is location.protocol then 'https://up.qbox.me/' else 'http://up.qiniu.com'
      connectionCount: 3
      leaveConfirm: '还在上传图片，确定要离开吗?'
      buildResultPath: () ->
        console.log 'buildResultPath result', retust
        return ''
      params: () ->
        console.log 'params'
        return {}
    }

  $preview = $('#preview')
  if $preview.length > 0
    editor.on 'valuechanged', (e) ->
      $preview.html editor.getValue()
