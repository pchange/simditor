(function() {
  $(function() {
    var $preview, editor, mobileToolbar, toolbar;
    Simditor.locale = 'en-US';
    toolbar = ['title', 'bold', 'italic', 'underline', 'strikethrough', 'fontScale', 'color', '|', 'ol', 'ul', 'blockquote', 'code', 'table', '|', 'link', 'image', 'hr', '|', 'indent', 'outdent', 'alignment'];
    mobileToolbar = ["bold", "underline", "strikethrough", "color", "ul", "ol"];
    if (mobilecheck()) {
      toolbar = mobileToolbar;
    }
    editor = new Simditor({
      textarea: $('#txt-content'),
      placeholder: '这里输入文字...',
      toolbar: toolbar,
      pasteImage: true,
      defaultImage: 'assets/images/image.png',
      upload: location.search === '?upload' ? {
        url: '/upload'
      } : false,
      upload: {
        url: 'https:' === location.protocol ? 'https://up.qbox.me/' : 'http://up.qiniu.com',
        connectionCount: 3,
        leaveConfirm: '还在上传图片，确定要离开吗?',
        buildResultPath: function() {
          console.log('buildResultPath result', retust);
          return '';
        },
        params: function() {
          var request;
          console.log('params');
          request = new XMLHttpRequest();
          request.open('GET', 'https://api.github.com', false);
          request.send(null);
          window.r1 = request;
          if (request.status === 200) {
            console.log(request.responseText);
          }
          console.log('params sync request');
          return {
            a: request.responseText
          };
        }
      }
    });
    $preview = $('#preview');
    if ($preview.length > 0) {
      return editor.on('valuechanged', function(e) {
        return $preview.html(editor.getValue());
      });
    }
  });

}).call(this);
