let boxes = $(".box");
let count = 0;

boxes.click(function() {
    let box = $(this);
    count ++
    if (count %2 === 0) {
        box.addClass('cross')
    } else {
    box.addClass('circle');
    }
})
