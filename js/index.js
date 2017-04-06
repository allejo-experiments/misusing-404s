function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

const app = new Vue({
    el: '#app',
    data: {
        url: window.location.href
    },
    computed: {
        host: function () {
            var urlSplit = this.url.split('/');
            return urlSplit[0] + '//' + urlSplit[2] + jekyllBaseUrl;
        },
        baseurl: function () {
            console.log(this.host);

            var maxLength = ((idx = this.url.indexOf('?')) > 0) ? idx : this.url.length;
            return this.url.substr(0, maxLength).replace(this.host, '');
        },
        name: function() {
            var chunks = this.baseurl.split('/');
            return chunks[2];
        }
    }
});
