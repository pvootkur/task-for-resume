
app.service('FrmAdjFctrMaintHandler',function(ajaxService){
var constants = {
         'PORT':'8080',
          'URL':'localhost',
         'PROTOCOL': 'http'
         };

   this.cbofundsclick=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//cbofundsclick",successFunction,errorFunction);
}
   this.cmdaddclick=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//cmdaddclick",successFunction,errorFunction);
}
   this.cmdcloseclick=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//cmdcloseclick",successFunction,errorFunction);
}
   this.cmddeleteclick=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//cmddeleteclick",successFunction,errorFunction);
}
   this.cmdsaveclick=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//cmdsaveclick",successFunction,errorFunction);
}
   this.cmdshowcommentsclick=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//cmdshowcommentsclick",successFunction,errorFunction);
}
   this.formload=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//formload",successFunction,errorFunction);
}
   this.formunload=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//formunload",successFunction,errorFunction);
}
   this.txtadjustfactorgotfocus=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//txtadjustfactorgotfocus",successFunction,errorFunction);
}
   this.txtadjustfactorkeypress=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//txtadjustfactorkeypress",successFunction,errorFunction);
}
   this.txtadjustfactorlostfocus=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//txtadjustfactorlostfocus",successFunction,errorFunction);
}
});