$(() => {
  $('#image-upload').on('change', function() {
    const file = $(this)[0].files[0];
    const reader = new FileReader();

    reader.addEventListener("load", function () {
      $('#main').css('background', `url(https://cl.ly/e6683f9832e7/gradient-01.png), url(${reader.result})`).
                 css('background-size', 'cover');
      
      $('#download-image').show();
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
  });
  
  $('#download-image').click(function() {
    html2canvas($('#main')[0]).then(canvas => {
      canvas.toBlob((blob) => {
        const objectUrl = URL.createObjectURL(blob);
        $('#download-link').attr('href', objectUrl)[0].click();
      });
    });
  });
});