
app.service('Module1Handler',function(ajaxService){
var constants = {
         'PORT':'8080',
          'URL':'localhost',
         'PROTOCOL': 'http'
         };

   this.getnetusername=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//getnetusername",successFunction,errorFunction);
}
   this.isadminuser=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//isadminuser",successFunction,errorFunction);
}
   this.centerform=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//centerform",successFunction,errorFunction);
}
   this.applysecurity=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//applysecurity",successFunction,errorFunction);
}
});