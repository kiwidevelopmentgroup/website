<script>
var fFlag = false;

var nab_css = `
    .nab_wrapper {
        position: fixed;
        top: 0;
        left: 0;
        background: white;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
    }
    .nab_card {
        max-width: 420px;
        width: 100%;
        padding: 20px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
        border-radius: 10px;
        font-family: sans-serif !important;
        color: black;
    }
    .nab_title {
        font-size: 20px;
        font-weight: 900;
        width: 100%;
        text-align: center;
        display: block;
        margin-bottom: 15px;
        color: #FF4800;
    }
    .nab_desc {
        font-size: 16px;
        opacity: 0.64;
        width: 100%;
        text-align: center;
        line-height: 24px;
        display: block;
    }
`;

var nab_html = `
    <div class="nab_wrapper">
        <div class="nab_card">
            <span class="nab_title">⚠️Please Disable Your Ad-block</span>
            <span class="nab_desc">Please disable your Adblocker to access <b>angxlzz.net</b></span>
        </div>
    </div>
`;

function checkF() {
    if (!fFlag) {
        fFlag = true;

        setTimeout(function(){
            var styleTag = document.createElement('style');
            styleTag.textContent = nab_css;
            document.head.appendChild(styleTag);
            document.body.innerHTML = nab_html;
        }, 1000);
    }
}

fetch('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', {method: 'HEAD'})
    .then(function(response) {
        if (!response.ok) {
            checkF();
        }
    })
    .catch(function() {
        checkF();
    });

var testEl = document.createElement('div');
testEl.className = 'ads';
document.body.appendChild(testEl);
setTimeout(function() {
    var testElStyle = window.getComputedStyle(testEl);
    if(testElStyle.display === 'none' || testElStyle.visibility === 'hidden') {
        checkF();
    }
    if(document.body.contains(testEl)) {
        document.body.removeChild(testEl);
    } else {
        checkF();
    }
}, 1500);

if (typeof window.AdblockPlus !== 'undefined') {
    checkF();
}
</script>