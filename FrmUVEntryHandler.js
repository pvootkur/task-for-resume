
app.service('FrmUVEntryHandler',function(ajaxService){
var constants = {
         'PORT':'8080',
          'URL':'localhost',
         'PROTOCOL': 'http'
         };

   this.populatecontract=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//populatecontract",successFunction,errorFunction);
}
   this.asofdatetoday=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//asofdatetoday",successFunction,errorFunction);
}
   this.populatefunds=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//populatefunds",successFunction,errorFunction);
}
   this.decimalpointexist=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//decimalpointexist",successFunction,errorFunction);
}
   this.enabledisable=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//enabledisable",successFunction,errorFunction);
}
   this.cbocontractclick=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//cbocontractclick",successFunction,errorFunction);
}
   this.cbofundclick=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//cbofundclick",successFunction,errorFunction);
}
   this.cmdaddmodifyclick=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//cmdaddmodifyclick",successFunction,errorFunction);
}
   this.cmdcloseclick=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//cmdcloseclick",successFunction,errorFunction);
}
   this.cmddeleteclick=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//cmddeleteclick",successFunction,errorFunction);
}
   this.cmdselfundclick=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//cmdselfundclick",successFunction,errorFunction);
}
   this.formload=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//formload",successFunction,errorFunction);
}
   this.txtreenteruvoverridechange=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//txtreenteruvoverridechange",successFunction,errorFunction);
}
   this.txtreenteruvoverridekeypress=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//txtreenteruvoverridekeypress",successFunction,errorFunction);
}
   this.txtuvoverridechange=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//txtuvoverridechange",successFunction,errorFunction);
}
   this.txtuvoverridekeypress=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//txtuvoverridekeypress",successFunction,errorFunction);
}
});