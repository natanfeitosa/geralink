var lo = $('#love')
lo.hover(function () {
  muda_class(lo, 'far fa-heart', 'fas fa-heart')
})

$('#gera').on('click', function () {
  var this_ = $(this)
  var cls = this_.attr('class')
  if (cls == 'btn btn-outline-success') {
    let l_g = gerar()
    $('#l').html('<label class="max" for="#link">Pronto! Aqui está seu link.<textarea type="text" class="form-control" id="link" rows="2" disabled>'+l_g+'</textarea></label>').fadeIn(400, function (){$(this).show()})
    dis('d')
    muda_class(this_, cls, 'btn btn-warning')
    this_.val('Copiar e gerar outro')
  } else {
    copy($('#link').val())
    $('#in_tel').val('')
    $('#mes').val('')
    $('#l').fadeOut(200, function (){$(this).hide()})
    this_.val('Gerar')
    muda_class(this_, cls, 'btn btn-outline-success')
    dis('a')
  }
})

function muda_class(element, oldClass, newClass){element.toggleClass(oldClass).toggleClass(newClass)}

function gerar() {

	var celular 	= document.getElementById('in_tel').value.replace(/[^\d]+/g,'');
  var messag = document.getElementById('mes').value
  if (messag.length > 0) {
    return 'https://api.whatsapp.com/send?phone=55' + celular + '&text=' + encodeURIComponent(messag);
  } else {
    return 'https://api.whatsapp.com/send?phone=55' + celular 
  }
}

function dis(t) {
  if (t === 'd') {
    $('.edit').attr('disabled', true)
  } else {
    $('.edit').removeAttr('disabled')
  }
}

function copy(str){
  var el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style = {
    position: 'absolute',
    left: '-9999px'
  };

  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  console.log(str)
  console.log('link copiado');
}
