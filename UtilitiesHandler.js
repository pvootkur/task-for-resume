
app.service('UtilitiesHandler',function(ajaxService){
var constants = {
         'PORT':'8080',
          'URL':'localhost',
         'PROTOCOL': 'http'
         };

   this.setcombo=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//setcombo",successFunction,errorFunction);
}
   this.setadjfactorcombo=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//setadjfactorcombo",successFunction,errorFunction);
}
});