var pars_icon;
var icon_name;
$.getJSON("https://raw.githubusercontent.com/aycanozarpaci/Font-Awesome-v6.2.1-Free-Icons/main/font-awesome-v.6.2.1.json", function(data) {
  $.each(data.icons, function(i, icon) {
   pars_icon = data.icons[i].split(" ");
    $(".icons-row").append('<div class="col-md-2" ><div class="pick-icon shadow" data-send-name="'+data.icons[i]+'"><div class="icon"><i class="'+data.icons[i]+'"></i></div><div class="icon-name">'+pars_icon[1]+'</div></div></div>');
  });
});

$("#searchbar").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".icons-row > div").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
});
 
$('.select-icon').click(function(){
  icon_name=$(this).attr("input-data-name");
})

 $(document).on("click",".pick-icon",function() {
       var data_icon_name=$(this).attr("data-send-name");
  $('[input-data-name='+icon_name+']').val(data_icon_name);
  $('[for='+icon_name+'] > i').addClass(data_icon_name);
  $('[for='+icon_name+']').html("<i class='"+data_icon_name+"'></i> seçildi");
  $('#MyIcons').modal('toggle');
 });

$('.select-icon').focusout(function(){
  var inp_val = $(this).val();
  if(inp_val.length == 0){
    $('[for='+icon_name+']').html("Icon Seçmek için tıklayın");
  }
})