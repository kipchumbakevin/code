var images=[
    'file:///C:/Users/User/Pictures/image/BPX_0884.JPG',
    'file:///C:/Users/User/Pictures/image/BPX_0702.JPG',
    'file:///C:/Users/User/Pictures/image/BPX_0738.JPG',
    'file:///C:/Users/User/Pictures/image/BPX_0800.JPG'
];
var num=0;

function next(){
    var slider=
    document.getElementById('slider');
    num++;
    if(num>=images.length) {
        num=0;
    }
    slider.src = images[num];
}
function prev() {
    var slider=
    document.getElementById('slider');
    num--;
    if(num<0){
        num= images.length-1;
    }
    slider.src= images[num];
};