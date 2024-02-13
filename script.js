window.addEventListener('DOMContentLoaded', function() {
    var imageDisplayed = sessionStorage.getItem('imageDisplayed');
    
    // 画像がまだ表示されていない場合のみ表示する(一度だけ)
    if (!imageDisplayed) {
        // 画像を表示する
        var image = document.getElementById('fullscreen-image');
        image.style.display = 'block'; // 画像を表示
        
        // 画像が表示されたことをセッションストレージに記録する
        sessionStorage.setItem('imageDisplayed', 'true');
        
        // 4秒後に画像を非表示にする（終わりまで４秒）
        setTimeout(function() {
            image.parentNode.removeChild(image); // 画像を削除
        }, 4000); // 4000ミリ秒 = 4秒
    }
});
